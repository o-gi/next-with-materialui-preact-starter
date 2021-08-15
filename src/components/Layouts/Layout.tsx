import { Box, Container } from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";

const HeaderBarFixed = (): JSX.Element => {
  return (
    <Box
      sx={{
        borderBottomStyle: "solid",
        borderBottomColor: "gray.main",
        borderBottomWidth: "1px",
        position: "fixed",
        height: 72,
        lineHeight: "72px",
        width: "100%",
        background: "gray.light",
        zIndex: 3000,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
        }}
      >
        <Box>
          <Link href="/" passHref>
            <Box
              sx={{
                color: "gray.dark",
                fontSize: "19px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Next with Material-ui Preact Starter
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

type LayoutProps = {
  children: ReactNode;
  headerBar?: "primary" | "fixed" | "none";
  title?: string;
};

const Layout = ({ children, headerBar, title }: LayoutProps): JSX.Element => {
  const getTitle = () => {
    const sp = "&nbsp";
    if (title !== undefined) {
      return sp + "|" + sp + title;
    }
    return null;
  };
  return (
    <>
      <Head>
        <title>{"Next with Material-ui Preact Starter" + getTitle()}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Box component="main" display="flex" flexDirection="column" height="100%">
        {headerBar === "fixed" && <HeaderBarFixed />}
        <Box
          sx={{
            mt: headerBar === "fixed" ? 9 : 0,
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              pt: 5,
            }}
          >
            {children}
          </Container>
        </Box>
      </Box>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </>
  );
};

Layout.defaultProps = {
  headerBar: "none",
};

export default Layout;
