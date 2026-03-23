import { useQuery } from "@tanstack/react-query";
import type { Enquiry } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllEnquiries() {
  const { actor, isFetching } = useActor();
  return useQuery<Enquiry[]>({
    queryKey: ["enquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllEnquiries();
    },
    enabled: !!actor && !isFetching,
  });
}
