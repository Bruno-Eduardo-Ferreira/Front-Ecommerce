import { ChevronDownIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/next-js";
import { useRouter } from "next/router";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  facebookIcon,
  instagramIcon,
  logoIcon,
  pagseguroIcon,
  securityPaymentIcon,
  twitterIcon,
  wppIcon,
} from "public/images";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  const redirect = (path: string) => {
    router.push(path);
  };
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"15vh 60vh 25vh"}
      gridTemplateColumns={"0px"}
      h="200px"
      gap="0"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"header"} borderBottom={"1px"} pt={"20px"}>
        <Flex direction={"row"} align={"center"} justify={"space-evenly"}>
          <Link onClick={() => redirect("/home")} mb="10px">
            <Image src={logoIcon} alt={"logoIcon"} h={"60px"} w={"180px"} />
          </Link>

          <Flex direction={"row"} gap={"25px"}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Produtos
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => redirect("/verifyProduct")}>
                  Verificar um produto
                </MenuItem>
                <MenuItem>Verificar todos os produtos</MenuItem>
                <MenuItem>Adicionar produto</MenuItem>
                <MenuItem>Alterar produto</MenuItem>
                <MenuItem>Remover produto</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Carrinho
              </MenuButton>
              <MenuList>
                <MenuItem>Verificar um carrinho</MenuItem>
                <MenuItem>Verificar todos os carrinhos</MenuItem>
                <MenuItem>Adicionar carrinho</MenuItem>
                <MenuItem>Alterar carrinho</MenuItem>
                <MenuItem>Remover carrinho</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Pedidos
              </MenuButton>
              <MenuList>
                <MenuItem>Verificar um pedido</MenuItem>
                <MenuItem>Verificar todos os pedidos</MenuItem>
                <MenuItem>Adicionar pedido</MenuItem>
                <MenuItem>Alterar pedido</MenuItem>
                <MenuItem>Remover pedido</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Minha conta
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => redirect("/myAccount")}>
                  Verificar meus dados
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </GridItem>

      <GridItem pl="2" area={"main"} overflowY="auto">
        {children}
      </GridItem>

      <GridItem pl="2" area={"footer"} borderTop={"1px"} pt={"20px"}>
        <Flex direction="row" justifyContent="space-around">
          <Flex direction="column">
            <Text mb="15px">Explore</Text>
            <Link mb="10px" onClick={() => redirect("/about")}>
              Quem somos
            </Link>
            <Link onClick={() => redirect("/privacyPolicy")}>
              Politica de privacidade
            </Link>
          </Flex>

          <Flex direction="column">
            <Text mb="15px">Contato</Text>
            <Link
              href="mailto:brunocordeiro@alunos.utfpr.edu.br"
              isExternal
              mb="10px"
            >
              brunocordeiro@alunos.utfpr.edu.br
            </Link>
            <Link
              href="mailto:gabrielcavalheiro@alunos.utfpr.edu.br"
              isExternal
              mb="10px"
            >
              gabrielcavalheiro@alunos.utfpr.edu.br
            </Link>
          </Flex>

          <Flex direction="column">
            <Text mb="20px" align={"center"}>
              Redes Sociais
            </Text>

            <Flex direction={"row"}>
              <Link href="https://pt-br.facebook.com/" isExternal>
                <Image
                  src={facebookIcon}
                  alt={"facebookIcon"}
                  h={"25px"}
                  w={"25px"}
                />
              </Link>

              <Link href="https://www.instagram.com/" isExternal pl={"15px"}>
                <Image
                  src={instagramIcon}
                  alt={"instagramIcon"}
                  h={"25px"}
                  w={"25px"}
                />
              </Link>

              <Link
                href="https://wa.me/5545988174192?text=%C3%93timo+front-end%2C+certeza+que+o+seu+professor+vai+te+dar+nota+10.0+%21%21+"
                isExternal
                pl={"15px"}
              >
                <Image src={wppIcon} alt={"wppIcon"} h={"28px"} w={"28px"} />
              </Link>

              <Link href="https://twitter.com/" isExternal pl={"15px"}>
                <Image
                  src={twitterIcon}
                  alt={"twitterIcon"}
                  h={"25px"}
                  w={"25px"}
                />
              </Link>
            </Flex>
          </Flex>

          <Flex direction={"column"} align={"center"}>
            <Text mb="10px">Segurança</Text>
            <Link href="https://pagseguro.uol.com.br/" isExternal mb="5px">
              <Image
                src={pagseguroIcon}
                alt={"pagseguroIcon"}
                h={"35px"}
                w={"140px"}
              />
            </Link>
            <Image
              src={securityPaymentIcon}
              alt={"securityPaymentIcon"}
              h={"50px"}
              w={"50px"}
            />
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};
