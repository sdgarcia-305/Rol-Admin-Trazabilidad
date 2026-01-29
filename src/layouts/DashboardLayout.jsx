import BottomNav from "./BottomNav";
import HeaderAdmin from "./HeaderAdmin";

export default function DashboardLayout({ children, menuItems, currentView, setCurrentView, }) {
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
      />
    </div>
  );
}
