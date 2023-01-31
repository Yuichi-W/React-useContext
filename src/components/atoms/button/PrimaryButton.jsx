import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// 既存のコンポーネントに大してCSSを上書きする記載方法「styled(コンポーネント名)」
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
