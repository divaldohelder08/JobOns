import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";
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
import { Menu, Search,Bell,Inbox } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Dashboard() {
  return (
    <div className="h-screen flex w-full">
      <aside className="h-full w-60 border-r bg-card text-card-foreground shadow">
        aside
      </aside>
      <main className="flex-1 h-full ">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
          <Container>
            <div className="container flex h-14 items-center">
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
                  <Inbox size={20} />
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
        main
      </main>
    </div>
  );
}
