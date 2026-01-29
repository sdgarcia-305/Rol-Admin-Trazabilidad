import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export const PerfilVista = ({ user, refreshPhoto, setEdit }) => {


  return (
    <main className="flex-1 overflow-auto py-20">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-semibold mb-2">
              Perfil de Usuario
            </h1>
            <p className="text-muted-foreground">
              Información personal, roles y datos de contacto.
            </p>
          </div>

          {/* Card principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Perfil */}
            <div className="bg-slate-700 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 text-center">
              <img
                src={`https://pavelbacktrazabilidad.qzz.io/api/v1/auth/foto-perfil/${user.id}?r=${refreshPhoto}`}
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border"
              />

              <h2 className="text-xl text-white font-semibold">
                {user.persona.nombres} {user.persona.apellidos}
              </h2>

              <p className="text-sm text-white text-muted-foreground mt-1">
                DUI: {user.persona.DUI}
              </p>

              <button
                type="button"
                onClick={() => setEdit(true)}
                className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
              >
                Editar perfil
              </button>
            </div>

            {/* Info detallada */}
            <div className="lg:col-span-2 space-y-6">

              {/* Roles */}
              <div className="bg-white rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Roles y permisos
                </h3>

                <div className="flex flex-wrap gap-2">
                  {user.permisos.map((i, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm bg-zinc-500 dark:bg-slate-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {i.permiso}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contacto */}
              <div className="bg-white rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Información de contacto
                </h3>

                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>john.doe@example.com</span>
                  </li>

                  {user.persona.telefonos?.map((i, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faPhone} />
                      <span>{i.pais}{i.telefono}</span>
                    </li>
                  ))}

                  <li className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{user.persona.direccion}</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
 