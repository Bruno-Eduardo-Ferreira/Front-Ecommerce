import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddProductFormInputs, schema } from "./schemaForm";
import { addProductAPI } from "../callAddProduct";
import { useState } from "react";

export function FormAddProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddProductFormInputs>({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState<boolean>(false);

  const onSubmit = (values: AddProductFormInputs) => {
    addProductAPI(
      reset,
      setError,
      values.nameProduct,
      parseFloat(values.valueProduct),
      values.descriptionProduct
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.nameProduct}>
        <FormLabel htmlFor="nameProduct">Nome do produto</FormLabel>
        <Input id="nameProduct" {...register("nameProduct")} />
        <FormErrorMessage>{errors.nameProduct?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.valueProduct}>
        <FormLabel htmlFor="valueProduct" mt={"15px"}>
          Valor do produto
        </FormLabel>
        <Input id="valueProduct" {...register("valueProduct")} />
        <FormErrorMessage>{errors.valueProduct?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.descriptionProduct}>
        <FormLabel htmlFor="descriptionProduct" mt={"15px"}>
          Descrição do produto
        </FormLabel>
        <Input id="descriptionProduct" {...register("descriptionProduct")} />
        <FormErrorMessage>
          {errors.descriptionProduct?.message}
        </FormErrorMessage>
      </FormControl>

      <Text mt={"30px"} display={error ? "flex" : "none"} color={"red"}>
        Ocorreu algum erro!
      </Text>
      <Flex direction={"row"} justify={"center"}>
        <Button type="submit" mt={error ? "30px" : "50px"}>
          Adicionar produto
        </Button>
      </Flex>
    </form>
  );
}
