import { ClickAwayListener, Link, MenuItem, MenuList, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import BRANDS from "../brands/brands.json";

export default function Brands() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onClickOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const onClickAway = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div style={{
        display: "flex",
      }}>
        <Tooltip
          placement="top"
          onClose={onClose}
          open={open}
          arrow
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={
            <MenuList autoFocusItem={open} sx={{
              padding: 0
            }}>
              {BRANDS.map((i, key) => (
                <MenuItem key={key} sx={{
                  fontWeight: 200,
                  padding: 1,
                }} onClick={() => {
                  router.push(`/brands/${i.slug}`);
                  setOpen(false);
                }}>{i.name}</MenuItem>
              ))}
            </MenuList>
          }
          slotProps={{
            popper: {
              disablePortal: true,
            },
          }}
        >
          <Typography variant="caption" sx={{
            marginLeft: 2,
            whiteSpace: "nowrap",
            fontWeight: 200,
          }}>
            <Link component="button" onClick={onClickOpen} color={open ? "primary" :"secondary"} underline="none" sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}>
              Brands
            </Link>
          </Typography>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
}