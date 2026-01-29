import { useEffect, useState } from "react";
import { useDashboardStore } from "../../../store/dashboardStore";

import StatCard from "./StatCard";
import EstadoLotes from "./EstadoLotes";
import ProduccionAnual from "./ProduccionAnual";
import ActividadReciente from "./ActividadReciente";
import LotesPorEtapa from "./LotesEtapa";
import UsuariosRecientes from "./UsuariosRecientes";

export default function DashboardAdmin({ setCurrentView }) {

  const {
    adminNombre,
    resumenCards,
    estadoLotes,
    produccionAnual,
    actividad,
    usuariosRecientes,
    lotesPorEtapa,
    cargarDashboard,
  } = useDashboardStore();

  useEffect(() => {
    cargarDashboard();
  }, []);

  return (
    <main className="flex-1 overflow-auto py-20">  
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold mb-2">
              Bienvenido, {adminNombre}
            </h1>
            <p className="text-muted-foreground">
              Resumen general del sistema de trazabilidad agrícola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumenCards.map((card, i) => (
              <StatCard key={i} {...card} />
            ))}
          </div>

          <EstadoLotes data={estadoLotes} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ProduccionAnual data={produccionAnual} />
            </div>

            <UsuariosRecientes data={usuariosRecientes} setCurrentView={setCurrentView} />

            <div className="lg:col-span-2">
              <LotesPorEtapa data={lotesPorEtapa} />
            </div>

            <ActividadReciente data={actividad} />
          </div>
        </div>
      </div>
    </main>
  );
}
