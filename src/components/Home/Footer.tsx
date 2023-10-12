import { Separator } from "@/components/ui/separator";
import { Copyright } from "lucide-react";
import Container from "@/components/Container";
import { Link } from "react-router-dom";

const links = [
  {
    href: "/termos",
    label: "Termos de Serviço",
  },
  {
    href: "/privacidade",
    label: "Política de Privacidade",
  },
];

export default function Footer() {
  return (
    <Container>
      <div className="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between dark:border-slate-200/5">
        <div className="mb-4 sm:mb-0 sm:flex text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60">
          <p>
            Copyright <Copyright className="inline-flex" size="14" /> 2023 JobOn
            Inc.
          </p>
          <Separator orientation="vertical" />
          {links?.map((e, key) => {
            return (
              <Link  key={key} to={e.href}>
                {e.label}
              </Link>
            );
          })}
        </div>
        
      </div>
    </Container>
  );
}
