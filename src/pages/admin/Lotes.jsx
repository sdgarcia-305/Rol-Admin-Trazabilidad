import { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { BackgroundImage } from "../../img/BackgroundImage";
import { Calendar, MapPin, Eye, Edit, Trash2, Search } from "lucide-react";
   
export default function Lotes({onVerLote}) {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState("");

  const lotes = [
    {
      id: "LT-2024-001",
      cultivo: "Tomates Orgánicos",
      estado: "Distribuido",
      fechaSiembra: "15/10/2024",
      fechaCosecha: "05/11/2024",
      lugar: "Finca El Roble Nevado",
      cantidad: "450 kg",
      imagen: "https://images.unsplash.com/photo-1621332606136-7e66f02dade1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG9lcyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYyNDM5MzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      colorEstado: "green"
    },
    {
      id: "LT-2024-002",
      cultivo: "Café Premium",
      estado: "En transporte",
      fechaSiembra: "20/09/2024",
      fechaCosecha: "21/12/2024",
      lugar: "Cafetal La Esperanza",
      cantidad: "800 kg",
      imagen: "https://images.unsplash.com/photo-1675306408031-a9aad9f23308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3NjIzODc5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      colorEstado: "blue"
    },
    {
      id: "LT-2024-003",
      cultivo: "Maíz Amarillo",
      estado: "En siembra",
      fechaSiembra: "25/10/2024",
      fechaCosecha: "25/10/2025",
      lugar: "Parcela Norte",
      cantidad: "1200 kg",
      imagen: "https://images.unsplash.com/photo-1700241739138-4ec27c548035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwaGFydmVzdHxlbnwxfHx8fDE3NjI0MTA5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      colorEstado: "yellow"
    },
    {
      id: "LT-2024-004",
      cultivo: "Trigo Integral",
      estado: "Distribuido",
      fechaSiembra: "05/09/2024",
      fechaCosecha: "05/11/2024",
      lugar: "Campo Sur",
      cantidad: "2000 kg",
      imagen: "https://images.unsplash.com/photo-1529511582893-2d7e684dd128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGZpZWxkfGVufDF8fHx8MTc2MjQ5MDM2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      colorEstado: "green"
    },
    {
      id: "LT-2024-005",
      cultivo: "Lechuga Romana",
      estado: "En transporte",
      fechaSiembra: "01/11/2024",
      fechaCosecha: "05/12/2024",
      lugar: "Invernadero Central",
      cantidad: "300 kg",
      imagen: "https://images.unsplash.com/photo-1595739431055-6c308d9f5af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0dWNlJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NjI0OTAzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      colorEstado: "blue"
    },
    {
      id: "LT-2024-006",
      cultivo: "Zanahorias",
      estado: "En siembra",
      fechaSiembra: "10/11/2024",
      fechaCosecha: "20/12/2024",
      lugar: "Finca Los Pinos",
      cantidad: "600 kg",
      imagen: "https://images.unsplash.com/photo-1595801128643-b0bcb0241aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJyb3RzJTIwaGFydmVzdHxlbnwxfHx8fDE3NjI0OTAzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      colorEstado: "yellow"
    }
  ];

  const lotesFiltrados = lotes.filter(
    (lote) =>
      lote.cultivo.toLowerCase().includes(filtro.toLowerCase()) ||
      lote.estado.toLowerCase().includes(filtro.toLowerCase()) ||
      lote.id.toLowerCase().includes(filtro.toLowerCase()),
  );

  const handleFiltrar = () => {
    setFiltro(search.trim());
  };

  const getEstadoBadge = (estado, color) => {
    const colorClasses = {
      green: "bg-green-100 text-green-800 hover:bg-green-100",
      blue: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      yellow: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
    };

    return (
      <Badge className={colorClasses[color]}>
        {estado}
      </Badge>
    );
  };
  
    return (
      <div className="flex-1 overflow-auto py-20 pb-4">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-semibold mb-2">Lotes</h1>
              <p className="text-muted-foreground">
                Monitorea todos los lotes agrícolas
              </p>
            </div>

            {/* Search & Filter */}
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
              <div className="px-6 [&:last-child]:pb-6 pt-6">
                <div className="flex gap-4 items-center">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar por estado o cultivo"
                      className="pl-10"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <Button className="text-white bg-green-600 hover:bg-green-700" onClick={handleFiltrar}>Filtrar</Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "En Siembra", value: 2 },
                { label: "En Transporte", value: 2 },
                { label: "Distribuidos", value: 2 },
              ].map((item) => (
                <div
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl"
                  key={item.label}
                >
                  <div className="px-6 [&:last-child]:pb-6 pt-6">
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm mb-1">
                        {item.label}
                      </p>
                      <p className="text-3xl">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lotes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lotesFiltrados.map((lote) => (
                <div
                  key={lote.id}
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-green-200 overflow-hidden hover:shadow-lg transition-shadow transition-transform duration-200 hover:border-green-600 cursor-pointer"
                >
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <BackgroundImage
                      src={lote.imagen}
                      alt={lote.cultivo}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="leading-none text-lg mb-2">
                          {lote.cultivo}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Lote: {lote.id}
                        </p>
                      </div>
                      {getEstadoBadge(lote.estado, lote.colorEstado)}
                    </div>
                  </div>

                  <div className="px-6 [&:last-child]:pb-6">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="size-4" />
                        <span>Siembra: {lote.fechaSiembra}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="size-4" />
                        <span>{lote.lugar}</span>
                      </div>
                      <div className="font-medium">
                        Cantidad: {lote.cantidad}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="outline" size="sm" className="w-20 transition-transform duration-200 hover:scale-105 hover:bg-green-500 cursor-pointer"
                              onClick={() => onVerLote(lote)}>
                        Ver
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
