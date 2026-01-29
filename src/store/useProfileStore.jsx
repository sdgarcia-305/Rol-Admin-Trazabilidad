import { create } from "zustand";
import api from "../services/api";

export const useProfileStore = create((set) => ({
    user: {
        id: 1,
        email: "juan.perez@example.com",
        permisos: [
            { permiso: "dashboard.ver" },
            { permiso: "lotes.listar" },
            { permiso: "usuarios.editar" }
        ],
        persona: {
            nombres: "Juan Carlos",
            apellidos: "Pérez López",
            DUI: "01234567-8",
            direccion: "Colonia Escalón, San Salvador, El Salvador",
            telefonos: [
                {
                    pais: "+503",
                    telefono: "71234567"
                },
                {
                    pais: "+503",
                    telefono: "79876543"
                }
            ]
        },
        updated_at: "2026-01-21T18:45:30.000000Z"

    }
    , loading: false,
    refreshPhoto: 0,
    fetchUser: async (id) => {
        set({ loading: true });
        const { data } = await api.get(`/users/${id}`);

        set({
            user: {
                id: data.id,
                email: data.email,
                permisos: data.permisos ?? [],
                persona: {
                    nombres: data.persona.nombres,
                    apellidos: data.persona.apellidos,
                    DUI: data.persona.DUI,
                    direccion: data.persona.direccion,
                    telefonos: data.persona.telefono_persona ?? [],
                },
                updated_at: data.updated_at,
            },
            loading: false
        });
    },

    updateUser: async (id, payload) => {
        delete payload.email;
        delete payload.DUI;

        console.log(payload)
        await api.patch(`/users/${id}`, payload);
    },
    updatePhoto: async (file) => {

        const formData = new FormData();
        formData.append('foto', file);
        set({
            refreshPhoto: Date.now()
        })
        const res = await api.post(`/auth/foto-perfil`, formData);
        console.log(res);
    }
}));
