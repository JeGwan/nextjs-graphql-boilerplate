import Container from "@components/templates/Container";
import { getApi } from "@lib/api";
import { EventItem } from "@lib/types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const EventItemCard = styled.div`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-bottom: 1rem;
`;
const EventPage = () => {
  const api = getApi();
  const [eventItems, setEventItems] = useState<EventItem[]>();
  const fetchEvents = () => {
    api
      .get<EventItem[]>("/event")
      .then(({ data }) => {
        if (data.message === "SUCCESS") {
          setEventItems(data.data);
        } else {
          alert("데이터를 불러올 수 없습니다!");
        }
      })
      .catch(console.error);
  };
  useEffect(fetchEvents, []);
  return (
    <Container title="이벤트">
      {eventItems ? (
        <div className="result">
          {eventItems.map((eventItem) => (
            <EventItemCard key={eventItem.no}>
              <h3>{eventItem.title}</h3>
              <p>주최자 : {eventItem.host.name}</p>
            </EventItemCard>
          ))}
        </div>
      ) : (
        <p>데이터를 아직 가져오지 않았습니다.</p>
      )}
    </Container>
  );
};

export default EventPage;
