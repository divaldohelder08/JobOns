import { useParams } from "react-router-dom"
import Aside from "@/components/Aside";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { GraduationCap, Users, Zap,ChevronRight,Activity } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";


export default function Area() {
const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

  const { area, turma } = useParams()

  return (
    <div className="h-screen w-full overflow-hidden">
      <Header />
      <div className="h-full w-full flex">
        <Aside />
        <main className="flex-1 overflow-y-scroll h-full p-3 md:p-8 mt-2 space-y-4 ">
          <div className="w-full">
            <h1 className="font-semibold text-2xl inline-flex items-center gap-3">
              {area}
              <ChevronRight />
              {turma}
            </h1>
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
                  <Activity className="text-muted-foreground" size={16} />
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
              <CardContent className="w-full h-[290px]">
                <ResponsiveContainer className="w-full h-full">
                  <BarChart data={data}>
                    <XAxis
                      dataKey="name"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value}`}
                    />
                    <Bar
                      dataKey="total"
                      radius={[4, 4, 0, 0]}
                      className="fill-primary"
                    />
                  </BarChart>
                </ResponsiveContainer>
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