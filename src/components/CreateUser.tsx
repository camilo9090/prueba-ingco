import { useState } from "react";
import { usersStore } from "../store";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

import Swal from "sweetalert2";
import {
  ArrowDownOnSquareIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/solid";

export default function CreateUser() {
  const navigate = useNavigate();
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
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Todos los campos son obligatorios",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }


    try {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario creado correctamente",
        showConfirmButton: false,
        timer: 1200,
      });

      await createUser(formData);
      setFormData({ firstName: "", lastName: "", email: "" });
      navigate("/");
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };

  return (
    <div>
      <Header />

      <div className="max-w-3xl mx-auto mt-10 px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-700 p-8 rounded-2xl shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-white">
            Crear Usuario
          </h2>

          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Nombre Completo..."
            value={formData.firstName}
            onChange={handleChange}
            className="w-full font-bold text-xl text-center p-3 rounded-xl bg-slate-100 border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:placeholder-transparent"
          />

          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Apellido Completo..."
            value={formData.lastName}
            onChange={handleChange}
            className="w-full font-bold text-xl text-center p-3 rounded-xl bg-slate-100 border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:placeholder-transparent"
          />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Correo Usuario..."
            value={formData.email}
            onChange={handleChange}
            className="w-full font-bold text-xl text-center p-3 rounded-xl bg-slate-100 border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:placeholder-transparent"
          />

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-2xl
              flex-1 flex items-center justify-center gap-2 shadow-md transition duration-200"
            >
              <ArrowDownOnSquareIcon width={24} />
              Guardar
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-2xl
              flex-1 flex items-center justify-center gap-2 shadow-md transition duration-200"
            >
              <ArrowRightStartOnRectangleIcon width={24} />
              Cancelar
            </button>
          </div>
        </form>
      </div>

      <footer className="bg-gray-800 text-center p-5 text-white font-bold mt-16">
        <p className="text-sm">Grupo INGCO, 2025</p>
        <p className="text-sm">Creado por Jhonatan Camilo Uribe</p>
      </footer>
    </div>
  );
}
