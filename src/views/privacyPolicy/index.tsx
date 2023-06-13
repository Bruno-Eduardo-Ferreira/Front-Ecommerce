import { Layout } from "@/layout";
import { Flex, Text } from "@chakra-ui/react";

export function PrivacyPolicy() {
  return (
    <Layout>
      <Flex direction={"column"} pl={"100px"} pr={"50vh"} py={"25px"}>
        <Text pb={"15px"}>Política de Privacidade</Text>
        <Text pb={"15px"}>
          1. Utilização das Informações As informações capturadas pelo domínio
          www.moduloeletronica.com.br são utilizadas pela MÓDULO ELETRÔNICA com
          a finalidade de: <br /> 1.1. Viabilizar o fornecimento de produtos ou
          serviços solicitados no web site; <br /> 1.2. Identificar o perfil,
          desejos ou necessidades dos usuários, a fim de aprimorar os produtos
          e/ou serviços oferecidos pela empresa; <br /> 1.3. Enviar informativos
          sobre produtos ou serviços que interessem aos seus usuários; <br />{" "}
          1.4. Divulgar alterações, inovações ou promoções sobre os produtos e
          serviços da MÓDULO ELETRÔNICA e de seus parceiros. <br /> 2.
          Divulgação de Dados A MÓDULO ELETRÔNICA não fornece a terceiros dados
          sobre a identificação individual de usuários, sem seu prévio
          consentimento, exceto nos casos em que: <br /> 2.1. Haja determinação
          judicial para fornecimento de dados; <br />
          2.2. A viabilização dos negócios e/ou serviços oferecidos pela MÓDULO
          ELETRÔNICA dependa do repasse de dados a parceiros; <br /> 2.3. Exista
          a necessidade de identificar ou revelar dados do usuário que esteja
          utilizando o seu web site com propósitos ilícitos (intencionalmente ou
          não); <br /> 2.4. Além dos casos acima citados, havendo a necessidade
          ou interesse em repassar a terceiros dados de identificação individual
          dos usuários, a MÓDULO ELETRÔNICA lhes solicitará autorização prévia;{" "}
          <br />
          2.5. Terceiros que, por ventura, receberem da MÓDULO ELETRÔNICA
          informações, de qualquer natureza, sobre os internautas que acessam o
          seu web site cabe, igualmente, a responsabilidade de zelar pelo sigilo
          e segurança das referidas informações.
        </Text>
      </Flex>
    </Layout>
  );
}
