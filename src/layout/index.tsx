import { Image } from "@chakra-ui/next-js";
import { Flex, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  wppIcon,
} from "public/images";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <Grid
    templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
    gridTemplateRows={"20vh 60vh 20vh"}
    gridTemplateColumns={"0px"}
    h="200px"
    gap="0"
    fontWeight="bold"
  >
    <GridItem pl="2" area={"header"}>
      Header -----------------------------------------------------------------
    </GridItem>

    <GridItem pl="2" area={"main"}>
      {children}
    </GridItem>

    <GridItem pl="2" area={"footer"}>
      <Flex direction="row" justifyContent="space-around">
        <Flex direction="column">
          <Text mb="25px" align={"center"}>
            Explore
          </Text>
          <Link mb="10px" href="https://chakra-ui.com" isExternal>
            Quem somos
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            Politica de privacidade
          </Link>
        </Flex>

        <Flex direction="column">
          <Text mb="25px" align={"center"}>
            Contato
          </Text>
          <Text mb="10px">brunocordeiro@alunos.utfpr.edu.br</Text>
          <Text mb="10px">gabrielcavalheiro@alunos.utfpr.edu.br</Text>
        </Flex>

        <Flex direction="column">
          <Text mb="25px" align={"center"}>
            Redes Sociais
          </Text>

          <Flex direction={"row"}>
            <Link href="https://chakra-ui.com" isExternal>
              <Image src={facebookIcon} alt={"mouse"} h={"25px"} w={"25px"} />
            </Link>

            <Link href="https://chakra-ui.com" isExternal pl={"15px"}>
              <Image src={instagramIcon} alt={"mouse"} h={"25px"} w={"25px"} />
            </Link>

            <Link href="https://chakra-ui.com" isExternal pl={"15px"}>
              <Image src={wppIcon} alt={"mouse"} h={"28px"} w={"28px"} />
            </Link>

            <Link href="https://chakra-ui.com" isExternal pl={"15px"}>
              <Image src={twitterIcon} alt={"mouse"} h={"25px"} w={"25px"} />
            </Link>
          </Flex>
        </Flex>
        <Flex direction={"row"}>
          <Text>a</Text>
        </Flex>
      </Flex>
    </GridItem>
  </Grid>
);
