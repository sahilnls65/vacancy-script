const ObjectId = require("bson").ObjectId;
const companies = [
  {
    bedrijfsnaam: "Test BV Donald",
    _id: "6527d7cc5e3a3c6183c107c7",
    owner: "6527d42f3790198da983ada8",
    image: "6527d7cc5e3a3c6183c107c7/6527d7cc5e3a3c6183c107c7.jpeg",
    image_id: "6527e0994937520079e25001",
  },
  {
    bedrijfsnaam: "Test Stichting Bolderbast",
    _id: "652cba58d832d4defba906ac",
    owner: "6528ce103790198da9847744",
    image: "652cba58d832d4defba906ac/652cba58d832d4defba906ac.jpeg",
    image_id: "6527e0994937520079e25002",
  },
  {
    bedrijfsnaam: "Test VOF Guus",
    _id: "652d17fb8d59262f2c6b58a3",
    owner: "6527d9f93790198da983b89b",
    image: "652d17fb8d59262f2c6b58a3/652d17fb8d59262f2c6b58a3.jpeg",
    image_id: "6527e0994937520079e25003",
  },
  {
    bedrijfsnaam: "Test NV Katrien",
    _id: "653a55463f392d9b9e44667f",
    owner: "65277de95a654a292ad0eb17",
    image: "653a55463f392d9b9e44667f/653a55463f392d9b9e44667f.jpeg",
    image_id: "6527e0994937520079e25004",
  },
];

const professions = [
  {
    description: "Software engineer (m/v)",
    category: "professions",
    code_id: "2608",
    title: "Software engineer",
    skills: [
      {
        name: "Software Engineering",
        category: "it_skills",
        code_id: "KS440QS66YCBN23Y8K25",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a01",
        },
      },
      {
        name: "Java",
        category: "it_skills",
        code_id: "KS120076FGP5WGWYMP0F",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a02",
        },
      },
      {
        name: "C#",
        category: "it_skills",
        code_id: "KS1219N6Z3XQ19V0HSKR",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a03",
        },
      },
      {
        name: "C++",
        category: "it_skills",
        code_id: "KS1219W70LY1GXZDSKW5",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a04",
        },
      },
      {
        name: "Cloud Computing",
        category: "it_skills",
        code_id: "KS1220H6CP1BQGH9STNK",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a05",
        },
      },
      {
        name: "JavaScript",
        category: "it_skills",
        code_id: "KS1200771D9CR9LB4MWW",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a06",
        },
      },
      {
        name: "Informatie- en Communicatietechnologie",
        category: "it_skills",
        code_id: "KSJLPQMW0YRWJSWO4NFL",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a07",
        },
      },
      {
        name: "Python",
        category: "it_skills",
        code_id: "KS125LS6N7WP4S6SFTCK",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a08",
        },
      },
      {
        name: "Continuous Integration",
        category: "it_skills",
        code_id: "KS122C775KRX1DK8Q1RQ",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a09",
        },
      },
      {
        name: "Agile Methodologie",
        category: "it_skills",
        code_id: "KS120B874P2P6BK1MQ0T",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a10",
        },
      },
      {
        name: "Debuggen",
        category: "it_skills",
        code_id: "KS122SG5Y0Q5YQM7V8KT",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a11",
        },
      },
      {
        name: "ReactJS",
        category: "it_skills",
        code_id: "KS9E9SUSTX6U1ESK796U",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a12",
        },
      },
      {
        name: "Object-Georiënteerde Software-Ontwikkeling",
        category: "it_skills",
        code_id: "KS1278W6LG4JDWNMF9C0",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a13",
        },
      },
      {
        name: "Git",
        category: "it_skills",
        code_id: "KSFXRX8RU2T0RXA7QPHJ",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a14",
        },
      },
      {
        name: "AngularJS",
        category: "it_skills",
        code_id: "KSIF8EJFQQ0T7CER8KX3",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a15",
        },
      },
    ],
    short_description: [
      "Software Engineers design, develop, and maintain software solutions, ensuring efficient computer system operation.",
      "They are responsible for coding, debugging, and enhancing software applications.",
      "Software Engineers use their problem-solving skills to create innovative solutions for various industries.",
    ],
    long_description: [
      "Software Engineers are highly skilled professionals who play a crucial role in the development and maintenance of software applications and systems. They design, code, and test software to ensure it meets the needs of end-users. These engineers use various programming languages and development tools to create software that can perform tasks, solve problems, and improve efficiency across various industries.",
      "Software Engineers are the architects behind the software that powers our digital world. They analyze requirements, design software solutions, and write efficient, clean code. Their work is essential in areas like web development, mobile app development, and embedded systems. They work closely with cross-functional teams to deliver high-quality software solutions that meet user needs and business objectives.",
      "Software Engineers are at the forefront of technological innovation. They create software solutions that power everything from social media platforms to self-driving cars. Their responsibilities include understanding user requirements, designing software architecture, coding, and testing. They contribute to making businesses and industries more efficient, competitive, and adaptable to the ever-changing digital landscape.",
    ],
  },
  {
    description: "Data Scientist (m/v)",
    category: "professions",
    code_id: "5269",
    title: "Data Scientist",
    skills: [
      {
        name: "Machine Learning",
        category: "it_skills",
        code_id: "KS1261Z68KSKR1X31KS3",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a01",
        },
      },
      {
        name: "Data Science",
        category: "professional_skills",
        code_id: "KS7LO8P3MXB93R3C9RWL",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a02",
        },
      },
      {
        name: "Deep Learning",
        category: "it_skills",
        code_id: "KSBZ9LW988KC56I219SP",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a03",
        },
      },
      {
        name: "Predictive Modeling",
        category: "professional_skills",
        code_id: "KS128006L3V0HM2B26N5",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a04",
        },
      },
      {
        name: "Python",
        category: "it_skills",
        code_id: "KS125LS6N7WP4S6SFTCK",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a05",
        },
      },
      {
        name: "Tensorflow",
        category: "it_skills",
        code_id: "KS2GHRCYA6TRT29F1HOO",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a06",
        },
      },
      {
        name: "Scikit-learn",
        category: "it_skills",
        code_id: "KSJ2QBJ158RE1QN9D3AZ",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a07",
        },
      },
      {
        name: "Natuurlijke Taalverwerking",
        category: "it_skills",
        code_id: "KS126VY6DLPDWFZD5VB8",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a08",
        },
      },
      {
        name: "R (Programming Language)",
        category: "it_skills",
        code_id: "KS124DQ6JX0NX9DBFDM8",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a09",
        },
      },
      {
        name: "Statistiek",
        category: "professional_skills",
        code_id: "KS440Y975RD841M02V3S",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a10",
        },
      },
      {
        name: "Algoritmes",
        category: "professional_skills",
        code_id: "KS120D96FHL88PZDKZKH",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a11",
        },
      },
      {
        name: "Pandas",
        category: "it_skills",
        code_id: "KSGWPO6DSN70GRY20JFT",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a12",
        },
      },
      {
        name: "Pytorch",
        category: "it_skills",
        code_id: "KS8P7L2QZSFATZ02JDA8",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a13",
        },
      },
      {
        name: "Neurale Netwerken",
        category: "it_skills",
        code_id: "KS120NN6SBW45D10MY36",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a14",
        },
      },
      {
        name: "Big Data",
        category: "it_skills",
        code_id: "KS1210269P78D7GH8LWY",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a15",
        },
      },
    ],
    short_description: [
      "Data Scientists extract insights from data, enabling data-driven decisions in organizations.",
      "They apply statistical and machine learning techniques to analyze complex datasets.",
      "Data Scientists play a pivotal role in transforming data into actionable information.",
    ],
    long_description: [
      "Data Scientists are professionals adept at handling and interpreting complex data. They use statistical and machine learning methods to uncover valuable insights hidden within vast datasets. These insights empower organizations to make informed, data-driven decisions, drive innovation, and gain a competitive advantage.",
      "Data Scientists are instrumental in the age of big data, bridging the gap between raw information and actionable intelligence. They work across industries, such as healthcare, finance, and technology, to process, analyze, and visualize data. Through their work, they assist businesses in solving problems, predicting future trends, and optimizing processes.",
      "In today's data-centric world, Data Scientists are essential for extracting meaning from the information overload. They work at the intersection of computer science, statistics, and domain expertise, transforming data into a valuable asset that drives growth and informs strategic choices for organizations of all sizes.",
    ],
  },
  {
    description: "Full Stack Developer (m/v)",
    category: "professions",
    code_id: "5772",
    title: "Full Stack Developer",
    skills: [
      {
        name: "ReactJS",
        category: "it_skills",
        code_id: "KS9E9SUSTX6U1ESK796U",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a01",
        },
      },
      {
        name: "AngularJS",
        category: "it_skills",
        code_id: "KSIF8EJFQQ0T7CER8KX3",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a02",
        },
      },
      {
        name: "Node.Js",
        category: "it_skills",
        code_id: "KS127296VDYS7ZFWVC46",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a03",
        },
      },
      {
        name: "JavaScript",
        category: "it_skills",
        code_id: "KS1200771D9CR9LB4MWW",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a04",
        },
      },
      {
        name: "Typescript",
        category: "it_skills",
        code_id: "KS441LF7187KS0CV4B6Y",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a05",
        },
      },
      {
        name: "Backend",
        category: "it_skills",
        code_id: "KSFFZBDYXH5XA5QE4E7I",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a06",
        },
      },
      {
        name: "CSS",
        category: "it_skills",
        code_id: "KS121F45VPV8C9W3QFYH",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a07",
        },
      },
      {
        name: "Vue.Js",
        category: "it_skills",
        code_id: "KSGDZ4VMK1WCGQCE1KUT",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a08",
        },
      },
      {
        name: "Java",
        category: "it_skills",
        code_id: "KS120076FGP5WGWYMP0F",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a09",
        },
      },
      {
        name: "Front End",
        category: "it_skills",
        code_id: "KSQ4V3A6FGYT0MLOOUEX",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a10",
        },
      },
      {
        name: "Git",
        category: "it_skills",
        code_id: "KSFXRX8RU2T0RXA7QPHJ",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a11",
        },
      },
      {
        name: "Fullstack Ontwikkeling",
        category: "professional_skills",
        code_id: "KSMJL0HNO3MRM76MFYG2",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a12",
        },
      },
      {
        name: "Spring Boot",
        category: "it_skills",
        code_id: "KSB0O0RTR4GBUS9C1FV7",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a13",
        },
      },
      {
        name: "APIs",
        category: "it_skills",
        code_id: "KS1208P6ZMZ4N872Y7X5",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a14",
        },
      },
      {
        name: "HTML",
        category: "it_skills",
        code_id: "KS1200578T5QCYT0Z98G",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a15",
        },
      },
    ],
    short_description: [
      "Full Stack Developers are versatile professionals who work on both front-end and back-end aspects of web development.",
      "They create user-friendly interfaces and design server infrastructure, making websites and applications functional and visually appealing.",
      "Full Stack Developers are experts in various programming languages, enabling them to build end-to-end web solutions.",
    ],
    long_description: [
      "Full Stack Developers are multifaceted experts in web development who possess the skills to work on both the front-end and back-end of web applications. They are responsible for creating the user interface that users interact with and designing the server infrastructure that powers websites and applications. Their role is pivotal in ensuring that a web project is functional, responsive, and visually appealing.",
      "These developers have a deep understanding of various programming languages, including HTML, CSS, JavaScript, and server-side languages like Python, Ruby, or PHP. They use their knowledge to create end-to-end web solutions, handling everything from the user experience to the server-side logic. This makes them valuable assets for businesses looking to develop and maintain modern, responsive web applications.",
      "In today's technology-driven world, Full Stack Developers are in high demand due to their ability to work on diverse aspects of web development. They are often involved in all stages of a project, from planning and design to development and deployment. Their versatility allows them to bridge the gap between front-end and back-end development, making them a vital component of successful web projects.",
    ],
  },
  {
    description: "Webdesigner (m/v)",
    category: "professions",
    code_id: "785",
    title: "Web designer",
    skills: [
      {
        name: "Webdesign",
        category: "professional_skills",
        code_id: "KS122VP5W9LZ8TRNFJY0",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a01",
        },
      },
      {
        name: "Drupal",
        category: "it_skills",
        code_id: "KS1235W6HWFKFTM31M45",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a02",
        },
      },
      {
        name: "Wordpress",
        category: "it_skills",
        code_id: "KS4424P6G7QVWXC3B756",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a03",
        },
      },
      {
        name: "CSS",
        category: "it_skills",
        code_id: "KS121F45VPV8C9W3QFYH",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a04",
        },
      },
      {
        name: "HTML",
        category: "it_skills",
        code_id: "KS1200578T5QCYT0Z98G",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a05",
        },
      },
      {
        name: "Adobe Photoshop",
        category: "it_skills",
        code_id: "KS1206Y6W7F5JS3VBTFL",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a06",
        },
      },
      {
        name: "PHP",
        category: "it_skills",
        code_id: "KS1200C5XQWW78VQ5ZYL",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a07",
        },
      },
      {
        name: "Grafisch Ontwerp",
        category: "professional_skills",
        code_id: "KS124H46Q2PP8YC1WQ06",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a08",
        },
      },
      {
        name: "Adobe Illustrator",
        category: "it_skills",
        code_id: "KS1206V6K46N1SDVJGBD",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a09",
        },
      },
      {
        name: "HTML5",
        category: "it_skills",
        code_id: "KS120RM619V18NJXTHV1",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a10",
        },
      },
      {
        name: "Figma",
        category: "it_skills",
        code_id: "KSNQCEX0FGMCVVVXQ0MD",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a11",
        },
      },
      {
        name: "Webontwikkeling",
        category: "it_skills",
        code_id: "KS122Z36QK3N5097B5JH",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a12",
        },
      },
      {
        name: "Jquery",
        category: "it_skills",
        code_id: "KS125KQ5WKM97L66SSQY",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a13",
        },
      },
      {
        name: "Twig",
        category: "it_skills",
        code_id: "KSHOK73GRCWHGT3OZRM9",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a14",
        },
      },
      {
        name: "JavaScript",
        category: "it_skills",
        code_id: "KS1200771D9CR9LB4MWW",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a15",
        },
      },
    ],
    short_description: [
      "Web Designers create visually appealing and user-friendly websites and web applications.",
      "They focus on layout, color schemes, and graphics to enhance the overall user experience.",
      "Web Designers are skilled in HTML, CSS, and design software, turning concepts into captivating online interfaces.",
    ],
    long_description: [
      "Web Designers are creative professionals who specialize in the visual aspects of web development. Their primary role is to design and craft user-friendly and aesthetically pleasing websites and web applications. They pay close attention to layout, color schemes, typography, and graphics to ensure a positive and engaging user experience.",
      "These designers are proficient in HTML and CSS, as well as various design software like Adobe Photoshop and Illustrator. They collaborate closely with web developers to turn conceptual ideas into captivating online interfaces. Web Designers also consider user behavior and design responsive layouts that adapt to different devices, providing a seamless experience across desktops, tablets, and mobile phones.",
      "In the digital age, Web Designers play a critical role in creating the first impression of a website. Their designs influence how users perceive a brand or product online, making their work essential in enhancing the online presence of businesses and organizations.",
    ],
  },
  {
    description: "iOS developer (m/v)",
    category: "professions",
    code_id: "5273",
    title: "iOS developer",
    skills: [
      {
        name: "Swift (Programmeertaal)",
        category: "it_skills",
        code_id: "KSDL2I79RPDGPJBZNOT4",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a01",
        },
      },
      {
        name: "Ios Frameworks",
        category: "it_skills",
        code_id: "KSBHU3UR08EHCPHKA7KX",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a02",
        },
      },
      {
        name: "Objective-C",
        category: "it_skills",
        code_id: "KS1275N74XZ574T7N47D",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a03",
        },
      },
      {
        name: "Swiftui",
        category: "it_skills",
        code_id: "KS9RAK9QKY5PAXMG06MN",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a04",
        },
      },
      {
        name: "Uikit",
        category: "it_skills",
        code_id: "KS7ES0QY5P8Z3LC9ULV4",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a05",
        },
      },
      {
        name: "Apple IOS",
        category: "it_skills",
        code_id: "KS120KG6WHGRLKG6DFS3",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a06",
        },
      },
      {
        name: "IOS Applications",
        category: "it_skills",
        code_id: "KS120K369N6FRXGKL0SN",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a07",
        },
      },
      {
        name: "Xcode",
        category: "it_skills",
        code_id: "KS120KT71H7QN93P89J9",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a08",
        },
      },
      {
        name: "Cocoapods",
        category: "it_skills",
        code_id: "KSK5LWYUO72ISA4JCQOO",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a09",
        },
      },
      {
        name: "Ios Sdk",
        category: "it_skills",
        code_id: "KS125BL6GMSSNYP1KX64",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a10",
        },
      },
      {
        name: "Cocoa Touch",
        category: "it_skills",
        code_id: "KSMCOSU42IS0FMQH7ODJ",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a11",
        },
      },
      {
        name: "MVVM",
        category: "it_skills",
        code_id: "KS126TT617NQ007M2JJ4",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a12",
        },
      },
      {
        name: "Mobile Application Development",
        category: "it_skills",
        code_id: "KS121JW5XD3J5438SMXP",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a13",
        },
      },
      {
        name: "Xctest",
        category: "it_skills",
        code_id: "KSX5PU4DGDU5WZ6XCI99",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a14",
        },
      },
      {
        name: "Mobile Application Software",
        category: "it_skills",
        code_id: "KS125C56C2Y9MPSV9YQ3",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a15",
        },
      },
    ],
    short_description: [
      "iOS Developers specialize in creating mobile applications for Apple's iOS platform.",
      "They code and design user-friendly, efficient apps for iPhones and iPads.",
      "iOS Developers are skilled in Swift and Objective-C, ensuring seamless app functionality.",
    ],
    long_description: [
      "iOS Developers are experts in developing mobile applications specifically tailored for Apple's iOS platform, which powers devices like iPhones and iPads. Their primary role involves designing, coding, and optimizing applications to provide a smooth and user-friendly experience for Apple device users.",
      "These developers are proficient in programming languages such as Swift and Objective-C, along with development tools like Xcode. They work on creating innovative and efficient apps, considering factors like user interface design, performance, and compatibility with various iOS devices and versions. They play a crucial role in transforming ideas into functional mobile applications available on the App Store, contributing to the ever-expanding iOS app ecosystem.",
      "In the rapidly growing mobile app industry, iOS Developers are essential for businesses and entrepreneurs looking to engage with Apple's user base. Their expertise in iOS app development ensures that the software they create meets the high standards and expectations set by Apple, providing a competitive edge in the mobile app market.",
    ],
  },
  {
    description: "Android developer (m/v)",
    category: "professions",
    code_id: "5283",
    title: "Android developer",
    skills: [
      {
        name: "Kotlin",
        category: "it_skills",
        code_id: "KSGQ9QZ5IFB2Q2JYUENP",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a01",
        },
      },
      {
        name: "Android SDK",
        category: "it_skills",
        code_id: "KS120GZ74XB412QM61XK",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a02",
        },
      },
      {
        name: "Android",
        category: "it_skills",
        code_id: "KS120GZ5YXC6YVM1NGPR",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a03",
        },
      },
      {
        name: "Android Studio",
        category: "it_skills",
        code_id: "KS120H16DSFH8546JPX1",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a04",
        },
      },
      {
        name: "MVVM",
        category: "it_skills",
        code_id: "KS126TT617NQ007M2JJ4",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a05",
        },
      },
      {
        name: "Mobile Application Development",
        category: "it_skills",
        code_id: "KS121JW5XD3J5438SMXP",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a06",
        },
      },
      {
        name: "Rxjava",
        category: "it_skills",
        code_id: "KS2JFPY5T4QCA82Q2V1L",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a07",
        },
      },
      {
        name: "Android Ui",
        category: "it_skills",
        code_id: "KSXJ7XB9T8PJONA9FLFL",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a08",
        },
      },
      {
        name: "Firebase",
        category: "it_skills",
        code_id: "KSEJ9O7MDIF29LQKLT2F",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a09",
        },
      },
      {
        name: "Java",
        category: "it_skills",
        code_id: "KS120076FGP5WGWYMP0F",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a10",
        },
      },
      {
        name: "Android NDK",
        category: "it_skills",
        code_id: "KS120H0633DWF2RKM3CP",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a11",
        },
      },
      {
        name: "Mobile Application Software",
        category: "it_skills",
        code_id: "KS125C56C2Y9MPSV9YQ3",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a12",
        },
      },
      {
        name: "Gradle",
        category: "it_skills",
        code_id: "KS124GS69JDX0HLVZZS3",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a13",
        },
      },
      {
        name: "Flutter",
        category: "it_skills",
        code_id: "KS06P6QEJ0ZYNIGP6PCE",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a14",
        },
      },
      {
        name: "Reactive Programming",
        category: "it_skills",
        code_id: "KSO63GGGGXCM3V0GYLKT",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a15",
        },
      },
    ],
    short_description: [
      "Android Developers specialize in creating mobile applications for the Android operating system.",
      "They design and develop user-friendly apps for a wide range of Android devices.",
      "Android Developers are proficient in Java and Kotlin, ensuring seamless app functionality.",
    ],
    long_description: [
      "Android Developers are experts in the development of mobile applications specifically designed for the Android operating system. They are responsible for designing, coding, and optimizing apps to provide a smooth and user-friendly experience across a broad spectrum of Android devices, from smartphones to tablets and more.",
      "These developers are skilled in programming languages such as Java and Kotlin, as well as development tools like Android Studio. They create innovative and efficient apps, considering aspects like user interface design, performance, and compatibility with various Android device models and Android OS versions. Their work contributes to the extensive ecosystem of Android applications available on the Google Play Store.",
      "In the competitive world of mobile app development, Android Developers are essential for businesses and individuals looking to reach a vast audience through Android devices. Their expertise ensures that the apps they create meet the standards and expectations set by Google, enabling businesses to effectively engage with the Android user base.",
    ],
  },
  {
    description: "Frontend developer (m/v)",
    category: "professions",
    code_id: "5388",
    title: "Frontend developer",
    skills: [
      {
        name: "ReactJS",
        category: "it_skills",
        code_id: "KS9E9SUSTX6U1ESK796U",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a01",
        },
      },
      {
        name: "CSS",
        category: "it_skills",
        code_id: "KS121F45VPV8C9W3QFYH",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a02",
        },
      },
      {
        name: "Typescript",
        category: "it_skills",
        code_id: "KS441LF7187KS0CV4B6Y",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a03",
        },
      },
      {
        name: "JavaScript",
        category: "it_skills",
        code_id: "KS1200771D9CR9LB4MWW",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a04",
        },
      },
      {
        name: "AngularJS",
        category: "it_skills",
        code_id: "KSIF8EJFQQ0T7CER8KX3",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a05",
        },
      },
      {
        name: "Vue.Js",
        category: "it_skills",
        code_id: "KSGDZ4VMK1WCGQCE1KUT",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a06",
        },
      },
      {
        name: "Sass",
        category: "it_skills",
        code_id: "KSHAT7C41615LE1RC2U1",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a07",
        },
      },
      {
        name: "Webpack",
        category: "it_skills",
        code_id: "KSIDDB2VJJYDU67905S9",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a08",
        },
      },
      {
        name: "Front End",
        category: "it_skills",
        code_id: "KSQ4V3A6FGYT0MLOOUEX",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a09",
        },
      },
      {
        name: "HTML",
        category: "it_skills",
        code_id: "KS1200578T5QCYT0Z98G",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a10",
        },
      },
      {
        name: "Browsercompatibiliteit",
        category: "it_skills",
        code_id: "KS1217278SZ35V5NJM37",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a11",
        },
      },
      {
        name: "React Redux",
        category: "it_skills",
        code_id: "KSQOOX1S2DYD0E1VVZ5X",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a12",
        },
      },
      {
        name: "HTML5",
        category: "it_skills",
        code_id: "KS120RM619V18NJXTHV1",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a13",
        },
      },
      {
        name: "ECMAScript",
        category: "it_skills",
        code_id: "KS1239R64LDPZDFS25RV",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a14",
        },
      },
      {
        name: "Backend",
        category: "it_skills",
        code_id: "KSFFZBDYXH5XA5QE4E7I",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a15",
        },
      },
    ],
    short_description: [
      "Frontend Developers specialize in creating the visual and interactive aspects of websites and web applications.",
      "They focus on user interface design, ensuring a seamless and engaging user experience.",
      "Frontend Developers are skilled in HTML, CSS, and JavaScript, shaping the online face of businesses.",
    ],
    long_description: [
      "Frontend Developers are experts in crafting the user-facing components of websites and web applications. Their primary focus is on creating visually appealing and interactive elements that users interact with directly. This includes designing and coding layouts, user interfaces, and ensuring a seamless and engaging user experience.",
      "These developers are proficient in essential web technologies like HTML, CSS, and JavaScript. They collaborate closely with designers to turn visual concepts into code and work hand-in-hand with backend developers to integrate these components into the overall web application. Frontend Developers are responsible for optimizing web applications for different devices and screen sizes, providing a consistent and responsive user experience.",
      "In the digital world, Frontend Developers play a crucial role in shaping the online presence and first impression of businesses and organizations. Their work significantly influences how users perceive a brand or product online, making them vital contributors to the success of web projects.",
    ],
  },
  {
    description: "Backend developer (m/v)",
    category: "professions",
    code_id: "5726",
    title: "Backend developerr",
    skills: [
      {
        name: "Backend",
        category: "it_skills",
        code_id: "KSFFZBDYXH5XA5QE4E7I",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a01",
        },
      },
      {
        name: "Docker",
        category: "it_skills",
        code_id: "KSY4WFI1S164RQUBSPCC",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a02",
        },
      },
      {
        name: "Node.Js",
        category: "it_skills",
        code_id: "KS127296VDYS7ZFWVC46",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a03",
        },
      },
      {
        name: "APIs",
        category: "it_skills",
        code_id: "KS1208P6ZMZ4N872Y7X5",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a04",
        },
      },
      {
        name: "Microservices",
        category: "it_skills",
        code_id: "KSZX7YZWNR5IDR1I2VMZ",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a05",
        },
      },
      {
        name: "Java",
        category: "it_skills",
        code_id: "KS120076FGP5WGWYMP0F",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a06",
        },
      },
      {
        name: "Amazon Web Services",
        category: "it_skills",
        code_id: "KS120FG6YP8PQYYNQY9B",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a07",
        },
      },
      {
        name: "Typescript",
        category: "it_skills",
        code_id: "KS441LF7187KS0CV4B6Y",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a08",
        },
      },
      {
        name: "Postgresql",
        category: "it_skills",
        code_id: "KS125TB6YR6236RKM563",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a09",
        },
      },
      {
        name: "Redis",
        category: "it_skills",
        code_id: "KS128G66RG96FZNHFCXY",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a10",
        },
      },
      {
        name: "Kubernetes",
        category: "it_skills",
        code_id: "KSJF3PBD3995K6E0OF1Z",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a11",
        },
      },
      {
        name: "Continuous Integration",
        category: "it_skills",
        code_id: "KS122C775KRX1DK8Q1RQ",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a12",
        },
      },
      {
        name: "JavaScript",
        category: "it_skills",
        code_id: "KS1200771D9CR9LB4MWW",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a13",
        },
      },
      {
        name: "AngularJS",
        category: "it_skills",
        code_id: "KSIF8EJFQQ0T7CER8KX3",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a14",
        },
      },
      {
        name: "SQL",
        category: "it_skills",
        code_id: "KS440W865GC4VRBW6LJP",
        checked: true,
        is_extra: false,
        _id: {
          $oid: "6527f0f3e67a6800bc863a15",
        },
      },
    ],
    short_description: [
      "Backend Developers focus on building the server-side logic and infrastructure of web applications.",
      "They work with databases, servers, and application architecture, ensuring data management and functionality.",
      "Backend Developers are skilled in server-side programming languages like Python, Java, or Node.js.",
    ],
    long_description: [
      "Backend Developers are experts in creating and maintaining the server-side components of web applications. Their primary responsibility is to build the underlying logic, database management, and server infrastructure that powers the functionality of websites and web applications.",
      "These developers work with server-side programming languages like Python, Java, Node.js, and more. They design and optimize databases, write code for handling user authentication, data processing, and application logic. Backend Developers also collaborate closely with Frontend Developers to ensure seamless data flow and a cohesive web application experience.",
      "In the realm of web development, Backend Developers are the architects behind the scenes, responsible for the reliability and performance of web applications. They play a pivotal role in managing data, securing user information, and ensuring the smooth operation of online services, making them indispensable for the successful functioning of web projects.",
    ],
  },
];

const dropdown = {
  status: [
    {
      label: "Open",
      value: "1",
    },
    {
      label: "Closed",
      value: "2",
    },
    {
      label: "Withdrawn",
      value: "3",
    },
  ],
  education: [
    {
      label: "Engineering",
      value: "1",
    },
    {
      label: "Administration",
      value: "2",
    },
    {
      label: "Hospitality",
      value: "3",
    },
    {
      label: "Financial",
      value: "4",
    },
    {
      label: "Human Resources (HR)",
      value: "5",
    },
  ],
  sector: [
    {
      label: "Information Technology",
      value: "1",
    },
    {
      label: "Healthcare",
      value: "2",
    },
    {
      label: "Finance",
      value: "3",
    },
    {
      label: "Education",
      value: "4",
    },
    {
      label: "Manufacturing",
      value: "5",
    },
  ],
  work_location: [
    {
      description: "Amsterdam, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.379189, lon: 4.899431 } },
    },
    {
      description: "Rotterdam, Netherlands",
      location: { type: "Point", coordinates: { lat: 51.9225, lon: 4.47917 } },
    },
    {
      description: "The Hague, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.078663, lon: 4.288787 } },
    },
    {
      description: "Utrecht, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.090737, lon: 5.12142 } },
    },
    {
      description: "Eindhoven, Netherlands",
      location: { type: "Point", coordinates: { lat: 51.441641, lon: 5.469722 } },
    },
    {
      description: "Tilburg, Netherlands",
      location: { type: "Point", coordinates: { lat: 51.55551, lon: 5.0913 } },
    },
    {
      description: "Groningen, Netherlands",
      location: { type: "Point", coordinates: { lat: 53.219383, lon: 6.566502 } },
    },
    {
      description: "Breda, Netherlands",
      location: { type: "Point", coordinates: { lat: 51.58607, lon: 4.77547 } },
    },
    {
      description: "Nijmegen, Netherlands",
      location: { type: "Point", coordinates: { lat: 51.812562, lon: 5.837226 } },
    },
    {
      description: "Apeldoorn, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.211157, lon: 5.969923 } },
    },
    {
      description: "Haarlem, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.380839, lon: 4.63683 } },
    },
    {
      description: "Enschede, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.221537, lon: 6.893662 } },
    },
    {
      description: "Arnhem, Netherlands",
      location: { type: "Point", coordinates: { lat: 51.985103, lon: 5.898731 } },
    },
    {
      description: "Zaanstad, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.45797, lon: 4.751188 } },
    },
    {
      description: "Amersfoort, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.156111, lon: 5.387827 } },
    },
    {
      description: "Maastricht, Netherlands",
      location: { type: "Point", coordinates: { lat: 50.851368, lon: 5.690973 } },
    },
    {
      description: "Dordrecht, Netherlands",
      location: { type: "Point", coordinates: { lat: 51.810078, lon: 4.668675 } },
    },
    {
      description: "Leiden, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.160114, lon: 4.49701 } },
    },
    {
      description: "Haarlemmermeer, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.309069, lon: 4.690716 } },
    },
    {
      description: "Zwolle, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.518536, lon: 6.083146 } },
    },
    {
      description: "Emmen, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.787713, lon: 6.897662 } },
    },
    {
      description: "Alkmaar, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.632381, lon: 4.753375 } },
    },
    {
      description: "Delft, Netherlands",
      location: { type: "Point", coordinates: { lat: 51.999667, lon: 4.354416 } },
    },
    {
      description: "Venlo, Netherlands",
      location: { type: "Point", coordinates: { lat: 51.37037, lon: 6.172555 } },
    },
    {
      description: "Deventer, Netherlands",
      location: { type: "Point", coordinates: { lat: 52.252317, lon: 6.1637 } },
    },
    {
      description: "Sittard-Geleen, Netherlands",
      location: { type: "Point", coordinates: { lat: 51.001945, lon: 5.870927 } },
    },
    {
      description: "Helmond, Netherlands",
      location: { type: "Point", coordinates: { lat: 51.47877, lon: 5.66109 } },
    },
    {
      description: "Oss, Netherlands",
      location: { type: "Point", coordinates: { lat: 51.766667, lon: 5.533333 } },
    },
    {
      description: "Súdwest-Fryslân, Netherlands",
      location: { type: "Point", coordinates: { lat: 53.04007, lon: 5.660158 } },
    },
    {
      description: "Heerlen, Netherlands",
      location: { type: "Point", coordinates: { lat: 50.886389, lon: 5.979722 } },
    },
  ],
  time_duration: [
    {
      label: "Up to 3 months",
      value: "1",
    },
    {
      label: "3 to 6 months",
      value: "2",
    },
    {
      label: "6 to 12 months",
      value: "3",
    },
    {
      label: "Longer than 12 months",
      value: "4",
    },
  ],
};

function getRandomDates(from, to) {
  // getRandomDates(new Date(2020, 0, 1), new Date(2020, 11, 31));

  const fromTime = from.getTime();
  const toTime = to.getTime();

  const random1 = Math.random() * (toTime - fromTime) + fromTime;
  const random2 = Math.random() * (toTime - fromTime) + fromTime;
  const random3 = Math.random() * (toTime - fromTime) + fromTime;
  const random4 = Math.random() * (toTime - fromTime) + fromTime;

  const sorted = [random1, random2, random3, random4].sort((a, b) => a - b);

  const startDate = new Date(sorted[0]);
  const endDate = new Date(sorted[1]);
  const publishFrom = new Date(sorted[2]);
  const publishTo = new Date(sorted[3]);

  return {
    startDate,
    endDate,
    publishFrom,
    publishTo,
  };
}

function randIntBetween(min, max) {
  const range = max - min;

  const random = Math.random() * range;

  return Math.floor(random) + min;
}

function randomMinMax(range) {
  let min = range[0];
  let max = range[1];

  if (min <= max) {
    let randomMin = Math.floor(Math.random() * (max - min + 1)) + min;

    let randomMax = Math.random() * (max - min) + min;

    return { min: parseInt(randomMin), max: parseInt(randomMax) };
  }
}

function pickRandomFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function selectRandomItems(array, number) {
  let selected = [];

  for (let i = 0; i < number; i++) {
    let index = Math.floor(Math.random() * array.length);

    let item = array[index];

    selected.push(item);

    array.splice(index, 1);
  }

  return selected;
}

const generateRandomData = () => {
  const randomBasicDetails = pickRandomFromArray([...companies]);
  const randomProfessions = pickRandomFromArray([...professions]);
  const randomSkills = selectRandomItems([...randomProfessions.skills], randIntBetween(2, 15));
  const randomShortDescription = pickRandomFromArray(randomProfessions.short_description);
  const randomLongDescription = pickRandomFromArray(randomProfessions.long_description);
  const pickRandomStatus = pickRandomFromArray(dropdown.status);
  const pickRandomEducation = pickRandomFromArray(dropdown.education);
  const pickRandomSector = pickRandomFromArray(dropdown.sector);
  const pickRandomWorkLocation = pickRandomFromArray(dropdown.work_location);
  const pickRandomTimeDuration = pickRandomFromArray(dropdown.time_duration);
  const randomDates = getRandomDates(new Date(2023, 10, 1), new Date(2024, 12, 30));
  const randomWorkingHours = randomMinMax([1, 60]);
  const randomHoursRate = randomMinMax([35, 350]);

  return {
    company_name: randomBasicDetails.bedrijfsnaam,
    company_id: randomBasicDetails._id,
    image: randomBasicDetails.image,
    image_id: randomBasicDetails.image_id,
    profession_category: randomProfessions.category,
    profession_code_id: randomProfessions.code_id,
    profession_description: randomProfessions.description,
    title: randomProfessions.title,
    short_description: randomShortDescription,
    long_description: randomLongDescription,
    skills: randomSkills,
    status: pickRandomStatus,
    education: pickRandomEducation,
    sector: pickRandomSector,
    work_location: pickRandomWorkLocation.description,
    time_duration: pickRandomTimeDuration,
    start_date: randomDates.startDate,
    end_date: randomDates.endDate,
    publish_from: randomDates.publishFrom,
    publish_to: randomDates.publishTo,
    working_hours_min: randomWorkingHours.min,
    working_hours_max: randomWorkingHours.max,
    hours_rate_min: randomHoursRate.min,
    hours_rate_max: randomHoursRate.max,
    location: pickRandomWorkLocation.location,
    owner: randomBasicDetails.owner,
    created_by: randomBasicDetails.owner,
  };
};

const generateRandomObject = (index) => {
  const data = generateRandomData();

  const mongoObject = {
    _id: {
      $oid: new ObjectId(),
    },
    company: {
      bedrijfsnaam: data.company_name,
      _id: {
        $oid: new ObjectId(data.company_id),
      },
    },
    image: data.image,
    image_id: {
      $oid: new ObjectId(data.image_id),
    },
    title: `${index} - ${data.title}`,
    short_description: `<p>${data.short_description}</p>`,
    long_description: `<p>${data.long_description}</p>`,
    profession: {
      category: data.profession_category,
      code_id: data.profession_code_id,
      description: data.profession_description,
    },
    skills: data.skills,
    status: data.status,
    education: data.education,
    sector: data.sector,
    work_location: data.work_location,
    time_duration: data.time_duration,
    start_date: {
      $date: data.start_date,
    },
    end_date: {
      $date: data.end_date,
    },
    working_hours: {
      min: data.working_hours_min,
      max: data.working_hours_max,
    },
    hours_rate: {
      min: data.hours_rate_min,
      max: data.hours_rate_max,
    },
    working_hours_unit: "Week",
    published: false,
    publish_from: {
      $date: data.publish_from,
    },
    publish_to: {
      $date: data.publish_to,
    },
    location: data.location,
    owner: {
      $oid: new ObjectId(data.owner),
    },
    created_by: {
      $oid: new ObjectId(data.created_by),
    },
    createdAt: {
      $date: "2023-10-12T12:03:37.265Z",
    },
    updatedAt: {
      $date: "2023-10-19T10:09:21.016Z",
    },
    matched_percentage: 0,
    __v: 0,
  };

  return mongoObject;
};

module.exports = { generateRandomObject };

// [
//   {
//     $match: {},
//   },
//   {
//     $geoNear: {
//       near: {
//         type: "Point",
//         coordinates: [52.090737, 5.12142],
//       },
//       distanceField: "km",
//       distanceMultiplier: 0.001,
//       spherical: true,
//     },
//   },
// {
//   $sort: {
//     publish_from: -1,
//   },
// },
// {
//   $limit: 10,
// },
// {
//   $set: {
//     userId: new ObjectId(
//       "65277de95a654a292ad0eb17"
//     ),
//   },
// },
// {
//   $lookup: {
//     from: "users",
//     localField: "userId",
//     foreignField: "_id",
//     as: "userSkills",
//   },
// },
// { $unwind: "$userSkills" },
// {
//   $set: {
//     matched_skills: {
//       $size: {
//         $setIntersection: [
//           "$skills.code_id",
//           "$userSkills.skills.code_id",
//         ],
//       },
//     },
//   },
// },
// {
//   $lookup: {
//     from: "favoriteVacancy",
//     let: {
//       vacancyId: "$_id",
//       userId: new ObjectId(
//         "65277de95a654a292ad0eb17"
//       ),
//     },
//     pipeline: [
//       {
//         $match: {
//           $expr: {
//             $and: [
//               {
//                 $eq: [
//                   "$vacancy",
//                   "$$vacancyId",
//                 ],
//               },
//               { $eq: ["$userId", "$$userId"] },
//             ],
//           },
//         },
//       },
//     ],
//     as: "fav_vacancy",
//   },
// },
// {
//   $project: {
//     _id: 1,
//     title: 1,
//     short_description: 1,
//     company: 1,
//     start_date: 1,
//     end_date: 1,
//     time_duration: 1,
//     work_location: 1,
//     working_hours_unit: 1,
//     hours_rate: 1,
//     working_hours: 1,
//     education: 1,
//     sector: 1,
//     publish_from: 1,
//     km: 1,
//     location: 1,
//     matched_percentage: {
//       $round: {
//         $multiply: [
//           {
//             $divide: [
//               "$matched_skills",
//               {
//                 $size: "$skills",
//               },
//             ],
//           },
//           100,
//         ],
//       },
//     },
//     day_left: {
//       $max: [
//         -1,
//         {
//           $dateDiff: {
//             startDate: "$$NOW",
//             endDate: {
//               $toDate: "$publish_from",
//             },
//             unit: "day",
//           },
//         },
//       ],
//     },
//     is_favorite: {
//       $cond: {
//         if: {
//           $gt: [{ $size: "$fav_vacancy" }, 0],
//         },
//         then: true,
//         else: false,
//       },
//     },
//   },
// },
// ]
