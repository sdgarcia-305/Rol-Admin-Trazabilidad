export default function ProduccionAnual({ data }) {
  const maxToneladas = Math.max(...data.map(item => item.toneladas));

  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
        <h2 className="flex items-center font-semibold gap-2 leading-none">Producción Acumulada por Cultivo (Toneladas)</h2>
        <p className="text-muted-foregroun">Datos estimados del año agrícola en curso</p>
      </div>

      <div className="px-6 [&:last-child]:pb-6">
        <div className="space-y-4">

              {data.map((item, index) => {
              const porcentaje = (item.toneladas / maxToneladas) * 100;

              return (
                <div key={index}>
                  {/* Título y valor */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{item.cultivo}</span>
                    <span className="text-sm font-semibold ml-6">{item.toneladas.toLocaleString()}toneladas{item.percent}</span>
                  </div>

                  {/* Barra */}
                  <div className="w-1/2 bg-gray-200 rounded-full h-2 overflow-hidden transition-all hover:opacity-80">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${porcentaje}%` }}/>
                  </div>
                </div>
              );
            })}
            
        </div>
      </div>
    </div>
  );
}
