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
];

export default work;
