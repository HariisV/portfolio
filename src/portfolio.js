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
    name: 'Tickez',
    description:
      'Ticks is an application that is used to book a Movies. built using React, here you can select all movies & select available seats',
    stack: ['React', 'Redux', 'Bootstrap', 'Express', 'Redis', 'Axios'],
    sourceCode: 'https://github.com',
    url: 'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/tickez.png',
    livePreview: 'https://github.com',
  },
  {
    name: 'xWallet',
    description:
      'xWallet is a digital wallet application that allows us to transfer money for free without any fees. also automatic topup',
    stack: ['Next', 'Redux', 'Bootstrap', 'Redis', 'Express', 'Midtrans'],
    sourceCode: 'https://github.com',
    url: 'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/wallet.png',
    livePreview: 'https://github.com',
  },
  {
    name: 'Hire App',
    description:
      'HireApp is an application for job seekers or looking for workers. Or even you can contact workers for a project',
    stack: ['React', 'Redux', 'Redis', 'Bootstrap', 'Express'],
    sourceCode: 'https://github.com',
    url: 'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/hire.png',
    livePreview: 'https://github.com',
  },
  {
    name: 'Coffe Shop',
    description:
      'Website for buying coffee online. using midtrans as a payment gateway. Admin can manage purchases and view monthly data.',
    stack: ['React', 'Redux', 'Redis', 'Bootstrap', 'Express', 'Midtrans'],
    sourceCode: 'https://github.com',
    url: 'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/coffe.png',
    livePreview: 'https://github.com',
  },
  {
    name: 'DMA Dropship',
    description:
      'A website for buying and selling between admins and users. As well as managing, storing purchase and expenditure data.',
    stack: ['Laravel', 'Bootstrap', 'Jquery', 'MySql'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://dmadropship.com/',
    url: 'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/dma.png',
  },
  {
    name: 'Eka Danta LC',
    description:
      'Tryout online website, used for students who study there, every month more than 150 visitors access it at the same time',
    stack: ['Laravel', 'Bootstrap', 'Jquery', 'Ajax'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://ekadantalc.com/',
    url: 'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/ekadanta.png',
  },
  {
    name: 'PPDB SMKN 5',
    description:
      'New Student Admission Website. has several features such as registering new students, verifying data, to taking online tests.',
    stack: ['Laravel', 'Bootstrap', 'MySql'],
    sourceCode: 'https://github.com/HariisV',
    livePreview: 'https://github.com/HariisV',
    url: 'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/ppdb.png',
  },
  {
    name: 'Meduza Shop',
    description:
      'A simple online store website that uses laravel as a backend. This is my first freelance project and learn more about Laravel',
    stack: ['Laravel', 'Bootstrap', 'MySql'],
    sourceCode: 'https://github.com/HariisV/Meduza-Shop',
    url: 'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/meduza.png',
    // livePreview: 'https://github.com',
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
