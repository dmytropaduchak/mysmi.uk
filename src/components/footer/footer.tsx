import { ChangeEvent, FC, memo, useCallback, useEffect, useState } from "react";
import { Grid2, Typography, Switch, Button, styled, useMediaQuery, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";
import state, { THEMES } from "../../utils/state/state";
import { useAtom } from "jotai";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  [theme.breakpoints.down('md')]: {
    marginLeft: "8px",
  },
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1890ff',
        ...theme.applyStyles('dark', {
          backgroundColor: '#177ddc',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));

const Footer: FC = memo(() => {
  const [data, setData] = useAtom(state);
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const pathname = usePathname()
  const mdMatch = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setChecked(data.theme === THEMES.LIGHT)
  }, [data, setChecked]);

  const onChange = useCallback((ev: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const theme = checked ? THEMES.LIGHT : THEMES.DARK;
    setData({ ...data, theme });
  }, [data, setData]);


  return (
    <Grid2
      container
      spacing={2}
      direction="row"
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "space-between",
        padding: "0px 8px",
      }}
    >
      <Grid2 size={{
        xs: 12,
        md: 4,
      }}>
        <Typography
          variant="overline"
          sx={{
            mb: 2,
            textAlign: "center",
            [theme.breakpoints.down('md')]: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
          }}
        >
          Copyright © {new Date().getFullYear()} MySMI.UK
          {mdMatch && (
            <AntSwitch
              size="small"
              checked={checked}
              onChange={onChange}
            />
          )}
        </Typography>
      </Grid2>
      <Grid2 size={{
        xs: 12,
        md: 8
      }} sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
      }}>
        {!mdMatch && (
          <>
            <Button
              size="small"
              color={pathname == "/cookie-policy" ? "primary" : "inherit"}
              sx={{
                borderRadius: "20px",
                paddingLeft: 2,
                paddingRight: 2,
              }}
              href="/cookie-policy"
            >Cookie Policy</Button>
            <Button
              size="small"
              color={pathname == "/privacy-policy" ? "primary" : "inherit"}
              sx={{
                borderRadius: "20px",
                paddingLeft: 2,
                paddingRight: 2,
              }}
              href="/privacy-policy"
            >Privacy Policy</Button>
            <Button
              size="small"
              color={pathname == "/terms-and-conditions" ? "primary" : "inherit"}
              sx={{
                borderRadius: "20px",
                paddingLeft: 2,
                paddingRight: 2,
              }}
              href="/terms-and-conditions"
            >Terms And Conditions</Button>
          </>
        )}

        {!mdMatch && (
          <AntSwitch
            size="small"
            checked={checked}
            onChange={onChange}
          />
        )}
      </Grid2>
    </Grid2>
  )
});


Footer.displayName = "Footer";
export default Footer;

