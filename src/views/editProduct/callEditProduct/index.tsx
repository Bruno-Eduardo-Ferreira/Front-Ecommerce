import axios, { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";

export type Product = {
  name: string;
  value: number;
  description: string;
};

export async function editProductAPI(
  setError: Dispatch<SetStateAction<boolean>>,
  nameProduct: string,
  valueProduct: number,
  descriptionProduct: string
): Promise<void> {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
    };

    const data = {
      name: nameProduct,
      value: valueProduct,
      description: descriptionProduct,
    };

    await axios.post("http://localhost:8080/produto", data, { headers });

    setError(false);
  } catch (error) {
    setError(true);
    console.error(error);
  }
}
