import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  padding-right: 40px;
  padding-left: 20px;
  background-color: rgb(222, 205, 226);
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 2px solid black;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 2px;
  }
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  margin-left: 50px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;
export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const FooterNav = styled.div`
  margin-top: 30px;
  width: 100%;
  position: "fixed";
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  padding: 10px;
  height: 50px;
  background-color: rgb(222, 205, 226);
  border-top: 2px solid black;
`;

export const FooterHeading = styled.h2`
  padding: 0;
  margin: 0;
`;
