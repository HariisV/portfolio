const header = {
  homepage: '/',
  title: 'Haris.',
}

const about = {
  name: 'Haris Wahyudi',
  role: 'Fullstack Website Developer',
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
    stack: ['MongoDB', 'Express JS', 'React JS', 'Node JS'],
    image: ['/portfolio/semina/1.webp', '/portfolio/semina/2.webp'],
    sourceCode: 'https://github.com/HariisV/semina-backend',
    // livePreview: 'https://tickez.dokumensaya.com/',
    date: '2022 - DES',
  },
  // {
  //   name: 'StoreGG',
  //   description:
  //     'Storegg is web application for gamers to add credit to game balance. using NextJs and Express Js as the development platform.',
  //   descriptionLong: `
  //   <p>Storegg is an application that makes it easy for gamers to add credit to their game balance through top-up. This application is developed using NextJs and Express Js as the development platform. With Storegg, gamers can easily add credit to their game balance with just a few clicks, without the hassle of finding complicated top-up methods or buying game vouchers at stores. In addition, Storegg also provides various safe and easy payment methods for gamers, so they can comfortably add credit to their game balance anytime and anywhere.    </p>
  //   <ul>
  //     <li>Register/Login</li>
  //     <li>Admin Page.</li>
  //     <li>Topup Page.</li>
  //     <li>Using Midtrans For Payment Gateway.</li>
  //   </ul>
  //   `,
  //   stack: ['React', 'MongoDB', 'Express', 'NodeJS', 'Story Book'],
  //   image: ['/portfolio/storegg/1.png', '/portfolio/storegg/2.png'],
  //   // sourceCode: 'https://github.com/HariisV/Ticketing-React',
  //   // livePreview: 'https://tickez.dokumensaya.com/',
  //   date: '2022 - DES',
  // },
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
    stack: ['React', 'Redux', 'Bootstrap', 'Express', 'Redis', 'Axios'],
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
    stack: ['Next', 'Redux', 'Bootstrap', 'Redis', 'Express', 'Midtrans'],
    image: ['/portfolio/xwallet/1.png', '/portfolio/xwallet/2.png'],
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
    image: ['/portfolio/hire/1.png'],

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
    image: ['/portfolio/coffe/1.png'],
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
    image: ['/portfolio/dma/1.png'],
  },
  {
    name: 'Eka Danta LC',
    description:
      'Tryout online website, used for students who study there, every month more than 150 visitors access it at the same time',
    descriptionLong: '',
    stack: ['Laravel', 'Bootstrap', 'Jquery', 'Ajax'],
    date: '2020 - AUG',
    livePreview: 'https://ekadantalc.com/',
    image: ['/portfolio/ekadanta/1.png'],
  },
  {
    name: 'PPDB SMKN 5',
    description:
      'New Student Admission Website. has several features such as registering new students, verifying data, to taking online tests.',
    descriptionLong: '',
    stack: ['Laravel', 'Bootstrap', 'MySql'],
    sourceCode: 'https://github.com/HariisV',
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
    image: ['/portfolio/meduza/1.png'],
    date: '2020 - MEI',
  },
]

const skills = [
  'HTML / CSS',
  'JavaScript / TypeScript',
  'React',
  'ReactNative',
  'NextJS',
  'Node',
  'Express',
  'MongoDB',
  'Jest Js',
  'TailwindCSS',
  'Bootstrap',
  'PHP',
  'Laravel',
  'MySql',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hariswh9@mail.com',
}

export { header, about, projects, skills, contact }
