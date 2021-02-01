import scubadivedubai from "../../static/images/scubadivedubai-screanshot.png";
import divesandybeachFlask from "../../static/images/divesandybeach-flask.png";
import chatio from "../../static/images/chatio.png";
import pizza from "../../static/images/pizza.png";
import ballotonline from "../../static/images/ballot-online.png";
import recipes from "../../static/images/recipes.png";

const sideProjectsData = [
  {
    title: "React Apollo Recipes",
    type: "side",
    date: "25 July 2020",
    image: recipes,
    text:
      "This app is designed for users to create recipes and share them with their friends, leveraging the power of React, Apollo and GraphQL. While creating the app, emphasis was placed on testing React components with React Testing Library. All queries and mutations to the database are optimistically updated within the UI before being updated from server data",
    github: "https://github.com/subaquatic-pierre/react-apollo-recipes",
    url: "https://recipes.ballot-online.com",
    tech: [
      {
        title: "Mongo DB",
      },
      {
        title: "React",
      },
      {
        title: "GraphQL",
      },
      {
        title: "Material UI",
      },
      {
        title: "React Testing Library",
      },
      {
        title: "Apollo React",
      },
    ],
  },
  {
    title: "Ballot Online",
    type: "side",
    date: "10 June 2020",
    image: ballotonline,
    text:
      "This is an online voting platform, the project uses a Django back-end with an Apollo React Client front-end, JWT is used for user authentication. Models are defined with Django Models and transformed into a GraphQL schema with Graphene-Django. The infrastructure is hosted on AWS, using an Application Load Balancer with an Autoscale group and AWS RDS for the database",
    github: "https://github.com/subaquatic-pierre/ballot-online",
    url: "https://ballot-online.com",
    tech: [
      {
        title: "Django",
      },
      {
        title: "React",
      },
      {
        title: "GraphQL",
      },
      {
        title: "Material UI",
      },
      {
        title: "Apollo React",
      },
    ],
  },
  {
    title: "Scuba Dive Dubai E-commerce",
    type: "side",
    date: "11 December 2019",
    image: scubadivedubai,
    text:
      "An E-Commerce application powered by Python using the Django framework. Basic functionality includes, authorization and authentication using Django AllAuth and Cripsy forms. It features CSV upload for item management through the Django Admin interface. Hosted on Heroku, static files and media are served using Django storages and AWS S3",
    github: "https://github.com/subaquatic-pierre/scubadivedubai-django",
    url: "https://scubadivedubai.herokuapp.com/",
    tech: [
      {
        title: "Django",
      },
      {
        title: "Django AllAuth",
      },
      {
        title: "Django Crispy Forms",
      },
      {
        title: "Django Countries",
      },
      {
        title: "MDBootstrap",
      },
      {
        title: "Django Storages",
      },
    ],
  },
  {
    title: "DiveSandyBeach Flask",
    type: "side",
    date: "14 September 2019",
    image: divesandybeachFlask,
    text:
      "This app is developed using Python and Flask framework. The basics of the app it that it is an informative website site for Sandy Beach Dive Centre. It offers a platform for users to log in and to post blog posts to the site. The current iteration will only have one user. This user will be the admin of the site who will update all posts and load new pages into the site.",
    github: "https://github.com/subaquatic-pierre/divesandybeach-flask",
    url: "https://divesandybeach-flask.herokuapp.com/",
    tech: [
      {
        title: "Flask",
      },
      {
        title: "Flask Login",
      },
      {
        title: "WTForms",
      },
      {
        title: "Flask-SQLAlchemy",
      },
      {
        title: "Bootstrap 4",
      },
      {
        title: "JQuery",
      },
    ],
  },
  {
    title: "Chat IO",
    type: "side",
    date: "30 November 2019",
    image: chatio,
    text:
      "This application is a simple web chat application that allows real time web chat. The application uses the Socket IO library to allow for realtime interaction with the server, via AJAX requests. When first visiting the site users are requested to enter a login name, the page then updates with the full web chat application. Once the user is logged in they have access to user controls which include creating a room, leaving a room and login out.",
    github: "https://github.com/subaquatic-pierre/chat-io",
    url: "https://chat-appsocketio.herokuapp.com/",
    tech: [
      {
        title: "Flask",
      },
      {
        title: "Socket IO",
      },
      {
        title: "HandleBars JS",
      },
      {
        title: "Bootstrap 4",
      },
    ],
  },
  {
    title: "Pizza App",
    type: "side",
    image: pizza,
    date: "30 October 2019",
    text:
      "This project is created for a pizza company. It allows online ordering and allows admins to create new items which can be added to the menu. Admins can check a full list of orders which have been placed already and also view individual orders.",
    github: "https://github.com/subaquatic-pierre/pizza-app",
    url: "https://pizza-cool-app.herokuapp.com/",
    tech: [
      {
        title: "Django",
      },
      {
        title: "JQuery",
      },
      {
        title: "Vanilla JS",
      },
      {
        title: "Crispy Forms",
      },
      {
        title: "Handlebars JS",
      },
    ],
  },
];

export default sideProjectsData;

// const TBA = [
//     {
//         title: 'Planet Blog Node JS',
//         type: 'side',
//         date: '30 October 2018',
//         text: 'Pariatur amet aliqua consectetur magna veniam.Laboris voluptate nisi sit est id.Laboris excepteur sunt sunt amet.',
//         github: '/github.com',
//         url: 'www.website.com',
//         tech: [
//             {
//                 title: 'Django',
//                 text: 'Pariatur amet aliqua consectetur magna veniam.Laboris voluptate nisi sit est id.Laboris excepteur sunt sunt amet.'
//             }
//         ]
//     },
//     {
//         title: 'Books API',
//         type: 'side',
//         date: '30 October 2018',
//         text: 'Pariatur amet aliqua consectetur magna veniam.Laboris voluptate nisi sit est id.Laboris excepteur sunt sunt amet.',
//         github: '/github.com',
//         url: 'www.website.com',
//         tech: [
//             {
//                 title: 'Django',
//                 text: 'Pariatur amet aliqua consectetur magna veniam.Laboris voluptate nisi sit est id.Laboris excepteur sunt sunt amet.'
//             }
//         ]
//     },
// ]
