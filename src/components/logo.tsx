import { Box, IconButton, Link } from "@mui/material";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

export default function Logo() {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <Box sx={{
      justifyContent: "space-between",
      alignItems: "center",
      display: "flex",
      padding: 2,
    }}>
      <Box>
        <Link underline="none" color="secondary" onClick={onClick}>
          paduchak.com
        </Link>
      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        alignItems: "center",
      }}>
        <IconButton color="secondary" href="https://www.instagram.com/" target="_blank">
          <Instagram fontSize="small"/>
        </IconButton>
        <IconButton color="secondary" href="https://www.facebook.com/" target="_blank">
          <Facebook fontSize="small"/>
        </IconButton>
        <IconButton color="primary" target="_blank" href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>
          <WhatsApp fontSize="small"/>
        </IconButton>
      </Box>
    </Box>
  );
}
