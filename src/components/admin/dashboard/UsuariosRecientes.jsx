import { User } from "lucide-react";
import { useProfileStore } from "../../../store/useProfileStore";

export default function UsuariosRecientes({ data, setCurrentView }) {
  const fetchUser = useProfileStore((state) => state.fetchUser);
   if (!data || data.length === 0) {
    return (
      <div className="bg-card text-card-foreground rounded-xl p-6">
        <p className="text-sm text-gray-400">
          No hay usuarios recientes
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
      {/* Header */}
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
        <h2 className="flex items-center font-semibold gap-2 leading-none">
          Usuarios Recientes
        </h2>
        <p className="text-muted-foreground">
          Últimos usuarios registrados en el sistema
        </p>
      </div>

      {/* Listado */}
        <div className="px-6 pb-6"> 
            <div className="space-y-4">
                {data.map((user) => (
                  <button
                        key={user.id}
                        onClick={async() =>{ 
                          await fetchUser(user.id);
                          setCurrentView("perfil");
                        }}
                        className="flex items-center gap-4 w-full p-3 rounded-2xl hover:bg-muted transition text-left transition-transform duration-200 hover:scale-105 cursor-pointer"
                    >
                        {/* Icono */}
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="text-blue-600" size={20} />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-800">{user.persona?.nombres} {user.persona?.apellidos}</p>
                        <p className="text-sm text-gray-500">Correo: {user.email}</p>
                        </div>
                  </button>
                ))}
            </div>
        </div>
    </div>
  );
}
