import CC605Enterprise from '../../static/certs/CC605-enterprise.png'
import CC607Management from '../../static/certs/CC607-management.png'
import CC615Infrastructure from '../../static/certs/CC615-infrastructure.png'
import CS50Intro from '../../static/certs/CS50-intro.png'
import CS50WebPro from '../../static/certs/CS50-web-pro.png'
import CS50Web from '../../static/certs/CS50-web.png'
import MITxPythonIntro from '../../static/certs/MITx-python-intro.png'
import MITx6002 from '../../static/certs/MITx-6002.png'


const certData = [
    {
        title: 'Cloud Computing Micro Masters (in progress)',
        type: 'program',
        organization: 'Marryland University Global Campus',
        image: CC605Enterprise,
        date: '15 July 2020',
        code: 'CCMicroMasters',
        link: 'https://courses.edx.org/certificates/00544e1261fc45e889cd5d16ea73bc4d',
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
                title: 'Cloud Computing Security (in progress)',
                type: 'course',
                organization: 'Marryland University Global Campus',
                image: CC605Enterprise,
                date: '18 February 2020',
                code: 'CC617x',
                link: 'https://courses.edx.org/certificates/196f1ed84ed44a6db9f6ae7e5c379258'
            },
        ]
    },
    {
        title: 'Computer Science for Web Programming',
        type: 'program',
        organization: 'HarvardX',
        image: CS50WebPro,
        date: '19 December 2019',
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
        title: 'Computational Thinking using Python',
        type: 'program',
        organization: 'MITx',
        image: MITxPythonIntro,
        date: '19 December 2019',
        code: 'MITxPython',
        link: 'https://credentials.edx.org/credentials/4971455456ef41c7b3cfc5156c1b263a/',
        courses: [
            {
                title: 'Introduction to Computer Science and Programming Using Python',
                type: 'course',
                organization: 'MITx',
                image: MITxPythonIntro,
                date: '30 December 2019',
                code: '6.00.1x',
                link: 'https://courses.edx.org/certificates/b501bd71053a4550a44a7d1880353734'
            },
            {
                title: 'Introduction to Computational Thinking and Data Science',
                type: 'course',
                organization: 'MITx',
                image: MITx6002,
                date: '30 December 2019',
                code: '6.00.2x',
                link: 'https://courses.edx.org/certificates/b501bd71053a4550a44a7d1880353734'
            },
        ]
    },

]

export default certData;