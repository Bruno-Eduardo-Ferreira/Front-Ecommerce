import { Layout } from "@/layout";
import { Flex, Text } from "@chakra-ui/react";
import { FormVerifyProduct } from "./form";

export function VerifyProduct() {
  return (
    <Layout>
      <Flex direction={"row"} justify={"center"}>
        <Flex direction={"column"} align={"center"} mb={"100px"}>
          <Text align={"center"} pb={"25px"} mt={"25px"}>
            Verificar um produto
          </Text>
          <Flex border={"1px"} p={"35px"} direction={"column"} w={"500px"}>
            <FormVerifyProduct />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
