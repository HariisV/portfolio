const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Haris Wahyudi',
  role: 'Fullstack Javascript Developer',
  description:
    'Personal who likes to work hard, flexible and generous towards work. Now focus on learning the latest technologies like ReactJs, NodeJs, ExpressJs, and React Native.Having a Hobby of Solving Problems, makes me not easily give up on problems. And also has an enthusiastic nature with all things programming.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/harisw/',
    github: 'https://github.com/hariisV',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Eka Danta LC',
    description:
      'Tryout online website, used for students who study there, every month more than 150 visitors access it at the same time',
    stack: ['Laravel', 'Bootstrap', 'Jquery', 'Ajax'],
    sourceCode: 'https://github.com',
    url: 'https://raw.githubusercontent.com/HariisV/portfolio/main/public/image/asd.png?token=ALLV2MNF4O5LPZYANWAH4UDBX32U4',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'PHP',
  'JavaScript',
  'TypeScript',
  'React',
  'ReactNative',
  'Next',
  'Express',
  'Redux',
  'Laravel',
  'Code Igniter',
  'MySql',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hariswh9@mail.com',
}

export { header, about, projects, skills, contact }
