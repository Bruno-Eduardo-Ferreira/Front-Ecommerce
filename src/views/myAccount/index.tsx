import { Layout } from "@/layout";
import { Flex, Text } from "@chakra-ui/react";
import { FormMyAccount } from "./form";

export function MyAccount() {
  return (
    <Layout>
      <Flex direction={"row"} justify={"center"}>
        <Flex direction={"column"} align={"center"}>
          <Text align={"center"} pb={"25px"} mt={"25px"}>
            Informações da conta
          </Text>
          <Flex border={"1px"} p={"35px"} direction={"column"} w={"500px"}>
            <FormMyAccount />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
