import { Layout } from "@/layout";
import { Flex, Text } from "@chakra-ui/react";

export function About() {
  return (
    <Layout>
      <Flex direction={"column"} pl={"100px"} pr={"50vh"} py={"25px"}>
        <Text pb={"15px"}>Quem somos</Text>
        <Text pb={"15px"}>
          A Módulo Eletrônica nasceu com o objetivo de atender a demanda de
          compras de empresas, indústrias, instituições de ensino e hobbystas de
          produtos eletroeletrônicos. Comercializamos instrumentos de medição,
          pilhas e baterias, componentes eletrônicos, equipamentos e acessórios
          para soldagem eletrônica e outros itens que agregam valor para
          clientes que atuam nesse segmento. Os produtos podem ser adquiridos
          por meio de nosso E-Commerce e pela loja física, que fica situada em
          Campinas – SP, cidade que detém o título de ser um dos maiores pólos
          de tecnologia da América Latina. Para cumprir sua missão, a Módulo
          Eletrônica oferece produtos de procedência confiável e atendimento de
          qualidade que adota como valores o respeito, a educação, a ética, o
          comprometimento, a transparência e uma comunicação eficiente.
        </Text>
        <Text pb={"15px"}>Missão</Text>
        <Text pb={"15px"}>
          Atender com eficiência e agilidade os clientes e de maneira
          competitiva, surpreender para encantar e fidelizar.
        </Text>
        <Text pb={"15px"}>Visão</Text>
        <Text pb={"15px"}>
          Queremos ser referência no comércio eletroeletrônico brasileiro, sendo
          reconhecido pela qualidade e variedade dos produtos, pela eficiência
          no atendimento e pela competência de seus colaboradores.
        </Text>
      </Flex>
    </Layout>
  );
}
