import * as yup from "yup";

export type EditProductFormInputs = {
  idProduct: string;
  nameProduct: string;
  valueProduct: string;
  descriptionProduct: string;
};

export const schema = yup.object().shape({
  idProduct: yup.string().required("Insira um id"),
  nameProduct: yup.string().required("Insira um nome"),
  valueProduct: yup.string().required("Insira um valor"),
  descriptionProduct: yup.string().required("Insira uma descrição"),
});
