import { Project, Education, Certification, Testimonial, SkillData } from './types';

export const HERO_DATA = {
  name: "Shwe Hlaing",
  title: "Senior Full Stack Developer",
  pitch: "I am a seasoned full-stack web developer who delivers scalable web solutions, including building e-commerce websites for major Singapore brands such as zero1.sg, pom.com.sg, metro.com.sg, and stationeryworld.com.sg.",
  resumeLink: "https://drive.google.com/file/d/16DC1QosQFntdV_-vEY4874JB2_V0IuoT/view?usp=sharing", // Placeholder
  videoIntro: "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765934919/profile_jovqfg_1_m0llnc.jpg", // Placeholder for video poster
  videoUrl: "https://www.youtube.com/embed/-1h6uHxBV3s", // Specific video request
  profileImage: "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765935591/copy_of_copy_of_profile_jovqfg_1_m0llnc_15a730_e1cd13.jpg", // Updated profile image
};

export const CORE_TECHNOLOGIES = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React.js', 'TailwindCSS', 'HTML5', 'JavaScript', 'CSS3']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'TypeScript', 'PHP', 'Laravel', 'CakePHP', 'Python']
  },
  {
    category: 'Database',
    items: ['MySQL/MariaDB', 'PostgreSQL', 'Redis', 'MongoDB']
  },
  {
    category: 'API & Security',
    items: ['RESTful', 'GraphQL', 'OAuth2', 'JWT', 'OIDC']
  },
  {
    category: 'Mobile',
    items: ['React Native']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitLab', 'GitHub']
  },
  {
    category: 'DevOps & Cloud',
    items: ['AWS', 'Docker', 'CI/CD', 'Vercel']
  },
  // {
  //   category: 'Testing',
  //   items: ['Jest', 'Pytest']
  // }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "POM Singapore",
    shortDescription: "POM Singapore is a B2B marketplace connecting healthcare professionals with medical and pharmaceutical products through its POMConnect platform.",
    fullDescription: "POM Singapore is a B2B eCommerce platform that connects healthcare professionals with a wide range of medical and pharmaceutical products. Through its POMConnect system, users can easily browse, compare, and order products online, streamlining the procurement process for clinics, hospitals, and healthcare organizations. The platform leverages modern eCommerce features such as secure transactions, product catalogs, and order management to make sourcing efficient, transparent, and professional.",
    thumbnail: "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932309/pom-0_htb9ah.png",
    images: [
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932309/pom-0_htb9ah.png",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932122/pom-1_ceup5u.png",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932122/pom-2_egrtqa.png",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932121/pom-3_idtkbd.png",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932121/pom-4_ikrspd.png"
    ],
    techStack: ["AWS", "PHP", "CS-Cart", "Javascript", "MySQL", "RESTful API", "Microsoft Business Central", "HTML5", "CSS3"],
    contributions: [
      "Served as a key developer for POM Singapore, Malaysia, and Vietnam, contributing to multiple regional eCommerce platforms.",
      "Implemented complex CRM, ordering, and customer integration solutions to streamline business operations.",
      "Developed major CS-Cart add-ons to enhance the eCommerce functionality of the site.",
      "Led user migration processes and integrated the ordering system with Microsoft Business Central API.",
      "Executed CRM integrations to improve customer management and operational efficiency."
    ],
    // businessSuccess: [
    //   { metric: "Load Time", value: "-45%", description: "Reduced initial load time significantly." },
    //   { metric: "User Retention", value: "+20%", description: "Improved UI/UX led to higher daily active users." },
    // ],
    // repoLink: "https://github.com",
    demoLink: "https://www.pom.com.sg"
  },
  {
    id: "2",
    title: "Zero1 Singapore",
    shortDescription: "Zero1 Singapore is a digital platform offering affordable mobile plans, devices, and connectivity services.",
    fullDescription: "Zero1 Singapore is the official website of ZERO1, a local mobile virtual network operator (MVNO) in Singapore. The platform allows users to explore and purchase mobile plans, smartphones, and accessories, manage subscriptions, and access customer support. Designed for simplicity and transparency, the website focuses on providing cost-effective connectivity solutions with a smooth online user experience.",
    thumbnail: "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765931462/zero1-1_l2otzj.png",
    images: [
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765931462/zero1-2_ko7u4w.png",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765931461/zero1-3_q42iuv.png",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765931444/zero1-4_ke5mq2.png",
    ],
    techStack: ["Vue.js", "CakePHP", "Javascript", "BulmaCSS", "GitLab", "CSS3", "HTML5", "PHP", "MySQLWorkbench", "GitLab"],
    contributions: [
      "Developed and maintained full-stack web applications, managing both front-end and back-end development.",
      "Collaborated with designers and UX/UI specialists to convert mockups into fully functional applications.",
      "Integrated third-party APIs to enhance application functionality and improve user experience.",
      "Designed and implemented the ordering system, payment methods, API integrations, and built the entire database architecture from scratch."
    ],
    // businessSuccess: [
    //   { metric: "Adoption", value: "95%", description: "Client migration from legacy system." },
    //   { metric: "Support Tickets", value: "-30%", description: "Intuitive design reduced help desk calls." },
    // ],
    demoLink: "https://zero1.sg"
  },
  {
    id: "3",
    title: "Metro Singapore",
    shortDescription: "The Metro Singapore website is an online shopping platform offering fashion, beauty, home, and lifestyle products from a trusted department store brand.",
    fullDescription: "The Metro Singapore website is the official e-commerce platform of Metro, a well-established department store in Singapore. It features a wide range of products including apparel, beauty items, home essentials, and lifestyle goods. The site provides a seamless online shopping experience with promotions, secure checkout, and delivery options, extending Metro’s in-store experience to digital customers.",
    thumbnail: "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765933218/metro-0_ohot0h.jpg",
    images: [
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765933218/metro-0_ohot0h.jpg",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932017/metro-1_tpgsnw.png",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932016/metro-2_urzgbu.png",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932015/metro-3_mgky7l.png",
    ],
    techStack: ["CakePHP", "OpenCart", "PHP", "MySQL", "GitLab", "AWS", "Javascript", "CSS", "Jquery"],
    contributions: [
      "Took over from the previous developer to upgrade the platform from OpenCart to CakePHP, implementing a more robust and scalable version.",
      "Translated UI/UX designs from Adobe XD into functional user interfaces using HTML, CSS.",
      "Developed the ordering system, handled user migration, and ensured smooth integration with the MySQL database."
    ],
    // businessSuccess: [
    //   { metric: "Uptime", value: "99.99%", description: "Robust error handling and reconnection logic." },
    //   { metric: "Consultations", value: "10k+", description: "Monthly successful video visits." },
    // ], 
    demoLink: "https://metro.com.sg"
  },
  {
    id: "4",
    title: "Singaporeflyer",
    shortDescription: "The Singapore Flyer website helps visitors explore attractions, dining experiences, and purchase tickets for Singapore’s iconic observation wheel.",
    fullDescription: "The Singapore Flyer website is an official visitor platform providing comprehensive information on tickets, attractions, dining options such as 165 Sky Dining, event spaces, and visitor guidelines. It also features the Time Capsule experience, an immersive multimedia journey through Singapore’s history, allowing users to plan their visit and purchase tickets online easily.",
    thumbnail: "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932851/sgflyer-0_sona7a.jpg",
    images: [
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932851/sgflyer-0_sona7a.jpg",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932140/sgflyer-1_teunew.png",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932139/sgflyer-2_lfjgsk.png",
    ],
    techStack: ["React", "Laravel", "MySQL", "API Integrations", "GitLab", "MySQLWorkbench", "Laravel Voyager"],
    contributions: [
      "Designed and implemented the database architecture using MySQL Workbench and developed the application from scratch with the PHP Laravel framework.",
      "Collaborated with designers and UX/UI specialists to transform mockups into fully functional web applications using React.",
      "Integrated the Instagram API to enhance website functionality and social media connectivity.",
      "Developed a custom CMS using Laravel Voyager for efficient content management and administration."
    ],
    // businessSuccess: [
    //   { metric: "Uptime", value: "99.99%", description: "Robust error handling and reconnection logic." },
    //   { metric: "Consultations", value: "10k+", description: "Monthly successful video visits." },
    // ], 
    demoLink: "https://www.singaporeflyer.com/"
  },
  {
    id: "5",
    title: "PSB Academy",
    shortDescription: "The PSB Academy Web Portal is an online platform for students to access academic resources, manage courses, and view important announcements.",
    fullDescription: "The PSB Academy Web Portal is a centralized digital platform designed to support students throughout their academic journey. It provides access to course information, timetables, learning materials, assessments, and institutional announcements. The portal streamlines communication between students and the academy, enabling efficient academic management and an improved student experience.",
    thumbnail: "https://www.psb-academy.edu.sg/resources/others/common/JanOH26%20-%20KV%20Masthead%20(Desktop)_homepage.jpg",
    images: [
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932050/psb-1_ecr4eb.png",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932043/psb-2_jhdexb.png",
    ],
    techStack: ["React.js", "Directus", "Node.js", "Redux Toolkit", "MySQL", "GitLab", "Hubspot"],
    contributions: [
      "Developed a Headless CMS for the PSB Portal using Directus CMS powered by Node.js.",
      "Collaborated with designers and UX/UI specialists to transform mockups into fully functional web applications using React.",
      "Executed data migration for courses and related information from a third-party CRM to the new system.",
      "Managed deployment of the portal to the web server, ensuring smooth production release."
    ],
    // businessSuccess: [
    //   { metric: "Uptime", value: "99.99%", description: "Robust error handling and reconnection logic." },
    //   { metric: "Consultations", value: "10k+", description: "Monthly successful video visits." },
    // ], 
    demoLink: "https://www.psb-academy.edu.sg"
  },
  {
    id: "6",
    title: "Stationeryworld Singapore",
    shortDescription: "Stationery World Singapore is a one-stop online store offering a wide range of stationery, office supplies, and school essentials for businesses and individuals.",
    fullDescription: "Stationery World Singapore is a comprehensive e-commerce platform providing an extensive selection of stationery, office supplies, school materials, and workplace essentials. The website caters to both individual customers and corporate clients, offering convenient online ordering, reliable delivery, and competitive pricing. With a focus on quality products and customer satisfaction, Stationery World supports everyday business, educational, and home office needs across Singapore.",
    thumbnail: "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932065/stationeryworld-2_y9qoer.png",
    images: [
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932066/stationeryworld-1_lfqmie.png",
      "https://res.cloudinary.com/dnmp1thrm/image/upload/v1765932065/stationeryworld-2_y9qoer.png",
    ],
    techStack: ["PHP", "Magento2", "MySQL", "Javascript", "GitLab", "Jquery", "CSS3", "HTML5"],
    contributions: [
      "Developed the eCommerce portal using Magento 2, implementing key features and workflows.",
      "Collaborated with designers and UX/UI specialists to transform mockups into fully functional web applications",
      "Performed data migration from a third-party CRM to ensure continuity of customer and product information.",
      "Developed and customized required components in both frontend and backend systems to enhance functionality and user experience."
    ],
    // businessSuccess: [
    //   { metric: "Uptime", value: "99.99%", description: "Robust error handling and reconnection logic." },
    //   { metric: "Consultations", value: "10k+", description: "Monthly successful video visits." },
    // ],
    demoLink: "https://stationeryworld.com.sg/"
  }
];

export const EDUCATION: Education[] = [
  {
    id: "e1",
    institution: "University of Computer Studies, Yangon",
    degree: "Bachelor of Computer Science – B.C.Sc (Honours)",
    year: "2008 - 2009",
    description: "Completed Honours-level coursework in Artificial Intelligence and Software Engineering, complemented by Accounting fundamentals."
  },
  {
    id: "e2",
    institution: "University of Computer Studies, Yangon",
    degree: "Bachelor of Computer Science – B.C.Sc",
    year: "2005 - 2008",
    description: "Specialised in core computer science subjects including data structures, system design, programming languages (C, C++, Java, JavaScript, HTML), database management systems, algorithms, and operating systems."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "c5",
    name: "Ultimate AWS Certified Developer Associate 2024 NEW DVA-C02",
    issuer: "Udemy - Stepham Maarek",
    year: "2024"
  },
  {
    id: "c1",
    name: "Winner Award – 2nd Technopreneurship Competition",
    issuer: "MCF & Korea Aerospace University",
    year: "2014"
  },
  {
    id: "c2",
    name: "Certificate Android Mobile Development Course",
    issuer: "MCF and Korea Aerospace University",
    year: ""
  },
  {
    id: "c3",
    name: "Certificate in Android Game with Arduino",
    issuer: "MCF and Korea Aerospace University",
    year: ""
  },
  {
    id: "c4",
    name: "Certificate in Web Development (PHP)",
    issuer: "Creative Web Studio",
    year: ""
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Terry Tan",
    role: "VP of Engineering",
    company: "Pixelsquad Pte Ltd.",
    content: "Shwe is one of the most dedicated engineers I've worked with. Their ability to translate complex requirements into clean, maintainable code is unmatched. A true asset to any team.",
    avatar: "https://picsum.photos/seed/terry/100/100"
  },
  {
    id: "t2",
    name: "Dennis Ke",
    role: "Senior Product Manager",
    company: "Pixelsquad Pte Ltd.",
    content: "I always felt confident when Shwe was leading the frontend. They not only delivered on time but often suggested UX improvements that we hadn't considered. Highly recommended!",
    avatar: "https://picsum.photos/seed/dennis/100/100"
  }
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Frontend Development', A: 80, fullMark: 100 },
  { subject: 'Backend Development', A: 95, fullMark: 100 },
  { subject: 'DevOps & Cloud', A: 73, fullMark: 100 },
  { subject: 'API Integration', A: 95, fullMark: 100 },
  { subject: 'Database Design', A: 75, fullMark: 100 },
  { subject: 'Mobile Development', A: 75, fullMark: 100 },
];

export const CONTACT_INFO = {
  email: "shlaing.2011@gmail.com",
  phone: "+64(0)220788592",
  linkedin: "linkedin.com/in/shwehlaing",
  github: "github.com/shlaing",
  location: "Auckland, New Zealand",
  visa: "NZ Open Work Visa"
};