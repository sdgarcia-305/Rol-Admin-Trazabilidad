import { CircleAlert, CircleCheck, Package } from "lucide-react"; 

const configPorTipo = {
  alerta: { icon: CircleAlert, bg: "bg-red-100", color: "text-red-600" },
  rol: { icon: CircleCheck, bg: "bg-green-100", color: "text-green-600" },
  producto: { icon: Package, bg: "bg-blue-100", color: "text-blue-600" }, 
};

export default function ActividadReciente({ data }) {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
        <h2 className="flex items-center font-semibold gap-2 leading-none">Actividades Recientes</h2>
      </div> 

      <div className="px-6 [&:last-child]:pb-6"> 
        <ul className="space-y-4">
          {data.map((item, index) => {
            const config = configPorTipo[item.tipo];
            const Icon = config.icon;

          return (
            <li key={index} className="flex gap-4 items-start">
              {/* ICONO */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${config.bg}`}
              >
                <Icon className={config.color} size={21} />
              </div>

              {/* TEXTO */}
              <div className="flex-1">
                <p className="font-semibold text-gray-800">
                  {item.descripcion}
                </p>

                {item.fecha && (
                  <p className="text-sm text-gray-700">
                    Fecha: {item.fecha}
                  </p>
                )}

                {item.responsable && (
                  <p className="text-sm text-gray-600">
                    Responsable: {item.responsable}
                  </p>
                )}

                {item.lote && (
                  <p className="text-sm text-gray-600">
                    Lote: "{item.lote}"
                  </p>
                )}

                <p className="text-xs text-gray-400 mt-1">
                  {item.tiempo}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
  );
}