import {createContext} from 'react';
// MessageContext라는 이름의 리엑트 컨텍스트를 생성합니다.
// 이 컨텍스트는 Provider(제공자)와 Consumer(소비자)를 갖게 됨
// 제공자 Provider는 App.jsx에서 정의, Consumer 소비자는 자원 공유 받을 개별 컴포넌트를 말함
// 실세계 : createContext() -> 방송 채널 생성, Provider -> 방송국이 방송 송출, 개별 컴포넌트 Consumber가 방송을 전달받아 시청하는 시청자
// MessageContext는 식별자가 됨
export const MessageContext = createContext();