import axios, { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";

export type Product = {
  id: string;
  name: string;
  value: number;
  description: string;
};

export async function getProductAPI(
  id: string,
  getProduct: (product: Product) => void,
  setError: Dispatch<SetStateAction<boolean>>
): Promise<void> {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
    };

    const response: AxiosResponse = await axios.get(
      "http://localhost:8080/produto/" + id,
      { headers }
    );

    const data: Product = response.data;
    console.log(data);

    setError(false);
    getProduct(data);
  } catch (error) {
    setError(true);
    console.error(error);
  }
}
