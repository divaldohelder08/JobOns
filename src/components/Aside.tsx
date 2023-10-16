import {
  Backpack,
  DraftingCompass,
  GraduationCap,
  Laptop,
  Webhook,
  Wrench,
  Zap,
  Settings
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
  area?: data[];
};

const routes: routeData[] = [
  {
    label: "Dashboard",
    icon: <Webhook size={18} />,
    tag: "/Dashboard",
  },
  {
    label: "Some",
    icon: <Backpack size={18} />,
    tag: "/some",
  },
  {
    label: "Cursos",
    icon: <GraduationCap size={18} />,
    tag: "Cursos",
    area: [
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
    tag: "/News",
  },
  {
    label: "Configurações",
    icon: <Settings size={18} />,
    tag: "/Conf",
  },
];

export default function Aside() {
  return (
    <aside className="h-full w-60 text-card-foreground p-2 mx-auto border-r bg-background/95 ">
      <nav className="pb-1 relative">
        <ul className="w-full space-y-1 text-accent-foreground/60">
          {routes?.map((e, key) => {
            return (
              <>
                {e.area !== undefined ? (
                  <li key={key} className="relative">
                    <details className="w-full">
                      <summary className="relative cursor-pointer  text-muted-foreground font-medium px-3 py-2 w-full h-9 gap-3 flex items-center text-sm">
                        {e.icon}
                        {e.label}
                      </summary>
                      <ul className="ml-[1.30rem] border-l border-muted relative">
                        {e.area.map((sub, key) => {
                          return (
                            <details
                              className="items-center w-full relative"
                              key={key}
                            >
                              <summary className="relative cursor-pointer text-muted-foreground font-medium px-3 py-2 w-full items-center text-center inline-flex gap-3 h-9 text-sm">
                                {sub.icon}
                                {sub.label}
                              </summary>
                              <ul className="pl-4">
                                {sub.turmas?.map((sub1, index) => {
                                  return (
                                    <Link
                                      to={`/dashboard/${sub.label}/${sub1}`}
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
                ) : (
                  <li key={key} className="relative">
                    <Link
                      to={e.tag}
                      replace={true}
                      className="text-muted-foreground font-medium items-center  px-4 py-2 text-center inline-flex gap-3 w-full hover:bg-primary/75 hover:text-accent-foreground rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9"
                    >
                      {e.icon}
                      {e.label}
                    </Link>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
