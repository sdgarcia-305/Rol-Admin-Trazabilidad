import { PackageCheck, PackagePlus, PackageX } from "lucide-react"; 

const configPorTipo = {
  registrados: { icon: PackagePlus, bg: "bg-green-100", color: "text-green-600" },
  activos: { icon: PackageCheck, bg: "bg-blue-100", color: "text-blue-600" },
  inactivos: { icon: PackageX, bg: "bg-red-100", color: "text-red-600" },
};

export default function StatCard({ tipo, title, value, frase }) {
  const config = configPorTipo[tipo];
  const Icon = config.icon;

  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
      <div className="px-6 [&:last-child]:pb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{title}</p>
            <p className="text-3xl">{value}</p>
            <p className="text-sm text-gray-400">{frase}</p>
          </div>

          <div className={`rounded-full p-3 ${config.bg}`}>
            <Icon className={config.color} size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
