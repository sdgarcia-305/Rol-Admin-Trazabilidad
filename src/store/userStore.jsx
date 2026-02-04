import { create } from "zustand";
import api from "../services/api";

const roles = ["Administrador", "Agricultor", "Transportista"]; 

const useUsuariosStore = create((set, get) => ({
  usuarios: [],
  loading: false,
  error: null,

  /* ===================== */
  /* OBTENER USUARIOS */
  /* ===================== */
  fetchUsuarios: async () => {
  try {
    set({ loading: true, error: null });

    const firstRes = await api.get("/users?page=1");

    const meta = firstRes.data;
    const lastPage = meta.last_page || 1;

    let allUsers = [...(meta.data || [])];

    for (let page = 2; page <= lastPage; page++) {
      const res = await api.get(`/users?page=${page}`);
      allUsers = [...allUsers, ...(res.data.data || [])];
    }

    const usuarios = allUsers.map((u) => ({
      id: u.id,
      nombre: `${u.persona?.nombres ?? ""} ${u.persona?.apellidos ?? ""}`.trim(),
      email: u.email,
      rol: u.role ?? "Agricultor",
      estado: u.active ? "activo" : "inactivo",
    }));

    set({ usuarios, loading: false });
  } catch (error) {
    console.error(error);
    set({
      error: "Error al cargar usuarios",
      loading: false,
    });
  }
}, 

  /* ===================== */
  /* ELIMINAR USUARIO */
  /* ===================== */
  deleteUsuario: async (id) => {
    try {
      await api.delete(`/users/${id}`);
      set((state) => ({
        usuarios: state.usuarios.filter((u) => u.id !== id),
      }));
    } catch (error) {
      console.error(error);
    }
  },

  /* ===================== */
  /* CAMBIAR ESTADO */
  /* ===================== */
  toggleEstado: async (id) => {
    try {
      const user = get().usuarios.find((u) => u.id === id);

      if (!user) return;

      await api.patch(`/users/${id}/toggle-status`);

      set((state) => ({
        usuarios: state.usuarios.map((u) =>
          u.id === id
            ? {
                ...u,
                estado: u.estado === "activo" ? "inactivo" : "activo",
              }
            : u,
        ),
      }));
    } catch (error) {
      console.error("Error al cambiar estado:", error);
    }
  },

  /* ===================== */
  /* CAMBIAR ROL */
  /* ===================== */
  changeRol: async (id) => {
    set((state) => {
      const user = state.usuarios.find((u) => u.id === id);
      const index = roles.indexOf(user.rol);
      const nuevoRol = roles[(index + 1) % roles.length];

      api.put(`/users/${id}/role`, { role: nuevoRol });

      return {
        usuarios: state.usuarios.map((u) =>
          u.id === id ? { ...u, rol: nuevoRol } : u,
        ),
      };
    });
  },
}));

export default useUsuariosStore;
