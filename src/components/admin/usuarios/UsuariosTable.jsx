import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Edit, Trash2, Shield, ShieldOff, UserCheck, UserX,} from "lucide-react";
import { useProfileStore } from "../../../store/useProfileStore";

export default function UsuariosTable({ data, setCurrentView, onDelete, onToggleEstado, onChangeRol, }) {
  const fetchUser = useProfileStore((state) => state.fetchUser);
  if (!data || data.length === 0) {
    return (
      <div className="bg-card text-card-foreground rounded-xl p-6">
        <p className="text-sm text-gray-400">No hay usuarios recientes</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-card border rounded-xl shadow">
      {/* ===================== */}
      {/* TABLA (Desktop / Tablet) */}
      {/* ===================== */}
      <table className="w-full border-collapse text-sm hidden md:table">
        <thead className="bg-muted">
          <tr>
            <th className="px-4 py-3 text-left">Nombre</th>
            <th className="px-4 py-3 text-left">Correo</th>
            <th className="px-4 py-3 text-left">Rol</th>
            <th className="px-4 py-3 text-left">Estado</th>
            <th className="px-4 py-3 text-center">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {data.map((u) => (
            <tr key={u.id} className="border-t hover:bg-muted/50">
              <td className="px-4 py-3 font-medium">{u.nombre}</td>
              <td className="px-4 py-3 text-muted-foreground">{u.email}</td>

              <td className="px-4 py-3">
                <Badge variant="outline">{u.rol}</Badge>
              </td>

              <td className="px-4 py-3">
                <Badge
                  className={
                    u.estado === "activo"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }
                >
                  {u.estado}
                </Badge>
              </td>

              <td className="px-4 py-3">
                <div className="flex justify-center gap-2">
                  {/* Editar */}
                  <Button
                    size="icon"
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={async() =>{ 
                      await fetchUser(u.id);
                      setCurrentView("perfil");
                    }}
                    title="Editar"
                  >
                    <Edit className="size-4" />
                  </Button>

                  {/* Cambiar Rol */}
                  <Button
                    size="icon"
                    className="bg-orange-400 hover:bg-orange-500 text-white"
                    onClick={() => onChangeRol(u.id)}
                    title={`Cambiar rol (actual: ${u.rol})`}
                  >
                    {u.rol === "Administrador" ? (
                      <Shield className="size-4" />
                    ) : (
                      <ShieldOff className="size-4" />
                    )}
                  </Button>

                  {/* Activar / Desactivar */}
                  <Button
                    size="icon"
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => onToggleEstado(u.id)}
                    title="Activar / Desactivar"
                  >
                    {u.estado === "activo" ? (
                      <UserCheck className="size-4" />
                    ) : (
                      <UserX className="size-4" />
                    )}
                  </Button>

                  {/* Eliminar */}
                  <Button
                    size="icon"
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => onDelete(u.id)}
                    title="Eliminar"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ===================== */}
      {/* CARDS (Móvil) */}
      {/* ===================== */}
      <div className="md:hidden divide-y">
        {data.map((u) => (
          <div key={u.id} className="p-4 space-y-3 text-center flex flex-col items-center">
            <div className="text-center">
              <p className="font-medium">{u.nombre}</p>
              <p className="text-sm text-muted-foreground">{u.email}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">{u.rol}</Badge>

              <Badge
                className={
                  u.estado === "activo"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }
              >
                {u.estado}
              </Badge>
            </div>

            <div className="flex justify-center gap-2 pt-2">
              <Button
                size="icon"
                className="h-8 w-8 bg-blue-500 text-white"
                onClick={async() =>{ 
                  await fetchUser(u.id);
                          setCurrentView("perfil");
                }}
              >
                <Edit className="size-4" />
              </Button>

              <Button
                size="icon"
                className="h-8 w-8 bg-orange-400 text-white"
                onClick={() => onChangeRol(u.id)}
              >
                {u.rol === "Administrador" ? (
                  <Shield className="size-4" />
                ) : (
                  <ShieldOff className="size-4" />
                )}
              </Button>

              <Button
                size="icon"
                className="h-8 w-8 bg-green-600 text-white"
                onClick={() => onToggleEstado(u.id)}
              >
                {u.estado === "activo" ? (
                  <UserCheck className="size-4" />
                ) : (
                  <UserX className="size-4" />
                )}
              </Button>

              <Button
                size="icon"
                className="h-8 w-8 bg-red-600 text-white"
                onClick={() => onDelete(u.id)}
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {data.length === 0 && (
        <div className="text-center py-6 text-muted-foreground">
          No hay usuarios registrados
        </div>
      )}
    </div>
  );
}
