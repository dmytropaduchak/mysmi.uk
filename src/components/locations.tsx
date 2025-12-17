import { Button, ClickAwayListener, MenuItem, MenuList, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import LOCATIONS from "../locations/locations.json";
import { LocationOn } from "@mui/icons-material";

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
      <div>
        <Tooltip
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
          <Button
            variant="text"
            color={open ? "primary" :"secondary"}
            onClick={onClickOpen}
            startIcon={<LocationOn color={open ? "primary" : "secondary"} fontSize="small" />}
            sx={{
              borderRadius: 16,
              paddingRight: 2,
              paddingLeft: 2,
            }}>
            Locations
          </Button>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
}