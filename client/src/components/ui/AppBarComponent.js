import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { StayPrimaryLandscape } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

export default function AppBarComponent() {
  const classes = useStyles();

  const handleMenuVisibility = () => {
    console.log('abrir menu')
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenuVisibility}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Bitboxer2 App
          </Typography>

          <Button component={Link} to={'/items'} color="inherit" >Items</Button>
          <Button component={Link} to={'/users'} id='users' color="inherit" >Users</Button>
          <Button component={Link} to={'/login'} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
