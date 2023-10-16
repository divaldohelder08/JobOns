import Container from "@/components/Container";
import { Copyright } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  {
    href: "/Dashboard/Eletricidade/EL10A",
    label: "Termos",
  },

  {
    href: "/dashboard",
    label: "privacidade",
  },
  {
    href: "/support",
    label: "Support",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/github",
    label: "github",
  },
];
export default function Footer() {
  console.log(import.meta.env.VITE_CURRENT_YEAR);
  return (
    <footer>
      {" "}
      <Container className="border-t border-border">
        <div className="pt-10 pb-28 flex flex-col justify-between text-sm font-medium transition-colors">
          <ul className="my-3 flex  flex-wrap gap-4">
            {links?.map((e, key) => {
              return (
                <li className="">
                  <Link
                    key={key}
                    to={e.href}
                    className="hover:text-foreground/80 text-foreground/60"
                  >
                    {e.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="flex items-center gap-1">
            <Copyright className="inline-flex" size="14" />
            {import.meta.env.VITE_CURRENT_YEAR}<Link to={"s"} className="hover:underline">
              JobOn Inc.
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
