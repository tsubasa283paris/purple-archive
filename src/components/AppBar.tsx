import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { drawerWidth } from './Drawer';

interface AppBarProxyProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBarProxy = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProxyProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface AppBarProps {
  open: boolean;
  onClickOpenDrawer: () => void;
}

export const AppBar = (props: AppBarProps) => {
  return (
    <AppBarProxy position='fixed' open={props.open}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={props.onClickOpenDrawer}
          edge='start'
          sx={{
            marginRight: 5,
            ...(props.open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            my: '1em',
            display: 'flex',
            justifyContent: 'center',
            maxHeight: 32,
          }}
        >
          <Box
            component='img'
            src='/logofull_white.png'
            alt='service logo'
            style={{
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'scale-down',
              pointerEvents: 'none',
            }}
          />
        </Box>
      </Toolbar>
    </AppBarProxy>
  );
};
