import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { LoginFormInputs, schema } from "./schemaForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: LoginFormInputs) => console.log(values.login);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.login?.message}>
        <FormLabel htmlFor="login">E-mail</FormLabel>
        <Input id="login" {...register("login")} />
        <FormErrorMessage>{errors.login?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.password?.message} pt={"15px"}>
        <FormLabel htmlFor="password">Senha</FormLabel>
        <Input id="password" {...register("password")} type="password" />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <Flex direction={"row"} justify={"center"}>
        <Button type="submit" mt={"50px"}>
          Entrar
        </Button>
      </Flex>
    </form>
  );
}
