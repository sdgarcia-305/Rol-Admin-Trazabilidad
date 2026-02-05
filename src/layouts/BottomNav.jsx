export default function BottomNav({ menuItems, currentView, setCurrentView, onLogout }) {

  if (!Array.isArray(menuItems)) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="grid grid-cols-8 gap-0">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === "cerrar-sesion") {
                  onLogout();
                } else {
                  setCurrentView(item.id);
                }
              }}
              className={`flex flex-col items-center justify-center py-2 px-1 transition-colors
                ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              <Icon className="size-5 sm:size-6" />
              <span className="text-[10px] sm:text-xs mt-1">{item.label}</span>

              <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-600" />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
