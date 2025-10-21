import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'varshathakurmail1999@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Varsha Dharwal, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/varsha-dharwal',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/varsha-dharwal' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/varsha-dharwal-1b355b244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'resume', url: '/projects/images/Varsha_Dharwal_Resume.pdf' },
    { name: 'email', url: 'mailto:varshathakurmail1999@gmail.com' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Wordpress',
            icon: '/logo/wordpresslogo.jpg',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    framwork: [
        {
            name: 'adminJs',
            icon: '/logo/adminJsLogo.jpg',
        },
        {
            name: 'storybook',
            icon: '/logo/storybook.png',
        },
        {
            name: 'Chakra UI',
            icon: '/logo/chakraLogo.png',
        },
        {
            name: 'React Material UI',
            icon: '/logo/react.png',
        },
        {
            name: 'Angular Material UI',
            icon: '/logo/angularIcon.png',
        },
    ],
    backend: [
        {
            name: 'php',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'EasyWebinar',
        slug: 'easyWebinar',
        liveUrl: 'https://easywebinar.com/',
        year: 2024,
        description: `
         EasyWebinar is an all-in-one webinar platform designed to help creators, coaches, and enterprises host <b>Live, On-Demand, and Automated Webinars
      Key Features:<br/>
      <ul>
       <li>🎥 <b>Multi-Streaming:</b> Stream to YouTube and reach up to 50,000 attendees</li>
      <li>⚙️ <b>Automation:</b> Run automated and evergreen webinars with built-in triggers</li>
      <li>💬 <b>Audience Engagement:</b> Real-time chat, polls, and push offers</li>
      <li>📊 <b>Analytics:</b> Advanced tracking for every attendee action</li>
      <li>📧 <b>Email Automation:</b> Pre & post webinar follow-ups</li>
      <li>🧱 <b>Page Builder:</b> Custom landing pages and embeddable forms</li>
      <li>🔗 <b>Integrations:</b> Works seamlessly with CRMs, marketing, and email tools</li>
      </ul><br/>
    

    <b>Industries Served:</b><br/>
    Coaching • Product Launches • Demos • Corporate Training • Conferences • Workshops<br/><br/> 
      `,
        role: `
      UI & Frontend Developer <br/>
      Owned the entire development lifecycle and aslo handled the Routing part:
      <ul>
      <li>✅ <b>Frontend:</b> Built dynamic pages using React and Tailwind CSS</li>
      <li>🔄 <b>State Management:</b> Implemented React Hook Form for lead forms</li>
      <li>🎨 <b>UI Components:</b> Designed reusable elements with Material UI</li>
      <li>⚡ <b>Animation:</b> Added micro-interactions with GSAP</li>
      <li>🌐 <b>Integration:</b> Embedded external APIs for live webinars and analytics</li>
      <li>🚀 <b>Optimization:</b> Enhanced performance and SEO using best practices</li>
    </ul>
      `,
      techStack: [
        'React',
        'Tailwind CSS',
        'Material UI',
        'GSAP',
        'React Hook Form',
        'Swiper.js',
        'WordPress',
        'PHP'
      ],
        thumbnail: '/projects/images/easywebinar1.png',
        longThumbnail: '',
        images: [
            '/projects/images/easywebinar1.png',
            '/projects/images/easywebinar2.png',
        ],
    },
    {
        title: 'EasyDMARC',
        slug: 'easydmarc',
        liveUrl: 'https://easydmarc.com/',
        year: 2025,
        description: `
          EasyDMARC is a leading <b>Email Security and DMARC Compliance Platform</b> that protects businesses from phishing, spoofing, and email-based cyber threats while enhancing deliverability and global compliance.<br/><br/>
      
          <b>Key Features:</b><br/>
          <ul>
            <li>🔐 <b>DMARC, SPF & DKIM Management:</b> Complete setup, configuration, and monitoring to protect domains</li>
            <li>📈 <b>Smart Dashboard:</b> Displays analytics and compliance reports in a user-friendly interface</li>
            <li>⚙️ <b>Managed Services:</b> Dedicated support for complete DMARC enforcement and setup</li>
            <li>🌍 <b>Global Compliance:</b> Adheres to GDPR, HIPAA, PCI DSS, and DORA regulations</li>
            <li>🧩 <b>Security Tools:</b> Includes SPF, DKIM, and BIMI checkers, phishing link analyzer, and DNS lookup tools</li>
            <li>📬 <b>Email Deliverability:</b> Improves sender reputation and ensures safe message delivery</li>
          </ul><br/>
      
         
      
          <b>Educational Contribution:</b><br/>
          EasyDMARC Academy offers free cybersecurity courses to help IT professionals master SPF, DKIM, and DMARC fundamentals.
        `,
        role: `
          <b>Frontend Developer</b><br/>
          Designed and developed a <b>responsive and high-performance marketing website</b> for the EasyDMARC platform using WordPress and Bootstrap.<br/><br/>
      
          <ul>
            <li>✅ <b>Frontend:</b> Built interactive web pages using HTML5, CSS3, and Bootstrap</li>
            <li>💻 <b>CMS Integration:</b> Customized WordPress themes for flexible content management</li>
            <li>🎨 <b>UI/UX:</b> Created consistent layouts and visual elements matching brand identity</li>
            <li>📱 <b>Responsive Design:</b> Ensured cross-browser and mobile responsiveness using Bootstrap grid system</li>
            <li>⚡ <b>Performance Optimization:</b> Minimized load time with optimized media and scripts</li>
            <li>🔗 <b>jQuery:</b> Added interactivity through sliders, animations, and form validations</li>
            <li>🚀 <b>Deployment:</b> Managed hosting and maintenance through WordPress environment</li>
          </ul>
        `,
        techStack: [
          'HTML5',
          'CSS3',
          'Bootstrap',
          'jQuery',
          'WordPress'
        ],
        thumbnail: '/projects/images/easyDmarc1.png',
        longThumbnail: '/projects/long/easydmarc.webp',
        images: [
          '/projects/images/easyDmarc1.png',
          '/projects/images/easyDmarc2.png',
        ],
      },
      {
        title: 'RocketSlide',
        slug: 'rocketslide',
        liveUrl: 'https://rocketslide.fr/',
        year: 2025,
        description: `
          <b>RocketSlide</b> is an <b>AI-powered Presentation Builder</b> that enables users to create, customize, and enhance professional presentations effortlessly with advanced automation and design intelligence.<br/><br/>
      
          <b>About the Platform:</b><br/>
          RocketSlide transforms raw content into beautifully designed presentations in minutes. With smart templates, multilingual support, and AI-driven suggestions, it’s built for professionals, educators, startups, and marketing teams worldwide.<br/><br/>
      
          <b>Key Features:</b>
          <ul>
            <li>🚀 <b>AI-Powered Presentation Creation:</b> Instantly generate slides using AI with design and content recommendations</li>
            <li>🎨 <b>Customizable Templates:</b> Choose from a wide range of industry-specific templates for business, education, or events</li>
            <li>🧠 <b>Real-time AI Suggestions:</b> Get intelligent layout and tone-matching support while editing slides</li>
            <li>🌐 <b>Multi-language Support:</b> Create presentations in English, Spanish, Hindi, and other major languages</li>
            <li>📈 <b>Analytics Dashboard:</b> Track user statistics such as generated slides, active users, and satisfaction rate</li>
            <li>🤝 <b>Collaboration:</b> Share or download presentations for seamless teamwork</li>
            <li>🔒 <b>Data Security:</b> Secured with Google reCAPTCHA and Cloudflare CDN</li>
          </ul><br/>
      
         
        `,
        role: `
          <b>UI Frontend Developer</b><br/>
          Responsible for designing and developing the <b>responsive and user-focused interface</b> of the RocketSlide AI Presentation platform.<br/><br/>
      
          <ul>
            <li>🎨 <b>UI/UX Implementation:</b> Translated Figma designs into responsive web layouts using HTML, CSS, and Bootstrap</li>
            <li>💻 <b>Frontend Development:</b> Developed interactive and accessible web pages with clean code structure</li>
            <li>⚙️ <b>JavaScript & jQuery:</b> Added dynamic functionalities such as carousels, dropdowns, animations, and form validations</li>
            <li>🌍 <b>Localization Support:</b> Integrated multilingual UI (English, Spanish, Hindi, etc.) for a global audience</li>
            <li>📱 <b>Responsive Design:</b> Ensured mobile-first approach across devices using Bootstrap grid system</li>
            <li>🚀 <b>Performance Optimization:</b> Optimized assets, minimized scripts, and enhanced load times</li>
            <li>🔗 <b>CMS Integration:</b> Customized WordPress sections for easy content updates and SEO-friendly structure</li>
          </ul>
        `,
        techStack: [
          'HTML5',
          'CSS3',
          'jQuery',
          'Bootstrap',
          'WordPress',
          'Google Analytics',
          'Cloudflare',
          'Microsoft Clarity'
        ],
        thumbnail: '/projects/images/rocketSlide1.png',
        longThumbnail: '/projects/long/easydmarc.webp',
        images: [
          '/projects/images/rocketSlide1.png',
          '/projects/images/rocketSlide2.png',
          '/projects/images/rocketSlide3.png',
        ],
      },
      {
        title: 'RemaME',
        slug: 'remame',
        liveUrl: 'https://remame.softuvo.click/',
        year: 2025,
        description: `
          <b>RemaME</b> is a modern <b>Mental Health & Wellness Platform</b> that connects users with certified reprogrammers (mental health professionals) to promote emotional well-being and mental awareness through accessible online counseling, group therapy, and self-care guidance.<br/><br/>
      
          <b>About the Platform:</b><br/>
          RemaME empowers individuals, couples, and teens to access confidential and compassionate mental health support. Through intuitive UI and a guided wellness process, it makes professional help more approachable for people from all backgrounds.<br/><br/>
      
          <b>Key Features:</b>
          <ul>
            <li>🧘 <b>Online Counseling & Reprogrammers:</b> Find and book certified therapists for various mental health needs</li>
            <li>💬 <b>Confidential Sessions:</b> Ensures privacy and data security for every client interaction</li>
            <li>📅 <b>Easy Booking System:</b> Simple scheduling and availability checking for sessions</li>
            <li>🌍 <b>Community Support:</b> Connect with a global mental health community to share experiences and resources</li>
            <li>🧩 <b>Holistic Approach:</b> Covers anxiety, depression, relationship issues, stress management, and self-awareness</li>
            <li>📊 <b>Wellness Tracking:</b> Tracks user progress through counseling stages — Assessment, Sessions, and Tracking</li>
            <li>📱 <b>Responsive Design:</b> Mobile-friendly and accessible interface for users across all devices</li>
          </ul><br/>
      
         
        `,
        role: `
          <b>UI Frontend Developer</b><br/>
          Contributed to the design and development of the <b>frontend interface</b> for RemaME’s online mental health and wellness platform, ensuring accessibility, performance, and user engagement.<br/><br/>
      
          <ul>
            <li>🎨 <b>UI/UX Development:</b> Built responsive and visually calming layouts using Tailwind CSS and Laravel Blade templates</li>
            <li>💻 <b>Frontend Implementation:</b> Developed modern, SEO-friendly pages using HTML5, CSS3, and jQuery</li>
            <li>⚙️ <b>Dynamic Components:</b> Integrated modals, sliders, and interactive forms with jQuery for smooth user experience</li>
            <li>📱 <b>Responsive Design:</b> Ensured full compatibility across mobile, tablet, and desktop devices</li>
            <li>🛡️ <b>Security & Optimization:</b> Improved site performance and load time via Cloudflare CDN and Nginx server optimization</li>
            <li>🌐 <b>Cross-Platform Compatibility:</b> Implemented accessibility and browser support for diverse user demographics</li>
            <li>🧠 <b>Content Integration:</b> Structured pages for About, FAQ, Services, and Testimonials with easy CMS updates</li>
            <li>📈 <b>Analytics Setup:</b> Integrated Google Analytics and Microsoft Clarity for user behavior tracking</li>
          </ul>
        `,
        techStack: [
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          'jQuery',
          'Laravel',
          'PHP',
          'Cloudflare',
          'Nginx',
          'Google Font API',
          'Font Awesome'
        ],
        thumbnail: '/projects/images/remame1.png',
        longThumbnail: '/projects/long/remame.webp',
        images: [
          '/projects/images/remame1.png',
          '/projects/images/remame2.png',
        ],
      }
      
      
      
   
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend & UI Developer',
        company: 'Softuvo Solutions',
        duration: 'March 2025 - August 2025',
    },
    {
        title: 'Associate UI Developer',
        company: 'Softobiz Solutions',
        duration: 'January 2023 - Feb 2025',
    },
];
