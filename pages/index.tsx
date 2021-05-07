import { useQuery } from "@apollo/client";
import Container from "@components/templates/Container";
import { GET_EXCHANGE_RATES } from "../graphqls/rates";
import React from "react";
import { GetServerSideProps } from "next";

const IndexPage = () => {
  const { loading, error, data } = useQuery<{
    rates: { currency: string; rate: string }[];
  }>(GET_EXCHANGE_RATES);
  return (
    <Container title="홈">
      <span>Hello World! 😀</span>
      {loading ? (
        <p>가져오는 중...</p>
      ) : data ? (
        data.rates.map(({ currency, rate }, index) => (
          <p key={index}>
            {currency} : {rate}
          </p>
        ))
      ) : (
        <p>{error}</p>
      )}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  return { props: {} };
};

export default IndexPage;
