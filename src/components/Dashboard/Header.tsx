import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center px-4">
        <h1 className="text-xl font-bold m-5">
          Job<b className="text-primary">Ons</b>
        </h1>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <Input
                type="search"
                className="font-medium w-[300px]"
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
    </header>
  );
}
