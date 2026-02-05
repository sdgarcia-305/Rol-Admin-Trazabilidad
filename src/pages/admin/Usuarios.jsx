import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import UsuariosTable from "../../components/admin/usuarios/UsuariosTable";
import { Search } from "lucide-react";
import useUsuariosStore from "../../store/userStore";

export default function Usuarios({ onNuevoUsuario, setCurrentView }) {
  const [search, setSearch] = useState("");
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
  const normalizarTexto = (texto) => texto
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const {
    usuarios,
    loading,
    error,
    fetchUsuarios,
    deleteUsuario,
    toggleEstado,
    changeRol,
  } = useUsuariosStore(); 

  useEffect(() => {
    fetchUsuarios();
  }, []);

  useEffect(() => {
    setUsuariosFiltrados(usuarios);
  }, [usuarios]);

  const handleFiltrar = () => {
  const filtroNormalizado = normalizarTexto(search.trim());

  if (!filtroNormalizado) {
    setUsuariosFiltrados(usuarios);
    return;
  }

  const resultado = usuarios.filter((u) =>
    normalizarTexto(u.nombre).includes(filtroNormalizado) ||
    normalizarTexto(u.email).includes(filtroNormalizado)
  );

  setUsuariosFiltrados(resultado);
};


  return (
    <div className="flex-1 overflow-auto py-20 pb-10">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold mb-2">Usuarios</h1>
              <p className="text-muted-foreground">
                Administración de los usuarios del sistema
              </p>
            </div>

            <Button
              className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto"
              onClick={onNuevoUsuario}
            >
              Nuevo usuario
            </Button>
          </div>

          {/* Search & Filter */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
            <div className="px-6 [&:last-child]:pb-6 pt-6">
              <div className="flex gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por nombre o correo"
                    className="pl-10"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <Button
                  className="text-white bg-green-600 hover:bg-green-700"
                  onClick={handleFiltrar}
                >
                  Filtrar
                </Button>
              </div>
            </div>
          </div>

          {/* Tabla */}
          {loading && (
            <p className="text-center text-muted-foreground">
              Cargando usuarios...
            </p>
          )}

          {error && (
            <p className="text-center text-red-500">Error al cargar usuarios</p>
          )}

          {!loading && (
            <UsuariosTable
              data={usuariosFiltrados}
              setCurrentView={setCurrentView}
              onDelete={deleteUsuario}
              onToggleEstado={toggleEstado}
              onChangeRol={changeRol}
            />
          )}
        </div>
      </div>
    </div>
  );
}
