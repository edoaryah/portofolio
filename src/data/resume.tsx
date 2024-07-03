import { Icons } from "@/components/icons";

export const DATA = {
  name: "Edo Arya",
  initials: "EA",
  url: "https://edoarya.vercel.app",
  location: "Malang, East Java",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Currently exploring software development opportunities with a strong focus on backend development.",
  summary: "Information Systems student at the [State Polytechnic of Malang](https://www.polinema.ac.id/) with work experience in software development and networking. Possesses hands-on experience as a backend and frontend developer for websites and mobile applications. I have strong interpersonal skills, including excellent communication, effective teamwork, high initiative, and strong analytical abilities. I am seeking to further develop my expertise in software development.",
  avatarUrl: "/profile.JPG",

  skills: [
    "API Integration",
    "RESTful API",
    "Laravel",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "Flutter",
    "Swift",
    "PostgreSQL",
    "MySQL",
    "Postman",
    "Git Version Control",
    "Odoo",
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
      company: "PT Hexindo Adiperkasa Tbk",
      href: "https://www.hexindo-tbk.co.id/id/",
      badges: [],
      title: "IT Support",
      logoUrl: "/hexindo.png",
      start: "Mar 2024",
      end: "Jun 2024",
      description: "Developed a mobile application using Flutter to assist safety supervisors monitor the sleep hours of over 200 employees. The app enhances workplace safety and productivity by tracking sleep patterns, providing real-time alerts, and generating detailed reports for informed decision-making.",
    },
    {
      company: "PT Revolusi Cita Edukasi",
      badges: [],
      href: "https://www.revou.co",
      title: "Front End Engineer (Remote)",
      logoUrl: "/revou.svg",
      start: "Feb 2024",
      end: "Jun 2024",
      description: "Developed a dashboard website designed to display data visualizations derived from the analysis of bicycle sales in Europe. This Capstone Project was part of the RevoU partnership within the Kampus Merdeka Batch 6 program and was collaboratively executed by Team 8 Semarang.",
    },
    {
      company: "PT Adma Digital Solusi",
      href: "https://admasolusi.com/",
      badges: [],
      title: "Back End Engineer",
      logoUrl: "/ads.png",
      start: "Sep 2023",
      end: "Dec 2023",
      description: "Developed the backend for the UMKM Xpress project, a Laravel-based web application designed to support MSMEs in enhancing operational efficiency. Successfully created over 10 APIs and conducted website maintenance, including server configuration and performance monitoring.",
    },
  ],

  education: [
    {
      school: "State Polytechnic of Malang",
      href: "https://www.polinema.ac.id/",
      degree: "Bachelor Degree of Business Information Systems",
      logoUrl: "/polinema.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "MSIB Kampus Merdeka Batch 6 X RevoU",
      href: "https://www.revou.co",
      degree: "Data Analytics & Software Development",
      logoUrl: "/revou.svg",
      start: "2024",
      end: "2024",
    },
    {
      school: "Samsung Innovation Campus",
      href: "https://csr.samsung.com/id/programViewSic.do",
      degree: "ICT Program",
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
      title: "Himpunan Mahasiswa Teknologi Informasi",
      dates: "December 2021 - February 2023",
      location: "Politeknik Negeri Malang",
      description: "Served as an organizing committee member in the Interest and Talent Division. Organized and coordinated various projects and events within the student association",
      image: "/hmti.png",
      links: [],
    },
    {
      title: "UI GreenCityMetric",
      dates: "September 2023",
      location: "Politeknik Negeri Malang",
      description: "Volunteered at the National Workshop on UI GreenMetric World University Rankings for Polytechnics in Indonesia, held in September 2023. Contributed to promoting sustainable practices in line with UI GreenMetric's mission.",
      image: "/ui.png",
      links: [],
    },
    {
      title: "Kompetisi Mahasiswa Informatika Politeknik Nasional VI",
      dates: "May 2024",
      location: "Politeknik Negeri Jakarta",
      description: "Participated in the National Polytechnic Informatics Student Competition (KMIPN) in the cybersecurity category",
      image: "/kmipn.png",
      links: [],
    },
    {
      title: "COMPFEST 15 IT Business Competition",
      dates: "August 2023",
      location: "Universitas Indonesia",
      description: "Competed in the Business-IT Case Competition (BizzIT), designing innovative solutions for business cases using information technology.",
      icon: "public",
      image: "/compfest.png",
      links: [],
    },
  ]
} as const;
