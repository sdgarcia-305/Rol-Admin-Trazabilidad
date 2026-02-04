import { Button } from "../../components/ui/button";
import { User, Shield, LogOut, Camera, } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    
    const handleLogout = () => { navigate("/login");};

    return (
        <Button
            variant="destructive"
            onClick={handleLogout}
        >
        <LogOut />
            Cerrar sesión
        </Button>
    );
}