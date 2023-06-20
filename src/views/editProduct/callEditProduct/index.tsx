import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";
import { EditProductFormInputs } from "../form/schemaForm";

export type Product = {
  name: string;
  value: number;
  description: string;
};

export async function editProductAPI(
  reset: UseFormReset<EditProductFormInputs>,
  setError: Dispatch<SetStateAction<boolean>>,
  idProduct: string,
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

    await axios.put("http://localhost:8080/produto/" + idProduct, data, {
      headers,
    });

    setError(false);
    reset();
  } catch (error) {
    setError(true);
    console.error(error);
  }
}
