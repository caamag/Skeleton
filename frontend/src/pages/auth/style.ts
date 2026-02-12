import styled from "styled-components";
import { Colors } from "../../global/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${Colors.gray};
    margin: 20px 0px;
  }

  input {
    width: 100%;
    max-width: 400px;
    border: 1px solid ${Colors.gray};
    background: transparent;
    font-size: 14px;
    border-radius: 5px;
    color: ${Colors.gray};
    font-weight: 400;
    margin: 10px 0px;

    &::placeholder {
      color: ${Colors.gray};
    }
  }

  button {
    width: 100%;
    max-width: 400px;
    margin-top: 10px;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  filter: drop-shadow(0 4px 10px rgba(113, 113, 113, 0.4));
  margin-top: -50px;
`;

export const ChangeVisibilityContainer = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 20px;
  color: white;
  font-size: 14px;

  span {
    color: ${Colors.secundary};
    margin-left: 10px;
    cursor: pointer;
  }
`;
