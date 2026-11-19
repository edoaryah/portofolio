import { Icons } from "@/components/icons";

export const DATA = {
  name: "Edo Arya Hermawan",
  initials: "EA",
  url: "https://edoarya.vercel.app",
  location: "Bandung, Indonesia",
  locationLink: "https://www.google.com/maps/place/Bandung,+Indonesia",

  description:
    "Software Engineer specializing in backend development, enterprise applications, and business process digitalization.",

  summary:
    "Software Engineer with 2+ years of experience in software development and business digitalization across various industries. Experienced in backend development, API integration, and building software solutions for business and operational needs. Passionate about software engineering and continuously exploring emerging technologies, including AI, Machine Learning, and IoT.",

  avatarUrl: "/profile.JPG",

  skills: [
    "C#",
    ".NET",
    "Java",
    "Spring Boot",
    "Python",
    "RESTful APIs",
    "Microservices",
    "React",
    "PostgreSQL",
    "MySQL",
    "Microsoft SQL Server",
    "Git",
    "Docker",
    "CI/CD",
    "Hardware Troubleshooting",
    "Network Troubleshooting",
  ],

  contact: {
    email: "edoarya2002@gmail.com",
    tel: "+6281231994646",
    social: {
      GitHub: {
        url: "https://github.com/edoaryah",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/edoarya/",
        icon: Icons.linkedin,
      },
      Instagram: {
        url: "https://www.instagram.com/edoaryaa/",
        icon: Icons.instagram,
      },
    },
  },

  work: [
    {
      company: "PT Kereta Api Indonesia (Persero)",
      href: "https://www.kai.id/",
      badges: [],
      title: "Software Engineer",
      logoUrl: "/kai.png",
      start: "Oct 2025",
      end: "Present",
      description:
        "Developing and maintaining internal web and mobile applications to support railway operations and business processes. Focuses on backend development, application logic, business rules, and system integration using .NET and Java Spring Boot.",
    },
    {
      company: "PT Kaltim Prima Coal",
      href: "https://www.kpc.co.id/",
      badges: [],
      title: "Business & Performance Improvement Division Intern",
      logoUrl: "/kpc.png",
      start: "Jan 2025",
      end: "Nov 2025",
      description:
        "Contributed to business digitalization and process optimization initiatives. Developed a heavy equipment booking system that handled 200+ requests with a 98% UAT acceptance rate, and an asset booking application to digitize approval workflows and reduce manual processes.",
    },
    {
      company: "PT Alfath Teknologi Kreatif",
      href: "https://www.alfathcorp.id/",
      badges: [],
      title: "IT Department Intern",
      logoUrl: "/alfathcorp.jpg",
      start: "Aug 2024",
      end: "Dec 2024",
      description:
        "Developed and maintained a Laravel-based psychometric testing platform featuring DISC and Kraepelin assessments for recruitment. Contributed to backend development, application maintenance, Git-based collaboration, and project documentation.",
    },
    {
      company: "PT Hexindo Adiperkasa Tbk",
      href: "https://www.hexindo-tbk.co.id/id/",
      badges: [],
      title: "IT Department Intern",
      logoUrl: "/hexindo.png",
      start: "Mar 2024",
      end: "May 2024",
      description:
        "Provided IT support, hardware and software troubleshooting, and Windows 11 device migration for 20+ employees. Assisted with network device and CCTV installation, MikroTik router configuration, SSD upgrades, and technical documentation.",
    },
    {
      company: "PT Adma Digital Solusi",
      href: "https://admasolusi.com/",
      badges: [],
      title: "Backend Engineer Intern",
      logoUrl: "/ads.png",
      start: "Sep 2023",
      end: "Nov 2023",
      description:
        "Developed Laravel-based backend services and REST APIs for UMKM Xpress. Integrated Machine Learning models into API endpoints to support intelligent application features and digital solutions for local businesses.",
    },
  ],

  education: [
    {
      school: "State Polytechnic of Malang",
      href: "https://www.polinema.ac.id/",
      degree: "Applied Bachelor's Degree in Business Information Systems",
      logoUrl: "/polinema.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "MSIB Kampus Merdeka × RevoU",
      href: "https://www.revou.co",
      degree: "Data Analytics & Software Development",
      logoUrl: "/revou.svg",
      start: "2024",
      end: "2024",
    },
    {
      school: "Samsung Innovation Campus",
      href: "https://csr.samsung.com/id/programViewSic.do",
      degree: "AI & IoT Product Development Training",
      logoUrl: "/sic.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "State Senior High School 3 Malang",
      href: "https://sman3-malang.sch.id/",
      degree: "Natural Sciences",
      logoUrl: "/smanti.png",
      start: "2018",
      end: "2021",
    },
  ],

  projects: [
    {
      title: "Queue Management System",
      href: "https://github.com/edoaryah/House-of-Pet",
      dates: "Feb 2023 - Jun 2023",
      active: true,
      description: "As the lead Full Stack Developer, I spearheaded the development of a sophisticated queue management system for the ['House of Pet Malang'](https://www.instagram.com/houseofpetmalang/?hl=en) veterinary clinic. This system was seamlessly integrated with the [Midtrans Payment Gateway](https://midtrans.com/en) to ensure smooth and efficient transactions.",
      technologies: [
        "Laravel",
        "Midtrans",
        "JavaScript",
        "Bootstrap",
        "MySQL",
        "Postman",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/edoaryah/House-of-Pet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/houseofpet.png",
    },
    {
      title: "Bike Sales Dashboard",
      href: "https://km-feb24-semarang-8-blush.vercel.app/",
      dates: "Apr 2024 - Jun 2024",
      active: true,
      description: "Developed as part of the RevoU Kampus Merdeka Batch 6 program, this website showcases data visualizations from a European bicycle sales. Developed collaboratively by Team 8 Semarang, it provides insights into sales trends and customer behavior, aiding decision-making processes.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://km-feb24-semarang-8-blush.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Kampus-Merdeka-Software-Engineering/KM-FEB24-SEMARANG-8",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/revou.png",
    },
    {
      title: "UMKM Xpress",
      href: "https://courier.umkmxpress.id/login",
      dates: "Sep 2023 - Dec 2023",
      active: true,
      description: "UMKM Xpress is a Laravel-based web application developed to support MSMEs in enhancing their operational efficiency. The project integrates various modern technologies to facilitate data management, user interaction, and third-party service integration.",
      technologies: [
        "Laravel",
        "MySQL",
        "Vite",
        "Bootstrap",
        "RajaOngkir",
        "Postman",
      ],
      links: [
        {
          type: "Website",
          href: "https://courier.umkmxpress.id/login",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/umkmxpress.png",
    },
    {
      title: "SIREMA",
      href: "https://github.com/edoaryah/Flutter-Laravel-SurveyApp",
      dates: "Sep 2023 - Dec 2023",
      active: true,
      description: "SIREMA (Sistem Rekomendasi Magang) is an integrated system designed for the [Information Technology Department](https://jti.polinema.ac.id/) at Politeknik Negeri Malang. As a full stack developer, I created a mobile app that allows lecturers to access student dashboards and receive feedback, while students can submit campus surveys, incident reports, and access personalized internship recommendations.",
      technologies: [
        "Flutter",
        "Laravel",
        "PostgreSQL",
        "MySQL",
        "Python",
        "Odoo",
        "Postman",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/edoaryah/Flutter-Laravel-SurveyApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sirema.png",
    },
  ],
  hackathons: [
    {
      title: "Tic Tac Toe Game",
      dates: "May 2024",
      description: "Developed a web-based Tic Tac Toe game using the React framework.",
      image: "/tictactoe.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/edoaryah/TicTacToe-Game",
        },
      ],
    },
    {
      title: "Interactive Birthday Card",
      dates: "February 2024",
      description: "Created an interactive birthday card website using HTML, CSS, and JavaScript, featuring a birthday cake with candles that can be blown out.",
      image: "/birthday.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/edoaryah/happybirthday",
        },
      ],
    },
    {
      title: "Mobile Programming Practicum",
      dates: "August - December 2023",
      description: "Built various mobile applications using Flutter to fulfill the requirements of a mobile programming course.",
      image: "/flutter.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/edoaryah/PemrogramanMobile",
        },
      ],
    },
    {
      title: "Decision Support System",
      dates: "December 2023",
      description: "Developed a decision support system using Python, combining the AHP and TOPSIS methods.",
      image: "/dss.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/edoaryah/DSS-AHP-TOPSIS",
        },
      ],
    },
    {
      title: "Association Rules Program",
      dates: "November 2023",
      description: "Created a program using Python to implement association rules with the Apriori algorithm.",
      image: "/datamining.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/edoaryah/Association-Rules-Python",
        },
      ],
    },
    {
      title: "Emoji Picker iOS",
      dates: "September 2023",
      description: "Developed a simple mobile application using Swift for picking emojis.",
      image: "/ios.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/edoaryah/EmojiPicker-iOS",
        },
      ],
    },
    {
      title: "Eramart Cashier System",
      dates: "December 2022",
      description: "Created a cashier application for the Eramart minimarket using Java, complete with receipt printing features.",
      image: "/eramart.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/edoaryah/AplikasiKasirEramart",
        },
      ],
    },
    {
      title: "Beritaku",
      dates: "July 2022",
      description: "Developed a news portal website using HTML, CSS, JavaScript, and PHP, complete with news management features for administrators.",
      image: "/news.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/edoaryah/Beritaku",
        },
      ],
    },
  ],
  organisations: [
    {
      title: "Information Technology Student Association (HMTI)",
      dates: "2022 - 2023",
      location: "State Polytechnic of Malang",
      description: "Served as an organizing committee member in the Research & Student Talent Division, contributing to the planning and coordination of student activities and events.",
      image: "/hmti.png",
      links: [],
    },
    {
      title: "UI GreenMetric National Workshop",
      dates: "September 2023",
      location: "State Polytechnic of Malang",
      description: "Volunteered at the national workshop on UI GreenMetric World University Rankings for Polytechnics in Indonesia, supporting an event focused on sustainability and environmentally responsible practices.",
      image: "/ui.png",
      links: [],
    },
    {
      title: "National Polytechnic Informatics Student Competition (KMIPN VI)",
      dates: "May 2024",
      location: "Jakarta State Polytechnic",
      description: "Participated in the national competition in the Cyber Security category, representing State Polytechnic of Malang.",
      image: "/kmipn.png",
      links: [],
    },
    {
      title: "COMPFEST 15 - IT Business Competition",
      dates: "August 2023",
      location: "University of Indonesia",
      description: "Participated in the BizzIT Business-IT Case Competition, developing technology-based solutions to address business challenges.",
      icon: "public",
      image: "/compfest.png",
      links: [],
    },
  ],
  certifications: [
    {
      title: "Assistant Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      period: "2026",
      description: "Credential ID 2513.J62.3.2.1957.00137.2.0698",
      logoUrl: "/bnsp.png",
      href: "https://bnsp.go.id/signature/certificate?document_id=a2961645-d0aa-4483-87dc-07346545f9c4",
    },
    {
      title: "Computer Software Programming",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      period: "2025",
      description: "Credential ID 62019.3512.01.5.0013817.2025",
      logoUrl: "/bnsp.png",
      href: "https://drive.google.com/file/d/1Gi3gowo0DHXIzgpLpAV9nwb5VSXYwSls/view",
    },
    {
      title: "TOEIC English Proficiency",
      issuer: "ETS Global",
      period: "2025",
      description: "Score: 690/990",
      logoUrl: "/ets.png",
      href: "https://drive.google.com/file/d/14JS1ezOyccIXb6lzAChVy6nxNZKp_0gs/view?usp=sharing",
    },
  ],
} as const;
