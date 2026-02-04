import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Calendar,
  MapPin,
  Leaf,
  Package,
  Truck,
  Store,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";
import { BackgroundImage } from "../../img/BackgroundImage";

export default function DetalleLote({ lote, onRegresar }) {
  if (!lote) return null;

  const etapas = [
    {
      titulo: "Siembra",
      fecha: lote.fechaSiembra,
      descripcion: "Inicio de la siembra",
      estado: "completado",
      icon: Leaf,
    },
    {
      titulo: "Cosecha",
      fecha: lote.fechaCosecha,
      descripcion: `Cosecha realizada. Cantidad: ${lote.cantidad}`,
      estado: "completado",
      icon: Package,
    },
    {
      titulo: "Transporte",
      fecha: "—",
      descripcion: "Transporte hacia centro de distribución",
      estado: lote.estado === "En transporte" ? "activo" : "completado",
      icon: Truck,
    },
    {
      titulo: "Distribución",
      fecha: "—",
      descripcion: "Producto disponible en puntos de venta",
      estado: lote.estado === "Distribuido" ? "activo" : "pendiente",
      icon: Store,
    },
  ];

  const colorEstadoClasses = {
    green: "bg-green-100 text-green-800 hover:bg-green-100",
    blue: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    yellow: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
  };

  return (
    <div className="flex-1 overflow-auto py-20 pb-16">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold">Detalle del Lote</h1>
            </div>
            <Button onClick={onRegresar} className="flex items-center gap-2
              text-white bg-green-600 hover:bg-green-700
              px-3 sm:px-4
              whitespace-nowrap"
            >
              <ArrowLeft className="size-4" />
                <span className="hidden sm:inline">
                  Regresar
                </span>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3  gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div clasname="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border">
                <div clasname="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                  <div clasname="flex items-start justify-between">
                    <div>
                      <h2 className="leading-none text-2xl mb-2">{lote.cultivo}</h2>
                      <Badge className={`mb-2 ${colorEstadoClasses[lote.colorEstado]}`}>
                        {lote.estado}
                      </Badge>
                    </div>
                  </div>              
                </div>

                <div className="px-6 [&:last-child]:pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="h-64 rounded-lg overflow-hidden bg-gray-100">
                      <BackgroundImage
                        src={lote.imagen}
                        alt={lote.cultivo}
                        className="w-full h-full object-cover"
                      />
                    </div>  
                    <div className="space-y-4 pt-2">
                      <Info label="Lugar de producción" icon={MapPin}>
                        {lote.lugar}
                      </Info>
                      <Info label="Fecha de siembra" icon={Calendar}>
                        {lote.fechaSiembra}
                      </Info>
                      <Info label="Fecha de cosecha" icon={Calendar}>
                        {lote.fechaCosecha}
                      </Info>
                      <Info label="Cantidad" icon={Package}>
                        {lote.cantidad}
                      </Info>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Prácticas Agrícolas</h4>
                    <p className="text-sm text-muted-foreground">
                      Cultivo 100% orgánico sin uso de pesticidas químicos. Sistema
                      de riego por goteo con agua de pozo. Fertilizantes naturales a
                      base de compost. Rotación de cultivos cada temporada para
                      mantener la salud del suelo.
                    </p>
                  </div>
                </div>
              </div>
                    
              {/* Timeline */}
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
                <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                  <div className="font-medium mb-4">Línea de Tiempo - Trazabilidad</div>
                </div>
                <div clasname="px-6 [&:last-child]:pb-6">
                  <div className="relative">
                    {etapas.map((etapa, index) => {
                      const Icon = etapa.icon;
                      const isLast = index === etapas.length - 1;

                        return (
                          <div key={index} className="relative pb-8 last:pb-0">
                            {!isLast && (
                              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200" />
                            )}
                          <div className="flex gap-4">
                            <div className={`rounded-full p-3 h-fit relative z-10 ${
                              etapa.estado === "activo"
                                ? "bg-blue-100"
                                : "bg-green-100"
                              }`}>
                              <Icon className={`size-6 ${
                                etapa.estado === "activo"
                                ? "text-blue-700"
                                : "text-green-700"
                              }`}
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h4 className="font-medium">{etapa.titulo}</h4>
                                {etapa.estado === "completado" && (
                                  <CheckCircle2 className="size-5 text-green-600" />
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-1">
                                {etapa.descripcion}
                              </p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <Calendar className="size-3" />
                                {etapa.fecha}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
                <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                  <div className="leading-none">Código QR</div>
                </div>
                <div className="px-6 [&:last-child]:pb-6">
                  <div className="bg-white p-6 border-2 border-gray-200 rounded-lg">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <BackgroundImage
                        src="https://images.unsplash.com/photo-1569908420024-c8f709b75700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBzY2FufGVufDF8fHx8MTc2MjQ4MDU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="QR Code"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <p className="text-sm text-center text-muted-foreground mb-3">
                      Escanea para ver la trazabilidad completa
                    </p>
                    <Button variant="outline" className="w-full" size="sm">
                      Descargar QR
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
                <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                  <div className="leading-none">Estadísticas</div>
                </div>
                <div className="px-6 [&:last-child]:pb-6 space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Días desde siembra</span>
                    <span className="font-medium">23 días</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Días hasta cosecha</span>
                    <span className="font-medium">Completado</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Rendimiento</span>
                    <span className="font-medium">450 kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Helper */
function Info({ label, icon: Icon, children }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className="flex items-center gap-2">
        <Icon className="size-4 text-green-600" />
        {children}
      </p>
    </div>
  );
}
