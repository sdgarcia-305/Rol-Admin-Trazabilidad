import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Truck, MapPin, User } from "lucide-react";

export default function Rutas() {
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    // Simulación (luego lo conectas a API)
    setRutas([
      {
        id: 1,
        nombre: "Ruta San Miguel",
        transportista: "Carlos Gómez",
        lote: "Lote #12",
        estado: "En tránsito",
      },
      {
        id: 2,
        nombre: "Ruta Santa Ana",
        transportista: "Sin asignar",
        lote: "Lote #18",
        estado: "Pendiente",
      },
    ]);
  }, []);

  return (
    <div className="flex-1 overflow-auto py-20">
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-semibold mb-1">Gestión de Rutas</h1>
          <p className="text-muted-foreground">
            Asigna y supervisa las rutas de transporte agrícola
          </p>
        </div>

        {/* TABLA */}
        <div className="bg-card rounded-xl shadow border">
          <table className="w-full text-sm hidden md:table">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left">Ruta</th>
                <th className="px-4 py-3 text-left">Transportista</th>
                <th className="px-4 py-3 text-left">Lote</th>
                <th className="px-4 py-3 text-left">Estado</th>
                <th className="px-4 py-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {rutas.map((r) => (
                <tr key={r.id} className="border-t hover:bg-muted/50">
                  <td className="px-4 py-3 font-medium flex items-center gap-2">
                    <MapPin className="size-4 text-green-600" />
                    {r.nombre}
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <User className="size-4" />
                    {r.transportista}
                  </td>
                  <td className="px-4 py-3">{r.lote}</td>
                  <td className="px-4 py-3">
                    <Badge
                      className={
                        r.estado === "En tránsito"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {r.estado}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Asignar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* MOBILE */}
          <div className="md:hidden divide-y">
            {rutas.map((r) => (
              <div key={r.id} className="p-4 space-y-2">
                <p className="font-medium">{r.nombre}</p>
                <p className="text-sm text-muted-foreground">
                  Transportista: {r.transportista}
                </p>
                <Badge className="bg-green-100 text-green-800">
                  {r.estado}
                </Badge>
                <Button className="w-full mt-2 bg-green-600 text-white">
                  Asignar ruta
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
