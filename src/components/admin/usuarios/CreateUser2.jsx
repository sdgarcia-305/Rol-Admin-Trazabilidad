import { useFieldArray } from "react-hook-form";
import img from "../../../assets/form2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export const CreateUser2 = ({
  register,
  // errors,
  next,
  prev,
  watch,
  control,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "telefonos",
  });

  const verificarPaso = () => {
    if (watch("email") && watch("telefonos")) {
      next();
    } else {
      Swal.fire({
        icon: "error",
        title: "Rellena todos los campos",
      });
    }
  };
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-stretch bg-white rounde-lg shadow">
        <div className="p-6 space-y-4 sm:p-8 w-full">
          <form className="space-y-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Paso 2: Informacion de Contacto
            </h1>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2.5 rounded-lg border border-slate-600 text-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                {...register("email", {
                  required: {
                    value: true,
                    message: "el campo es obligatorio",
                  },
                })}
              />
            </div>
            <div>
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2">
                  <input
                    className="w-full p-2.5 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    type="tel"
                    {...register(`telefonos.${index}`, {
                      required: "El teléfono es obligatorio",
                      className: "border w-[80%] p-2.5 rounded-lg"
                    })}
                    
                  />

                  {fields.length > 1 && (
                    <button type="button" onClick={() => remove(index)}>
                      🗑
                    </button>
                  )}
                </div>
              ))}
              <button type="button" className="text-green-700 text-sm hover:underline" onClick={() => append("")}>
                + Agregar teléfono
              </button>
            </div>
            <div className="w-full flex gap-6 flex-col lg:flex-row-reverse">
              <button
                onClick={() => verificarPaso()}
                type="button"
                className="w-full bg-green-600 font-semibold hover:bg-green-700 text-white rounded-lg px-5 py-2.5 transition active:scale-95"
              >
                Siguiente paso <FontAwesomeIcon icon={faAnglesRight} /> 
              </button>
              <button
                onClick={prev}
                type="button"
                className="w-full bg-slate-700 font-semibold hover:bg-slate-600 text-white rounded-lg px-5 py-2.5 transition active:scale-95"
              >
                {" "}
                <FontAwesomeIcon icon={faAnglesLeft} /> Paso anterior
              </button>
            </div>
          </form>
        </div>
        <div className="bg-emerald-200 hidden md:flex md:w-1/2 p-4 items-center justify-center">
          <img src={img} alt="" className="max-w-full h-auto" />
        </div>
      </div>
    </>
  );
};
