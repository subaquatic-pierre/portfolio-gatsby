import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link, Button } from 'gatsby-theme-material-ui';
import { makeStyles } from '@material-ui/core'
import {
    Tab,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Grow,
    ClickAwayListener,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    menuStyle: {
        backgroundColor: theme.palette.common.blue,
        color: theme.palette.common.white,
    },
    menuList: {
        minWidth: '8rem',
        padding: '0'
    },
    menuItem: {
        ...theme.typography.tab,
        padding: '0.8rem 1.5rem',
        opacity: '0.7',
        "&:hover": {
            opacity: '1'
        }
    },
    selectedMenuItem: {
        backgroundColor: theme.palette.primary.dark,
        opacity: '1'
    },
    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px',
        position: 'relative'
    },
    button: {
        ...theme.typography.ocean,
        padding: '0.7rem 1.5rem',
        borderRadius: '50px',
        margin: 'auto 1rem',
    },
    activeTab: {
        opacity: '1',
        '&:after': {
            color: 'red',
            content: "''",
            position: 'absolute',
            bottom: '-2px',
            backgroundColor: theme.palette.secondary.main,
            height: '3px',
            width: '90%',
            borderRadius: '4px'
        }
    }
}))

const NavTabs = props => {
    // Set achor ref for SubMenu
    const anchorRef = useRef()
    const classes = useStyles()
    const [subMenuOpen, setSubMenuOpen] = useState(false)

    // State is controlled by parent
    const { activeTab,
        setActiveTab,
        subMenuIndex,
        setSubMenuIndex,
        checkActiveSubMenuIndex,
        menuItems
    } = props

    const projectSubMenu = menuItems[2].subMenuItems

    // Event handlers
    const handleTabChange = (event, newActiveTab) => {
        if (newActiveTab !== 1) {
            setActiveTab(newActiveTab)
            setSubMenuIndex(false)
        } else {
            checkActiveSubMenuIndex(newActiveTab)
        }
    }

    const handleSubMenuClick = (event, index) => {
        setSubMenuIndex(index)
        setActiveTab(1)
    }

    const handleSubMenuToggle = (e) => {
        const prevSubMenuOpen = !subMenuOpen
        setSubMenuOpen(prevSubMenuOpen)
    }

    const handleSubMenuClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }
        setSubMenuOpen(false)
    }

    const handleSubMenuKeyDown = event => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setSubMenuOpen(false)
        }
    }

    // Check active tab on component change
    useEffect(() => {
        const path = window.location.pathname
        // Check active tab and set active tab index
        menuItems.forEach((item, index) => {
            if (checkActiveSubMenuIndex(index) === false && item.link === path) {
                setActiveTab(index)
            }
        }
        )
    }, [menuItems, activeTab, setActiveTab, checkActiveSubMenuIndex])

    return (
        <>
            <div
                onChange={handleTabChange}
                className={classes.tabContainer}
            >
                {menuItems.map((item, index) => {
                    if (item.subMenuItems !== undefined) {
                        return (
                            <Link key={index}>
                                <Tab

                                    ref={anchorRef}
                                    disableRipple
                                    aria-controls={subMenuOpen ? item.ariaControls : undefined}
                                    onClick={handleSubMenuToggle}
                                    aria-haspopup={item.hasPopup}
                                    className={classes.tab}
                                    label={item.name}
                                />
                            </Link>
                        )
                    } else {
                        return (
                            <Button
                                to={item.path}
                                key={index}
                                disableRipple
                                className={clsx(classes.tab, { [classes.activeTab]: index === activeTab })}
                            >
                                {item.name}
                            </Button>

                        )
                    }

                })}
            </div>
            <Button
                onClick={(event) => { handleTabChange(event, false) }}
                to='/contact'
                variant='contained'
                color='secondary'
                className={classes.button}
            >
                Join The Ocean
                            </Button>
            <Popper open={subMenuOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transitionOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper classes={{ root: classes.menuStyle }} elevation={0} >
                            <ClickAwayListener onClickAway={handleSubMenuClose}>
                                <MenuList
                                    classes={{ root: classes.menuList }}
                                    autoFocusItem={subMenuOpen}
                                    id='menu-list-grow'
                                    onKeyDown={handleSubMenuKeyDown}
                                >
                                    {projectSubMenu &&
                                        projectSubMenu.map((option, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    classes={{
                                                        root: classes.menuItem,
                                                        selected: classes.selectedMenuItem
                                                    }}
                                                    selected={index === subMenuIndex}
                                                    component={Link}
                                                    to={option.path}
                                                    onClick={(event) => { handleSubMenuClose(event); handleSubMenuClick(event, index) }}
                                                >
                                                    {option.name}
                                                </MenuItem>
                                            )
                                        })}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    )
}

export default NavTabs;