import axios from "axios";

type User = {
  id: string;
  name: string;
  email: string;
};

interface LoginResponse {
  "jwt-token": string;
  user: User;
}

export const handleLogin = async (
  user: String,
  password: String,
  redirect: (path: string) => void
) => {
  try {
    const response = await axios.post("http://localhost:8080/auth", {
      username: user,
      password: password,
    });

    const data: LoginResponse = response.data;

    localStorage.setItem("jwt-token", data["jwt-token"]);
    localStorage.setItem("user-id", data.user.id);
    localStorage.setItem("user-name", data.user.name);
    localStorage.setItem("user-email", data.user.email);

    redirect("/home");
  } catch (error) {
    console.error(error);
  }
};
