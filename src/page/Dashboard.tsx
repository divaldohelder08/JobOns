import Container from "@/components/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Bell, GraduationCap, Search, Webhook, Wrench } from "lucide-react";

type routeData = {
  label: string;
  to: string;
  icon: JSX.Element;
  class?: routeData[];
};

const routes: routeData[] = [
  {
    label: "Dashboard",
    icon: <Webhook size={18} />,
    to: "Dashboard",
  },
  //   {
  //     label: "Turmas",
  //     icon: <Backpack size={18} />,
  //     to: "Turmas",
  //   },
  {
    label: "Turmas",
    icon: <GraduationCap size={18} />,
    to: "Turmas",
    class: [
      {
        label: "Mecanica",
        icon: <Wrench size={18} />,
        to: "mecanic",
      },
    ],
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
      <main className="h-full w-full flex">
        <aside className="h-full w-60 text-card-foreground p-1 mx-auto border-r bg-background/95 ">
          <nav className="pb-1 relative">
            <ul className="w-full space-y-1 text-accent-foreground/60">
              {routes?.map((e, key) => {
                return (
                  <li key={key}>
                     {
                        
                     }
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
        <div className="flex-1 overflow-y-scroll h-full">main</div>
      </main>
    </div>
  );
}