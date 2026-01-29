import { useEffect } from "react";
import { Leaf, Users } from "lucide-react";
import icon from "../assets/fully.webp";  

export default function HeaderAgricultor() {

  return (
    <div className="">
      {/* Header */}
      <header className="bg-white fixed top-0 w-full z-30">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 rounded-xl p-2">
                <img src={icon} alt="" className="h-8 w-auto object-contain" />
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-semibold">Trazabilidad Agrícola</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Panel del Agricultor</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-9 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="size-4 text-green-700" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium">Nicolas Serrano</p>
                <p className="text-xs text-muted-foreground">Agricultor</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
