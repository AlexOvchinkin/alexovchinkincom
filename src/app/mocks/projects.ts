import IProfileProject from '../interfaces/IProfileProject';

const projects: IProfileProject[] = [
  {
    active: true,
    title: 'Project for pest-control company',
    tech: ['HTML 5', 'Sass', 'JQuery', 'Twitter Bootstrap', 'PHP', 'Gulp'],
    images: [
      'DezCenter\\lg-1.png',
      'DezCenter\\lg-2.png',
      'DezCenter\\md.png',
      'DezCenter\\sm.png'
    ],
    url: 'http://xn-----ilcbfbcl0dlkkccqah3e.xn--p1ai/',
    git: 'https://github.com/AlexOvchinkin/DezCenter'
  },
  {
    active: false,
    title: 'Project for pest-control company',
    tech: ['HTML5', 'CSS 3', 'JQuery', 'Twitter Bootstrap', 'PHP'],
    images: [
      'DezCenter\\lg-1.png',
      'DezCenter\\md.png',
      'DezCenter\\sm.png'
    ],
    url: 'http://xn-----ilcbfbcl0dlkkccqah3e.xn--p1ai/',
    git: 'https://github.com/AlexOvchinkin/DezCenter'
  }
];

export default projects;