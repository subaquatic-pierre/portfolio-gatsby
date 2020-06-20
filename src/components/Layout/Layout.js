import React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core';
import { withPrefix } from 'gatsby'

import Header from '../Header';
import Footer from '../Footer';
import useSiteMetadata from '../../hooks/use-site-metadata';

const useStyles = makeStyles(theme => ({
    layout: {
        overflow: 'hidden',
        minHeight: '50vh',
        marginTop: '6rem',
    },
}))



const Layout = ({
    children,
    title,
    description,
    socialImage }) => {

    // SET THEME STUFF

    // const [stateTheme, setTheme] = useState(theme)

    // const toggleTheme = (type) => {
    //     if (type === 'dark') {
    //         setTheme(themeDark)
    //     } else if (type === 'light') {
    //         setTheme(theme)
    //     }
    // }

    // useEffect(() => {
    //     const path = window.location.pathname
    //     if (path === '/toolbox') {
    //         toggleTheme('dark')
    //     } else (
    //         toggleTheme('light')
    //     )
    // })

    const classes = useStyles()
    const siteMetaData = useSiteMetadata();
    const metaImage = socialImage != null ? socialImage : siteMetaData.author.photo;
    const metaImageUrl = siteMetaData.url + withPrefix(metaImage);

    const toggleTheme = () => {
        // console.log('this is to toggle theme')
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    {title
                        ?
                        `${title} | ${siteMetaData.title}`
                        :
                        siteMetaData.title
                    }
                </title>
                <meta name="description" content={description} />
                <meta property="og:site_name" content={title} />
                <meta property="og:image" content={metaImageUrl} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={metaImageUrl} />
            </Helmet>
            <CssBaseline />
            <Header menuItems={siteMetaData.menu} toggleTheme={toggleTheme} />
            <div className={classes.layout}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;