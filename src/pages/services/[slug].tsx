import { GetServerSideProps } from "next";
import { services } from "../../services/services";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import { Box, Button, Card, CardActionArea, CardContent, Typography, useTheme } from "@mui/material";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useAtom } from "jotai";
import { atom, THEMES } from "../../atom/atom";
import { useCallback, useMemo } from "react";
import { AutoAwesome, PhoneInTalk } from "@mui/icons-material";

export const getServerSideProps = (async (context) => {
  return { props: context.params! };
}) satisfies GetServerSideProps<ParsedUrlQuery>

interface Props {
  slug: string;
}

export default function Service({ slug }: Props) {
  const [data] = useAtom(atom);

  const theme = useTheme();

  const service = useMemo(() => {
    return services.get(slug);
  }, [slug]);

  const backgroundImage = useMemo(() => {
    return data.theme === THEMES.DARK
      ? "radial-gradient(circle at 50% 14em, #333333 0%, #222222 60%, #000000 100%)"
      : "radial-gradient(circle at 50% 14em, #ffffff 0%, #eeeeee 60%, #cccccc 100%)";
  }, [data.theme]);

  const onClickEmergencyCall = useCallback(() => {
    fetch("/api/phonecall", {
      method: "POST",
      keepalive: true,
    });
  }, []);

  const img = useMemo(() => {
    const imgs = [1,2];
    return imgs[Math.floor(Math.random() * imgs.length)];
  }, []);

  const onClickQuickBooking = useCallback(() => {

  }, []);

  return (
    <>
      <Head>
        <title>{service?.metaTitle ?? `${service?.name ?? "Service"} | mySMI.uk`}</title>
        <meta name="description" content={service?.metaDescription} />
        <meta name="keywords" content={service?.metaKeywords}/>
      </Head>
      <Box
        sx={{
          backgroundImage,
          display: "flex",
          minHeight: "100vh",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box
          sx={{
            maxWidth: 1200,
            flex: 1,
            mx: "auto",
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 3, md: 6 } }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h1" sx={{
                mb: 1,
                fontSize: "2.1rem",
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}>
                {service?.name}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, textAlign: { xs: "center", md: "left" } }}
              >
                {service?.subtitle}
              </Typography>

              <Typography variant="h2" sx={{
                fontSize: "1.5rem",
                mb: 2,
              }}>
                {service?.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {service?.description}
              </Typography>
            </Box>

            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <Card sx={{ width: "100%", maxWidth: 560, borderRadius: 2, overflow: "hidden" }}>
                <CardActionArea
                  component="div"
                  sx={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4 / 3",
                    display: "block",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: `url('/assets/services/${service?.slug}${img}.jpg') no-repeat center / cover`,
                      filter: `grayscale(1) blur(1.5px) contrast(1.05) brightness(${data.theme === THEMES.DARK ? 0.9 : 0.5})`,
                      transform: "scale(1.02)",
                      transition: "filter 200ms ease",
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "relative",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      px: { xs: 3, md: 4 },
                      py: { xs: 3, md: 4 },
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: "2.8rem",
                        lineHeight: 1.1,
                        mb: 1,
                        color: "#fff",
                      }}
                    >
                      Need help?
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255,255,255,0.92)",
                      }}
                    >
                      Don&apos;t hesitate to contact our customer service for more help and offer
                    </Typography>
                    <Box
                      sx={{
                        mt: 3,
                        display: "flex",
                        gap: 2,
                        justifyContent: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <Button
                        variant="contained"
                        href={`tel:+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                        onClick={onClickEmergencyCall}
                        sx={{
                          borderRadius: 16,
                          px: 3,
                          [theme.breakpoints.down('md')]: {
                            width: "100%",
                          },
                        }}
                      >
                        <PhoneInTalk fontSize="small" sx={{ mr: 1 }} />
                        Emergency call
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={onClickQuickBooking}
                        sx={{
                          borderRadius: 16,
                          px: 3,
                          [theme.breakpoints.down('md')]: {
                            width: "100%",
                          },
                        }}
                      >
                        <AutoAwesome fontSize="small" sx={{ mr: 1 }} />
                        Quick booking
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
