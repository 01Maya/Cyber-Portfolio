
export const nav = [
  { href: "#services", label: "Services" },
  { href: "#cases", label: "Case files" },
  { href: "#skills", label: "Skills" },
  { href: "#path", label: "Experience" },
];

export const ticker = [
  "SQL injection",
  "XSS",
  "IDOR",
  "SSRF",
  "Broken auth",
  "Privilege escalation",
  "Misconfigured S3",
  "Kerberoasting",
  "Phishing",
  "Zero-day",
  "Supply chain",
  "Ransomware",
];

export const stats = [
  { n: 60, l: "Assessments delivered" },
  { n: 240, l: "Vulnerabilities reported" },
  { n: 9, l: "Years in security" },
];

export const services = [
  {
    t: "Web and API testing",
    d: "Manual testing for logic flaws, broken access and injection that scanners miss.",
    icon: "web",
  },
  {
    t: "Cloud security review",
    d: "Check IAM, storage and network setup in AWS, Azure and GCP against real attack paths.",
    icon: "cloud",
  },
  {
    t: "Red team exercises",
    d: "A full attack simulation that tests your people, process and detection together.",
    icon: "target",
  },
  {
    t: "Team training",
    d: "Hands-on workshops that teach developers and staff to spot and stop real attacks.",
    icon: "shield",
  },
] as const;

export const phases = [
  {
    s: "Recon",
    t: "Map the attack surface",
    d: "I collect public information about your domains, apps and staff the way an attacker would, without touching anything yet.",
  },
  {
    s: "Scan",
    t: "Find the weak spots",
    d: "I probe services and APIs to list open ports, outdated software and risky settings worth a closer look.",
  },
  {
    s: "Exploit",
    t: "Prove the risk is real",
    d: "With written permission, I safely chain weaknesses together to show exactly what an attacker could reach.",
  },
  {
    s: "Report",
    t: "Explain it plainly",
    d: "You get a ranked list of findings, each with proof, business impact and clear steps to fix it.",
  },
  {
    s: "Fix",
    t: "Retest until it holds",
    d: "I retest every fix and confirm the door is truly locked before I close the engagement.",
  },
];

export const cases = [
  {
    sev: "Critical",
    tone: "bg-[#FDE8E9] text-[#B4282D]",
    t: "Account takeover in a fintech app",
    pre: "Chained a broken password reset with weak rate limiting to hijack any account at",
    client: "Northwind Pay",
    post: ". Shipped fixes within a week.",
    k1: "Accounts at risk",
    v1: "240,000",
    redact1: true,
    k2: "Fix time",
    v2: "6 days",
    radius: "",
  },
  {
    sev: "High",
    tone: "bg-[#FFF1D9] text-[#8A5A00]",
    t: "Cloud misconfiguration audit",
    pre: "Found public storage buckets and an over-permissive role at",
    client: "Helix Health",
    post: ". Rebuilt access policy around least privilege.",
    k1: "Exposed records",
    v1: "1.2M",
    redact1: true,
    k2: "Policies rewritten",
    v2: "38",
    radius: "",
  },
  {
    sev: "Medium",
    tone: "bg-teal-soft text-[#07625F]",
    t: "Phishing resilience program",
    pre: "Ran a four-month simulation and training plan for",
    client: "Orbit Logistics",
    post: ". Staff reported suspicious mail far more often.",
    k1: "Click rate drop",
    v1: "41% → 6%",
    redact1: true,
    k2: "Staff trained",
    v2: "900",
    radius: "",
  },
];

export const skills = [
  {
    n: "Web & API testing",
    level: 92,
    d: "OWASP, auth flaws, logic bugs",
    lines: ["Web & API", "testing"],
  },
  {
    n: "Cloud security",
    level: 86,
    d: "AWS, IAM, misconfigurations",
    lines: ["Cloud", "security"],
  },
  {
    n: "Network & AD",
    level: 80,
    d: "Pivoting, Kerberos, segmentation",
    lines: ["Network", "& AD"],
  },
  {
    n: "Threat detection",
    level: 74,
    d: "SIEM rules, log analysis",
    lines: ["Threat", "detection"],
  },
  {
    n: "Secure code review",
    level: 84,
    d: "Python, Go, JavaScript",
    lines: ["Secure", "code review"],
  },
  {
    n: "Security training",
    level: 78,
    d: "Workshops and phishing drills",
    lines: ["Security", "training"],
  },
];

export const timeline = [
  {
    when: "2024 – now",
    t: "Senior Security Engineer, Cipherline",
    d: "Lead red team operations and secure design reviews for fintech and health clients.",
  },
  {
    when: "2021 – 2024",
    t: "Penetration Tester, Sentinel Labs",
    d: "Delivered 60+ web, API and mobile assessments. Wrote the internal playbook for cloud testing.",
  },
  {
    when: "2019 – 2021",
    t: "SOC Analyst, Bastion Networks",
    d: "Triaged alerts, tuned detection rules and cut false positives by a third.",
  },
];

export const certs = [
  "OSCP",
  "CEH",
  "AWS Security Specialty",
  "CISSP Associate",
  "Top 100 on HackerOne India",
];

export const quotes = [
  { q: "Aarav found in two days what our audit missed in two weeks. The report helped our developers fix everything independently.", by: "Priya N., CTO at a payments startup" },
  { q: "He explained every finding in plain language and stayed on until each fix was retested. Our board finally understood the risk.", by: "Daniel R., Head of IT at a regional hospital group" },
  { q: "The phishing training changed how our whole company treats email. People now report things before we even ask.", by: "Meera S., COO at a logistics firm" },
];

export const terminal: { t: string; c?: string }[] = [
  { t: "$ nmap -sV target.test" },
  { t: "Starting scan… 3 ports open" },
  {
    t: "22/tcp   ssh    OpenSSH 7.4  outdated",
    c: "text-[#9A6A00]",
  },
  { t: "443/tcp  https  nginx 1.18" },
  { t: "$ ./check-auth --target /login" },
  {
    t: "[!] No rate limit on password attempts",
    c: "text-[#C23B40]",
  },
  {
    t: "[!] Reset token never expires",
    c: "text-[#C23B40]",
  },
  { t: "$ ./report --format pdf" },
  {
    t: "✓ 2 findings written, fixes included",
    c: "text-[#07846F]",
  },
];
