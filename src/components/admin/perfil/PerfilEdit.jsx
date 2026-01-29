import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FileInput } from "./FileInput";

export const PerfilEdit = ({
  handleSubmit,
  onSubmit,
  register,
  fields,
  setEdit,
  refreshPhoto,
  user
}) => {

  return (
    <main className="flex-1 overflow-auto py-20">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">

          {/* Header */}
          <div>
            <h1 className="text-3xl font-semibold mb-2">
              Editar perfil
            </h1>
            <p className="text-muted-foreground">
              Actualiza tu información personal y de contacto.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Card izquierda */}
              <div className="bg-white rounded-xl shadow-sm border border-zinc-500 dark:border-zinc-800 p-6 text-center">
                <img
                  src={`https://pavelbacktrazabilidad.qzz.io/api/v1/auth/foto-perfil/${user.id}?r=${refreshPhoto}`}
                  alt="Profile"
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border"
                />

                <div className="mb-4">
                  <FileInput register={register} />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-md font-medium text-muted-foreground mb-1">
                      Nombres
                    </label>
                    <input
                      type="text"
                      {...register("nombres")}
                      className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
                    />
                  </div>

                  <div>
                    <label className="block text-md font-medium text-muted-foreground mb-1">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      {...register("apellidos")}
                      className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
                    />
                  </div>
                </div>
              </div>

              {/* Card derecha */}
              <div className="lg:col-span-2 space-y-6">

                {/* Contacto */}
                <div className="bg-white rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Información de contacto
                  </h3>

                  <div className="space-y-4">

                    {fields.map((field, index) => (
                      <div
                        key={field.id}
                        className="flex items-center gap-3"
                      >
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="text-zinc-500"
                        />

                        <span className="text-xs text-muted-foreground">
                          {field.pais}
                        </span>

                        <input
                          type="text"
                          {...register(`telefonos.${index}.telefono`)}
                          className="flex-1 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
                        />
                      </div>
                    ))}

                    <div className="flex items-start gap-3">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="mt-3 text-red-500"
                      />
                      <textarea
                        rows="2"
                        {...register("direccion")}
                        className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-zinc-400"
                      />
                    </div>

                    {/* Acciones */}
                    <div className="flex justify-end gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() =>{ setEdit(false); console.log('edit',user)}}
                        className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-300 transition"
                      >
                        Cancelar
                      </button>

                      <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-green-600 text-white hover:opacity-90 transition"
                      >
                        Guardar cambios
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
 