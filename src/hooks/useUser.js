import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { getUserDetail } from "../api";

const useUser = () => {
    const { data, isLoading, isError, refetch } = useQuery({
      queryKey: "user",
      queryFn: async () => {
        try {
          const userDetail = await getUserDetail();
          return userDetail;
        } catch (err) {
          if (!err.message.includes("not authenticated")) {
            toast.err("something went wrong");
          }
          throw err; // Re-throw the error to be handled by React Query
        }
      },
      config: { refetchOnWindowFocus: false }
    });
  
    return { data, isLoading, isError, refetch };
  };
  

export default useUser

