import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import styled, { ThemeContext, ThemeProvider } from "styled-components";
import { MobileNavBar } from "../components/MobileNavBar";
import { NavBar } from "../components/NavBar";
import { AuthGuard } from "../HOC/AuthGuard";
import useMediaQuery from "../hooks/useMediaQuery";
import store from "../redux/store";
import breakpoints from "../theme/breakpoints";
import { GlobalStyles } from "../theme/globalStyles";
import { themeDefault } from "../theme/theme";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/router";
import Login from "./login";
import { createContext } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ReduxThemeProvider } from "../HOC/ReduxThemeProvider";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, status, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ReduxThemeProvider>
            <GlobalStyles />
            <Wrapper>
              <AuthGuard>
                <ViewBox>
                  <MobileNavBar />
                  <NavBar />
                  <Component {...pageProps} />
                </ViewBox>
              </AuthGuard>
            </Wrapper>
          </ReduxThemeProvider>
        </Provider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;
  background-color: #8ec5fc;
  background-image: ${(props) => props.theme.colors.gradient};

  @media only screen and ${breakpoints.device.sm} {
  }
  @media only screen and ${breakpoints.device.lg} {
    background: blue;
  }
`;
const ViewBox = styled.div`
  width: 90vw;
  height: 85vh;
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  background: ${(props) => props.theme.colors.secondaryBg};
  border-radius: 30px;
  box-shadow: 0px 0px 0px 18px rgba(255, 255, 255, 0.3);
  @media only screen and ${breakpoints.device.sm} {
    width: 100vw;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    flex-flow: column;
    overflow-y: scroll;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 100vw;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    flex-flow: column;
    overflow-y: scroll;
  }
`;
