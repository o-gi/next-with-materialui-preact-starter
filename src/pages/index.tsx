import { Box, Typography } from "@material-ui/core";
import type { NextPage } from "next";
import Layout from "../components/Layouts/Layout";

const HomePage: NextPage = () => {
  return (
    <Layout headerBar="fixed" title="home">
      <Typography
        variant="h1"
        sx={{
          fontWeight: 600,
        }}
      >
        Hello World 😎
      </Typography>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "gray.main",
          borderRadius: 2,
          p: 2,
          width: "100%",
          maxWidth: 640,
        }}
      >
        Version 1.0
      </Box>
    </Layout>
  );
};

export default HomePage;
