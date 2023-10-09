import { api } from "@/Api/Api";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleDashed, Command, Github, Lock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email("Formato Invalido").nonempty("O email é obrigatório"),
  password: z
    .string()
    .nonempty("A password é obrigatória")
    .min(8, "A password deve conter pelo menos 8 caracteres"),
});

type UserData = z.infer<typeof UserSchema>;

export default function Signin() {
  const [output, setOutput] = useState("");
  const [delay, setDelay] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(UserSchema),
  });
  console.log(output);
  // const formData
  const signData = (data: UserData) => {
    setDelay(true);
    api
      .post("/auth", data)
      .then((response) => {
        toast({
          title: `Logando com ${response.data.user.username}`,
          description: response.data.mensagem,
        });
        setOutput(JSON.stringify(response.data, null, 2));
      })
      .catch((error) => {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Erro",
          description: error.response.data.mensagem,
        });
      })
      .finally(() => {
        setDelay(false);
      });
  };
  return (
    <div className="flex h-screen bg-card items-center">
      <div className="max-w-[560px] rs:border bg-card text-card-foreground shadow py-5 px-9 mx-auto ">
        <h1 className=" font-extrabold text-cyan-800 hover:underline">
          Job<b className="text-primary">Ons</b>
        </h1>
        <div className="w-full h-full">
          <CardHeader className="px-6 py-0">
            <CardTitle className="font-normal mt-8 mb-2 text-2xl lg:text-3xl">
              Bem-vindo de volta
            </CardTitle>
            <CardDescription>Entra na tua conta</CardDescription>
            <div className="w-full py-6 grid grid-cols-2 gap-6">
              <Button
                variant="outline"
                size="lg"
                className=" w-full text-center gap-1.5"
              >
                <Github size="16" />
                Github
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full text-center gap-1.5"
              >
                <Lock size="16" />
                Google
              </Button>
            </div>
          </CardHeader>
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-scale-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card px-2 text-sm text-scale-1200">ou</span>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(signData)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label className="">Email</Label>
              <div>
                <Input
                  type="email"
                  placeholder="nome@exemplo.com"
                  {...register("email")}
                  className={errors.email && ""}
                />
              </div>
              {errors.email && (
                <p className="text-[0.8rem] font-medium text- ">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label className="">Senha</Label>
                <a
                  href="#"
                  className="text-sm text-scale-900 hover:text-muted-foreground"
                >
                  Esqueceu a senha
                </a>
              </div>
              <div>
                <Input
                  type="password"
                  autoComplete="email"
                  {...register("password")}
                  className={errors.email && "text-destructive "}
                />
              </div>
              {errors.password && (
                <p className="text-[0.8rem] font-medium text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button size="lg" className="w-full text-accent-foreground">
              {delay ? <CircleDashed className="animate-spin" /> : "Login"}
            </Button>
          </form>
          <div className="sm:text-center text-muted-foreground">
            <div className="mx-auto my-8 text-sm">
              <div>
                <span>Não tens uma conta? </span>
                <a
                  className="underline transition hover:text-scale-1100"
                  href="/sign-up"
                >
                  Sign Up agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  hidden h-full flex-col bg-muted p-10 text-white dark:border-r rs:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Command size={24} />
          Acme Inc
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
