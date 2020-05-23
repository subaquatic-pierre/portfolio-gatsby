// Menu objects
const menuItems = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'ProjectsMore',
        path: '/projects'
    },
    {
        name: 'Projects',
        ariaControls: 'menu-list-grow',
        hasPopup: 'true',
        subMenuItems: [
            {
                name: 'Whales',
                path: '/whales'
            },
            {
                name: 'Sharks',
                path: '/sharks'
            },
            {
                name: 'Corals',
                path: '/corals'
            },
        ]
    },
    {
        name: 'Toolbox',
        path: '/toolbox'
    },
    {
        name: 'The Revolution',
        path: '/revolution'
    },
    {
        name: 'About us',
        path: '/about'
    },
    {
        name: 'Contact us',
        path: '/contact'
    },
]

export default menuItems;