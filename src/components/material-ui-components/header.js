import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { FaLinkedin } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  dark: {
    backgroundColor:'black'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.dark}  position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <span className="weatherApiTitle">Weather Api</span>
          </Typography>
          <a className='linkedIn' href='https://www.linkedin.com/in/kamilpozezynski/' color="inherit">Developed By kamil Pozezynski <FaLinkedin></FaLinkedin></a>
        </Toolbar>
      </AppBar>
    </div>
  );
}