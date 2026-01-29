import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { BackgroundImage } from "../../img/BackgroundImage";
import Logo from "../../assets/icon.webp";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault(); 

  setIsLoggedIn(true);
  navigate("/admin");
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1497092801449-b782257c9756"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white text-card-foreground flex flex-col gap-8 rounded-xl w-full max-w-md relative z-10 shadow-2xl">
        <div className="text-center px-6 pt-6">
          <div className="flex justify-center mb-4">
            <div className="bg-green-600 rounded-full p-4">
              <img src={Logo} className="size-12" />
            </div>
          </div>

          <h2 className="text-2xl pt-3">
            Sistema de Trazabilidad de Productos Agrícolas
          </h2>
          <p className="text-muted-foreground pt-2">
            Ingresa tus credenciales para acceder al sistema
          </p>
        </div>

        <form onSubmit={handleLogin} className="px-6 [&:last-child]:pb-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full text-white bg-green-600 hover:bg-green-700"
          >
            Iniciar sesión
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-green-600 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
