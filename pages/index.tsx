import { useQuery } from "@apollo/client";
import Container from "@components/templates/Container";
import { GET_EXCHANGE_RATES } from "../graphqls/rates";
import React from "react";

const IndexPage = () => {
  const { loading, error, data } = useQuery<{
    rates: { currency: string; rate: string }[];
  }>(GET_EXCHANGE_RATES);
  return (
    <Container title="ν">
      <span>Hello World! π</span>
      {loading ? (
        <p>κ°μ Έμ€λ μ€...</p>
      ) : data ? (
        data.rates.map(({ currency, rate }) => (
          <p>
            {currency} : {rate}
          </p>
        ))
      ) : (
        <p>{error}</p>
      )}
    </Container>
  );
};

export default IndexPage;
