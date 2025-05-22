import { TrashIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { user } from "../types";

type ConfirmationDeleteProps = {
  userId: user["id"];
  onDelete: (id: user["id"]) => void;
};

export default function ConfirmationDelete({
  userId,
  onDelete,
}: ConfirmationDeleteProps) {
  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f59e0b", 
      cancelButtonColor: "#ef4444",  
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
      className="bg-amber-500 hover:bg-amber-600 text-white flex flex-row items-center gap-2 p-2 rounded-lg w-full transition-colors justify-center"
    >
      <TrashIcon width={20} />
      Eliminar
    </button>
  );
}
