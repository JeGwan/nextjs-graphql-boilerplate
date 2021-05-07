declare global {
  interface Window {
    kakao?: any;
  }
}
export interface Address {
  createdMemberKey: number; // 21;
  createdDate: string; // "2021-04-25 15:28:28";
  rno: number; //  29;
  modifiedMemberKey: number; // 0;
  modifiedDate: string; // "2021-04-25 15:30:00";
}
export interface Host {
  status: number; // 1;
  eventKey: number; // 35;
  memberKey: number; // 21;
  group: number; // 1;
  role: number; // 1;
  cameraman: boolean;
  name: string;
}
export interface EventItem {
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
