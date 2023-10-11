import { Button } from "@/components/ui/button";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import { ShoppingCart } from "lucide-react"

export default function Hero() {
  return (
      <div className="space-y-10 pb-10">
        <div className="rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/forest.jpg)` }}
            className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 backdrop-brightness-[.6]">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                Feactured Products
                <Button size="lg" className="w-full py-6 text-xl">
                  <ShoppingCart className="mr-2" />
                  Show Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
