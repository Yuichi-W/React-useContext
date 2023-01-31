import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const history = useHistory();
  // 更新していくコンテキストのsetUserInfoを記載
  const { setUserInfo } = useContext(UserContext);

  // 管理者か一般ユーザフラグ
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
    // state渡さなくて良いので下記はいらない(グローバルstate使用しない場合)
    // ■■■history.push({ pathname: "/users", state: { isAdmin: true } });
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです！！</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
