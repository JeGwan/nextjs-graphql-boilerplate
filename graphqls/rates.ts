import gql from "graphql-tag";

export const GET_RATES = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`;

export const GET_EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
