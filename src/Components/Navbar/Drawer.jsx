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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function TemporaryDrawer({
  state,setState}) {
  let maindata = [
    {
      id:1,
      name:'О нас',
      son:600,
    },
    {
      id:1,
      name:'Турниры',
      son:2650,
    },
    {
      id:1,
      name:'Счёты',
      son:9200,
    }
    , {
      id:1,
      name:'Фото',
      son:4670,
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
    <Box  style={{backgroundColor: '#1D044F', color: 'white'}}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 ,
    height:'100vh'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {maindata.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>Scrolling(text.son)}>
              <ListItemIcon>
                {index % 0 === 0 ? <InboxIcon style={{color: 'gray'}} /> : <ChevronRightIcon style={{color: 'gray'}} />}
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
    <div style={{backgroundColor:'red'}} >
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
