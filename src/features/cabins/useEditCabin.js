import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    // Accept different payload shapes and normalize the id so we never
    // forward an object (like a react-query internal) as the id.
    mutationFn: (payload) => {
      // payload should normally be { newCabinData, id }
      const newCabinData = payload?.newCabinData ?? payload;

      let id = payload?.id ?? undefined;

      // If id looks like an object, try common id slots
      if (id && typeof id === "object") {
        id = id.id ?? id.value ?? undefined;
      }

      return createEditCabin(newCabinData, id == null ? undefined : Number(id));
    },

    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
