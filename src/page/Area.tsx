import Aside from "@/components/Aside";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, GraduationCap, Users, Zap } from "lucide-react";
export default function Area() {
  const { area } = useParams();

  return (
    <div className="h-screen w-full overflow-hidden">
      <Header />
      <div className="h-full w-full flex">
        <Aside />
        <main className="flex-1 overflow-y-scroll h-full p-3 md:p-8 mt-2 space-y-4 ">
          <div className="w-full justify-between flex">
            <h1 className="font-semibold text-2xl inline-flex items-center gap-3">
              {area}
            </h1>
            <Button disabled>Upload</Button>
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
          <Footer />
        </main>
      </div>
    </div>
  );
}
