import { Layout } from "@/layout";
import { Flex, Text } from "@chakra-ui/react";
import { FormVerifyCarrinho } from "./form";

export function VerifyCarrinho() {
  return (
    <Layout>
      <Flex direction={"row"} justify={"center"}>
        <Flex direction={"column"} align={"center"} mb={"100px"}>
          <Text align={"center"} pb={"25px"} mt={"25px"}>
            Verificar um Carrinho
          </Text>
          <Flex border={"1px"} p={"35px"} direction={"column"} w={"500px"}>
            <FormVerifyCarrinho />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
