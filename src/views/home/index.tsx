import { Layout } from "@/layout";
import { Flex, Text } from "@chakra-ui/react";
import { Stack, HStack, VStack, Box, Card, CardBody, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import {ecommerce} from "public/images";
import { Image } from "@chakra-ui/next-js";

export function Home() {
  return (
    <Layout>
      <Flex direction={'row'} justifyContent={"center"} mt={"25px"} mb={"50px"}>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src={ecommerce}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Layout>
  );
}
