import styled from "styled-components";
import * as S from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 65px;
  right: 40px;
  z-index: 5;

  ${S.BaseButton},
  ${S.GoogleSignInButton},
  ${S.InvertedButton} {
    font-size: 12px;
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
export type CartItemsScroll = {
  scroll?: number;
};

export const CartItems = styled.div<CartItemsScroll>`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: ${(props) => (props.scroll ? "scroll" : "hidden")};
`;
