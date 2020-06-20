import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, Button } from '@material-ui/core';
import { Grid, Typography, Fade } from '@material-ui/core';

import Divider from '../Divider'


const useStyles = makeStyles(theme => ({
    heroBackground: {
        minHeight: '65vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    heroContainer: {
        minHeight: '75vh',
        color: 'white',
        textShadow: theme.palette.shadows.large,
        '& button': {
            marginTop: '0.8rem'
        }
    },
    headingText: {
        textShadow: theme.palette.shadows.large
    }
}))
const TopHero = props => {
    const { backgroundImage, noText } = props
    const classes = useStyles()
    const data = useStaticQuery(graphql`
    query galleryImages {
        allFile(filter: {sourceInstanceName: {eq: "images"}, name: {eq:"coral"}}) {
          edges {
            node {
              childImageSharp {
                fluid(quality: 50) {
                    src
                    originalImg
                  }
              }
            }
          }
        }
      }
    `)

    const image = data.allFile.edges[0].node.childImageSharp.fluid.src
    const orgImage = data.allFile.edges[0].node.childImageSharp.fluid.originalImg

    return (
        <div style={{ backgroundImage: `url(${orgImage})` }} className={classes.heroBackground}>
            <Grid className={classes.heroContainer} container item direction='column' alignItems='center' justify='center'>
                <Fade in timeout={
                    { enter: 1500 }
                }>
                    <Typography variant='h2' className={classes.headingText} component='h1'>
                        Welcome !
                    </Typography>
                </Fade>
                {noText
                    &&
                    (<>
                        <Divider color='secondary' space={2} width={20} />
                        <Button variant='contained' color='secondary' >Check Us Out</Button>
                    </>)
                }
            </Grid>
        </div>
    )
}

export default TopHero;