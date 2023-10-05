/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Eclerx (Outsourced by Mobile programming llc)',
    position: 'Full Stack Engineer (Backend heavy)',
    url: 'https://www.eclerxdigital.com/market360/',
    startDate: '2022-03-28',
    summary: `\item Market360 helps brands, retailers, and manufacturers grow online  revenue with variant-level data and insights.
   Adidas has increased it's revenue by 15 percent quarterly after using the tool in first year. Annual revenue is  21 Billion USD. Market 360 is helping to understand the competition and market need. 
    Market360 play a major role in decision makings and eventually revenue of the compay.
   Supported by eCommerce experts, empowered teams to make  decisions at speed and scale. 
   Researched, developed, and implemented software based on analyzed requirements and understanding of industry technical standards.
  Used JavaScript, Node.js, MongoDB, Koa.js,  REST/RESTful APIs,  Microservice architecture, Leadership Teamwork.Brand like, HP, Lenovo, AMD, SAMSUNG using this tool to make better decision about their business. Company is in profit and scaling their services adding new features and acquiring new clients.
  Eclerx has increased it's revenue by 40 percent annualy and currently it's revenue is more than 6 Billion USD.`,
    highlights: [
      'Remotely collaborated with a distributed team, designing and developing scalable architecture for web applications, achieving 100\% remote productivity',
      'Optimized both backend and frontend functionalities, enhancing application performance and efficiency by 30%',
      'Successfully deployed applications to production environments after rigorous testing with a 98% success rate',
      'Conducted code refactoring, maintenance, and thorough documentation, improving codebase maintainability by 20%',
      'Mentored junior developers and facilitated effective communication and collaboration using Slack, Skype, Microsoft Teams, Confluence, Jira, and Git, resulting in a 25% increase in team productivity'
    ],
  },
  {
    name: 'Chicmic',
    position: 'Full Stack Engineer',
    url: 'https://www.chicmic.in/',
    startDate: '2018-01-08',
    summary: `During my tenure at ChicMic, which I joined after being placed through campus recruitment,
    I had the opportunity to gain extensive knowledge and practical experience in
     various key technologies and
    collaborate with a global team. I acquired proficiency in a wide range of technologies,
     including JavaScript, Node.js,
     MongoDB, SQL, TypeScript, AWS (EC2, S3, Lambda, API Gateway), and Docker. 
     This allowed me to work on diverse projects and adapt to various development environments.
    Working in a global setting, I collaborated closely with colleagues and
    teams from different parts of the world.
     This experience not only expanded my cultural awareness but
    also improved my ability to work effectively in cross-functional and cross-cultural teams.
    I had the privilege of mentoring and training interns, 
    helping them acquire the necessary skills and knowledge to contribute effectively to our projects. 
    This experience allowed me to further enhance my communication and leadership skills.
    I actively contributed to numerous projects within the company,
    applying my technical skills to develop solutions, troubleshoot issues, 
    and optimize existing systems. These experiences helped me gain hands-on experience and 
    improve my problem-solving abilities.
    Overall, my time at ChicMic was a valuable learning experience that 
    not only expanded my technical skill set
    but also honed my ability to work in a global, collaborative environment.
    I am grateful for the opportunities and challenges I encountered,
    which have significantly contributed to my professional growth and development.`,

    highlights: [
      'Managed hybrid work environment, excelling in remote and office settings',
      'Mastered JavaScript, Node.js, ReactJS, and TypeScript for web development',
      'Mentored and upskilled team members, in a collaborative atmosphere',
      'Led development of revenue-generating applications for thousands of users',
      'Collaborated cross-functionally, aligning business goals with technical solution'
    ],
  },
];

export default work;
