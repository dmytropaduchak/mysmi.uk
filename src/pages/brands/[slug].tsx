import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import { Box, Button, Card, CardActionArea, CardContent, Typography, useTheme } from "@mui/material";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useAtom } from "jotai";
import { atom, THEMES } from "../../atom/atom";
import { useCallback, useMemo } from "react";
import { PhoneInTalk } from "@mui/icons-material";
import BRANDS from "../../brands/brands.json";
import Booking from "../../components/booking";

export const brands = new Map(BRANDS.map((i) => [i.slug, i]));

export const getServerSideProps = (async (context) => {
  return { props: context.params! };
}) satisfies GetServerSideProps<ParsedUrlQuery>

interface Props {
  slug: string;
}

export default function Brand({ slug }: Props) {
  const [data] = useAtom(atom);

  const theme = useTheme();

  const brand = useMemo(() => {
    return brands.get(slug);
  }, [slug]);

  const backgroundImage = useMemo(() => {
    return data.theme === THEMES.DARK
      ? "radial-gradient(circle at 50% 14em, #333333 0%, #222222 60%, #000000 100%)"
      : "radial-gradient(circle at 50% 14em, #ffffff 0%, #eeeeee 60%, #cccccc 100%)";
  }, [data.theme]);

  const onClickCallNow = useCallback(() => {
    fetch("/api/phonecall", {
      method: "POST",
      keepalive: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>{brand?.metaTitle}</title>
        <meta name="description" content={brand?.metaDescription} />
        <meta name="keywords" content={brand?.metaKeywords}/>
        
        <link rel="canonical" href={`https://mysmi.uk/brands/${brand?.slug}`}/>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `https://mysmi.uk/brands/${brand?.slug}/#service`,
              "name": `${brand?.name} Locksmith Services`,
              "description": `Professional ${brand?.name} car key replacement, programming and lockout services in Hertfordshire.`,
              "serviceType": "Car Locksmith",
              "brand": {
                "@type": "Brand",
                "name": brand?.name
              },
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Hertfordshire"
              },
              "provider": {
                "@type": "LocalBusiness",
                "@id": 'mySMI.uk/#business',
                "name": "mySMI.uk",
                "telephone": `+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Hertfordshire",
                  "addressCountry": "GB"
                }
              }
            }),
          }}
        />
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
                {brand?.name}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, textAlign: { xs: "center", md: "left" } }}
              >
                {brand?.subtitle}
              </Typography>

              <Typography variant="h2" sx={{
                fontSize: "1.5rem",
                mb: 2,
              }}>
                {brand?.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {brand?.description}
              </Typography>
            </Box>

            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <Card sx={{ width: "100%", maxWidth: 480, borderRadius: 2, overflow: "hidden" }}>
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
                      backgroundImage: `url('/assets/brands/${brand?.slug}.webp')`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: { xs: "auto 55%", md: "auto 60%" },
                      filter: `grayscale(1) brightness(${data.theme === THEMES.DARK ? 0.35 : 0.6})`,
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
                        onClick={onClickCallNow}
                        sx={{
                          borderRadius: 16,
                          px: 3,
                          [theme.breakpoints.down('md')]: {
                            width: "100%",
                          },
                        }}
                      >
                        <PhoneInTalk fontSize="small" sx={{ mr: 1 }} />
                        Call now
                      </Button>
                      <Booking />
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
