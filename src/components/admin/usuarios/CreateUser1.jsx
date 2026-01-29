import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import img from "../../../assets/form1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

export const CreateUser1 = ({
  register,
  // errors,
  next,
  watch,
}) => {
  const verificarPaso = () => {
    if (
      watch("nombres") &&
      watch("apellidos") &&
      watch("direccion") &&
      watch("DUI")
    ) {
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
      <div className="w-full flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow">
        <div className="p-6 space-y-4 sm:p-8 bg-white text-white w-full">
          <form className="space-y-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Paso 1: Informacion Personal
            </h1>
            <div>
              <label
                htmlFor="nombres"
                className="block mb-2 text-sm font-medium text-black"
              >
                Nombres
              </label>
              <input
                type="text"
                name="nombres"
                className="w-full p-2.5 rounded-lg border border-slate-600 text-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                {...register("nombres", {
                  required: {
                    value: true,
                    message: "el campo es obligatorio",
                  },
                })}
              />
            </div>
            <div>
              <label
                htmlFor="Apellidos"
                className="block mb-2 text-sm font-medium text-black"
              >
                Apellidos
              </label>
              <input
                type="text"
                name="Apellidos"
                className="w-full p-2.5 rounded-lg border border-slate-600 text-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                {...register("apellidos", {
                  required: {
                    value: true,
                    message: "el campo es obligatorio",
                  },
                })}
              />
            </div>
            <div>
              <label
                htmlFor="DUI"
                className="block mb-2 text-sm font-medium text-black"
              >
                DUI
              </label>
              <input
                type="text"
                name="DUI"
                className="w-full p-2.5 rounded-lg border border-slate-600 text-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                {...register("DUI", {
                  required: {
                    value: true,
                    message: "el campo es obligatorio",
                  },
                })}
              />
            </div>
            <div>
              <label
                htmlFor="direccion"
                className="block mb-2 text-sm font-medium text-black"
              >
                Direccion
              </label>
              <input
                type="text"
                name="direccion"
                className="w-full p-2.5 rounded-lg border border-slate-600 text-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                {...register("direccion", {
                  required: {
                    value: true,
                    message: "el campo es obligatorio",
                  },
                })}
              />
            </div>

            <button
              type="button"
              onClick={() => verificarPaso()}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-5 py-2.5 transition active:scale-95"
            >
              Siguiente paso
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </form>
        </div>
        <div className="bg-emerald-200 hidden md:flex md:w-1/2 p-4 items-center justify-center">
          <img src={img} alt="" className="opacity-90 max-w-full h-auto" />
        </div>
      </div>
    </>
  );
};
