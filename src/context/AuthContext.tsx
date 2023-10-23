import { api } from "@/Api/Api";
import { toast } from "@/components/ui/use-toast";
import { UserData } from "@/page/Sign-in";
import react, { createContext, useState } from "react";
type AuthContextData = {
  logado: boolean;
};

export const Authcontext = createContext({} as AuthContextData);
type User = {
  id: string;
  avatar: string | null;
  nome: string;
  email: string;
};

export function AuthProvider(children: react.ReactNode) {
  const [delay, setDelay] = useState<boolean>(false);
  const [user, setUser] = useState< User | null>(null);
  async function signData(data: UserData) {
    setDelay(true);
    api
      .post("/auth", data)
      .then((response) => {
        toast({
          title: `Logando com ${response.data.user.username}`,
          description: response.data.mensagem,
        });
        console.log(response.data.user);
        setUser(response.data.user);
        // Router

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
  }
  const logado = false;
  return (
    <Authcontext.Provider value={{ logado }}>{children}</Authcontext.Provider>
  );
}
