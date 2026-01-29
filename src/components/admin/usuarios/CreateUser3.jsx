// import { useState } from 'react';
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import img from "../../../assets/form3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CreateUser3 = ({ register, errors, prev, submit, permisos }) => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-stretch bg-white rounde-lg shadow">
        <div className="p-6 space-y-4 sm:p-8 w-full">
          <form className="space-y-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">Paso 3: Informacion y permisos del usuario</h1>
            <div>
              <label
                htmlFor="permisos"
                className="block mb-3 text-sm font-medium text-black"
              >
                Permisos
              </label>

              <select
                name="permisos"
                className="w-full rounded-lg px-4 py-2 text-black border border-slate-600 focus:ring-2 focus:ring-green-500"
                id=""
                {...register("permisos")}
              >
                {permisos.map((i) => (
                  <option className="text-black" value={i["id"]} key={i["id"]}>
                    {i.permisos}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={prev}
              type="button"
              className="w-full font-semibold hover:scale-102 active:scale-95 transition duration-200 text-white bg-slate-700 hover:bg-slate-600 focus:ring-4 afocus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {" "}
              <FontAwesomeIcon icon={faAnglesLeft} /> Paso anterior
            </button>
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg p-3 transition active:scale-95"
              type="button"
              onClick={submit}
            >
              {" "}
              Crear usuario
            </button>
          </form>
        </div>
        <div className="bg-emerald-200 hidden md:flex md:w-1/2 p-4 items-center justify-center">
          <img src={img} alt="" className=" max-w-full h-auto" />
        </div>
      </div>
    </>
  );

  // const [paso, setPaso]= useState(false);
};
