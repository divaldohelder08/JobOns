import Container from "@/components/Container";
import Footer from "@/components/Home/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Backpack,
  DraftingCompass,
  GraduationCap,
  Laptop,
  Users,
  Webhook,
  Wrench,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
type data = {
  label: string;
  icon: JSX.Element;
  turmas: string[];
};

type routeData = {
  label: string;
  tag: string;
  icon: JSX.Element;
  curso?: data[];
};

const routes: routeData[] = [
  {
    label: "Dashboard",
    icon: <Webhook size={18} />,
    tag: "Dashboard",
  },
  {
    label: "Some",
    icon: <Backpack size={18} />,
    tag: "some",
  },
  {
    label: "Turmas",
    icon: <GraduationCap size={18} />,
    tag: "Turmas",
    curso: [
      {
        label: "Informática",
        icon: <Laptop size={18} />,
        turmas: ["IG10C", "IG11A", "IG12A"],
      },
      {
        label: "Eletricidade",
        icon: <Zap size={18} />,
        turmas: ["EL10A", "IG11A", "IG12A"],
      },
      {
        label: "Mecânica",
        icon: <Wrench size={18} />,
        turmas: ["IG10C", "IG11A", "IG12A"],
      },
      {
        label: "Construção civil",
        icon: <DraftingCompass size={18} />,
        turmas: ["IG10C", "IG11A", "IG12A"],
      },
    ],
  },
  {
    label: "Novidades",
    icon: <Backpack size={18} />,
    tag: "News",
  },
  {
    label: "Configurações",
    icon: <Backpack size={18} />,
    tag: "Conf",
  },
];

export default function Dashboard() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <Container>
          <div className="container flex h-14 items-center">
            <h1 className="text-xl font-bold m-5">
              Job<b className="text-primary">Ons</b>
            </h1>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="flex items-center space-x-4">
                <div className="flex items-center gap-2">
                  <Input
                    type="search"
                    className="font-medium "
                    placeholder="Encontre alunos, turmas..."
                  />
                  <Avatar className="h-8 w-8">
                    <AvatarImage />
                    <AvatarFallback className="text-sm">DH</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <div className="h-full w-full flex">
        <aside className="h-full w-60 text-card-foreground p-2 mx-auto border-r bg-background/95 ">
          <nav className="pb-1 relative">
            <ul className="w-full space-y-1 text-accent-foreground/60">
              {routes?.map((e, key) => {
                return (
                  <>
                    {e.curso !== undefined ? (
                      <li key={key} className="relative">
                        <details className="w-full">
                          <summary className="block relative cursor-pointer items-center  text-muted-foreground font-medium px-3 py-2 w-full">
                            <span className="gap-2 flex items-center">
                              {e.icon}
                              {e.label}
                            </span>
                          </summary>
                          <ul className="ml-[1.30rem] border-l border-muted relative">
                            {e.curso.map((sub, key) => {
                              return (
                                <details
                                  className="items-center w-full relative"
                                  key={key}
                                >
                                  <summary className="relative cursor-pointer text-muted-foreground font-medium px-3 py-2 w-full items-center text-center inline-flex  gap-3">
                                    {sub.icon}
                                    {sub.label}
                                  </summary>
                                  <ul className="pl-4">
                                    {sub.turmas?.map((sub1, index) => {
                                      return (
                                        <Link
                                          to={sub1}
                                          key={index}
                                          className="font-medium items-center  px-3 py-1 text-sm inline-flex gap-2 w-full before:h-px before:w-5 before:t-3 before:absolute before:bg-primary before:-left-0"
                                        >
                                          <Backpack
                                            size={16}
                                            className="text-primary"
                                          />
                                          {sub1}
                                        </Link>
                                      );
                                    })}
                                  </ul>
                                </details>
                              );
                            })}
                          </ul>
                        </details>
                      </li>
                    ) : (
                      <li key={key} className="relative">
                        <Link
                          to={e.tag}
                          className="text-muted-foreground font-medium items-center  px-4 py-2 text-center inline-flex gap-3 w-full hover:bg-primary/75 hover:text-accent-foreground  
                          rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9"
                        >
                          {e.icon}
                          {e.label}
                        </Link>
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-scroll h-full p-3 md:p-8 mt-2 space-y-4 ">
          <div className="w-full">
            <h1 className="font-semibold text-2xl">DashBoard</h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex justify-between">
                  Alunos
                  <Users className="text-muted-foreground" size={16} />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardSubTitle>+2350</CardSubTitle>{" "}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex justify-between">
                  Turmas
                  <Zap className="text-muted-foreground" size={16} />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardSubTitle>16</CardSubTitle>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex justify-between">
                  Aproveitamento
                  <Zap className="text-muted-foreground" size={16} />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Progress value={57} className="w-full" />
                <CardDescription>+20.1% from last month</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex justify-between">
                  Aproveitamento
                  <Zap className="text-muted-foreground" size={16} />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Progress value={57} className="w-full" />
                <CardDescription>+20.1% do trimestre passado</CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-5">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
            </Card>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Melhores alunos</CardTitle>
                <CardDescription> Destaques desse trimestre</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
