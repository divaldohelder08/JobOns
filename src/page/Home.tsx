import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";
// // import { Input } from "@/components/ui/input";
import Hero from "@/components/Home/Hero";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Menu, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Home/Footer";

const routes = [
  {
    href: "/",
    label: "Produtos",
  },
  {
    href: "/",
    label: "Categoria",
  },
  {
    href: "/",
    label: "On Sale",
  },
];


export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <Container>
          <div className="container flex h-14 items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6 mr-2" />
              </SheetTrigger>
              <SheetContent side={"left"} className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link to="#">
                    <h1 className="text-xl font-bold">
                      Job<b className="text-primary">Ons</b>
                    </h1>
                  </Link>
                  {routes?.map((route, key) => {
                    return (
                      <a
                        href={route.href}
                        key={key}
                        className="block px-2 py-1 text-lg"
                      >
                        {route.label}
                      </a>
                    );
                  })}
                  <Separator orientation="horizontal" className="w-full" />{" "}
                  <Link to="entrar">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="group w-full"
                    >
                      <span className="mr-1">Entrar</span>
                      <ArrowRight
                        size={17}
                        className="group-hover:animate-bouncex"
                      />
                    </Button>
                  </Link>
                  <Link to="cadastrar">
                    <Button variant="outline" size="lg" className="w-full">
                      <span className="mr-1">Cadastrar</span>
                      <User size={17} />
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="mr-4 hidden md:flex">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link to="#" className="mr-6 ">
                  <h1 className="text-xl font-bold">
                    Job<b className="text-primary">Ons</b>
                  </h1>
                </Link>
                {routes?.map((route, key) => {
                  return (
                    <Link
                      to={route.href}
                      key={key}
                      className="text-sm font-medium border-primary hover:border-b 
                      transition-colors hover:text-foreground/80 text-foreground/60
                      "
                    >
                      {route.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex-1 md:w-auto md:flex-none">
                {" "}
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
              <div className="hidden sm:flex items-center gap-2">
                <Separator orientation="vertical" className="h-8" />{" "}
                <Link to="entrar">
                  <Button variant="ghost" className="group">
                    <span className="mr-1">Entrar</span>
                    <ArrowRight
                      size={17}
                      className="group-hover:animate-bouncex"
                    />
                  </Button>
                </Link>
                <Link to="cadastrar">
                  <Button variant="outline">
                    <span className="mr-1">Cadastrar</span>
                    <User size={17} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <Hero />
      <Footer />
    </>
  );
}
