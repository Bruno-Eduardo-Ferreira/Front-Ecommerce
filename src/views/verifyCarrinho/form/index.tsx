import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { VerifyCarrinhoFormInputs, schema } from "./schemaForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function FormVerifyCarrinho() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyCarrinhoFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: VerifyCarrinhoFormInputs) =>
    console.log(values.idCarrinho);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.idCarrinho}>
        <FormLabel htmlFor="idCarrinho">Id do carrinho</FormLabel>
        <Input id="idCarrinho" {...register("idCarrinho")} />
        <FormErrorMessage>{errors.idCarrinho?.message}</FormErrorMessage>
      </FormControl>

      <FormLabel htmlFor="name" pt={"15px"}>
        Nome do produto
      </FormLabel>
      <Input id="name" isReadOnly={true} />

      <FormLabel htmlFor="value" pt={"15px"}>
        Valor do produto
      </FormLabel>
      <Input id="value" isReadOnly={true} />

      <FormLabel htmlFor="description" pt={"15px"}>
        Descrição do produto
      </FormLabel>
      <Input id="description" isReadOnly={true} />

      <Flex direction={"row"} justify={"center"}>
        <Button type="submit" mt={"50px"}>
          Pesquisar produto
        </Button>
      </Flex>
    </form>
  );
}
