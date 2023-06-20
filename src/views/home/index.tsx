import { Layout } from "@/layout";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Stack, Card, CardBody, Heading } from "@chakra-ui/react";
import { ecommerce } from "public/images";
import { Image } from "@chakra-ui/next-js";
import { Product, getListProducts } from "./callGetProducts";
import { useEffect, useState } from "react";

export function Home() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [listProducts, setListProducts] = useState<Product[]>([]);

  // function getProducts(getListProducts: Product[]) {
  //   setListProducts(getListProducts);
  //   console.log(loaded);
  //   setLoaded(true);
  //   console.log(loaded);
  // }

  useEffect(() => {
    function getProducts(getListProducts: Product[]) {
      setListProducts(getListProducts);
      console.log(loaded);
      setLoaded(true);
      console.log(loaded);
    }

    getListProducts(getProducts);
  }, []);

  return (
    <Layout>
      <Flex direction={"row"} justifyContent={"center"} mt={"25px"} mb={"50px"}>
        <SimpleGrid columns={3} spacing={10}>
          {loaded &&
            listProducts.map((product: Product) => {
              return (
                <Card maxW="sm">
                  <CardBody>
                    <Image
                      src={ecommerce}
                      alt={product.name}
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{product.name}</Heading>
                      <Text>{product.description}</Text>
                      <Text color="blue.600" fontSize="2xl">
                        ${product.value}
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              );
            })}
        </SimpleGrid>
      </Flex>
    </Layout>
  );
}
