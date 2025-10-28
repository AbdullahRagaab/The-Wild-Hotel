// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";
// import { createEditCabin } from "../../services/apiCabins";

// export function useCreateCabin() {
//   const queryClient = useQueryClient();

//   const { mutate: createCabin, isLoading: isCreating } = useMutation({
//     mutationFn: createEditCabin,
//     onSuccess: () => {
//       toast.success("New cabin successfully created");
//       queryClient.invalidateQueries({ queryKey: ["cabins"] });
//     },
//     onError: (err) => toast.error(err.message),
//   });

//   return { isCreating, createCabin };
// }


import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    // Wrap createEditCabin so react-query's internal 2nd parameter
    // doesn't accidentally become the `id` argument.
    mutationFn: (newCabin) => createEditCabin(newCabin),
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
