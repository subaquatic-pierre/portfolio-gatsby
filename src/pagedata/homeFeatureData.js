import wolfImg from '../../static/images/wolf.png';
import koiFishImg from '../../static/images/koi-fish.png';
import hind from '../../static/images/underwater/hind.jpg'
import crab from '../../static/images/underwater/crab.jpg'
import whaleshark from '../../static/images/underwater/whaleshark.jpg'
import oman1 from '../../static/images/underwater/oman1.jpg'

// Column data options
// image,
// backgroundImage,
// animation,
// heading,
// text,
// buttonText,
// link,
// align,
// justify,
// divider,
// color
// textShadow
// gutterBottom

export const featureSection = [
    {
        mobile: {
            reverse: true,
            hide: true
        },
        desktop: {
            reverse: false
        },
        leftCol: {
            image: false,
            backgroundImage: koiFishImg,
            animation: false,
            heading: 'Toolbox',
            text: `Check out a list of all the tools I use most often, included are the languages I am most competent in as well as their best sources of documentation. As a full stack developer, I use tools for frontend, backend and cloud computing technologies. Business development tools are used to develop and monitor digital marketing campaigns and application analytics.`,
            buttonText: 'More info',
            link: '/toolbox',
            align: 'center',
            justify: 'center',
            divider: true,
            color: 'secondary',
        },
        rightCol: {
            image: hind,
            align: 'center',
            justify: 'center',
        }
    },
    {
        mobile: {
            reverse: true
        },
        desktop: {
            reverse: true
        },
        leftCol: {
            image: false,
            backgroundImage: wolfImg,
            animation: false,
            heading: 'Projects',
            text: `Check out my web application portfolio. All my web development projects are featured here, they range from production projects, live on the internet to non-production projects which have not yet been completed or are just side projects.`,
            buttonText: 'More Info',
            link: '/projects',
            align: 'center',
            justify: 'center',
            divider: true,
            color: 'primary',
        },
        rightCol: {
            image: crab,
            align: 'center',
            justify: 'center',
        }
    },
    {
        mobile: {
            reverse: true
        },
        desktop: {
            reverse: false
        },
        leftCol: {
            image: false,
            backgroundImage: koiFishImg,
            animation: false,
            heading: 'About Me',
            text: `My name is Pierre, I'm a South African living in Dubai. I'm a full stack Web Developer and Cloud Architect. As a PADI Master Instructor and Technical diving instructor, if I am not developing
            awesome web applications I am underwater teaching scuba diving or taking awesome underwater pictures.`,
            buttonText: 'More Info',
            link: '/about',
            align: 'center',
            justify: 'center',
            divider: true,
            color: 'secondary',
        },
        rightCol: {
            image: whaleshark,
            align: 'center',
            justify: 'center',
        }
    },

    {
        mobile: {
            reverse: true
        },
        desktop: {
            reverse: true
        },
        leftCol: {
            image: false,
            backgroundImage: wolfImg,
            animation: false,
            heading: 'Contact Me',
            text: `Drop me a message if you would like to get in contact for your next project or would just like to say hi! &#x1f60a;`,
            buttonText: 'Contact',
            link: '/contact',
            align: 'center',
            justify: 'center',
            divider: true,
            color: 'primary',
        },
        rightCol: {
            image: oman1,
            align: 'center',
            justify: 'center',
        }
    },
]