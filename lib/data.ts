export const capabilities = [
  "APPLICATION SECURITY",
  "API SECURITY",
  "MOBILE SECURITY",
  "PENETRATION TESTING",
  "THREAT MODELING",
  "SECURITY ENGINEERING",
];

export type ServiceRow = {
  index: string;
  title: string;
  description: string;
};

export const services: ServiceRow[] = [
  {
    index: "01",
    title: "Application Security",
    description:
      "Assess applications throughout their lifecycle, from architecture and threat modeling to testing and remediation.",
  },
  {
    index: "02",
    title: "API Security",
    description:
      "Identify weaknesses across authentication, authorization, business logic, data exposure and API architecture.",
  },
  {
    index: "03",
    title: "Penetration Testing",
    description:
      "Perform evidence-driven security testing designed to demonstrate realistic attack paths and business impact.",
  },
  {
    index: "04",
    title: "Mobile Security",
    description:
      "Assess mobile applications and their supporting APIs for authentication, data exposure, insecure storage and implementation weaknesses.",
  },
  {
    index: "05",
    title: "Threat Modeling",
    description:
      "Identify attack surfaces, trust boundaries and abuse cases before vulnerabilities become expensive production problems.",
  },
  {
    index: "06",
    title: "Security Engineering",
    description:
      "Help teams integrate practical security controls into development workflows and the software delivery lifecycle.",
  },
];

export type CaseStudy = {
  index: string;
  category: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  focus: string;
  outcome: string;
};

// Placeholder case studies — replace with verified engagement details.
// Do not publish invented client names or results.
export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    category: "APPLICATION SECURITY REVIEW",
    title: "Identifying weaknesses across authentication, authorization and business logic.",
    summary: "Add a one-line, non-identifying summary once the engagement is cleared for publication.",
    challenge: "— add challenge —",
    approach: "— add approach —",
    focus: "Authentication · Authorization · Business logic",
    outcome: "— add outcome, only once verified —",
  },
  {
    index: "02",
    category: "API SECURITY ASSESSMENT",
    title: "Testing APIs beyond automated scanners to uncover authorization and business-logic weaknesses.",
    summary: "Add a one-line, non-identifying summary once the engagement is cleared for publication.",
    challenge: "— add challenge —",
    approach: "— add approach —",
    focus: "Authorization · Data exposure · API architecture",
    outcome: "— add outcome, only once verified —",
  },
  {
    index: "03",
    category: "SECURITY ENGINEERING",
    title: "Bringing security closer to the software development lifecycle.",
    summary: "Add a one-line, non-identifying summary once the engagement is cleared for publication.",
    challenge: "— add challenge —",
    approach: "— add approach —",
    focus: "Secure SDLC · Developer workflows · Practical controls",
    outcome: "— add outcome, only once verified —",
  },
];

export type ExperienceItem = {
  period: string;
  title: string;
  description: string;
};

// Concise, high-value lines — not a CV dump. Replace period/detail placeholders with verified dates.
export const experience: ExperienceItem[] = [
  {
    period: "— add dates —",
    title: "Application Security Engineering",
    description:
      "Reviewing applications across the development lifecycle, from design and threat modeling through testing and remediation.",
  },
  {
    period: "— add dates —",
    title: "Penetration Testing",
    description:
      "Evidence-driven testing of web, API and mobile targets, focused on realistic attack paths over checklist coverage.",
  },
  {
    period: "— add dates —",
    title: "Security Engineering",
    description:
      "Working with engineering teams to build practical security controls into everyday development workflows.",
  },
  {
    period: "— add dates —",
    title: "Cybersecurity Education & Mentorship",
    description:
      "Teaching application security concepts and mentoring practitioners moving into the field.",
  },
  {
    period: "— add dates —",
    title: "Security Product Building",
    description:
      "Building OffShield Security, an applied security brand and product line.",
  },
];

export type Article = {
  category: string;
  title: string;
  description: string;
  date: string;
  href: string;
};

// Example placeholders per brief — swap in real published articles and dates.
export const articles: Article[] = [
  {
    category: "THREAT MODELING",
    title:
      "Why every developer should threat model before writing a single line of code — a practical level 2",
    description:
      "A practical guide to making threat modeling a developer-first habit before design and code are locked in.",
    date: "—",
    href: "https://medium.com/@gabbytech01/why-every-developer-should-threat-model-before-writing-a-single-line-of-code-a-practical-level-2",
  },
  {
    category: "DOCKER SECURITY",
    title:
      "Getting started with Docker for application security: deploying OWASP CRAPI",
    description:
      "How Docker can be used to deploy appsec tooling and secure development environments with OWASP CRAPI.",
    date: "—",
    href: "https://medium.com/@gabbytech01/getting-started-with-docker-for-application-security-deploying-owasp-crapi-e2d45dfa7ff7",
  },
  {
    category: "CLOUD SECURITY",
    title:
      "Microsoft Entra ID: moving Azure AD from Access Manager to Trust Interpreter",
    description:
      "An exploration of Entra ID, Azure AD evolution, and how identity should be treated for security and trust.",
    date: "—",
    href: "https://medium.com/@gabbytech01/microsoft-entra-id-moving-azure-ad-from-access-manager-to-trust-interpreter-c691e503fb03",
  },
  {
    category: "ACCESS CONTROL",
    title:
      "Breaking into the VulnBank admin dashboard: a lesson in broken access control",
    description:
      "A real-world write-up showing how broken access control can turn a vulnerable admin panel into a breach path.",
    date: "—",
    href: "https://medium.com/@gabbytech01/breaking-into-the-vulnbank-admin-dashboard-a-lesson-in-broken-access-control-a38840f25584f",
  },
  {
    category: "API SECURITY",
    title:
      "Why broken access control is more dangerous in APIs than in web applications",
    description:
      "Why API authorization gaps are often more serious than UI-level access control issues.",
    date: "—",
    href: "https://medium.com/@gabbytech01/why-broken-access-control-is-more-dangerous-in-apis-than-in-web-applications-d228de1d53e6",
  },
  {
    category: "WEB SECURITY",
    title: "Understanding the modern web attack surface — AppSec",
    description:
      "A breakdown of the modern application attack surface and what defenders need to protect first.",
    date: "—",
    href: "https://medium.com/@gabbytech01/understanding-the-modern-web-attack-surface-appsec-964d165284e5",
  },
  {
    category: "SECURITY MINDSET",
    title: "The hacker’s mindset: no butter, just strategy",
    description:
      "A security mindset essay that focuses on strategy and practical thinking rather than tricks or jargon.",
    date: "—",
    href: "https://medium.com/@gabbytech01/the-hackers-mindset-no-butter-just-strategy-dadd5e0b831c",
  },
  {
    category: "AI SECURITY",
    title:
      "Securing an application built with AI: lessons from a real-world test",
    description:
      "Practical lessons from testing AI-powered applications and the security controls they need.",
    date: "—",
    href: "https://medium.com/@gabbytech01/securing-an-application-built-with-ai-lessons-from-a-real-world-test-400648df34f8",
  },
  {
    category: "WEB SECURITY",
    title: "SQL injection on DVWA — write-up",
    description:
      "A write-up showing SQL injection techniques on DVWA and what secure coding should prevent.",
    date: "—",
    href: "https://medium.com/@gabbytech01/sql-injection-on-dvwa-write-up-69d6c35b3c14",
  },
  {
    category: "AUTHORIZATION",
    title:
      "Breaking access: understanding IDOR vulnerability and how to find it using Burp Suite",
    description:
      "An IDOR tutorial that shows how to discover broken object access control with Burp Suite.",
    date: "—",
    href: "https://medium.com/@gabbytech01/breaking-access-understanding-idor-vulnerability-and-how-to-find-it-using-burp-suite-a85fb2762a90",
  },
  {
    category: "API BASICS",
    title: "What is an API? A simple guide for beginners",
    description:
      "A beginner-friendly explanation of APIs, how they work, and why they matter for developers and security.",
    date: "—",
    href: "https://medium.com/@gabbytech01/what-is-an-api-a-simple-guide-for-beginners-bf3429553880",
  },
];

export const philosophy = [
  {
    index: "01",
    title: "Evidence before assumption.",
    body: "Security findings should be backed by evidence, not fear.",
  },
  {
    index: "02",
    title: "Impact before theatre.",
    body: "The goal is not to make a vulnerability sound frightening. The goal is to understand what it means and what deserves attention first.",
  },
  {
    index: "03",
    title: "Clarity before volume.",
    body: "A shorter, prioritized security assessment is more useful than a massive report nobody can act on.",
  },
];

export const footerLinks = {
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gabbytechsec" },
    { label: "X", href: "https://x.com/gabbytech01" },
    { label: "GitHub", href: "https://github.com/gabbytech01" },
    { label: "YouTube", href: "https://youtube.com/@gabbytech01" },
  ],
  services: [
    "Application Security",
    "API Security",
    "Penetration Testing",
    "Mobile Security",
    "Threat Modeling",
    "Security Engineering",
  ],
};
