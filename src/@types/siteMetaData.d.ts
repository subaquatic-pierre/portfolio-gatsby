interface MenuItem {
  name: string;
  path: string;
}

interface Author {
  name: string;
  photo: string;
  bio: string;
  contacts: {
    email: string;
    github: string;
    linkedIn: string;
  };
}

interface SiteMetaData {
  url: string;
  pathPrefix: string;
  icon: string;
  title: string;
  subtitle: string;
  copyright: string;
  postsPerPage: number;
  googleAnalyticsId: string;
  menu: MenuItem[];
  author: Author;
}
