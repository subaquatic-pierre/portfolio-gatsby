import divesandybeach from '../../static/images/divesandybeach-screanshot.png'
import surettaventer from '../../static/images/surettaphotgraphy-screanshot.png'
import ballotonline from '../../static/images/ballot-online.png'
import portfolio from '../../static/images/portfolio.png'

const productionProjectsData = [
    {
        title: 'Portfolio',
        type: 'production',
        date: '30 June 2020',
        image: portfolio,
        text: 'Home of my portfolio website, the site is built with Gatsby and Material UI. It is hosted on AWS, served using AWS CloudFront, it features a build-pipeline for automatic testing and deployment to the CloudFront distribution. A serverless web application which uses lambda functionality to send emails on for contact-me requests.',
        github: 'https://github.com/subaquatic-pierre/portfolio-gatsby-public',
        url: 'https://subaquatic-pierre.com',
        tech: [
            {
                title: 'Gatsby',
            },
            {
                title: 'React',
            },
            {
                title: 'Material UI',
            },
            {
                title: 'AWS CloudFront',
            },
            {
                title: 'AWS CodePipeLine',
            },
        ]
    },
    {
        title: 'Dive Sandy Beach',
        type: 'production',
        date: '5 October 2019',
        image: divesandybeach,
        text: 'The business website for Sandy Beach Dive Centre in Fujairah, UAE. Built with Django and styled with Bootstrap 4. This application features an online booking interface for divers, custom PADI course and local dive site upload through the Django admin interface.',
        github: undefined,
        url: 'https://www.divesandybeach.com',
        tech: [
            {
                title: 'Django',
            },
            {
                title: 'Bootstrap 4',
            },
            {
                title: 'AWS EC2',
            },
            {
                title: 'Django Crispy Forms',
            },
            {
                title: 'Django Re-Captcha',
            },
        ]
    },
    {
        title: 'Suretta Venter Photography',
        type: 'production',
        date: '30 March 2020',
        image: surettaventer,
        text: 'This is a photography portfolio website. built with React and Gatsby. It features React photo gallery, it is styled with Bootstrap 4',
        github: undefined,
        url: 'https://scubadivedubai.com',
        tech: [
            {
                title: 'Gatsby',
            },
            {
                title: 'React',
            },
            {
                title: 'Bootstrap 4',
            },
        ]
    },
]

export default productionProjectsData;