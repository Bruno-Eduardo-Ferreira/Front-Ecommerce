import { FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export function FormMyAccount() {
  const {} = useForm();

  return (
    <form>
      <FormLabel htmlFor="name">Nome</FormLabel>
      <Input id="name" isReadOnly={true} />

      <FormLabel htmlFor="login" pt={"15px"}>
        E-mail
      </FormLabel>
      <Input id="login" isReadOnly={true} />

      <FormLabel htmlFor="password" pt={"15px"}>
        Senha
      </FormLabel>
      <Input id="password" isReadOnly={true} />
    </form>
  );
}
