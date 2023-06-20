import * as yup from "yup";

export type VerifyCarrinhoFormInputs = {
  idCarrinho: string;
};

export const schema = yup.object().shape({
  idCarrinho: yup.string().required("Insira um id"),
});
