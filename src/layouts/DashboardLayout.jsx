import BottomNav from "./BottomNav";
import HeaderAdmin from "./HeaderAdmin";

export default function DashboardLayout({ children, menuItems, currentView, setCurrentView, }) {
  const handleMenuClick = (item) => {
  if (item.id === "cerrar-sesion") {
    handleLogout();
  } else {
    setCurrentView(item.id);
  }
};
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <HeaderAdmin />

      {/* Main content */}
      <main className="flex-1 overflow-auto pb-8">
        {children}
      </main>

      {/* Bottom navigation */}
      <BottomNav 
        menuItems={menuItems}
        currentView={currentView}
        setCurrentView={setCurrentView}
        onClick={() =>
          item.id === "cerrar-sesion"
            ? onLogout()
            : setCurrentView(item.id)
        }
      />
    </div>
  );
}
