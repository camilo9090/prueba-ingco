import { useState } from "react";
import { usersStore } from "../store";
import { useNavigate } from "react-router-dom";
import Header from "./Header";




export default function CreateUser() {

  const navigate = useNavigate()
  const createUser = usersStore((state) => state.createUser);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita recargar la página

    try {
      await createUser(formData); // Llamamos a la función de Zustand
      setFormData({ firstName: "", lastName: "", email: "" }); // Limpiar formulario
      navigate('/')
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };
  return (

    <div >
      <Header/>
      <div className="flex flex-col max-w-5xl mx-auto gap-4 mt-5">
        <h2 className="font-extrabold text-3xl">Crear Nuevo <span className="text-blue-700">Usuario</span></h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 shadow-md"
          action="">
          <div className="">
            <div className="mb-4">
              <label
                className="font-bold"
                htmlFor="name">Nombre del Usuario:</label>
              <input
                className="w-full border-black p-3 bg-slate-200"
                id="firstName"
                name="firstName"
                placeholder="Andres,Cristian,Carlos."
                value={formData.firstName}
                onChange={handleChange}
                type="text" />
            </div>
            <div>
              <label
                className="font-bold"
                htmlFor="apellido">Apellido del Usuario:</label>
              <input
                className="w-full border-black p-3 bg-slate-200 mb-4"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Uribe,Paez,Rodriguez."
                type="text" />
            </div>
            <div>
              <label
                className="font-bold"
                htmlFor="correo">Correo del Usuario:</label>
              <input
                className="w-full border-black p-3 bg-slate-200 mb-4"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="inge@hotmail.com."
                type="text" />
            </div>
          </div>


          <input
            className="bg-blue-700 w-full p-3 text-white uppercase font-bold mt-3 hover:bg-blue-800"
            type="submit"
            value="Guardar Usuario"
          />




        </form>
      </div>



    </div>
  )
}
