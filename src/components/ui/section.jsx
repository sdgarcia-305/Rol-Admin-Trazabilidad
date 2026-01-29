import React from "react";

function Section({ title, subtitle, icon: Icon, children }) {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
        <div className="flex items-center gap-2 leading-none">
          {Icon && (
            <span className="size-5 text-green-600">
              <Icon />
            </span>
          )}
          <h2 className="font-semibold text-lg">{title}</h2>
        </div>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export { Section };