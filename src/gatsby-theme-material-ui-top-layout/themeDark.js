import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = "#16a085"
const secondaryColor = "#9b59b6"
const teriairyColor = "#38ef7d"


export default createMuiTheme({
    palette: {
        type: 'dark',
        common: {
            blue: `${primaryColor}`,
            orange: `${secondaryColor}`
        },
        primary: {
            main: `${primaryColor}`
        },
        secondary: {
            main: `${secondaryColor}`
        },
        gradients: {
            primary: `linear-gradient(to left, ${primaryColor}, ${teriairyColor})`,
            secondary: 'this gradient'
        },
        shadows: {
            small: '0.8px 0.8px 4px rgba(0,0,0, 0.5)',
            medium: '1px 1px 4px rgba(0,0,0, 0.8), 1.5px 1.5px 5px rgba(0,0,0, 0.3)',
            large: '1px 1px 4px rgba(0,0,0, 0.8), 1.5px 1.5px 5px rgba(0,0,0, 0.3),2px 2px 6px rgba(0,0,0, 0.2)',
        }
    },
    typography: {
        tab: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.1rem',
            textTransform: 'uppercase'
        },
        ocean: {
            fontFamily: 'Patrick Hand',
            fontSize: '1.1rem',
            lineHeight: '1.1rem',
            color: 'white',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                padding: '0.5rem 2rem'
            }
        }
    }
})
