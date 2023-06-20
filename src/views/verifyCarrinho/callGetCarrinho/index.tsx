import axios, { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";

export type Pessoa = {
  id: string;
  name: string;
  email: string;
};

export type Product = {
    id: string;
    name: string;
    value: number;
    description: string;
  };

export type Carrinho = {
  id: string;
  total: number;
  products: Product[];
  pessoa: Pessoa;
};

export async function getCarrinhoAPI(
  id: string,
  getCarrinho: (carrinho: Carrinho) => void,
  setError: Dispatch<SetStateAction<boolean>>
): Promise<void> {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
    };

    const response: AxiosResponse = await axios.get(
      "http://localhost:8080/carrinho/" + id,
      { headers }
    );

    const data: Carrinho = response.data;

    setError(false);
    getCarrinho(data);
  } catch (error) {
    setError(true);
    console.error(error);
  }
}
