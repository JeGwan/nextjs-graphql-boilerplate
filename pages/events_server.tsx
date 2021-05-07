import Container from "@components/templates/Container";
import { getApi } from "@lib/api";
import { EventItem } from "@lib/types";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const EventItemCard = styled.div`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-bottom: 1rem;
`;
type PageProps =
  | { success: true; eventItmes: EventItem[] }
  | { success: false; error: string };

const EventPage = (props: PageProps) => {
  if (!props.success)
    return <Container title="이벤트">{props.error}</Container>;
  return (
    <Container title="이벤트">
      <div className="result">
        {props.eventItmes.map((eventItem) => (
          <EventItemCard key={eventItem.no}>
            <h3>{eventItem.title}</h3>
            <p>주최자 : {eventItem.host.name}</p>
          </EventItemCard>
        ))}
      </div>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  try {
    const api = getApi();
    const { data } = await api.get<EventItem[]>("/event");
    if (data.message === "SUCCESS") {
      return { props: { success: true, eventItmes: data.data } };
    } else {
      return {
        props: {
          success: false,
          error: "통신은 성공했는데 이벤트를 못가져왔어요.",
        },
      };
    }
  } catch (error) {
    return {
      props: {
        success: false,
        error: "네트워크인지 몬지 데이터를 가져올 수 없어용!",
      },
    };
  }
};

export default EventPage;
