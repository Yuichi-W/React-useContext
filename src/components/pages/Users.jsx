import styled from "styled-components";
import React, { useContext } from "react";
// 遷移時のstate取得する
// ■■■import { useLocation } from "react-router-dom";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ぴきまる${val}`,
    image: "https://source.unsplash.com/adCc2b9pEk8",
    email: "1234@gmail.com",
    phone: "090-1234-5678",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // ■■■const { state } = useLocation();
  // ■■■const isAdmin = state ? state.isAdmin : false;

  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>User一覧ページです！！！！</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
          // ■■■<UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
