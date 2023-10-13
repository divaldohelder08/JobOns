import Container from "@/components/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Backpack,
  Bell,
  DraftingCompass,
  GraduationCap,
  Laptop,
  Search,
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
            <div className="mr-4 hidden md:flex">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <div className="w-full flex-1 md:w-auto md:flex-none">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
                        <span className="lg:inline-flex md:hidden">
                          Pesquise qualquer coisa...
                        </span>
                        <span className="hidden md:inline-flex lg:hidden">
                          Pesquisar...
                        </span>
                        <kbd className="pointer-events-none absolute right-1.5 top-1.5 h-5 select-none items-center px-1.5 font-medium opacity-100 sm:flex">
                          <span className="text-xs">
                            <Search size={20} />
                          </span>
                        </kbd>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          ola
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          oka
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="flex items-center gap-4">
                <Bell size={20} />
                <div className="flex items-center gap-2">
                  <h3>Divaldo Hélder</h3>
                  <Avatar>
                    <AvatarImage />
                    <AvatarFallback>DH</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <div className="h-full w-full flex">
        <aside className="h-full w-60 text-card-foreground p-1 mx-auto border-r bg-background/95 ">
          <nav className="pb-1 relative">
            <ul className="w-full space-y-1 text-accent-foreground/60">
              {routes?.map((e, key) => {
                return (
                  <>
                    {e.curso !== undefined ? (
                      <li
                        key={key}
                        className="relative tree before:h-px before:w-4 before:top-3 
after:h-7
after:w-px
after:-top-3"
                      >
                        <details className="items-center w-full">
                          <summary className="block relative cursor-pointer items-center  text-muted-foreground font-medium px-3 py-2 w-full">
                            <span className="gap-2 flex items-center">
                              {e.icon}
                              {e.label}
                            </span>
                          </summary>
                          <ul className="pl-4 relative">
                            {e.curso.map((sub, key) => {
                              return (
                                <details
                                  className="items-center w-full relative"
                                  key={key}
                                >
                                  <summary className="relative cursor-pointer text-muted-foreground font-medium px-3 py-2 w-full items-center text-center inline-flex  gap-3 before:h-px before:w-4 before:t-3 before:absolute before:bg-primary before:-left-3 ">
                                    {sub.icon}
                                    {sub.label}
                                  </summary>
                                  <ul className="pl-4">
                                    {sub.turmas?.map((sub1, index) => {
                                      return (
                                        <Link
                                          to={sub1}
                                          key={index}
                                          className="font-medium items-center  px-3 py-1 text-center text-sm inline-flex gap-2 w-full before:h-px before:w-4 before:t-3 before:absolute before:bg-primary before:-left-3"
                                        >
                                          <Backpack size={16} />
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
                          className="text-muted-foreground font-medium items-center  px-3 py-2 text-center inline-flex gap-3 w-full hover:bg-accent hover:text-accent-foreground"
                        >
                          {e.icon}
                          {e.label}
                        </Link>{" "}
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-scroll h-full p-3 md:p-8 ">
          <div className="w-full">
            <h1 className="font-semibold text-2xl">DashBoard</h1>
          </div>
          <div className="grid grid-cols-4 gap-6 py-4">
            <Card className="max-w-[240px]">
              <CardHeader>
                <CardTitle className="flex justify-between">
                  Some
                  <Zap className="text-muted-foreground" size={20} />
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="max-w-[240px]">
              <CardHeader>
                <CardTitle>Some</CardTitle>
              </CardHeader>
            </Card>

            <Card className="max-w-[240px]">
              <CardHeader>
                <CardTitle>Some</CardTitle>
              </CardHeader>
            </Card>
            <Card className="max-w-[240px]">
              <CardHeader>
                <CardTitle>Some</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
