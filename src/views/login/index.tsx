import { Flex, Link, Text } from "@chakra-ui/react";
import { FormLogin } from "./form";
import { logoIcon } from "public/images";
import { Image } from "@chakra-ui/next-js";

export function Login() {
  return (
    <Flex direction={"row"} justify={"center"}>
      <Flex direction={"column"} justify={"center"} h={"100vh"}>
        <Flex direction={"column"} align={"center"}>
          <Link href="https://chakra-ui.com" isExternal mb="10px">
            <Image src={logoIcon} alt={"logoIcon"} h={"80px"} w={"230px"} />
          </Link>
          <Flex border={"1px"} p={"50px"} direction={"column"} mt={"50px"}>
            <Text align={"center"} pb={"25px"}>
              Login
            </Text>
            <FormLogin />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
