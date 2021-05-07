import Button from "@components/atoms/Button";
import Container from "@components/templates/Container";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Address {
  createdMemberKey: number; // 21;
  createdDate: string; // "2021-04-25 15:28:28";
  rno: number; //  29;
  modifiedMemberKey: number; // 0;
  modifiedDate: string; // "2021-04-25 15:30:00";
}
interface Host {
  status: number; // 1;
  eventKey: number; // 35;
  memberKey: number; // 21;
  group: number; // 1;
  role: number; // 1;
  cameraman: boolean;
  name: string;
}
interface EventItem {
  address: Address;
  addressKey: number; // 30
  createdDate: string; // "2021-04-25 15:28:28"
  createdMemberKey: number; // 21;
  description: string; // "232323"
  endDate: string; // "2021-04-25 15:30:00"
  endDay: string; // "20210426"
  endTime: string; // "0027"
  entryRole: number; // 0;
  host: Host;
  hostMemberKey: number; // 21;
  isInterest: false;
  isInvite: false;
  isLive: false;
  isPublic: number; //1;
  mainImageUrl: string; // "https://om-qd-s3-static.s3.ap-northeast-2.amazonaws.com/member/21/event/35/attach/AIpc88P0rexJFUj7C1LBuc4Q7IFBzwJ6.jpg"
  modifiedDate: string; // "2021-04-25 15:30:00"
  modifiedMemberKey: number; // 0;
  no: number; // 35;
  placeName: string; // "2323"
  rno: number; // 29;
  startDay: string; // "20210426"
  startTime: string; // "0027"
  status: number; // 2;
  title: string; // "232323"
  type: number; //1;
}
interface EventResponse {
  message: "SUCCESS" | "FAIL";
  result: 1 | 0;
  timestamp: string;
  data: EventItem[];
}

const EventItemCard = styled.div`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-bottom: 1rem;
`;
const EventPage = () => {
  const [eventItems, setEventItems] = useState<EventItem[]>();
  const fetchEvents = () => {
    // todo api 서버에서 데이터 가져오기
    axios
      .get<EventResponse>("https://dev-api.onmoving.app/event")
      .then(({ data }) => {
        if (data.message === "SUCCESS") {
          setEventItems(data.data);
        } else {
          alert("데이터를 불러올 수 없습니다!");
        }
      })
      .catch(console.error);
  };

  return (
    <Container title="이벤트">
      <Button onClick={fetchEvents}>데이터 가져오기</Button>

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
