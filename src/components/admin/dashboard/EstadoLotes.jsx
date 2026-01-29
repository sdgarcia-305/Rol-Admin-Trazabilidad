import {ChartPie} from "lucide-react"; 

export default function EstadoLotes({ data }) {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
        <div className="leading-none flex items-center gap-2">
          <ChartPie className="size-6 text-green-600" />
          <h2 className="flex items-center font-semibold gap-2 leading-none">Distribución por Estado</h2>
        </div>

        <p className="text-muted-foreground">Estado operativo actual de los lotes dentro del sistema</p>
      </div>

      <div className="px-6 [&:last-child]:pb-6">
        <div className="space-y-6">
          <div className="flex gap-2 h-12 rounded-xl overflow-hidden">
            {data.map((estado, index) => (
              <div
                key={index}
                style={{ width: `${estado.porcentaje}%` }}
                className={`${estado.color}  flex items-center rounded-xl justify-center text-white font-semibold text-xl transition-all hover:opacity-80`}
              >
                {estado.porcentaje > 0 && (
                    <span className="text-white font-semibold text-md">
                      {estado.porcentaje}%
                    </span>
                )}
              </div>
            ))}
          </div>
        
          <ul className="space-y-3">
            {data.map((estado, index) => (
              <li key={index} className="flex items-center justify-between">
                {/* Lado izquierdo */}
                <div className="flex items-center gap-3">
                  <div className={`${estado.color} size-4 rounded-full`} />
                  <span className="text-sm font-semibold">{estado.estado}</span>
                  {estado.nombre}
                </div>

                {/* Lado derecho (JUSTIFICADO A LA DERECHA) */}
                <div className="text-right">
                  <span className="text-sm font-medium">
                    {estado.lotes} lotes
                  </span>
                  <span className="text-xs text-muted-foreground ml-2">
                    ({estado.porcentaje}%)
                  </span> 
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
