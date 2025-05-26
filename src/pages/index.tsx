import { FC, memo } from "react";
import { Avatar, Box, Grid2, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import Layout from "../components/layout/layout";
import WelcomeText from "../components/welcome/welcome-text";
import WelcomeForm from "../components/welcome/welcome-form";

const Page: FC = memo(() => {
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Layout background>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Grid2
          container
          spacing={2}
          direction="row"
          sx={{
            padding: '21px',
            justifyContent: "center",
            alignItems: "center",
            ...(mdMatch ? {
              minHeight: "100vh",
              flexDirection: "column-reverse",
              display: "flex",
            } : {
              display: "flex",
              minHeight: "calc(100vh - 48px)",
            }),
          }}
        >
          <Grid2
            size={{
              xs: 12,
              md: 7,
            }}
          >
            <WelcomeText />
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              md: 5,
            }}
          >
            {mdMatch && (
              <Link
                underline="none"
                color="inherit"
                href="/"
                sx={{
                  display: "flex",
                  marginBottom: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ width: 55, height: 55, padding: "5px" }} src="/icon0.svg" />
                <Box>
                  <Typography component="h1" sx={{
                    textTransform: "uppercase",
                    lineHeight: 1,
                    fontSize: "1rem",
                    marginTop: 1,
                  }}>
                    Secure Motors International LTD
                  </Typography>
                  <Typography component="h2" variant="caption" sx={{
                    opacity: 0.6,
                    fontSize: "0.8rem",
                  }}>
                    Mobile Auto Locksmith Service You Can Trust
                  </Typography>
                </Box>
              </Link>
            )}
            <WelcomeForm />
          </Grid2>
        </Grid2>
      </Box>
    </Layout>
  );
});

Page.displayName = "Page";
export default Page;
