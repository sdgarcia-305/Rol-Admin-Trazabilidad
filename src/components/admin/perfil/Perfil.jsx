import { useEffect, useState } from "react";
import { useProfileStore } from "../../../store/useProfileStore";
import { useForm, useFieldArray } from "react-hook-form";
import { PerfilVista } from "./PerfilVista";
import { PerfilEdit } from "./PerfilEdit";

export default function Perfil() {
  const user = useProfileStore((s) => s.user);
  const updatePhoto = useProfileStore((s) => s.updatePhoto);
  const updateUser = useProfileStore((s) => s.updateUser);
  const refreshPhoto = useProfileStore((s) => s.refreshPhoto);
  console.log(user)
  const [edit, setEdit] = useState(false);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      nombres: user.persona.nombres,
      apellidos: user.persona.apellidos,
      DUI: user.persona.DUI,
      email: user.email,
      direccion: user.persona.direccion,
      telefonos: user.persona.telefonos,
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "telefonos",
  });

  const onSubmit = async (data) => {
    if (data.foto?.[0]) {
      updatePhoto(data.foto[0]);
    }

    await updateUser(user.id, data);
    setEdit(false);
  };

  return (
      <div className="flex-1 overflow-auto">
        {!edit ? (
          <PerfilVista
            user={user}
            setEdit={setEdit}
            refreshPhoto={refreshPhoto}
          />
        ) : (
          <PerfilEdit
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            fields={fields}
            setEdit={setEdit}
            refreshPhoto={refreshPhoto}
            user={user}
          />
        )}
      </div>
  );
};
 