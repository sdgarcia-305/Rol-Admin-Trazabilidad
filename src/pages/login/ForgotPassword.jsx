import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { BackgroundImage } from "../../img/BackgroundImage";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSendCode = (e) => {
    e.preventDefault();
    navigate("/verify-code");
  };

  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <BackgroundImage
                    src="https://images.unsplash.com/photo-1497092801449-b782257c9756"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="bg-white border border-4 border-slate-700 border-solid text-card-foreground flex flex-col gap-8 rounded-xl w-full max-w-md relative z-10 shadow-2xl">
                <form onSubmit={handleSendCode} className="px-6 [&:last-child]:pb-6 space-y-5">
                    <h2 className="text-xl pt-4 font-semibold text-center">
                        Recuperar contraseña
                    </h2>

                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input id="email" type="email" placeholder="ejemplo@correo.com" className="border" />
                    </div>

                    <Button className="w-full text-white bg-green-600">Enviar código</Button>
                </form>
            </div>
        </div>
    </>
  );
}
