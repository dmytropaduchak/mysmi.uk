import { useAtom } from "jotai";
import { atom } from "../atom/atom";
import { Alert, IconButton, Snackbar, SnackbarContent } from "@mui/material";
import { useCallback } from "react";
import { Close } from "@mui/icons-material";

const autoHideDuration = 4000;

export default function Message() {
  const [data, setData] = useAtom(atom);

  const onClose = useCallback((index: number) => ()=> {
    const messages = data.messages.filter((_, i) => i !== index);
    setData({ ...data, messages });
  }, [data, setData]);

  return (
    <>
      {data.messages?.map((i, key) => (
        <SnackbarContent key={key} elevation={0} sx={{
          padding: 0,
          background: "transparent",
          "& .MuiSnackbarContent-message": {
            padding: 0,
            background: "transparent",
          },
        }} message={(
          <Snackbar
            open
            sx={{
              maxWidth: 350,
              position: "relative",
              left: "0px !important",
              bottom: "0px !important",
              '& .MuiPaper-root': {
                padding: 0,
              },
              '& .MuiAlert-message':{
                padding: 2,
                fontWeight: 300,
              }
            }}
            autoHideDuration={autoHideDuration}
            onClose={onClose(key)}
          >
            <Alert
              icon={false}
              severity={i.type}
              action={(
                <IconButton size="small" sx={{
                  position: "absolute",
                  top: "4px",
                  right: "4px",
                  zIndex: 1,
                }} onClick={onClose(key)}>
                  <Close fontSize="small" />
                </IconButton>
              )}
              variant="filled"
            >
              {i.text}
            </Alert>
          </Snackbar>
        )}/>
      ))}
    </>
  )
}
