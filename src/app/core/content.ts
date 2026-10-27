import { Certificate, Education, LocalizedText, Project, Role, SkillGroup } from '../models/project';

export const PROJECTS: Project[] = [
  {
    slug: 'domain-name-services',
    number: '01',
    code: 'DNS',
    period: '2024 – Present',
    icon: '⌘',
    accent: '#a78bfa',
    category: { en: 'Telecommunications Regulatory Authority', ar: 'هيئة تنظيم الاتصالات' },
    title: { en: 'Domain Name Services Automation', ar: 'أتمتة خدمات أسماء النطاقات' },
    summary: {
      en: 'An active TRA system for automating domain name services, built with Spring Boot and Angular.',
      ar: 'نظام قائم في هيئة تنظيم الاتصالات لأتمتة خدمات أسماء النطاقات، باستخدام Spring Boot وAngular.'
    },
    overview: {
      en: 'Domain Name Services Automation is an active system at the Telecommunications Regulatory Authority. The work covers the service workflow from requirements through data and the screens people use.',
      ar: 'نظام أتمتة خدمات أسماء النطاقات نظام قائم لدى هيئة تنظيم الاتصالات، ويغطي مسار الخدمة من المتطلبات إلى البيانات والشاشات.'
    },
    challenge: {
      en: 'Turn the domain-name service requirements into a database structure and frontend pages that match the SRS.',
      ar: 'تحويل متطلبات خدمة أسماء النطاقات إلى هيكل قاعدة بيانات وصفحات واجهة مطابقة لوثيقة المتطلبات.'
    },
    solution: {
      en: 'Spring Boot on the server and Angular on the frontend, with a database structure prepared for the domain-name workflow.',
      ar: 'Spring Boot في الخادم وAngular في الواجهة، مع هيكل قاعدة بيانات أُعد لمسار أسماء النطاقات.'
    },
    contribution: {
      en: 'During the on-the-job traineeship at TRA I analyzed the SRS, created the database structure, and prepared the frontend pages with Spring Boot and Angular. The system is active, and I am currently a freelance Java developer at TRA.',
      ar: 'خلال التدريب على رأس العمل في الهيئة حلّلت وثيقة المتطلبات، وأنشأت هيكل قاعدة البيانات، وأعددت صفحات الواجهة باستخدام Spring Boot وAngular. النظام ما زال قائمًا، وأعمل حاليًا مطوّرة جافا مستقلة لدى الهيئة.'
    },
    features: [
      { en: 'SRS analysis', ar: 'تحليل وثيقة المتطلبات' },
      { en: 'Database structure', ar: 'هيكل قاعدة البيانات' },
      { en: 'Frontend pages', ar: 'صفحات الواجهة' },
      { en: 'Spring Boot and Angular', ar: 'Spring Boot وAngular' }
    ],
    stack: ['Java', 'Spring Boot', 'Angular'],
    site: {
      en: 'https://tra.gov.om/En/Telecom.jsp?menu=21',
      ar: 'https://tra.gov.om/DomainNameSuggestionNew/'
    }
  },
  {
    slug: 'legal-system',
    number: '02',
    code: 'LEGAL',
    period: 'TRA',
    icon: '⚖',
    accent: '#9b8aff',
    category: { en: 'Legal technology', ar: 'الأنظمة القانونية' },
    title: { en: 'Legal System', ar: 'النظام القانوني' },
    summary: {
      en: 'A TRA system for legal operations, turning case-related work into a clear digital workflow.',
      ar: 'نظام في الهيئة للأعمال القانونية، يحوّل الإجراءات المرتبطة بالقضايا إلى مسار رقمي واضح.'
    },
    overview: {
      en: 'The legal system supports organized legal work at the Telecommunications Regulatory Authority, so case information stays readable from the first screen to the last step.',
      ar: 'يدعم النظام القانوني تنظيم العمل القانوني في هيئة تنظيم الاتصالات، بحيث تبقى معلومات القضية مقروءة من أول شاشة حتى آخر خطوة.'
    },
    challenge: {
      en: 'Legal processes carry a lot of detail. The interface had to keep that detail without making the path hard to follow.',
      ar: 'الإجراءات القانونية تحمل تفاصيل كثيرة. كان على الواجهة أن تحافظ على هذه التفاصيل دون أن يصعب تتبّع المسار.'
    },
    solution: {
      en: 'A structured Angular interface with a clear information hierarchy for legal operations and case-oriented workflows.',
      ar: 'واجهة Angular منظّمة بتسلسل واضح للمعلومات، للعمليات القانونية ومسارات العمل المرتبطة بالقضايا.'
    },
    contribution: {
      en: 'Contributed to the legal system at TRA, focusing on screens and workflows that keep complex legal steps understandable.',
      ar: 'ساهمت في النظام القانوني لدى الهيئة، بالتركيز على الشاشات ومسارات العمل التي تُبقي الخطوات القانونية المعقدة مفهومة.'
    },
    features: [
      { en: 'Case-oriented workflows', ar: 'مسارات عمل مرتبطة بالقضايا' },
      { en: 'Clear information hierarchy', ar: 'تسلسل واضح للمعلومات' },
      { en: 'Responsive application interface', ar: 'واجهة تطبيق متجاوبة' }
    ],
    stack: ['Angular', 'TypeScript', 'SCSS'],
    site: { en: 'https://legal.tra.gov.om', ar: 'https://legal.tra.gov.om' }
  },
  {
    slug: 'complaint-management-system',
    number: '03',
    code: 'CMS',
    period: 'TRA',
    icon: '◎',
    accent: '#e879f9',
    category: { en: 'Complaint operations', ar: 'إدارة الشكاوى' },
    title: { en: 'Complaint Management System', ar: 'نظام إدارة الشكاوى' },
    summary: {
      en: 'A multi-role TRA platform for submitting, tracking, reviewing, and deciding telecom complaints.',
      ar: 'منصة متعددة الأدوار في الهيئة لتقديم شكاوى الاتصالات وتتبعها ومراجعتها والبت فيها.'
    },
    overview: {
      en: 'The complaint system serves people who file a complaint and the internal teams who review it, across a journey with more than one stage.',
      ar: 'يخدم نظام الشكاوى من يقدّم الشكوى والفرق الداخلية التي تراجعها، عبر رحلة من أكثر من مرحلة.'
    },
    challenge: {
      en: 'Each role sees a different part of the same complaint. The product had to stay understandable at every stage.',
      ar: 'كل دور يرى جزءًا مختلفًا من الشكوى نفسها. كان على المنتج أن يبقى مفهومًا في كل مرحلة.'
    },
    solution: {
      en: 'Role-specific dashboards, a guided complaint form, tracking views, and review screens, with Arabic and English interface support.',
      ar: 'لوحات حسب الدور، ونموذج شكوى إرشادي، وصفحات تتبع، وشاشات مراجعة، مع دعم الواجهتين العربية والإنجليزية.'
    },
    contribution: {
      en: 'Worked on the Angular interfaces for the complaint journey, including submission, tracking, and review.',
      ar: 'عملت على واجهات Angular لرحلة الشكوى، بما فيها التقديم والتتبع والمراجعة.'
    },
    features: [
      { en: 'Multi-step complaint submission', ar: 'تقديم الشكوى عبر خطوات' },
      { en: 'Role-based dashboards', ar: 'لوحات تحكم حسب الدور' },
      { en: 'Tracking and review', ar: 'التتبع والمراجعة' },
      { en: 'Arabic and English interface', ar: 'واجهة عربية وإنجليزية' }
    ],
    stack: ['Angular', 'Angular Material', 'TypeScript', 'REST APIs'],
    site: { en: 'https://cms.tra.gov.om/En/index.jsp', ar: 'https://cms.tra.gov.om/' }
  },
  {
    slug: 'visitor-management-system',
    number: '04',
    code: 'VSM',
    period: 'TRA',
    icon: '▣',
    accent: '#d946ef',
    category: { en: 'Visitor operations', ar: 'إدارة الزوار' },
    title: { en: 'Visitor Management System', ar: 'نظام إدارة الزوار' },
    summary: {
      en: 'A TRA system for visitor registration and visit requests, covering both visitor and employee paths.',
      ar: 'نظام في الهيئة لتسجيل الزوار وطلبات الزيارة، ويغطي مسار الزائر ومسار الموظف.'
    },
    overview: {
      en: 'Visitor management brings the guest journey and the internal handling of a visit into one system, from the request through the visit itself.',
      ar: 'يجمع نظام الزوار رحلة الضيف ومعالجة الزيارة داخليًا في نظام واحد، من الطلب حتى الزيارة نفسها.'
    },
    challenge: {
      en: 'Visitors and employees do not share the same steps. Both paths still needed to meet in one clear flow.',
      ar: 'الزائر والموظف لا يمرّان بالخطوات نفسها. ومع ذلك كان على المسارين أن يلتقيا في تدفق واحد واضح.'
    },
    solution: {
      en: 'Separate visitor and employee journeys for visit requests, with administrative screens planned alongside the implemented flow.',
      ar: 'رحلتان منفصلتان للزائر والموظف لطلبات الزيارة، مع شاشات إدارية خُطّطت إلى جانب المسار المنفَّذ.'
    },
    contribution: {
      en: 'Participated in planning the visitor and employee journeys and in the frontend work for visit requests.',
      ar: 'شاركت في تخطيط رحلتي الزائر والموظف وفي عمل الواجهة لطلبات الزيارة.'
    },
    features: [
      { en: 'Visitor and employee journeys', ar: 'رحلتا الزائر والموظف' },
      { en: 'Visit request flow', ar: 'مسار طلب الزيارة' },
      { en: 'Administrative screens', ar: 'شاشات الإدارة' }
    ],
    stack: ['Angular', 'TypeScript', 'SCSS']
  },
  {
    slug: 'spam-email-filtering',
    number: '05',
    code: 'ML',
    period: '2023',
    icon: '◈',
    accent: '#c4b5fd',
    category: { en: 'Graduate project', ar: 'مشروع التخرج' },
    title: { en: 'Spam Email Filtering with Machine Learning', ar: 'تصفية البريد المزعج بالتعلم الآلي' },
    summary: {
      en: 'Graduate project at the Modern College of Business and Science on filtering spam email with machine learning.',
      ar: 'مشروع التخرج في الكلية الحديثة للتجارة والعلوم لتصفية البريد المزعج باستخدام التعلم الآلي.'
    },
    overview: {
      en: 'A 2023 graduate project focused on detecting and filtering spam email by applying machine learning.',
      ar: 'مشروع تخرج عام 2023 يركّز على كشف البريد المزعج وتصفيته باستخدام التعلم الآلي.'
    },
    challenge: {
      en: 'Separate spam email from ordinary mail using a machine-learning approach.',
      ar: 'فصل البريد المزعج عن البريد العادي بأسلوب يعتمد على التعلم الآلي.'
    },
    solution: {
      en: 'A machine-learning filter aimed at identifying spam email, delivered as the degree project.',
      ar: 'مرشّح يعتمد على التعلم الآلي للتعرّف على البريد المزعج، وقُدّم كمشروع للتخرج.'
    },
    contribution: {
      en: 'Graduate project completed at the Modern College of Business and Science in Bowsher, Muscat.',
      ar: 'مشروع تخرج أُنجز في الكلية الحديثة للتجارة والعلوم في بوشر، مسقط.'
    },
    features: [
      { en: 'Spam email filtering', ar: 'تصفية البريد المزعج' },
      { en: 'Machine learning', ar: 'التعلم الآلي' },
      { en: 'Bachelor degree project, 2023', ar: 'مشروع البكالوريوس، 2023' }
    ],
    stack: ['Machine Learning']
  }
];

export const ROLES: Role[] = [
  {
    title: { en: 'Java Developer (Freelance)', ar: 'مطوّرة جافا (عمل حر)' },
    org: { en: 'Telecommunications Regulatory Authority', ar: 'هيئة تنظيم الاتصالات' },
    place: { en: 'Muscat, Oman', ar: 'مسقط، عُمان' },
    period: '11/2024 – Present',
    points: []
  },
  {
    title: { en: 'On-the-job trainee', ar: 'متدربة على رأس العمل' },
    org: { en: 'Telecommunications Regulatory Authority', ar: 'هيئة تنظيم الاتصالات' },
    place: { en: 'Muscat, Oman', ar: 'مسقط، عُمان' },
    period: '08/2024 – 10/2024',
    points: [
      {
        en: 'Worked on the domain name system: analyzed the SRS, created the database structure, and prepared frontend pages.',
        ar: 'عملت على نظام أسماء النطاقات: تحليل وثيقة المتطلبات، وإنشاء هيكل قاعدة البيانات، وإعداد صفحات الواجهة.'
      },
      { en: 'Used the Spring Boot framework and Angular.', ar: 'استخدمت إطار Spring Boot وAngular.' }
    ]
  },
  {
    title: { en: 'Trainee, Nafadh Internship Program', ar: 'متدربة في برنامج نفذ' },
    org: { en: 'Telecommunications Regulatory Authority', ar: 'هيئة تنظيم الاتصالات' },
    place: { en: 'Muscat, Oman', ar: 'مسقط، عُمان' },
    period: '02/2024 – 07/2024',
    points: [
      {
        en: 'Java fundamentals, the JVM, JDK and JRE, recursion, and object-oriented programming.',
        ar: 'أساسيات جافا، وآلة جافا الافتراضية، وJDK وJRE، والاستدعاء الذاتي، والبرمجة كائنية التوجه.'
      },
      {
        en: 'HTML, CSS, and JavaScript, including layout, the DOM, events, and AJAX.',
        ar: 'HTML وCSS وJavaScript، بما فيها التصميم ونموذج المستند والأحداث وAJAX.'
      },
      {
        en: 'Relational databases, SQL, joins, transactions, and normalization.',
        ar: 'قواعد البيانات العلائقية، وSQL، والربط، والمعاملات، والتطبيع.'
      },
      {
        en: 'Spring Framework, Spring Data JPA, RESTful services, and file operations.',
        ar: 'إطار Spring، وSpring Data JPA، وخدمات REST، والتعامل مع الملفات.'
      },
      {
        en: 'Test-driven development with JUnit and Mockito, and JWT for authentication.',
        ar: 'التطوير المعتمد على الاختبار باستخدام JUnit وMockito، وJWT للمصادقة.'
      },
      {
        en: 'Docker, Docker Compose, Kubernetes, and deploying Spring Boot applications.',
        ar: 'Docker وDocker Compose وKubernetes، ونشر تطبيقات Spring Boot.'
      }
    ]
  },
  {
    title: { en: 'Technical Support', ar: 'دعم فني' },
    org: { en: 'Mubadarah', ar: 'شركة مبادرة' },
    place: { en: 'Rusayl Industrial City, Muscat', ar: 'المنطقة الصناعية بالرسيل، مسقط' },
    period: '27/10/2022 – 23/11/2022',
    points: [
      { en: 'Formatted devices and installed applications.', ar: 'تهيئة الأجهزة وتثبيت التطبيقات.' },
      { en: 'Fixed network issues.', ar: 'معالجة مشكلات الشبكة.' }
    ]
  }
];

export const EDUCATION: Education = {
  degree: { en: 'Bachelor of Information Security', ar: 'بكالوريوس أمن المعلومات' },
  school: { en: 'Modern College of Business and Science', ar: 'الكلية الحديثة للتجارة والعلوم' },
  place: { en: 'Bowsher, Muscat, Oman', ar: 'بوشر، مسقط، عُمان' },
  period: '09/2018 – 06/2023',
  gpa: '3.32'
};

export const CERTIFICATES: Certificate[] = [
  {
    date: '30/08/2024',
    title: { en: 'AI Advanced Training Certificate', ar: 'شهادة تدريب متقدم في الذكاء الاصطناعي' },
    issuer: { en: 'Huawei Global Training Center', ar: 'مركز هواوي العالمي للتدريب' }
  },
  {
    date: '15/08/2024',
    title: { en: 'AI & Cloud Computing Foundation', ar: 'أساسيات الذكاء الاصطناعي والحوسبة السحابية' },
    issuer: { en: 'Huawei Global Training Center', ar: 'مركز هواوي العالمي للتدريب' }
  },
  {
    date: '22/05/2024',
    title: { en: 'SQL (Basic) Certificate', ar: 'شهادة SQL (أساسي)' },
    issuer: { en: 'HackerRank', ar: 'HackerRank' }
  },
  {
    date: '04/05/2024',
    title: { en: 'Sas48 Green Tech Hackathon 2024', ar: 'هاكاثون ساس 48 للتقنية الخضراء 2024' },
    issuer: { en: 'Ministry of Transportation, Communications and Information Technology', ar: 'وزارة النقل والاتصالات وتقنية المعلومات' }
  },
  {
    date: '03/10/2021',
    title: { en: 'AI Attendance Certificate', ar: 'شهادة حضور في الذكاء الاصطناعي' },
    issuer: { en: 'Modern College of Business and Science', ar: 'الكلية الحديثة للتجارة والعلوم' }
  }
];

const skill = (en: string, ar = en): LocalizedText => ({ en, ar });

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: { en: 'Development', ar: 'التطوير' },
    items: ['Java', 'Spring Boot', 'Angular', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'C#'].map(name => skill(name))
  },
  {
    title: { en: 'Security & Networks', ar: 'الأمن والشبكات' },
    items: [
      skill('Networking', 'الشبكات'),
      skill('Burp Suite'),
      skill('Wireshark'),
      skill('FTK Imager'),
      skill('Redline'),
      skill('Autopsy'),
      skill('ProDiscover')
    ]
  },
  {
    title: { en: 'Work & Languages', ar: 'العمل واللغات' },
    items: [
      skill('Microsoft Office', 'مايكروسوفت أوفيس'),
      skill('Time management', 'إدارة الوقت'),
      skill('Work under pressure', 'العمل تحت الضغط'),
      skill('Fast typing', 'سرعة الطباعة'),
      skill('Team leadership', 'قيادة الفريق'),
      skill('Arabic (Native)', 'العربية (اللغة الأم)'),
      skill('English', 'الإنجليزية')
    ]
  }
];
