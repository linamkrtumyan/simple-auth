import api from "@/lib/axios";
import axios from "axios";
// export const fetchProfile = async () => {
//   try {
//     const response = await api.get("/profile");
//     return response.data;
//   } catch (error: any) {
//     console.error("Error fetching profile:", error);

//     if (error?.response) {
//       throw new Error(
//         error.response?.data?.message || "Failed to fetch profile data"
//       );
//     }

//     throw new Error("Failed to fetch profile data");
//   }
// };


// import axios from "axios";

export const fetchProfile = async () => {
  try {
    const response = await api.get("/profile");
    return response.data;
  } catch (error) {
    console.log(error,"uuuu")
    if (axios.isAxiosError(error)) {
      // We can catch the bad JWT error here and throw a custom error
      if (error.response?.data?.code === "bad_jwt") {
        throw new Error("bad_jwt");
      }
    }
    throw error; // Re-throw if it's not a JWT-related error
  }
};
