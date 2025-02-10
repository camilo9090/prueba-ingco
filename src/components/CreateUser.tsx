

export default function CreateUser() {
  return (



    <div className="flex flex-col max-w-5xl mx-auto gap-4">

      <h2 className="font-extrabold text-3xl">Crear Nuevo <span className="text-blue-700">Usuario</span></h2>

      <form
        className="bg-white p-5 shadow-md"
        action="">
        <div className="group font-bold">
          <div className="mb-4">
            <label htmlFor="name">Nombre del Usuario:</label>
            <input
              className="w-full border-black p-3 bg-slate-200"
              id="name"
              name="name"
              placeholder="Nombre Usuario"
              type="text" />
          </div>
          <div>
            <label htmlFor="apellido">Apellido del Usuario:</label>
            <input
              className="w-full border-black p-3 bg-slate-200 mb-4"
              id="apellido"
              name="apellido"
              placeholder="Apellido Usuario"
              type="text" />
          </div>
          <div>
            <label htmlFor="correo">Correo del Usuario:</label>
            <input
              className="w-full border-black p-3 bg-slate-200 mb-4"
              id="correo"
              name="correo"
              placeholder="Correo Usuario"
              type="text" />
          </div>
        </div>


        <input
          className="bg-blue-700 w-full p-3 text-white uppercase font-bold mt-3 hover:bg-blue-800 "
          type="submit"
          value='Guardar Usuario'
        />
      </form>


    </div>
  )
}
