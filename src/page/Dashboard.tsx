import Aside from "@/components/Aside";
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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  GraduationCap,
  Users,
  Zap,
} from "lucide-react";


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
        </Container>
      </header>
      <div className="h-full w-full flex">
        <Aside />
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
                  <GraduationCap className="text-muted-foreground" size={16} />
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
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-red-500 min-h-full w-full"></div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Melhores alunos</CardTitle>
                <CardDescription> Destaques desse trimestre</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-60">
                  <ScrollBar />
                  <div className="flex items-center my-2 pr-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage />
                      <AvatarFallback className="text-sm">DH</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Divaldo Hélder
                      </p>
                      <p className="text-sm text-muted-foreground">63703</p>
                    </div>
                    <div className="ml-auto font-medium">18</div>
                  </div>
                  <div className="flex items-center my-2  pr-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage />
                      <AvatarFallback className="text-sm">OM</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Olivia Martin
                      </p>
                      <p className="text-sm text-muted-foreground">67084</p>
                    </div>
                    <div className="ml-auto font-medium">19</div>
                  </div>
                  <div className="flex items-center my-2  pr-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage />
                      <AvatarFallback className="text-sm">DH</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Divaldo Hélder
                      </p>
                      <p className="text-sm text-muted-foreground">63703</p>
                    </div>
                    <div className="ml-auto font-medium">18</div>
                  </div>
                  <div className="flex items-center my-2  pr-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage />
                      <AvatarFallback className="text-sm">OM</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Olivia Martin
                      </p>
                      <p className="text-sm text-muted-foreground">67084</p>
                    </div>
                    <div className="ml-auto font-medium">19</div>
                  </div>
                  <div className="flex items-center my-2  pr-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage />
                      <AvatarFallback className="text-sm">JL</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Jackson Lee
                      </p>
                      <p className="text-sm text-muted-foreground">68705</p>
                    </div>
                    <div className="ml-auto font-medium">13</div>
                  </div>
                  <div className="flex items-center my-2  pr-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage />
                      <AvatarFallback className="text-sm">IN</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Isabella Nguyen
                      </p>
                      <p className="text-sm text-muted-foreground">68070</p>
                    </div>
                    <div className="ml-auto font-medium">12</div>
                  </div>
                  <div className="flex items-center my-2  pr-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage />
                      <AvatarFallback className="text-sm">WK</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        William Kim
                      </p>
                      <p className="text-sm text-muted-foreground">88997</p>
                    </div>
                    <div className="ml-auto font-medium">18</div>
                  </div>
                  <div className="flex items-center my-2  pr-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage />
                      <AvatarFallback className="text-sm">SD</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Sofia Davis
                      </p>
                      <p className="text-sm text-muted-foreground">59708</p>
                    </div>
                    <div className="ml-auto font-medium">15</div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
