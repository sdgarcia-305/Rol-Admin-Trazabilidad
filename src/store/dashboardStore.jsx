import { create } from "zustand";
import api from "../services/api";

function formatFecha(fecha) {
  if (!fecha) return null;
  const d = new Date(fecha);
  return isNaN(d) ? null : d.toLocaleDateString();
}

export const useDashboardStore = create((set) => ({
  adminNombre: "Ariel",

  resumenCards: [],
  estadoLotes: [],
  produccionAnual: [],
  actividad: [],
  usuariosRecientes: [],
  lotesPorEtapa: [],

  cargarDashboard: async () => {
    try {
      const lotesRes = await api.get("/lotes");

      // ================= LOTES =================
      const lotes = lotesRes.data.data || [];
      console.log(lotes);
      const total = lotes.length || 1;
      const activos = lotes.filter((l) => l.estado === "activo").length;
      const inactivos = total - activos;

      const resumenCards = [
        {
          tipo: "registrados",
          title: "Lotes Totales",
          value: total,
          frase: "Lotes registrados en el sistema",
        },
        {
          tipo: "activos",
          title: "Lotes Activos",
          value: activos,
          frase: "Producción en curso",
        },
        {
          tipo: "inactivos",
          title: "Lotes Inactivos",
          value: inactivos,
          frase: "Finalizados o detenidos",
        },
      ];

      const estadoLotes = [
        {
          estado: "Activo",
          nombre: "Activos",
          lotes: activos,
          porcentaje: Math.round((activos / total) * 100),
          color: "bg-green-500",
        },
        {
          estado: "Inactivo",
          nombre: "Inactivos",
          lotes: inactivos,
          porcentaje: Math.round((inactivos / total) * 100),
          color: "bg-red-500",
        },
      ];

      // ================= PRODUCCIÓN =================
      const produccionMap = {};
      lotes.forEach((l) => {
        if (!["kilogramos", "toneladas"].includes(l.unidad_medida)) return;
        let cant = parseFloat(l.cantidad) || 0;
        if (l.unidad_medida === "kilogramos") cant /= 1000;

        const cultivo = l.producto?.producto || "Desconocido";
        produccionMap[cultivo] = (produccionMap[cultivo] || 0) + cant;
      });

      const colores = [
        "bg-green-500",
        "bg-blue-500",
        "bg-yellow-500",
        "bg-orange-500",
      ];
      const produccionAnual = Object.entries(produccionMap).map(
        ([cultivo, toneladas], i) => ({
          cultivo,
          toneladas: Number(toneladas.toFixed(2)),
          color: colores[i % colores.length],
        }),
      );

      // ================= ETAPAS =================
      const etapas = { siembra: 0, crecimiento: 0, tratamiento: 0, cosecha: 0 };
      lotes.forEach((l) => {
        if (l.fecha_cosecha) etapas.cosecha++;
        else if (l.tratamientos?.length) etapas.tratamiento++;
        else if (l.fecha_siembra) etapas.crecimiento++;
        else etapas.siembra++;
      });

      const lotesPorEtapa = Object.entries(etapas).map(([k, v]) => ({
        etapa: k.charAt(0).toUpperCase() + k.slice(1),
        lotes: v,
      }));

      // ================= ACTIVIDADES =================
      const actividadesLotes = lotes.slice(0, 4).map((l) => ({
        tipo: "producto",
        descripcion: `Lote de ${l.producto?.producto} registrado`,
        fecha: formatFecha(l.fecha_siembra),
        responsable:
          `${l.persona?.nombres ?? ""} ${l.persona.apellidos ?? ""}`.trim(),
        lote: `ID ${l.id}`,
      }));

      // ================= USUARIOS =================
      const firstRes = await api.get("/users?page=1");
      const lastPage = firstRes.data.last_page || 1;

      const lastRes = await api.get(`/users?page=${lastPage}`);
      let users = lastRes.data.data || [];

      if (users.length < 4 && lastPage > 1) {
        const prevRes = await api.get(`/users?page=${lastPage - 1}`);
        users = [...users, ...(prevRes.data.data || [])];
      }

      const usuariosRecientes = users
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

      const actividadesUsuarios = usuariosRecientes.slice(0, 2).map((u) => ({
        tipo: "rol",
        descripcion: "Nuevo usuario registrado",
        responsable: `${u.persona?.nombres ?? ""} ${u.persona?.apellidos ?? ""}`.trim(),
      }));

      set({
        resumenCards,
        estadoLotes,
        produccionAnual,
        lotesPorEtapa,
        usuariosRecientes,
        actividad: [...actividadesLotes, ...actividadesUsuarios],
      });
    } catch (e) {
      console.error("Error dashboard:", e);
    }
  },
}));
