import { ClickAwayListener, Link, MenuItem, MenuList, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import LOCATIONS from "../locations/locations.json";

export default function Locations() {
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
              {LOCATIONS.map((i, key) => (
                <MenuItem key={key} sx={{
                  fontWeight: 200,
                  padding: 1,
                }} onClick={() => {
                  router.push(`/locations/${i.slug}`);
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
            <Link onClick={onClickOpen} component="button" color={open ? "primary" :"secondary"} underline="none" sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}>
              Locations
            </Link>
          </Typography>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
}