import Head from "next/head";
import { Box, Link, Typography } from "@mui/material";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useAtom } from "jotai";
import { atom, THEMES } from "../../atom/atom";
import { useCallback, useMemo } from "react";

export default function ContactUs() {
  const [data] = useAtom(atom);

  const backgroundImage = useMemo(() => {
    return data.theme === THEMES.DARK
      ? "radial-gradient(circle at 50% 14em, #333333 0%, #222222 60%, #000000 100%)"
      : "radial-gradient(circle at 50% 14em, #ffffff 0%, #eeeeee 60%, #cccccc 100%)";
  }, [data]);

  const onClickPhone = useCallback(() => {
    fetch("/api/phonecall", {
      method: "POST",
      keepalive: true,
    });
  }, []);

  const onClickWhatsApp = useCallback(() => {
    fetch("/api/whatsapp", {
      method: "POST",
      keepalive: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Contact Us | mySMI.uk</title>
        <meta
          name="description"
          content="Contact mySMI.uk for fast mobile auto locksmith help: car unlocking, key replacement, programming, and repairs. Call, WhatsApp, or email us."
        />
        <meta
          name="keywords"
          content="contact mySMI.uk, mobile car locksmith contact, emergency car lockout, car key replacement contact, WhatsApp locksmith, call locksmith"
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
          <Box sx={{ maxWidth: 900 }}>
            <Typography
              variant="h1"
              sx={{
                mb: 1,
                fontSize: "2.1rem",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Contact Us
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, textAlign: { xs: "center", md: "left" } }}>
              We’re here to answer your questions and help with your mobile car locksmith needs.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1 }}>
              General Inquiries
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
              Locked out, lost your keys, or need a spare? Call{" "}
              <Link
                underline="none"
                href={`tel:+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                onClick={onClickPhone}
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                +{process.env.NEXT_PUBLIC_PHONE_NUMBER}
              </Link>
              , message us on{" "}
              <Link
                underline="none"
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                onClick={onClickWhatsApp}
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                WhatsApp
              </Link>{" "}
              or email{" "}
              <Link underline="none" href="mailto:contact@mysmi.uk" sx={{ "&:hover": { color: "primary.main" } }}>
                contact@mysmi.uk
              </Link>
              . If you email us, we aim to respond within 1-2 business days.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1, mt: 3 }}>
              Feedback &amp; Suggestions
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
              Your experience matters. If you have feedback or ideas for improving our service or website, let us know
              — we’re always listening.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1, mt: 3 }}>
              Partnership Opportunities
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
              Interested in collaborating with mySMI.uk? We’re open to working with garages, dealerships, recovery
              operators, fleet managers, and local businesses. Contact us to explore opportunities.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1, mt: 3 }}>
              Technical Support
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
              If you encounter any issues with the website (pages not loading, forms not working, or links), please
              include your device, browser, and a short description of what happened so we can fix it quickly.
            </Typography>
          </Box>
        </Box>

        <Footer />
      </Box>
    </>
  );
}
