import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { AddProductFormInputs } from "../form/schemaForm";
import { UseFormReset } from "react-hook-form";

export type Product = {
  name: string;
  value: number;
  description: string;
};

export async function addProductAPI(
  reset: UseFormReset<AddProductFormInputs>,
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
    reset();
  } catch (error) {
    setError(true);
    console.error(error);
  }
}
