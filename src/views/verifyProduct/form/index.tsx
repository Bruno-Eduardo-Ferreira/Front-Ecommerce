import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { VerifyProductFormInputs, schema } from "./schemaForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function FormVerifyProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyProductFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: VerifyProductFormInputs) =>
    console.log(values.idProduct);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.idProduct}>
        <FormLabel htmlFor="idProduct">Id do produto</FormLabel>
        <Input id="idProduct" {...register("idProduct")} />
        <FormErrorMessage>{errors.idProduct?.message}</FormErrorMessage>
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
