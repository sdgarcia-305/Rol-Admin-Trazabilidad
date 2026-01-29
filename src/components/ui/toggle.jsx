import React from "react";

function Toggle({ label, desc }) {
  return (
    <div className="flex justify-between items-center py-3">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      <input type="checkbox" className="accent-green-600 w-5 h-5" />
    </div>
  );
}

export { Toggle };