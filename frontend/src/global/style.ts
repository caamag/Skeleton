import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    body {
        background-color: ${Colors.black};
    }

    html {
          font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
    }

    input {
        border: none;
        padding: 1rem;
    }
`;
