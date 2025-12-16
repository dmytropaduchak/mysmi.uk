import Head from "next/head";
import { Box, Link, Typography } from "@mui/material";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useAtom } from "jotai";
import { atom, THEMES } from "../../atom/atom";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";

export default function TermsAndAgreements() {
  const [data] = useAtom(atom);
  const router = useRouter();

  const backgroundImage = useMemo(() => {
    return data.theme === THEMES.DARK
      ? "radial-gradient(circle at 50% 14em, #333333 0%, #222222 60%, #000000 100%)"
      : "radial-gradient(circle at 50% 14em, #ffffff 0%, #eeeeee 60%, #cccccc 100%)";
  }, [data]);

  const onClickContactUs = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <>
      <Head>
        <title>Terms and Agreements | mySMI.uk</title>
        <meta
          name="description"
          content="Read mySMI.uk terms and agreements for using our website and mobile auto locksmith services, including quotes, bookings, payments, and liability."
        />
        <meta
          name="keywords"
          content="mySMI.uk terms, terms and agreements, mobile car locksmith terms, car key replacement terms, car unlocking terms"
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
              Terms and Agreements
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, textAlign: { xs: "center", md: "left" } }}>
              These terms apply to using the mySMI.uk website and to any mobile auto locksmith services we provide.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1 }}>
              Overview
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
              By using this website or booking services with{" "}
              <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                mySMI.uk
              </Box>
              , you agree to these Terms and Agreements. If you do not agree, please do not use the site or book a
              service.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1, mt: 3 }}>
              Our services
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
              We provide mobile auto locksmith services (for example: car unlocking, car key replacement, programming,
              repairs and related work) subject to availability and the details of your vehicle and situation.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1, mt: 3 }}>
              Quotes, bookings, and information you provide
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body1" color="text.secondary">
                  Quotes are based on the information you provide (make/model/year, key type, issue, and location). If
                  details change on arrival, the price or scope of work may change.
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body1" color="text.secondary">
                  You must have the legal right to request work on the vehicle. We may ask for proof of ownership and
                  identification before starting.
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body1" color="text.secondary">
                  You agree not to provide false, offensive, or unlawful information when contacting us or making a
                  booking.
                </Typography>
              </Box>
            </Box>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1, mt: 3 }}>
              Access and safety
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body1" color="text.secondary">
                  You must provide safe access to the vehicle and a safe working area. If the location is unsafe, we
                  may refuse or stop work.
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body1" color="text.secondary">
                  Please ensure you have any required permissions (for example, for parking or site access).
                </Typography>
              </Box>
            </Box>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1, mt: 3 }}>
              Payments
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body1" color="text.secondary">
                  Payment is due as agreed for the service provided (for example, after completion on-site).
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body1" color="text.secondary">
                  Unless stated otherwise, parts and materials used remain our property until paid for in full.
                </Typography>
              </Box>
            </Box>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1, mt: 3 }}>
              Liability and vehicle condition
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
              We take reasonable care when providing services. Some work (especially entry, key extraction, and ignition
              work) can involve risks depending on vehicle condition, previous repairs, or aftermarket modifications.
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body1" color="text.secondary">
                  We are not responsible for faults caused by pre-existing vehicle issues, prior repairs, or
                  aftermarket modifications.
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body1" color="text.secondary">
                  Nothing in these terms limits liability where it cannot be limited under law (for example, for death
                  or personal injury caused by negligence).
                </Typography>
              </Box>
            </Box>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1, mt: 3 }}>
              Changes to these terms
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              We may update these terms from time to time. The latest version will always be available on this page.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1, mt: 3 }}>
              Contact
            </Typography>
            <Typography variant="body1" color="text.secondary">
              If you have questions about these Terms and Agreements, please{" "}
              <Link
                onClick={onClickContactUs}
                underline="none"
                sx={{
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
              >
                contact us
              </Link>
              .
            </Typography>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
