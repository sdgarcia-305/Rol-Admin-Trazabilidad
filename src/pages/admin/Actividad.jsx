import { useEffect, useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Activity, User, Clock } from "lucide-react";

export default function Actividad() {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    setActividades([
      {
        id: 1,
        usuario: "Ariel López",
        accion: "Registró un nuevo lote",
        modulo: "Lotes",
        tiempo: "Hace 5 minutos",
      },
      {
        id: 2,
        usuario: "María Pérez",
        accion: "Asignó ruta a transportista",
        modulo: "Rutas",
        tiempo: "Hace 20 minutos",
      },
      {
        id: 3,
        usuario: "Carlos Gómez",
        accion: "Actualizó estado de lote",
        modulo: "Producción",
        tiempo: "Hace 1 hora",
      },
      {
        id: 4,
        usuario: "Karla Cisneros",
        accion: "Asignó ruta a transportista",
        modulo: "Rutas",
        tiempo: "Hace 20 minutos",
      },
      {
        id: 5,
        usuario: "Iván García",
        accion: "Actualizó estado de lote",
        modulo: "Producción",
        tiempo: "Hace 1 hora",
      },
    ]);
  }, []);

  return (
    <div className="flex-1 overflow-auto py-20">
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-semibold mb-1">Actividad del Sistema</h1>
          <p className="text-muted-foreground">
            Registro de acciones recientes realizadas por los usuarios
          </p>
        </div>

        {/* LISTA */}
        <div className="bg-card rounded-xl shadow">
          {actividades.map((a) => (
            <div
              key={a.id}
              className="p-4 flex items-start gap-6 hover:bg-muted transition"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Activity className="text-green-600" />
              </div>

              <div className="flex-1">
                <p className="font-medium flex items-center gap-4">
                  <User className="size-4" />
                  {a.usuario}
                </p>
                <p className="text-sm text-muted-foreground pt-1">{a.accion}</p>
                <div className="flex items-center pt-1 gap-3 mt-1">
                  <Badge variant="outline">{a.modulo}</Badge>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="size-3" />
                    {a.tiempo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
