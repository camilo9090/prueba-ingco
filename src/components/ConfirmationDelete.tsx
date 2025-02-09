import { TrashIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { user } from "../types";

type ConfirmationDeleteProps = {
  userId: user['id'];
  onDelete: (id: user['id']) => void;
}

export default function ConfirmationDelete({ userId, onDelete }: ConfirmationDeleteProps) {
  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(userId);
        Swal.fire({
          title: "Eliminado",
          text: "El usuario ha sido eliminado.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 flex flex-row items-center gap-2 text-white p-2 rounded-lg w-full hover:bg-red-600 transition-colors justify-center"
    >
      <TrashIcon width={20} />
      Eliminar
    </button>
  );
}