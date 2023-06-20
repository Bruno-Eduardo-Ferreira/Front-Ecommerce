import * as yup from "yup";

export type AddProductFormInputs = {
  nameProduct: string;
  valueProduct: string;
  descriptionProduct: string;
};

export const schema = yup.object().shape({
  nameProduct: yup.string().required("Insira um nome"),
  valueProduct: yup.string().required("Insira um valor"),
  descriptionProduct: yup.string().required("Insira uma descrição"),
});
