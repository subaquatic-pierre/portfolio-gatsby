import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemIcon from '@material-ui/core/ListItemIcon';

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
                        <ListItem key={index} >
                            <ListItemText primary={item.title} />
                        </ListItem>
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