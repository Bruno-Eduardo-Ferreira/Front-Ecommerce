import { FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export function FormMyAccount() {
  const {} = useForm();

  var id = localStorage.getItem("user-id") ?? "";
  var name = localStorage.getItem("user-name") ?? "";
  var email = localStorage.getItem("user-email") ?? "";

  return (
    <form>
      <FormLabel htmlFor="id">ID</FormLabel>
      <Input id="id" value={id} isReadOnly={true} />

      <FormLabel htmlFor="name" pt={"15px"}>
        Nome
      </FormLabel>
      <Input id="name" value={name} isReadOnly={true} />

      <FormLabel htmlFor="email" pt={"15px"}>
        E-mail
      </FormLabel>
      <Input id="email" value={email} isReadOnly={true} />
    </form>
  );
}
