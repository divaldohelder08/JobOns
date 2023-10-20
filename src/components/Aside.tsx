import { api } from "@/Api/Api";
import {
  Backpack,
  DraftingCompass,
  GraduationCap,
  Laptop,
  Settings,
  Webhook,
  Wrench,
  Zap,
  GitMerge
} from "lucide-react";
import { Link } from "react-router-dom";
type data = {
  label: string;
  icon: JSX.Element;
  turmas: string[];
};

const area: data[] = [
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
      turmas: ["MC10A", "MC11B", "MC12C"],
    },
    {
      label: "Construção civil",
      icon: <DraftingCompass size={18} />,
      turmas: ["CV10A", "CV10B", "CV11A", "CV12B"],
    },
  ]
type AreaIconMap = {
  [area: string]: JSX.Element;
};

interface Area {
  area: string;
  turmas: { [key: number]: string[] };
}
function getIconByArea(area: string): JSX.Element | undefined {
  const iconMap: AreaIconMap = {
    Informática: <Laptop size={18} />,
    Eletricidade: <Zap size={18} />,
    Mecânica: <Wrench size={18} />,
    "Construção civil": <DraftingCompass size={18} />,
  };

  return iconMap[area];
}
  

export default function Aside() {

  api.get("/take")
  .then((response)=>{
    response.data.areas.map((e: Area) => {
      console.log(getIconByArea(e.area));
    });
  }).catch((error)=>console.error(error))

  return (
    <aside className="h-full w-60 text-card-foreground p-2 mx-auto border-r bg-background/95 ">
      <nav className="pb-1 relative">
        <ul className="w-full space-y-1 text-accent-foreground/60">
          <li className="relative">
            <Link
              to="/Dashboard"
              replace={true}
              className="text-muted-foreground font-medium items-center  px-4 py-2 text-center inline-flex gap-3 w-full hover:bg-primary/75 hover:text-accent-foreground rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9"
            >
              <Webhook size={18} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/Some"
              replace={true}
              className="text-muted-foreground font-medium items-center  px-4 py-2 text-center inline-flex gap-3 w-full hover:bg-primary/75 hover:text-accent-foreground rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9"
            >
              <Backpack size={18} />
              Some
            </Link>
          </li>
          <li className="relative">
            <details className="w-full">
              <summary className="relative cursor-pointer  text-muted-foreground font-medium px-3 py-2 w-full h-9 gap-3 flex items-center text-sm">
                <GraduationCap size={18} />
                Areas
              </summary>
              <ul className="ml-[1.30rem] border-l border-muted relative">
                {area.map((e, key) => {
                  return (
                    <details className="items-center w-full relative" key={key}>
                      <summary className="relative cursor-pointer text-muted-foreground font-medium px-3 py-2 w-full items-center text-center inline-flex gap-3 h-9 text-sm">
                        {e.icon}
                        {e.label}
                      </summary>
                      <ul className="pl-4">
                        <Link
                          to={`/dashboard/${e.label}`}
                          className="font-medium items-center  px-3 py-1 text-sm inline-flex gap-2 w-full before:h-px before:w-5 before:t-3 before:absolute before:bg-primary before:-left-0"
                        >
                          <GitMerge className="text-primary" size={18} />
                          Mergi
                        </Link>
                        {e.turmas?.map((sub1, index) => {
                          return (                          
                                <Link
                                  to={`/dashboard/${e.label}/${sub1}`}
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

          <Link
            to="/Conf"
            replace={true}
            className="text-muted-foreground font-medium items-center  px-4 py-2 text-center inline-flex gap-3 w-full hover:bg-primary/75 hover:text-accent-foreground rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9"
          >
            <Settings size={18} />
            Configurações
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
