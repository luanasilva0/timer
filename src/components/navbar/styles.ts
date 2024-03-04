import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 20px 30px;
  background-color: #202024;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .tooltip {
    font-size: 14px;
    font-weight: 700;
    line-height: 140%;
    border-radius: 5px;
    background-color: #09090a;
    transition: 0.1s;
  }
`;

export const Link = styled.a`
  padding: 12px;
  width: 48px;
  height: 48px;
  border: none;
  background: none;
  text-decoration: none;

  &:hover {
    border-bottom: 3px solid #00875f;
  }
`;
