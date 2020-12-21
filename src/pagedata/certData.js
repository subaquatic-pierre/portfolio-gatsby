import CC605Enterprise from '../../static/certs/CC605-enterprise.png'
import CC607Management from '../../static/certs/CC607-management.png'
import CC615Infrastructure from '../../static/certs/CC615-infrastructure.png'
import CC617Secutiry from '../../static/certs/CC617-security.png'
import MicroMasters from '../../static/certs/UMGC-micro-masters.png'
import CS50Intro from '../../static/certs/CS50-intro.png'
import CS50WebPro from '../../static/certs/CS50-web-pro.png'
import CS50Web from '../../static/certs/CS50-web.png'
import MITxPythonIntro from '../../static/certs/MITx-python-intro.png'
import MITx6002 from '../../static/certs/MITx-6002.png'
import MITxSeries from '../../static/certs/MITx-x-series.png'
import cppcert from '../../static/certs/cppcert.png'
import webdevbootcamp from '../../static/certs/webdevbootcamp.png'
import algorithmicToolbox from '../../static/certs/algorithmic-toolbox.png'
import awsCloudArchitect from '../../static/certs/Udacity-aws-cloud-architect'
import azureDevOps from '../../static/certs/Udacity-DevOps-azure.png'


const certData = [
    {
        title: 'AWS Cloud Architect',
        type: 'course',
        organization: 'Udacicty',
        image: awsCloudArchitect,
        date: 'October 2020',
        code: 'AWSCLOUDARCHITECT',
        link: 'https://graduation.udacity.com/nd063',
    },
    {
        title: 'DevOps Engineer for Microsoft Azure',
        type: 'course',
        organization: 'Udacicty',
        image: azureDevOps,
        date: 'September 2020',
        code: 'AZUREDEVOPS',
        link: 'https://graduation.udacity.com/nd082',
    },
    {
        title: 'Algorithmic Toolbox',
        type: 'course',
        organization: 'Coursera',
        image: algorithmicToolbox,
        date: 'September 2020',
        code: 'ALGTOOLBOX',
        link: 'https://www.coursera.org/account/accomplishments/certificate/RFARM37YPDGH',
    },
    {
        title: 'Computational Thinking using Python',
        type: 'program',
        organization: 'MITx',
        image: MITxSeries,
        date: 'June 2020',
        code: 'MITxPython',
        link: 'https://credentials.edx.org/credentials/2b8befee43034974a71ebd3b18a0bb17/',
        courses: [
            {
                title: 'Introduction to Computer Science and Programming Using Python',
                type: 'course',
                organization: 'MITx',
                image: MITxPythonIntro,
                date: '30 December 2019',
                code: '6.00.1x',
                link: 'https://courses.edx.org/certificates/ac1ba2ce68f44dd89137e7d682c9abef'
            },
            {
                title: 'Introduction to Computational Thinking and Data Science',
                type: 'course',
                organization: 'MITx',
                image: MITx6002,
                date: '30 December 2019',
                code: '6.00.2x',
                link: 'https://courses.edx.org/certificates/ec8b24490438417690253d6174461cbf'
            },
        ]
    },
    {
        title: 'Cloud Computing Micro Masters',
        type: 'program',
        organization: 'Marryland University Global Campus',
        image: MicroMasters,
        date: 'April 2020',
        code: 'CCMicroMasters',
        link: 'https://credentials.edx.org/credentials/e4ca0941373a41b590299ef8237a34c7',
        courses: [
            {
                title: 'Cloud Computing for Enterprises',
                type: 'course',
                organization: 'Marryland University Global Campus',
                image: CC605Enterprise,
                date: '8 December 2019',
                code: 'CC605x',
                link: 'https://courses.edx.org/certificates/00544e1261fc45e889cd5d16ea73bc4d'
            },
            {
                title: 'Cloud Computing Management',
                type: 'course',
                organization: 'Marryland University Global Campus',
                image: CC607Management,
                date: '18 February 2020',
                code: 'CC607x',
                link: 'https://courses.edx.org/certificates/196f1ed84ed44a6db9f6ae7e5c379258'
            },
            {
                title: 'Cloud Computing Infrastructure',
                type: 'course',
                organization: 'Marryland University Global Campus',
                image: CC615Infrastructure,
                date: '18 February 2020',
                code: 'CC615x',
                link: 'https://courses.edx.org/certificates/7cca87f11a6e4d949cba0ebf3865e9ec'
            },
            {
                title: 'Cloud Computing Security',
                type: 'course',
                organization: 'Marryland University Global Campus',
                image: CC617Secutiry,
                date: '2 July 2020',
                code: 'CC617x',
                link: 'https://courses.edx.org/certificates/8ff984623ed5424a8a6793ea8b6f0c10'
            },
        ]
    },
    {
        title: 'Object-Oriented Data Structures in C++',
        type: 'course',
        organization: 'University of Illinois at Urbana-Champaign',
        image: cppcert,
        date: 'March 2020',
        code: 'CPP',
        link: 'https://coursera.org/share/634cd16b985e35f5c6deb223419a7488',
    },
    {
        title: 'Computer Science for Web Programming',
        type: 'program',
        organization: 'HarvardX',
        image: CS50WebPro,
        date: 'December 2019',
        code: 'CS50WebPro',
        link: 'https://credentials.edx.org/credentials/4971455456ef41c7b3cfc5156c1b263a/',
        courses: [
            {
                title: 'Intro to Computer Science',
                type: 'course',
                organization: 'HarvardX',
                image: CS50Intro,
                date: '30 December 2019',
                code: 'CS50',
                link: 'https://courses.edx.org/certificates/b501bd71053a4550a44a7d1880353734'
            },
            {
                title: 'Web Programming with Python and Javascript',
                type: 'course',
                organization: 'HarvardX',
                image: CS50Web,
                date: '30 December 2019',
                code: 'CS50W',
                link: 'https://courses.edx.org/certificates/a972c2e83997445ba12437b402accb17'
            },
        ]
    },
    {
        title: 'Web Developer Bootcamp',
        type: 'course',
        organization: 'Udemy',
        image: webdevbootcamp,
        date: 'August 2019',
        code: 'WEBDEVBOOTCAMP',
        link: 'https://www.udemy.com/certificate/UC-1RGBKDIA/',
    },
]

export default certData;