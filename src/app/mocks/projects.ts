import IProfileProject from '../interfaces/IProfileProject';

const projects: IProfileProject[] = [
  {
    active: true,
    title: 'Project for pest-control company',
    tech: ['Sass', 'JQuery', 'Twitter Bootstrap', 'PHP', 'Gulp'],
    images: [
      'DezCenter\\lg-1.jpg',
      'DezCenter\\lg-2.jpg',
      'DezCenter\\md.jpg',
      'DezCenter\\sm.jpg'
    ],
    url: 'http://xn-----ilcbfbcl0dlkkccqah3e.xn--p1ai/',
    git: 'https://github.com/AlexOvchinkin/DezCenter'
  },
  {
    active: false,
    title: 'Project of my own website',
    tech: ['Sass', 'Angular 6', 'Angular server-side rendering', 'Twitter Bootstrap', 'Node JS'],
    images: [
      'MyOwn\\lg-1.jpg',
      'MyOwn\\lg-2.jpg',
      'MyOwn\\md.jpg',
      'MyOwn\\sm.jpg'
    ],
    url: 'http://alexovchinkin.com',
    git: 'https://github.com/AlexOvchinkin/alexovchinkincom'
  }
  ,
  {
    active: false,
    title: 'Project for English learning (in progress ...)',
    tech: ['Sass', 'Node JS', 'Pug', 'Twitter Bootstrap'],
    images: [
      'Lingvoric\\lg-1.jpg',
      'Lingvoric\\lg-2.jpg',
      'Lingvoric\\md.jpg',
      'Lingvoric\\sm.jpg'
    ],
    url: '#',
    git: 'https://github.com/AlexOvchinkin/lingvoric-backend'
  }
];

export default projects;