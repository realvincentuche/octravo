export const company = {
  name: 'Octravo Limited',
  shortName: 'Octravo',
  tagline: 'Practical software, AI and automation for growing businesses',
  email: 'hello@octravo.com',
  phoneDisplay: '+234 803 056 4875',
  phoneHref: 'tel:+2348030564875',
  whatsapp:
    'https://wa.me/2348030564875?text=Hello%20Octravo%2C%20I%20would%20like%20to%20discuss%20a%20project.',
  address: '1 Bradford Lane, Off Ibijioke Street, Oregun, Lagos, Nigeria',
  registration: 'RC 9343081',
  website: 'www.octravo.com',
}

export const emailHref = `mailto:${company.email}?subject=${encodeURIComponent(
  'Project enquiry for Octravo',
)}&body=${encodeURIComponent(
  'Hello Octravo,\n\nHere is what I need help with:\n\n1. What we do:\n2. What is not working today:\n3. What good looks like:\n4. Timeline:\n\nThank you.',
)}`

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

export const heroSlides = [
  {
    image: u('photo-1522071820081-009f0129c71c', 1800),
    kicker: 'Software, AI and automation',
    title: 'Software that fixes how your business runs',
    body: 'Websites, web apps, AI assistants and automation for growing teams. Designed around your workflow, supported after launch.',
  },
  {
    image: u('photo-1551434678-e076c223a692', 1800),
    kicker: 'Custom builds that ship',
    title: 'From scattered tools to one system',
    body: 'Portals, dashboards, bookings and SaaS platforms. Connected to payments, messaging and the tools you already use.',
  },
  {
    image: u('photo-1600880292203-757bb62b4baf', 1800),
    kicker: 'A partner in Lagos',
    title: 'Someone to call after go-live',
    body: 'Discovery to deployment to support. Docs, training and a team that picks up the phone.',
  },
]

export const stats = [
  { value: 12, suffix: '', label: 'Service areas, one team' },
  { value: 6, suffix: '', label: 'Steps from idea to support' },
  { value: 2, suffix: '', label: 'Products live in market' },
  { value: 11, suffix: '+', label: 'Industries we serve' },
]

export const serviceClusters = [
  {
    title: 'Websites and web apps',
    image: u('photo-1467232004584-a241de8bcf5d', 1200),
    icon: 'globe',
    tone: 'tone-red',
    body: 'Professional sites, customer portals, dashboards, booking systems and SaaS platforms. Designed around your content, built to run fast on phones and desktops.',
    items: [
      'Corporate and service websites',
      'Landing and campaign pages',
      'Customer portals and dashboards',
      'Booking, membership and workflow apps',
      'Subscription platforms with plans and billing',
      'Redesigns and performance fixes',
    ],
  },
  {
    title: 'Custom software and integrations',
    image: u('photo-1555066931-4365d14bab8c', 1200),
    icon: 'code',
    tone: 'tone-gold',
    body: 'Systems built around the way you already work. Databases, roles, rules and reports, connected to the payment, accounting and messaging tools you use.',
    items: [
      'Requirements analysis and solution design',
      'Database and workflow modelling',
      'Roles, permissions and approvals',
      'REST APIs and webhook handling',
      'Payment gateway integration',
      'Third party system connections',
    ],
  },
  {
    title: 'AI and automation',
    image: u('photo-1677442136019-21780ecad995', 1200),
    icon: 'cpu',
    tone: 'tone-plum',
    body: 'Artificial intelligence where it pays. Customer assistants that answer from your own business knowledge, plus automation that clears repetitive work from your team.',
    items: [
      'AI customer assistants',
      'Business knowledge assistants',
      'Document processing and summaries',
      'Lead, sales and onboarding workflows',
      'Reminders, approvals and reports',
      'Connected systems that stay in sync',
    ],
  },
  {
    title: 'Consulting, launch and support',
    image: u('photo-1600880292203-757bb62b4baf', 1200),
    icon: 'compass',
    tone: 'tone-ember',
    body: 'Advice before you spend, steady hands at launch, and someone to call after. Modernize what you have or keep it running while you grow.',
    items: [
      'Technology assessment and planning',
      'Solution architecture and MVP scoping',
      'Legacy appraisal and refactoring',
      'Cloud and VPS deployment setup',
      'Backups, monitoring and updates',
      'Support retainers and managed care',
    ],
  },
]

export const processSteps = [
  {
    title: 'Discover',
    icon: 'search',
    body: 'We learn your workflow, users and goals before we recommend anything.',
  },
  {
    title: 'Design',
    icon: 'pen',
    body: 'You see the structure, screens and scope in plain terms. No surprises later.',
  },
  {
    title: 'Build',
    icon: 'code',
    body: 'We develop in working slices you can review while the system takes shape.',
  },
  {
    title: 'Test',
    icon: 'check',
    body: 'We check features, integrations, permissions and the journeys that matter.',
  },
  {
    title: 'Launch',
    icon: 'rocket',
    body: 'We deploy, configure operations and hand over docs, access and training.',
  },
  {
    title: 'Support',
    icon: 'shield',
    body: 'We monitor real use, fix issues and improve the system as you grow.',
  },
]

export const products = [
  {
    name: 'CVToEdge',
    href: 'https://cvtoedge.com',
    tag: 'Career technology',
    image: u('photo-1454165804606-c3d57bc86b40', 1200),
    icon: 'doc',
    body: 'An AI powered CV platform that helps job seekers sharpen wording, fix gaps and present their experience with confidence.',
    points: [
      'AI assisted CV refinement and scoring',
      'Missing information and weak spots flagged',
      'Templates and cover letter support',
    ],
    cta: 'Visit CVToEdge',
  },
  {
    name: 'Octravo Assistant',
    href: 'https://assistant.octravo.com',
    tag: 'Business software',
    image: u('photo-1512941937669-90a1b58e7e9c', 1200),
    icon: 'chat',
    body: 'An AI assistant that answers customers from your own business knowledge and helps with service and sales, starting with WhatsApp.',
    points: [
      'Answers grounded in your business info',
      'WhatsApp first, more channels planned',
      'Dashboards, plans and usage billing',
    ],
    cta: 'Visit Octravo Assistant',
  },
]

export const banners = {
  services: u('photo-1460925895917-afdab827c52f', 1800),
  products: u('photo-1519389950473-47ba0277781c', 1800),
  about: u('photo-1521737604893-d14cc237f11d', 1800),
  contact: u('photo-1423666639041-f56000c27a9a', 1800),
  careers: u('photo-1521791136064-7986c2920216', 1800),
  cta: u('photo-1556761175-b413da4baf72', 1800),
}

export const gallery = [
  { image: u('photo-1531482615713-2afd69097998', 900), alt: 'Team reviewing work on a laptop' },
  { image: u('photo-1573164713988-8665fc963095', 900), alt: 'Specialist working at a screen' },
  { image: u('photo-1560250097-0b93528c311a', 900), alt: 'Business owner in an office' },
  { image: u('photo-1555949963-aa79dcee981c', 900), alt: 'Code on a developer screen' },
]

export const values = [
  {
    title: 'Practical innovation',
    icon: 'bulb',
    tone: 'tone-gold',
    body: 'We chase technology that fixes real problems and pays for itself.',
  },
  {
    title: 'Customer value',
    icon: 'heart',
    tone: 'tone-red',
    body: 'We judge our work by your operations, experience and revenue.',
  },
  {
    title: 'Integrity',
    icon: 'shield',
    tone: 'tone-ember',
    body: 'We say what things cost, what they take and what they cannot do.',
  },
  {
    title: 'Engineering care',
    icon: 'sliders',
    tone: 'tone-plum',
    body: 'We build systems that are secure, maintainable and easy to hand over.',
  },
  {
    title: 'Learning',
    icon: 'book',
    tone: 'tone-red',
    body: 'We stay current so your systems do not fall behind.',
  },
  {
    title: 'Ownership',
    icon: 'flag',
    tone: 'tone-gold',
    body: 'We take responsibility for the quality of what we ship.',
  },
]

export const industries = [
  'Professional services',
  'Education and training',
  'Retail and commerce',
  'Real estate and property',
  'Hospitality and customer facing teams',
  'Recruitment and career services',
  'Health organizations',
  'Financial and payment services',
  'Non profits and membership groups',
  'Churches and community groups',
  'Technology and digital businesses',
]

export const role = {
  title: 'Sales and Marketing Executive',
  location: 'Oregun, Lagos',
  mode: 'Onsite',
  type: 'Full time',
  closeNote: 'Early applications reviewed first. The role stays open until filled.',
  summary:
    'Own the pipeline. Find SME leads, run outreach, book discovery calls, follow up quotes and help launch CVToEdge and Octravo Assistant into the market.',
  duties: [
    'Find and qualify SME leads across Lagos and beyond',
    'Run outreach by phone, WhatsApp, email and visits',
    'Book discovery calls and keep the calendar full',
    'Follow up proposals and quotes until each deal closes or dies cleanly',
    'Support product launches, demos and onboarding for CVToEdge and Octravo Assistant',
    'Keep the pipeline sheet current and report numbers every week',
  ],
  requirements: [
    'Proven B2B selling experience, ideally with SMEs in Lagos',
    'Clear spoken and written English',
    'Comfortable explaining software to non technical buyers',
    'Disciplined follow up. You do not let leads go cold',
    'Able to work onsite in Oregun, Lagos',
    'Available to start quickly',
  ],
  task: 'Shortlisted candidates complete a short task. Review this website and send a 30, 60 and 90 day plan plus ten real prospect names with one line each on why they fit.',
  applySubject: 'Application: Sales and Marketing Executive',
}

export const roleApplyHref = `mailto:${company.email}?subject=${encodeURIComponent(
  role.applySubject,
)}&body=${encodeURIComponent(
  'Hello Octravo,\n\nI am applying for the Sales and Marketing Executive role.\n\nFull name:\nPhone:\nLocation:\nEarliest start date:\nLinkedIn or CV link:\n\nOne paragraph on my best B2B result:\n\nThank you.',
)}`
