const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Haris.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Haris Wahyudi',
  role: 'Fullstack Javascript Developer',
  description:
    'Personal who likes to work hard, flexible and generous towards work. Now focus on learning the latest technologies like ReactJs, NodeJs, ExpressJs, and React Native.Having a Hobby of Solving Problems, makes me not easily give up on problems. And also has an enthusiastic nature with all things programming.',
  descriptionLong: '',
  resume: '/cv/CV%20-%20Haris%20Wahyudi.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/harisw/',
    github: 'https://github.com/hariisV',
  },
}

const projects = [
  {
    name: 'Tickez',
    description:
      'Tickez is an application that is used to book a Movies. built using React, here you can select all movies & select available seats',
    descriptionLong: '',
    stack: ['React', 'Redux', 'Bootstrap', 'Express', 'Redis', 'Axios'],
    image: [
      'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/tickez.png',
    ],
    sourceCode: 'https://github.com/HariisV/Ticketing-React',
    livePreview: 'https://tickez.dokumensaya.com/',
    date: '2022 - DES',
  },
  {
    name: 'Tickez Mobile',
    description:
      'Tickez Mobile is Mobile version of Tickez, built using React Native, here you can also select all movies & select available seats',
    descriptionLong: ``,
    stack: ['React Native', 'Redux'],

    image: [
      '/portfolio/tickez-mobile/1.png',
      '/portfolio/tickez-mobile/2.jpg',
      '/portfolio/tickez-mobile/3.jpg',
      '/portfolio/tickez-mobile/4.jpg',
    ],

    sourceCode: 'https://github.com/HariisV/Ticketing-Mobile',
    date: '2021 - AUG',
  },

  {
    name: 'xWallet',
    description:
      'xWallet is a digital wallet application that allows us to transfer money for free without any fees. also automatic topup',
    descriptionLong: '',
    stack: ['Next', 'Redux', 'Bootstrap', 'Redis', 'Express', 'Midtrans'],
    image: [
      'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/wallet.png',
    ],
    date: '2021 - SEP',
    sourceCode: 'https://github.com/HariisV/XWallet',
    livePreview: 'https://x-wallet.vercel.app/',
  },
  {
    name: 'Hire App',
    description:
      'HireApp is an application for job seekers or looking for workers. Or even you can contact workers for a project',
    descriptionLong: '',
    stack: ['React', 'Redux', 'Redis', 'Bootstrap', 'Express'],
    sourceCode: 'https://github.com',
    image: [
      'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/hire.png',
    ],
    date: '2021 - DES',
    livePreview: 'https://github.com',
  },
  {
    name: 'Coffe Shop',
    description:
      'Website for buying coffee online. using midtrans as a payment gateway. Admin can manage purchases and view monthly data.',
    descriptionLong: '',
    stack: ['React', 'Redux', 'Redis', 'Bootstrap', 'Express', 'Midtrans'],
    sourceCode: 'https://github.com',
    image: [
      'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/coffe.png',
    ],
    date: '2021 - OKT',
    livePreview: 'https://github.com',
  },
  {
    name: 'Solusi Marketing',
    description:
      'Marketplace For Selling Item Online (Game, Mobile Legends, Account, etc). Saving balance after top up to easily buy items',
    descriptionLong: '',
    stack: ['Laravel Livewire', 'MySQL', 'Bootstrap'],
    image: ['/portfolio/solusi-marketing/1.png'],
    date: '2022 - MEI',
    livePreview: 'http://solusi-digital.sehatnow.com/',
  },
  {
    name: 'DMA Dropship',
    description:
      'A website for buying and selling between admins and users. As well as managing, storing purchase and expenditure data.',
    descriptionLong: '',
    stack: ['Laravel', 'Bootstrap', 'Jquery', 'MySql'],
    date: '2021 - MEI',
    livePreview: 'https://dmadropship.com/',
    image: [
      'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/dma.png',
    ],
  },
  {
    name: 'Eka Danta LC',
    description:
      'Tryout online website, used for students who study there, every month more than 150 visitors access it at the same time',
    descriptionLong: '',
    stack: ['Laravel', 'Bootstrap', 'Jquery', 'Ajax'],
    date: '2020 - AUG',
    livePreview: 'https://ekadantalc.com/',
    image: [
      'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/ekadanta.png',
    ],
  },
  {
    name: 'PPDB SMKN 5',
    description:
      'New Student Admission Website. has several features such as registering new students, verifying data, to taking online tests.',
    descriptionLong: '',
    stack: ['Laravel', 'Bootstrap', 'MySql'],
    sourceCode: 'https://github.com/HariisV',
    date: '2021 - FEB',
    image: [
      'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/ppdb.png',
    ],
  },
  {
    name: 'Meduza Shop',
    description:
      'A simple online store website that uses laravel as a backend. This is my first freelance project and learn more about Laravel',
    descriptionLong: '',
    stack: ['Laravel', 'Bootstrap', 'MySql'],
    sourceCode: 'https://github.com/HariisV/Meduza-Shop',
    image: [
      'https://raw.githubusercontent.com/mesindo07/Portfolio-Image/main/meduza.png',
    ],
    date: '2020 - MEI',
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
  'Bootstrap',
  'Tailwind Css',
  'Next',
  'Node',
  'Express',
  'Laravel',
  'MySql',
  'MongoDB',
  'Jest Js',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hariswh9@mail.com',
}

export { header, about, projects, skills, contact }
