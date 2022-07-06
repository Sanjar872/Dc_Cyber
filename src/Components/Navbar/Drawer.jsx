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
import { Brendimg, Localniset, MenuBrend } from './drstyle';
import Brendimgg from '../F-image/Logotip-img.png'

//icons
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import Facebookk from '../S-image/Facebook.png'
import Telegram from '../S-image/la_telegram.png'
import Intagram from '../S-image/instagram.png'
import YouTubee from '../S-image/youtube.png'
export default function TemporaryDrawer({
  state,setState}) {
  let maindata = [
    {
      id:1,
      name:'О нас',
      son:600,
      icon:<GroupsIcon/>
      
      

    },
    {
      id:1,
      name:'Турниры',
      son:2650,
      icon:<SportsEsportsIcon/>
 
    },
    {
      id:1,
      name:'Счёты',
      son:9200,
      icon:<ScoreboardIcon/>
    }
    , {
      id:1,
      name:'Фото',
      son:4670,
      icon:<CameraAltIcon/>

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
    height:'100vh',
    position: 'relative'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MenuBrend>
        <Brendimg src={Brendimgg} alt="" />
      </MenuBrend>

      <List>
        {maindata.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>Scrolling(text.son)}>
              <ListItemIcon>
                <div style={{color:'#fff'}}>{text.icon}</div>
                
              </ListItemIcon>
              <ListItemText primary={text.name}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
      <Localniset>
          <div>
            <img src={Facebookk} alt="" />
            <img src={Telegram} alt="" />
            <img src={Intagram} alt="" />
            <img src={YouTubee} alt="" />



          </div>
      </Localniset>
      
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
