import { useEffect, useState } from "react";
import { CreateUser1 } from "../../components/admin/usuarios/CreateUser1";
import { CreateUser2 } from "../../components/admin/usuarios/CreateUser2";
import { CreateUser3 } from "../../components/admin/usuarios/CreateUser3";
import { useForm } from "react-hook-form";
import api from "../../services/api"; 

export default function AgregarUsuario() {
  const [currentView, setCurrentView] = useState(null);
  const [step, setStep] = useState(1);
  const [permisos, setPermisos] = useState([]);

const {
        register,
        watch,
        control,
        formState: { errors },
        handleSubmit
    } = useForm({
        defaultValues: {
            telefonos: ['']
        }
    });
    useEffect(() => {
        const getPermisos = async () => {
            const res = await api.get('/permisos/all')
            let data = res.data['data'];
            setPermisos(data);
        }
        getPermisos()

    }, []);

    const submit = handleSubmit(async (data) => {
        const res = await api.post('/users', data);
        console.log(res);
    })

  return (
    <div className="flex-1 overflow-auto py-20 pb-4">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold mb-2">Registro de Nuevo Usuario</h1>
              <p className="text-muted-foreground">
                Completa la información para crear un nuevo usuario en el sistema
              </p>
            </div>
          </div>

          {/* CONTENEDOR FORM */}
          <div className="bg-slate-900 rounded-xl shadow-sm p-4 sm:p-6">
            {step === 1 && (
              <CreateUser1
                register={register}
                errors={errors}
                watch={watch}
                next={() => setStep(2)}
              />
            )}

            {step === 2 && (
              <CreateUser2
                register={register}
                errors={errors}
                watch={watch}
                control={control}
                next={() => setStep(3)}
                prev={() => setStep(1)}
              />
            )}

            {step === 3 && (
              <CreateUser3
                register={register}
                errors={errors}
                permisos={permisos}
                submit={submit}
                prev={() => setStep(2)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
