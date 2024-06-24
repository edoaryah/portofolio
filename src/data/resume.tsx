import { Icons } from "@/components/icons";

export const DATA = {
  name: "Edo Arya",
  initials: "EA",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Currently exploring software engineering opportunities with a strong focus on backend development.",
  summary:
    "Information Systems student at the [State Polytechnic of Malang](https://www.polinema.ac.id/) with work experience in the field of software engineering and networking. Possesses hands-on experience as a backend and frontend engineer for websites and mobile applications. I have strong interpersonal skills, including excellent communication, effective teamwork, high initiative, and strong analytical abilities. I am seeking to further develop my expertise in software engineering.",
  avatarUrl: "/me.png",
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
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        url: "https://github.com/edoaryah",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/edoarya/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/dillionverma",
        icon: Icons.x,
      },
      Youtube: {
        url: "https://youtube.com/c/dillionverma",
        icon: Icons.youtube,
      },
    },
  },

  work: [
    {
      company: "PT Hexindo Adiperkasa Tbk",
      href: "https://www.hexindo-tbk.co.id/id/",
      badges: [],
      location: "Remote",
      title: "IT Support",
      logoUrl: "/hexindo.png",
      start: "Mar 2024",
      end: "Jun 2024",
      description:
        "Assisted the safety supervisor in developing a mobile survey application using Flutter to monitor the sleep hours of 200+ employees. Troubleshot hardware and software issues, resolving 90% of problems for over 30 employees. Configured various network devices, ensuring smooth and stable connectivity for over 100 devices. Developed IT documentation, enhancing new user training efficiency by 25% and reducing adaptation time by 20%.",
    },
    {
      company: "PT Revolusi Cita Edukasi",
      badges: [],
      href: "https://www.revou.co",
      location: "Remote",
      title: "Front End Engineer",
      logoUrl: "/revou.svg",
      start: "Feb 2024",
      end: "Jun 2024",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "PT Adma Digital Solusi",
      href: "https://admasolusi.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Back End Engineer",
      logoUrl: "/ads.png",
      start: "Sep 2023",
      end: "Dec 2023",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
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
      description:
        "As the lead Full Stack Developer, I spearheaded the development of a sophisticated queue management system for the ['House of Pet Malang'](https://www.instagram.com/houseofpetmalang/?hl=en) veterinary clinic. This system was seamlessly integrated with the [Midtrans Payment Gateway](https://midtrans.com/en) to ensure smooth and efficient transactions.",
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
      image: "",
      video:
        "/project1.mp4",
    },
    {
      title: "Bike Sales Dashboard",
      href: "https://magicui.design",
      dates: "Apr 2024 - Jun 2024",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
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
      image: "",
      video: "/project2.mp4",
    },
    {
      title: "UMKM Xpress",
      href: "https://courier.umkmxpress.id/login",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "UMKM Xpress is a Laravel-based web application developed to support micro, small, and medium enterprises (MSMEs) in enhancing their operational efficiency. The project integrates various modern technologies to facilitate data management, user interaction, and third-party service integration.",
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
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "SIREMA",
      href: "https://automatic.chat",
      dates: "Oct 2023 - Dec 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
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
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Eramart Cashier System",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Emoji Picker iOS",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Mobile Programming Practicum",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "Decision Support System",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "Association Rules Program",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "Beritaku",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Portfolio Website",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Interactive Birthday Card",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
  ],
  organisations: [
    {
      title: "Himpunan Mahasiswa Teknologi Informasi",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Volunteer",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "COMPFEST 15 IT Business Competition",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "Kompetisi Mahasiswa Informatika Politeknik Nasional VI",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
  ]
} as const;
