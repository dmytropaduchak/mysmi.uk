import { Button, ClickAwayListener, MenuItem, MenuList, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import SERVICES from "../services/services.json";
import { MiscellaneousServicesOutlined } from "@mui/icons-material";

export default function() {
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
              {SERVICES.map((i, key) => (
                <MenuItem key={key} sx={{
                  fontWeight: 200,
                  padding: 1,
                }} onClick={() => {
                  router.push(`/services/${i.slug}`);
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
            startIcon={<MiscellaneousServicesOutlined color={open ? "primary" : "secondary"} fontSize="small" />}
            sx={{
              borderRadius: 16,
              paddingRight: 2,
              paddingLeft: 2,
            }}>
            Services
          </Button>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
}