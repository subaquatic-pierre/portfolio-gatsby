// Front end
import gatsby from '../../static/svg/gatsby.svg'
import sass from '../../static/svg/sass-1.svg'
import material from '../../static/svg/material-ui-1.svg'
import bootstrap from '../../static/svg/bootstrap-4.svg'
import react from '../../static/svg/react-2.svg'
// Back end
import django from '../../static/svg/django-community.svg'
import express from '../../static/svg/express-109.svg'
import postgresql from '../../static/svg/postgresql.svg'
import mongodb from '../../static/svg/mongodb.svg'
import nginx from '../../static/svg/nginx-1.svg'
import docker from '../../static/svg/docker.svg'
// Devtools
import node from '../../static/svg/node-js-logo.svg'
import github from '../../static/svg/github-icon-1.svg'
import visual from '../../static/svg/visual-studio-code-1.svg'
import linux from '../../static/svg/linux-tux.svg'
// Biz Dev
import googleads from '../../static/svg/google-ads-2.svg'
import facebook from '../../static/svg/facebook.svg'
import analytics from '../../static/svg/google-analytics-4.svg'

// Cloud
import cloudformation from '../../static/svg/aws-cloudformation.svg'
import codedeploy from '../../static/svg/aws-codedeploy.svg'
import ec2 from '../../static/svg/aws-ec2.svg'
import s3 from '../../static/svg/aws-s3.svg'
// Languages
import javascript from '../../static/svg/javascript.svg'
import python from '../../static/svg/python-5.svg'

export const toolboxData = [
    {
        title: 'Languages',
        link: 'languages',
        tech: [
            {
                title: 'Python',
                image: python,
                text: `Orginally created as a scripting language, Python is now a powerful all purpose language. With a large framework ecosystem, it supports data science through libraries such a Numpy and Matplotlib as well web development with Django and Flask.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://docs.python.org/3/'
                    },
                    {
                        title: 'Unittest framework',
                        link: 'https://docs.python.org/3/library/unittest.html'
                    },
                ]
            },
            {
                title: 'Javascript',
                image: javascript,
                text: `Javascript powers the web, with a huge ecosystem, it most popular programming language on the planet. The latest major update to the lanuguage being ES6, Javascript is full of small nuances which once mastered, allow for elegant programing design patterns.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://developer.mozilla.org/en-US/docs/Web/API'
                    },
                    {
                        title: 'Jest Testing framework',
                        link: 'https://jestjs.io/'
                    },
                ]
            }
        ]
    },
    {
        title: 'Front End',
        link: 'frontEnd',
        tech: [
            {
                title: 'Gatsby',
                image: gatsby,
                text: `A PWA framework, Gatsby has a large ecosystem of plugins, the framework creates applications with super fast load times. It is an excellent technology for building blogs, it uses ReactJS and GraphQL as its core technologies.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://www.gatsbyjs.org/docs/'
                    }
                ]
            },
            {
                title: 'SASS',
                image: sass,
                text: `A CSS pre-processor, this language supercharges CSS, it offers features such as mixins or nesting to allow fast and structured CSS development. It is necessary to use a CSS pre-compiler when using SASS / SCSS.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://sass-lang.com/documentation'
                    }
                ]
            },
            {
                title: 'React',
                image: react,
                text: `React is a component based library, elements make up the most basic building blocks, written in JSX resembling HTML. Elements are JSX objects, a component is comprised of one or more elements. It is a powerful web app building paradigm, created by Facebook developers.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://reactjs.org/docs/getting-started.html'
                    },
                    {
                        title: 'Jest Testing Framework',
                        link: 'https://jestjs.io/docs/en/getting-started'
                    },
                    {
                        title: 'Enzyme Testing Framework',
                        link: 'https://enzymejs.github.io/enzyme/'
                    },
                    {
                        title: 'JSS',
                        link: 'https://cssinjs.org/?v=v10.3.0'
                    }
                ]
            },
            {
                title: 'Bootstrap',
                image: bootstrap,
                text: `A CSS library that specializes in mobile first layouts. Bootstrap was one of the first libraries to approach layout design from a mobile first approach. Its core layout is based on the Flexbox model. Bootstrap is highly themeable.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://getbootstrap.com/docs/4.4/getting-started/introduction/'
                    }
                ]
            },
            {
                title: 'Material-UI',
                image: material,
                text: `Material-UI is a react component framework developed by Google. It is a layout paradigm which encourages the latest web and mobile layout designs. It features a powerful theming system based on JSS. `,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://material-ui.com/'
                    }
                ]
            },
        ]
    },
    {
        title: 'Back End',
        link: 'backEnd',
        tech: [
            {
                title: 'Django',
                image: django,
                text: `A full Python web application framework. Django has a large library of plugins, it is known as the kitchen sink of development frameworks, using Python WSGI and recently adopting uWSGI. It features a built in admin interface, ORM and templating language. A more lightweight Python web framework is Flask.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://docs.djangoproject.com/en/3.0/'
                    }
                ]
            },
            {
                title: 'Express',
                image: express,
                text: `Express JS is a Javascript web application framework. It is a lightweight framework which features super fast asynchronous request handling. It is perfect for multiple request architectures such as chat applications.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://expressjs.com/'
                    }
                ]
            },
            {
                title: 'PostgreSQL',
                image: postgresql,
                text: `An open source SQL object-relational database architecture. It offers a robust server infrastructure with stable storage capabilities, competitors include MySQL and MariaDB. Popular stacks are Python with the Psycopg driver or the use of SQLAlchemy ORM.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://www.postgresql.org/docs/12/sql-commands.html'
                    },
                    {
                        title: 'Postgres Tutorial',
                        link: 'https://www.postgresqltutorial.com/'
                    },
                    {
                        title: 'Psycopg',
                        link: 'https://www.psycopg.org/docs/'
                    },
                    {
                        title: 'SQLAlchemy',
                        link: 'https://docs.sqlalchemy.org/en/13/'
                    },
                ]
            },
            {
                title: 'MongoDB',
                image: mongodb,
                text: `This non relational database storage architecture supports excellent horizontal scalling. It is one of the go to options for todays fast paced CI / CD web application development climate. Popular stacks include Express with Mongoose ORM.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://docs.mongodb.com/manual/'
                    },
                    {
                        title: 'Mongoose ORM',
                        link: 'https://mongoosejs.com/docs/index.html'
                    },
                ]
            },
            {
                title: 'Nginx',
                image: nginx,
                text: `A web content serving software, Nginx is fast and highly scalable, offering services such as POP3 or SMPT for mail servers or HTTP/HTTPS for web servers. It can also serve content on the TCP / UDP level as well as serve as a proxy server for other services. Its features include server side caching, load balancing, SSL certificate handling and file compression.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://docs.nginx.com/nginx/'
                    },
                    {
                        title: 'Example Template',
                        link: 'https://github.com/subaquatic-pierre/linux-tools/blob/master/nginx/sample-server.conf'
                    },
                ],
            },
            {
                title: 'Docker',
                image: docker,
                text: `Docker is a containerization software, it allows for the creation of isolated environments enabling among other things a powerful micro-service web application environment. This containing of applications creates an environment in which apps can run independant of OS's or hardware configurations.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://docs.docker.com/engine/reference/commandline/docker/'
                    },
                    {
                        title: 'Example Template',
                        link: 'https://github.com/subaquatic-pierre/linux-tools/blob/master/docker/Dockerfile'
                    },
                ],
            },
        ]
    },
    {
        title: 'Dev Tools',
        link: 'devTools',
        tech: [
            {
                title: 'GitHub',
                image: github,
                text: `Version control web application based on Git technology.`,
                resources: [
                    {
                        title: 'Profile',
                        link: 'https://github.com/subaquatic-pierre'
                    },
                ],
            },
            {
                title: 'VS Code',
                image: visual,
                text: `A Powerful IDE which supports many languages through its vast ecosystem of extensions.`,
                resources: [
                    {
                        title: 'VS Code Extensions',
                        link: 'https://marketplace.visualstudio.com/'
                    },
                ],
            },
            {
                title: 'Linux',
                image: linux,
                text: `Linux is an open source UNIX operating system. Linux features powerful packages which enhance development, it also powers most web infrastructure in the cloud. Linux has a variety of flavours all with their unique specializations. Ubuntu is one of the best flavours to use for development because of its comprehensive package base.`,
                resources: [
                    {
                        title: 'Linux Cheatsheat',
                        link: 'https://github.com/subaquatic-pierre/linux-tools'
                    },
                ],
            },
            {
                title: 'Node JS',
                image: node,
                text: `A Javascript runtime environment enables the use of Javascript outside of the browser. Node JS comes with NPM which is a package manager. Along with Node comes a huge ecosystem of packages which include development tools such as Grunt or Node SASS, as well as web frameworks such as Express.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://nodejs.org/en/docs/'
                    },
                ],
            }
        ]
    },
    {
        title: 'Cloud',
        link: 'cloud',
        tech: [
            {
                title: 'AWS EC2',
                image: ec2,
                text: `Elastic Compute cloud is the fundamental computing resources of AWS. It offers a stable computing platform in the cloud which can be used for almost anything. Technologies which exists within the EC2 environment are Load balancers, Security Groups and Autoscalling groups.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://docs.aws.amazon.com/ec2/index.html?nc2=h_ql_doc_ec2'
                    },
                ],
            },
            {
                title: 'AWS S3',
                image: s3,
                text: `Simple Storage Solutions provides storage at the block level. Data is stored as objects within S3, these objects are stored in buckets. When combined with Route53, Certificate Manager and Cloudfront, S3 becomes a powerful solution for hosting Progressive Web Applications.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html'
                    },
                ],
            },
            {
                title: 'AWS CodePipeLine',
                image: codedeploy,
                text: `Codepipeline is an integration tool which joins many of the AWS DevOps tools. AWS development tools include Codebuild, Codedeploy and Codecommit. All these services feature programmatic building and deployment of web apps throughout the AWS hosting range.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://docs.aws.amazon.com/codepipeline/?id=docs_gateway'
                    },
                ],
            },
            {
                title: 'AWS CloudFormation',
                image: cloudformation,
                text: `Cloudformation is the cloud architects secret weapon. It offers Infrastructure as Code services, it is the ultimate Cloud Orchestration tool. All services offered by AWS can be defined within Cloud formation templates, resources can then be programmatically provisioned and updated.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html'
                    },
                    {
                        title: 'PWA Pipeline Template',
                        link: 'https://github.com/subaquatic-pierre/pwa-pipeline'
                    },
                ],
            }
        ]
    },
    {
        title: 'Biz Dev',
        link: 'bizDev',
        tech: [
            {
                title: 'Google Ads',
                image: googleads,
                text: `A platform from which to advertise on Googles platform, such services include, YouTube, Google Display ads and Search Ads.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://support.google.com/google-ads/answer/6146252?hl=en'
                    },
                ],
            },
            {
                title: 'Google Analytics',
                image: analytics,
                text: `Powerful analytics software providing information on user activity within an application. Combined with Search Console it gives a good indiction of an applications visibility.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://support.google.com/analytics/?hl=en#topic='
                    },
                ],
            },
            {
                title: 'Facebook Manager',
                image: facebook,
                text: `A platform from which to advertise on Facebook services such as Facebook, Instagram and Facebook Messenger.`,
                resources: [
                    {
                        title: 'Official Docs',
                        link: 'https://business.facebook.com/business/help/113163272211510?id=180505742745347&helpref=uf_permalink'
                    },
                ],
            }
        ]
    },
]