import { useState } from "react";
import { Home, Package, Users, BarChart, Activity, Settings, Van, Store, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardAdmin from "../../components/admin/dashboard/DashboardAdmin";
import Lotes from "./Lotes";
import DetalleLote from "./DetalleLote";
import Actividad from "./Actividad";
import Configuracion from "../../pages/admin/Configuracion";
import Rutas from "./Rutas";
import Usuarios from "../../pages/admin/Usuarios";
import Perfil from "../../components/admin/perfil/Perfil";
import AgregarUsuario from "./AgregarUsuario";

export default function Dashboard() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedLote, setSelectedLote] = useState(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();

    navigate("/login", { replace: true });
  };

  const menuItems = [
    { id: "dashboard", label: "Inicio", icon: Home },
    { id: "lotes", label: "Lotes", icon: Package },
    { id: "usuarios", label: "Usuarios", icon: Users },
    { id: "rutas", label: "Rutas", icon: Van },
    { id: "actividad", label: "Actividad", icon: Activity },
    { id: "establecimientos", label: "Puntos de Venta", icon: Store },
    { id: "ajustes", label: "Ajustes", icon: Settings },
    { id: "cerrar-sesion", label: "Cerrar sesión", icon: LogOut },
  ];

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardAdmin 
          setCurrentView={setCurrentView} />;
      case "usuarios": 
        return <Usuarios onNuevoUsuario={() => 
          setCurrentView("agregar-usuario")}
          setCurrentView={setCurrentView}/>;
      case "perfil":
        return <Perfil setCurrentView={setCurrentView} />
      case "agregar-usuario":
        return <AgregarUsuario />
      case "lotes":
        return <Lotes onVerLote={(lote) => {
          setSelectedLote(lote);
          setCurrentView("detalle-lote"); }}/>; 
      case "detalle-lote":
        return <DetalleLote lote={selectedLote}
          onRegresar={() => setCurrentView("lotes")} />;
      case "rutas":
        return <Rutas />;
      case "actividad":
        return <Actividad />;
      case "ajustes":
        return <Configuracion />;
      default:
        return <DashboardAdmin etCurrentView={setCurrentView} />;
    }
  };

  return (
  <DashboardLayout
      menuItems={menuItems}
      currentView={currentView}
      setCurrentView={setCurrentView}
      onLogout={handleLogout}
    >
      {renderView()}
      
    </DashboardLayout>
  );
}
