import { Layout } from "@/layout";
import { Flex, Text } from "@chakra-ui/react";
import { Stack, HStack, VStack, Box } from '@chakra-ui/react';
import {homeImage} from "public/images";
import { Image } from "@chakra-ui/next-js";

export function Home() {
  return (
    <Layout>
      <Flex>
          <Stack direction={['column', 'row']} spacing='24px'>
          <Box w='180px' h='60px' bg='yellow.200'>
              <Image src={homeImage} alt={"logoIcon"} h={"60px"} w={"180px"} />
          </Box>
          <Box w='40px' h='40px' bg='tomato'>
            2
          </Box>
          <Box w='40px' h='40px' bg='pink.100'>
            3
          </Box>
        </Stack>
      </Flex>
    </Layout>
  );
}
