import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
    }

    body {
        background-color: ${Colors.black};
    }

    html {
          font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
    }
`;
