import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { User, Shield, LogOut, Camera, } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Configuracion() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="flex-1 overflow-auto py-20 pb-4">
      <div className="p-4 sm:p-6 lg:p-8">
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold mb-2">Configuración</h1>
        <p className="text-muted-foreground">
          Administra tu Perfil
        </p>
      </div>

      <div className="max-w-3xl space-y-6">
        {/* ===================== */}
        {/* PERFIL DEL ADMIN */}
        {/* ===================== */}
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
          <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div className="leading-none flex items-center gap-2">
              <User className="size-5 text-green-600" />
              Información Personal
            </div>
            <div className="text-muted-foreground">
              Actualiza tus datos personales y foto de perfil
            </div>
          </div>

          <div className="px-6 [&:last-child]:pb-6 space-y-6">
            {/* Foto de perfil */}
            <div className="flex items-center gap-6">

              <Button variant="outline" size="sm" className="flex gap-2 transition-transform duration-200 hover:scale-105 cursor-pointer">
                <Camera className="size-4" />Cambiar foto
              </Button>
            </div>

            {/* Datos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input id="nombre" defaultValue="Administrador Principal" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="admin@trazabilidad.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono</Label>
                <Input id="telefono" defaultValue="+503 7000-0000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="direccion">Dirección</Label>
                <Input
                  id="direccion"
                  defaultValue="San Salvador, El Salvador"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Guardar cambios
              </Button>
              <Button className="hover:bg-zinc-400 transition" variant="outline">Cancelar</Button>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* SEGURIDAD */}
        {/* ===================== */}
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
          <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div className="leading-none flex items-center gap-2">
              <Shield className="size-5 text-green-600" />
              Seguridad
            </div>
            <div className="text-muted-foreground">
              Opciones de seguridad de tu cuenta
            </div>
          </div>

          <div className="px-6 [&:last-child]:pb-6 space-y-4">
            <p className="text-muted-foreground font-semibold">
              Para cambiar tu contraseña, utiliza la pantalla dedicada de
              restablecimiento.
            </p>

            <Button
              className="bg-green-600 text-white hover:bg-green-700"
              variant="outline"
              onClick={() => navigate("/reset-password")}
            >
              Cambiar contraseña
            </Button>
          </div>
        </div>

        {/* ===================== */}
        {/* CERRAR SESIÓN */}
        {/* ===================== */}
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-red-200">
          <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div className="leading-none flex items-center gap-2 text-red-600">
              <LogOut className="size-5" />
              Cerrar sesión
            </div>
            <div className="text-muted-foreground">
              Finaliza tu sesión actual de forma segura
            </div>
          </div>

          <div className="px-6 [&:last-child]:pb-6">
            <Button
              variant="destructive"
              className="w-50 flex gap-2 text-white bg-red-500"
              onClick={handleLogout}
            >
              <LogOut className="size-4" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  );
}
