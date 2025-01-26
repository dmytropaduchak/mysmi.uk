import { HomeOutlined } from "@mui/icons-material";
import { Toolbar, IconButton, Button, useTheme, useMediaQuery, Box } from "@mui/material";
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
      <Box>
        <IconButton
          size="small"
          color={pathname === "/" ? "primary" : "inherit"}
          href="/"
        >
          <HomeOutlined fontSize="small" />
        </IconButton>
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