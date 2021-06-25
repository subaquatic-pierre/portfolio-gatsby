interface Technology {
  title: string;
  image: string;
  text: string;
  resources: [
    {
      title: string;
      link: string;
    }
  ];
}

interface TechCategory {
  title: string;
  link: string;
  tech: Technology[];
}
