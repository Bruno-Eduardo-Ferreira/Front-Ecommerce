import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { VerifyProductFormInputs, schema } from "./schemaForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Product, getProductAPI } from "../callGetProduct";

export function FormVerifyProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyProductFormInputs>({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>();

  function getProduct(product: Product) {
    setProduct(product);
  }

  const onSubmit = (values: VerifyProductFormInputs) => {
    getProductAPI(values.idProduct, getProduct, setError);
  };

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
      <Input id="name" value={product?.name ?? ""} isReadOnly={true} />

      <FormLabel htmlFor="value" pt={"15px"}>
        Valor do produto
      </FormLabel>
      <Input id="value" value={product?.value ?? ""} isReadOnly={true} />

      <FormLabel htmlFor="description" pt={"15px"}>
        Descrição do produto
      </FormLabel>
      <Input
        id="description"
        value={product?.description ?? ""}
        isReadOnly={true}
      />
      <Text mt={"30px"} display={error ? "flex" : "none"} color={"red"}>
        Ocorreu algum erro, verifique o id do produto!
      </Text>
      <Flex direction={"row"} justify={"center"}>
        <Button type="submit" mt={error ? "30px" : "50px"}>
          Pesquisar produto
        </Button>
      </Flex>
    </form>
  );
}
