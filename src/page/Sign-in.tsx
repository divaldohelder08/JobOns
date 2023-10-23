import Comment from "@/components/sign/Comment";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleDashed, Github, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email("Formato Invalido").nonempty("O email é obrigatório"),
  password: z
    .string()
    .nonempty("A password é obrigatória")
    .min(8, "A password deve conter pelo menos 8 caracteres"),
});
 
export type UserData = z.infer<typeof UserSchema>;


export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(UserSchema),
  });
  // const formData
 
  return (
    <div className="flex h-screen w-full bg-card">
      <div className="my-auto w-[455px] rs:border-r bg-card text-card-foreground shadow py-5 px-9 mx-auto rs:mx-0">
        <div className="relative z-20 flex items-center">
          <h1 className="text-xl font-bold text-foreground/75">
            Job<b className="text-primary">Ons</b>
          </h1>
        </div>
        <div className="w-full">
          <CardHeader className="px-6 py-0  space-y-1">
            <CardTitle className="font-normal mt-8 mb-2 text-2xl lg:text-3xl">
              Bem-vindo de volta
            </CardTitle>
            <CardDescription>Entra na tua conta</CardDescription>
            <div className="w-full flex flex-col space-y-5 py-6">
              <Button
                variant="secondary"
                size="lg"
                className=" w-full text-center gap-1.5"
              >
                <Github size="16" />
                Entrar com o Github
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full text-center gap-1.5"
              >
                <Lock size="16" />
                Entrar com o Google
              </Button>
            </div>
          </CardHeader>
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-scale-700" />
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
                  className="text-xs text-scale-900 hover:text-muted-foreground"
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
                <Link
                  className="underline transition hover:text-scale-1100"
                  to="/cadastrar"
                >
                  Registre-se agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comment person="Acassia Namboje">
        <>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum labore doloremque reiciendis voluptatibus nobis inventore temporibus aspernatur explicabo illum veniam</>
      </Comment>
    </div>
  );
}
