import Aside from "@/components/Aside";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";

export default function Turma() {
  const { area, turma } = useParams();

  return (
    <div className="h-screen w-full overflow-hidden">
      <Header />
      <div className="h-full w-full flex">
        <Aside />
        <main className="flex-1 overflow-y-scroll h-full p-3 md:p-8 mt-2 space-y-4 ">
          <div className="w-full justify-between flex">
            <h1 className="font-semibold text-2xl inline-flex items-center gap-3">
              {area}
              <ChevronRight />
              {turma}
            </h1>
            <Button disabled>Upload</Button>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
