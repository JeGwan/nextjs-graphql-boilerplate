import Container from "@components/templates/Container";
import { GetServerSideProps } from "next";
import React from "react";

interface PageProps {
  productId: string;
}

const MePage = (props: PageProps) => {
  return (
    <Container title="동적라우팅">프로덕트 아이디 {props.productId}</Container>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  return { props: { productId: ctx.params ? (ctx.params.pid as string) : "" } };
};

export default MePage;
