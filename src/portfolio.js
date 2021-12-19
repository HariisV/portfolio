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
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Eka Danta LC',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    url: '/image/ekadanta.png',
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
