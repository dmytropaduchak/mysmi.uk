import { Toolbar, Button, useTheme, useMediaQuery, Box, Avatar, Link, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { FC, memo } from "react";
import Image from "next/image";

const Header: FC = memo(() => {
  const theme = useTheme();
  const pathname = usePathname()
  const mdMatch = useMediaQuery(theme.breakpoints.down('md'));

  if (mdMatch) {
    return null;
  }

  return (
    <Toolbar variant="dense" sx={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <Box sx={{
        display: "flex",

        alignItems: "center",

      }}>
        <Link
          underline="none"
          color="inherit"
          href="/"
          sx={{
            display: "flex",
            marginRight: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 45, height: 45, padding: "5px" }} src="/icon0.svg" />
          <Box>
            <Typography component="h1" sx={{
              textTransform: "uppercase",
              lineHeight: 1,
              fontSize: "0.8125rem",
              marginTop: 1,
            }}>
              Secure Motors International LTD
            </Typography>
            <Typography component="h2" variant="caption" sx={{
              opacity: 0.6,
            }}>
              Mobile Auto Locksmith Service You Can Trust
            </Typography>
          </Box>
        </Link>
        <Button
          size="small"
          color={pathname === "/type-of-service" ? "primary" : "inherit"}
          href="/type-of-service"
          sx={{
            borderRadius: "20px",
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >Type Of Service</Button>
        <Button
          size="small"
          color={pathname === "/how-it-works" ? "primary" : "inherit"}
          href="/how-it-works"
          sx={{
            borderRadius: "20px",
            paddingLeft: 2,
            paddingRight: 2,
            marginRight: 2,
          }}
        >How It Works</Button>
        <Button
          size="small"
          color={pathname === "/about-us" ? "primary" : "inherit"}
          href="/about-us"
          sx={{
            borderRadius: "20px",
            paddingLeft: 2,
            paddingRight: 2,
            marginRight: 2,
          }}
        >About Us</Button>
        <Button
          size="small"
          color={pathname === "/contact-us" ? "primary" : "inherit"}
          href="contact-us"
          sx={{
            borderRadius: "20px",
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >Contact Us</Button>
      </Box>
      <Button
        color="inherit"
        size="small"
        href="https://war.ukraine.ua/support-ukraine/"
        startIcon={<Image src="/ukraine-flag.png" alt="Ukraine Flag" height={15} width={16}/>}
        sx={{
          borderRadius: "20px",
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >Stand with Ukraine</Button>
    </Toolbar>
  );
});

Header.displayName = "Header";
export default Header;