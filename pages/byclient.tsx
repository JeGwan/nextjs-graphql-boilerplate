import { useApolloClient } from "@apollo/client";
import Container from "@components/templates/Container";
import { GET_RATES } from "../graphqls/rates";
import React from "react";
import { GetServerSideProps } from "next";
import Button from "@components/atoms/Button";

const IndexPage = () => {
  const apolloClient = useApolloClient();
  const fetchData = () => {
    apolloClient.query({ query: GET_RATES }).then(console.log);
  };
  return (
    <Container title="홈">
      <span>Hello World! 😀</span>
      <Button onClick={fetchData}>아폴로 클라이언트로 데이터 가져오기</Button>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  return { props: {} };
};

export default IndexPage;
