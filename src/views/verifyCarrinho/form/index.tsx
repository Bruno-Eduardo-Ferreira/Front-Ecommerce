import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { VerifyCarrinhoFormInputs, schema } from "./schemaForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Carrinho, Product, getCarrinhoAPI } from "../callGetCarrinho";

export function FormVerifyCarrinho() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyCarrinhoFormInputs>({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState<boolean>(false);
  const [submited, setSubmited] = useState<boolean>(false);
  const [carrinho, setCarrinho] = useState<Carrinho>();

  function getProduct(carrinho: Carrinho) {
    setCarrinho(carrinho);
    setSubmited(true);
  }

  const onSubmit = (values: VerifyCarrinhoFormInputs) => {
    setSubmited(false);
    getCarrinhoAPI(values.idCarrinho, getProduct, setError);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.idCarrinho}>
        <FormLabel htmlFor="idCarrinho">Id do carrinho</FormLabel>
        <Input id="idCarrinho" {...register("idCarrinho")} />
        <FormErrorMessage>{errors.idCarrinho?.message}</FormErrorMessage>
      </FormControl>

      <Flex direction={"row"} justify={"center"}>
        <Button type="submit" mt={"50px"}>
          Pesquisar carrinho
        </Button>
      </Flex>

      <Card maxW="sm" mt={"20px"} display={submited ? "flex" : "none"}>
        <CardBody>
          <Text>Produtos:</Text>
          <Stack mt="6" spacing="3">
            <Accordion>
              {carrinho &&
                carrinho.products.map((product: Product) => {
                  return (
                    <AccordionItem>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          {product.name}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>id: {product.id}</AccordionPanel>
                      <AccordionPanel pb={4}>
                        Descrição: {product.description}
                      </AccordionPanel>
                      <AccordionPanel pb={4}>
                        Valor: R$ {product.value}
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
            </Accordion>
            <Text color="blue.600" fontSize="2xl" mt={"20px"}>
              R$ {carrinho?.total}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </form>
  );
}
