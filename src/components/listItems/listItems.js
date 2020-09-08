import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ListAltIcon from '@material-ui/icons/ListAlt';

export const mainListItems = (
  <div>
    <a href="/Dashboard/id:/"><ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </a>

    <ListItem button>
      <ListItemIcon>
        <RestaurantIcon />
      </ListItemIcon>
      <ListItemText primary="Recipes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EmojiPeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Fellow Chefs" />
    </ListItem>
    <a href="/Dashboard/id:/inputrecipe">
    <ListItem button>
      <ListItemIcon>
        <PlusOneIcon />
      </ListItemIcon>
      <ListItemText primary="Submit New" />
    </ListItem>
    </a>
    <ListItem button>
      <ListItemIcon>
        <SettingsApplicationsIcon />
      </ListItemIcon>
      <ListItemText primary="Account Settings" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>New Recipes</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Glass of water" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Bowl of Cereal" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Toast" />
    </ListItem>
  </div>
);