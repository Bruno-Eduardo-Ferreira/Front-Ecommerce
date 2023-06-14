import * as yup from "yup";

export type VerifyProductFormInputs = {
  idProduct: string;
};

export const schema = yup.object().shape({
  idProduct: yup.string().required("Insira um id"),
});
