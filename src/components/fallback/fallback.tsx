import { Stack, CircularProgress } from "@mui/material";
import { FC, memo } from "react";

const Fallback: FC = memo(() => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress size={21} />
    </Stack>
  )
});

Fallback.displayName = "Fallback";
export default Fallback;
