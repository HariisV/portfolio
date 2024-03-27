const header = {
  homepage: '/',
  title: 'Haris.',
}

const about = {
  name: 'Haris Wahyudi',
  role: [
    '<span style="color:#00C7FF">Software Engineer</span>.',
    '<span style="color:#00C7FF">Front End</span> Developer.',
    '<span style="color:#00C7FF">Backend </span> Developer.',
    '<span style="color:#00C7FF">Android </span> Developer.',
    '<span style="color:#00C7FF">DevOps Engineer </span>.',
  ],
  description:
    'Experienced professional with 3 years of hands-on experience, a strong work ethic, adaptability, and dedication to delivering high-quality results. I have a passion for problem-solving, which fuels my persistence in overcoming challenges. With an inherent enthusiasm for all aspects of programming, I am constantly driven to excel in my field.',
  descriptionLong: '',
  resume: '/cv/CV - Haris Wahyudi.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/harisw/',
    github: 'https://github.com/hariisV',
  },
}

const projects = [
  {
    name: 'TryoutASN Mobile',
    description:
      'Develop a mobile application for TryoutASN. This application is built using React Native, build api using Laravel',
    stack: ['Laravel', 'React Native', 'Native Base'],
    image: ['/image/tryoutasn-mobile.webp'],
  },
  {
    name: 'Caffeine',
    description:
      'A mobile application for purchasing coffee online. I am responsible for backend development using Express JS.',
    stack: ['Express', 'PostgreSQL', 'Sequelize'],
    image: ['/image/my-bucket.webp'],
    livePreview:
      'https://play.google.com/store/apps/details?id=com.caffeineism',
  },
  {
    name: 'Viracun',
    description:
      'A web-based application designed for learning and practice for Candidates for civil servants. built using React and Express',
    stack: ['React', 'Express', 'Tailwind', 'Prisma'],
    image: ['/image/viracun.webp'],
    livePreview: 'https://bimbel.viracun.id/',
  },
  {
    name: 'SickGPT',
    description:
      'A web application used to find information about the diseases. Developed using MERN stack with integrated OpenAI',
    stack: ['React', 'Express', 'MongoDB', 'Open AI'],
    image: ['/image/sickgpt.webp'],
    livePreview: 'https://sickgpt.io/',
  },
  {
    name: 'Brainfit Online',
    description:
      'Designed and developed a sophisticated landing page with an integrated admin panel using Laravel and Alpine.js',
    stack: ['Laravel', 'TailwindCSS', 'AlpineJS'],
    livePreview: 'http://brainfitonline.co.id/',
    image: ['/image/brainfit.webp'],
  },
  {
    name: 'My Bucket',
    description:
      'Develop a backend of social media application for My Bucket. This application is built using React JS & Express JS',
    stack: ['React', 'Tailwind', 'Express'],
    image: ['/image/my-bucket.webp'],
    livePreview: 'https://my-bucket.co.kr/',
  },
  {
    name: 'Semina',
    description:
      'Semina is a web-based application built using the MERN stack. Semina make it easier for the public to book a event.',
    descriptionLong: `
    <p>Semina is a web-based application built using the MERN stack (MongoDB, Express, React, and Node.js). This application is designed to make it easy for the public to book seminar events online.</p>
    <p style="margin-top:5px;">Using the Semina application, the public can easily search for and find information about seminars that are being held or will be held. In addition, they can also easily book seminar tickets through this application</p>
    <ul>
      <li>Seminar Search: Users can search for information about current or upcoming seminars based on desired keywords.</li>
      <li>Seminar Details: Users can view complete information about the selected seminar, including the date, time, location, and description.</li>
      <li>Ticket Booking: Users can book seminar tickets online by filling out the available form.</li>
      <li>Payment: Users can make seminar ticket payments through the application using available payment methods, such as credit card or bank transfer.</li>
      <li>E-ticket: After successful ticket booking and payment, the user will receive an e-ticket via email or the application that can be used to attend the seminar.</li>
    </ul>
    `,
    stack: ['MongoDB', 'Express JS', 'React JS'],
    image: ['/portfolio/semina/1.webp', '/portfolio/semina/2.webp'],
    sourceCode: 'https://github.com/HariisV/semina-backend',
    date: '2022 - DES',
  },

  {
    name: 'Luxspace PWA',
    description:
      'PWA are web applications that utilize modern technologies to provide a user experience similar to native applications.',
    descriptionLong: `
    <p>Progressive Web Apps (PWAs) are web applications that utilize modern technologies to provide a user experience similar to native applications on mobile devices. They utilize features such as push notifications and offline mode to provide the same convenience as native apps.</p>
    <p style="margin-top:5px;">ReactJS is a popular JavaScript library for building user interfaces, and Tailwind CSS is a utility-first CSS framework that can be used to style your PWA. By using these tools together, you can build a PWA that is fast, responsive, and easy to use on a variety of devices.</p>
    <ul>
      <li>Workbox</li>
      <li>Event Service Workbox.</li>
      <li>Lighthouse.</li>
      <li>Push Notification.</li>
    </ul>
    `,
    stack: ['React', 'PWA', 'Tailwind'],
    image: ['/portfolio/luxspace-pwa/1.png'],
    sourceCode: 'https://github.com/HariisV/Luxspace_PWA',
    livePreview: 'https://luxspace-pwa.vercel.app/',
    date: '2022 - DES',
  },
  {
    name: 'Tickez',
    description:
      'Tickez is an application that is used to book a Movies. built using React, here you can select all movies & select available seats',
    descriptionLong: `
    <p>Ticketz is also available as a web application built using React JS, a JavaScript library for building user interfaces. One advantage of using React JS is that it allows for the creation of reusable components, which can improve the efficiency and maintainability of the code. In addition, React JS uses a virtual DOM (Document Object Model) to optimize updates and minimize the impact on performance when the user interface changes.</p>
    <ul>
      <li>The user will receive an online ticket which contains the user's chosen seat and a barcode that can be scanned by the staff.</li>
      <li>The security and convenience are guaranteed.</li>
      <li>In addition to watching currently showing films, the user can also view films that are coming soon.</li>
      <li>The user can also change their profile and password.</li>
    </ul>
    `,
    stack: ['React', 'Bootstrap', 'Express', 'Redis'],
    image: ['/portfolio/tickez/1.png'],
    sourceCode: 'https://github.com/HariisV/Ticketing-React',
    livePreview: 'https://tickez.dokumensaya.com/',
    date: '2022 - DES',
  },
  {
    name: 'Tickez Mobile',
    description:
      'Tickez Mobile is Mobile version of Tickez, built using React Native, here you can also select all movies & select available seats',
    descriptionLong: `
    <p>Ticketz is an application built using React Native, which makes it a cross-platform application that can be used on both Android and iOS devices. It allows users to buy and reserve movie tickets</p>
    <ul>
      <li>The user will receive an online ticket which contains the user's chosen seat and a barcode that can be scanned by the staff.</li>
      <li>The security and convenience are guaranteed.</li>
      <li>In addition to watching currently showing films, the user can also view films that are coming soon.</li>
      <li>The user can also change their profile and password.</li>
    </ul>
    `,
    stack: ['React Native', 'Redux'],

    image: [
      '/portfolio/tickez-mobile/1.png',
      '/portfolio/tickez-mobile/2.png',
      '/portfolio/tickez-mobile/3.jpg',
      '/portfolio/tickez-mobile/4.jpg',
      '/portfolio/tickez-mobile/5.jpg',
    ],
    sourceCode: 'https://github.com/HariisV/Ticketing-Mobile',
    date: '2021 - AUG',
  },

  {
    name: 'xWallet',
    description:
      'xWallet is a digital wallet application that allows us to transfer money for free without any fees. also automatic topup',
    descriptionLong: `<div><p>xWallet is a digital wallet designed to simplify users' financial needs and save time in banking needs. The features of this project are:</p>
    <ul>
      <li>topping up money with various payment methods</li>
      <li>using Midtrans as a payment gateway for topping up in this project</li>
      <li>transferring money to other users</li>
      <li>viewing income and expenditure in the xWallet app dashboard</li>
      <li>and changing profile and password user.</li>
    </ul></div>`,
    stack: ['Next', 'Bootstrap', 'Redis', 'Express'],
    image: ['/portfolio/xwallet/1.png', '/portfolio/xwallet/2.webp'],
    date: '2021 - SEP',
    sourceCode: 'https://github.com/HariisV/XWallet',
    livePreview: 'https://x-wallet.vercel.app/',
  },
  {
    name: 'Hire App',
    description:
      'Hire App is an application for job seekers or looking for workers. Or even you can contact workers for a project',
    descriptionLong: '',
    stack: ['React', 'Redis', 'Bootstrap', 'Express'],
    image: ['/portfolio/hire/1.png'],
    date: '2021 - DES',
  },
  {
    name: 'Coffe Shop',
    description:
      'Website for buying coffee online. using midtrans as a payment gateway. Admin can manage purchases and view monthly data.',
    descriptionLong: '',
    stack: ['React', 'Redis', 'Bootstrap', 'Express'],
    image: ['/portfolio/coffe/1.webp'],
    date: '2021 - OKT',
  },
  {
    name: 'Solusi Marketing',
    description:
      'Marketplace For Selling Item Online (Game, Mobile Legends, Account, etc). Saving balance after top up to easily buy items',
    descriptionLong: '',
    stack: ['Livewire', 'MySQL', 'Bootstrap'],
    image: ['/portfolio/solusi-marketing/1.webp'],
    date: '2022 - MEI',
  },
  {
    name: 'DMA Dropship',
    description:
      'A website for buying and selling between admins and users. As well as managing, storing purchase and expenditure data.',
    descriptionLong: '',
    stack: ['Laravel', 'Bootstrap', 'Jquery', 'MySql'],
    date: '2021 - MEI',
    image: ['/portfolio/dma/1.png'],
  },
  {
    name: 'Eka Danta LC',
    description:
      'Develop web application with complex features in a Learning Management System (LMS) using advanced jQuery and Ajax techniques.',
    stack: ['Laravel', 'Bootstrap', 'Jquery', 'Ajax'],
    livePreview: 'https://ekadantalc.com/',
    image: ['/portfolio/ekadanta/1.png'],
  },
  {
    name: 'PPDB SMKN 5',
    description:
      'New Student Admission Website. has several features such as registering new students, verifying data, to taking online tests.',
    descriptionLong: '',
    stack: ['Laravel', 'Bootstrap', 'MySql'],
    date: '2021 - FEB',
    image: ['/portfolio/ppdb/1.png'],
  },
  {
    name: 'Meduza Shop',
    description:
      'A simple online store website that uses laravel as a backend. This is my first freelance project and learn more about Laravel',
    descriptionLong: '',
    stack: ['Laravel', 'Bootstrap', 'MySql'],
    sourceCode: 'https://github.com/HariisV/Meduza-Shop',
    image: ['/portfolio/meduza/1.webp'],
    date: '2020 - MEI',
  },
]
const otherProjects = [
  // {
  //   name: 'Brainfit Online',
  //   description:
  //     'Developed a complex landing page with an integrated admin panel using Laravel as the backend framework and Alpine.js as the frontend framework. Leveraged the power of Laravel, TailwindCSS, and Alpine.js to create a seamless user experience. MySQL was utilized as the database to ensure efficient data management and retrieval.',
  //   stack: ['Laravel', 'TailwindCSS', 'AlpineJS'],
  //   livePreview: 'http://brainfitonline.co.id/',
  //   image: ['/image/other-2.webp'],
  // },
  // {
  //   name: 'Sinaning.id',
  //   description:
  //     'Implemented real-time chat features, resolved bugs, and ensured responsive design for a mobile-first approach. Conducted manual quality assurance (QA) testing and built Android apps using React Native. Utilized Laravel, Bootstrap, jQuery, and Firebase to enhance project functionality and user experience.',
  //   stack: ['Laravel', 'React Native', 'Bootstrap', 'Jquery', 'Firebase'],
  //   livePreview: 'http://sinaning.id/',
  //   image: ['/image/other-3.webp'],
  // },
  // {
  //   name: 'Eka Danta LC',
  //   description:
  //     'Utilized advanced techniques in jQuery and Ajax to implement complex features within a Learning Management System (LMS). Leveraged Laravel and MySQL to optimize code performance, successfully handling concurrent usage by up to 200 users while maintaining cost-effective architecture.',
  //   stack: ['Laravel', 'Bootstrap', 'Jquery', 'Ajax'],
  //   livePreview: 'https://ekadantalc.com/',
  //   image: ['/portfolio/ekadanta/1.webp'],
  // },
  // {
  //   name: 'Planning Info UNSYIAH',
  //   description:
  //     'Continued program development by updating features, resolving bugs, and refactoring code. Implemented CRUD functionality in selected modules and enhanced CSS for improved page aesthetics.',
  //   stack: ['HTML', 'CSS', 'JQuery'],
  //   livePreview: 'http://perencanaan.usk.ac.id/',
  //   image: ['/image/other-1.webp'],
  // },
]

const skills = [
  {
    name: 'Google',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  },
  {
    name: 'HTML',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },

  {
    name: 'JavaScript',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'PHP',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    name: 'NodeJS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'ExpressJS',
    image: '/icon/express.png',
  },
  {
    name: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'NextJS',
    image: 'https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png',
  },
  {
    name: 'React Native',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Jquery',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
  },
  {
    name: 'JestJS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
  {
    name: 'Figma',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'Bootstrap',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },

  {
    name: 'TailwindCSS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'SCSS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  {
    name: 'Laravel',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  },
  {
    name: 'AWS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  },
  {
    name: 'Digital Ocean',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
  },
  {
    name: 'Github',
    image:
      'https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png',
  },
  {
    name: 'Docker',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'MongoDB',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'MySQL',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Redis',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  },
]

const reviews = [
  {
    name: 'Rino Satya Putra',
    from: 'via Linkedin',
    content:
      'Haris Wahyudi he has a high determination to be able to contribute to the team well and has some abilities, good luck bro!',
  },
  {
    name: 'gomi83',
    from: 'via Projects.co.id',
    content: 'Good job, wait for the next project from me.',
  },
  {
    name: 'blackpenguin',
    from: 'via projects.co.id',
    content: 'can quickly adapt. recommended workers. thanks',
  },
  {
    name: 'Ricksalva88',
    from: 'via Projects.co.id',
    content: 'Finish well and on time.',
  },
  {
    name: 'joe7878',
    from: 'via Projects.co.id',
    content: 'Workers are fast, neat, and satisfying haha. thank you',
  },
  {
    name: 'Al Fajri Putra Pratama',
    from: 'via Linkedin',
    content:
      'Haris has a natural talent to be a programmer. I really appreciate everything he does, good luck!',
  },
]
const contact = {
  email: 'hariswh9@mail.com',
}

export { header, about, projects, skills, contact, reviews, otherProjects }
