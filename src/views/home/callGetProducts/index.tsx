import axios, { AxiosResponse } from "axios";

export type Product = {
  id: string;
  name: string;
  value: number;
  description: string;
};

export async function getListProducts(
  getProducts: (getListProducts: Product[]) => void
): Promise<void> {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
    };

    const response: AxiosResponse = await axios.get(
      "http://localhost:8080/produto",
      { headers }
    );

    const data: Product[] = response.data;

    getProducts(data);
  } catch (error) {
    console.error(error);
  }
}
