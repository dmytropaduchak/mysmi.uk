import { Close } from '@mui/icons-material';
import { Alert, IconButton, Stack, useTheme } from '@mui/material';
import { useAtom } from 'jotai';
import { FC, Fragment, memo } from 'react';
import state from '../../utils/state/state';

export const Notification: FC = memo(() => {
  const [data, setData] = useAtom(state);
  const theme = useTheme();

  return (
    <Fragment>
      <Stack sx={{
        position: 'fixed',
        zIndex: '2000',
        right: '8px',
        top: '8px',
      }} spacing={1}>
        {data.notifications.map((i, key) => (
          <Alert key={key} variant="filled" action={
            <IconButton color="inherit" size="small" onClick={() => {
              const notifications = data.notifications.filter((notification) => notification.text !== i.text);
              setData({ ...data, notifications });
            }}>
              <Close fontSize="small" />
            </IconButton>
          } sx={{
            width: '350px',
            whiteSpace: 'normal',
            '& a': {
              color: theme.palette.info.contrastText
            }
          }} severity={i.type}>
            {i.text}
          </Alert>
        ))}
      </Stack>
    </Fragment>
  );
});

Notification.displayName = "Notification";
export default Notification;
