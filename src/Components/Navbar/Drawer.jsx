import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { color } from '@mui/system';

export default function TemporaryDrawer({
  state,setState}) {
  let maindata = [
    {
      id:1,
      name:'О нас',
      son:100,
    },
    {
      id:1,
      name:'О насjxj1',
      son:1000,
    },
    {
      id:1,
      name:'О насksdjajs',
      son:1500,
    }
    , {
      id:1,
      name:'О насrwer',
      son:1900,
    }
  ]

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      
  
      setState({ ...state, [anchor]: open });
    };

    const Scrolling = (son) => {
      window.scrollTo({
        top:son,
        behavior: 'smooth'
      })

    }

  const list = (anchor) => (
    <Box  style={{backgroundColor: '#001d3d', color: 'white'}}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {maindata.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>Scrolling(text.son)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon style={{color: 'gray'}} /> : <MailIcon style={{color: 'gray'}} />}
              </ListItemIcon>
              <ListItemText primary={text.name}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div >
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
