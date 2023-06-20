import { Layout } from "@/layout";
import { Flex, Text } from "@chakra-ui/react";
import { FormAddProduct } from "./form";

export function AddProduct() {
  return (
    <Layout>
      <Flex direction={"row"} justify={"center"}>
        <Flex direction={"column"} align={"center"} mb={"100px"}>
          <Text align={"center"} pb={"25px"} mt={"25px"}>
            Editar um produto
          </Text>
          <Flex border={"1px"} p={"35px"} direction={"column"} w={"500px"}>
            <FormAddProduct />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
