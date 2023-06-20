import * as yup from "yup";

export type LoginFormInputs = {
  login: string;
  password: string;
};

export const schema = yup.object().shape({
  login: yup
    .string()
    .required("Insira um login")
    .min(4, "Mínimo de 4 caracteres"),
  password: yup
    .string()
    .required("Insira uma senha")
    .min(4, "Mínimo de 4 caracteres"),
});
