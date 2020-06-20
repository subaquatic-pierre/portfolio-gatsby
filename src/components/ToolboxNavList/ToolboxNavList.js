import React from 'react';
import {
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    Hidden,
    Paper,
    Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import { toolBoxNav } from '../../pagedata/toolBoxData'

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const ToolboxNavList = () => {
    return (
        <>
            <List component="nav" aria-label="main mailbox folders">
                {toolBoxNav.map((item, index) => {
                    return (
                        <ListItemLink key={index} href={item.link}>
                            <ListItemText primary={item.title} />
                        </ListItemLink>
                    )
                })}
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <List component="nav" >
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" />
                </ListItemLink>
            </List>
        </>
    )
}

export default ToolboxNavList