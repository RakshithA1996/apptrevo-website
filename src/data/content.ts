export interface Capability {
  id: "cloud" | "connected" | "frontend";
  label: string;
  title: string;
  description: string;
  stack: string[];
  note?: string;
}

export const capabilities: Capability[] = [
  {
    id: "cloud",
    label: "Node 01 — Infrastructure",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Production infrastructure built to stay up. We design and operate secure, highly-available AWS environments, with CI/CD, infrastructure-as-code, and FinOps discipline baked in from the start.",
    stack: ["AWS", "Kubernetes", "Terraform / CloudFormation", "CI/CD", "IAM & compliance"],
  },
  {
    id: "connected",
    label: "Node 02 — Integration",
    title: "Connected-Device Integration",
    description:
      "We connect mobile and web applications to your existing devices and firmware over documented protocols — BLE, OCPP, custom TCP, and more.",
    stack: ["BLE", "OCPP", "Real-time TCP", "Firmware update workflows"],
    note: "We integrate against client-supplied protocol docs. We do not build firmware or hardware.",
  },
  {
    id: "frontend",
    label: "Node 03 — Interface",
    title: "Enterprise Frontend Engineering",
    description:
      "Interfaces engineers actually trust. Built for large-scale, regulated, and industrial client engagements — not throwaway prototypes.",
    stack: ["React", "Angular", "TypeScript", "Design systems"],
  },
];

export interface FounderProfile {
  name: string;
  role: string;
  focus: string;
  bio: string;
}

export const founders: FounderProfile[] = [
  {
    name: "Sanjay Nagesh",
    role: "Cloud Infrastructure & DevOps",
    focus: "AWS · Kubernetes · CI/CD · FinOps",
    bio: "Senior infrastructure engineer with a track record running secure, highly-available hybrid infrastructure — including a 300+ server migration and a 20% cloud cost reduction through FinOps practice.",
  },
  {
    name: "Rakshith Acharya",
    role: "Mobile, Full-Stack & Connected-Device Engineering",
    focus: "BLE · OCPP · Real-time streaming · Firmware workflows",
    bio: "Senior engineer with years of experience building production React Native and native Android apps in the EV mobility sector, with deep hands-on experience integrating hardware SDKs and connectivity protocols.",
  },
  {
    name: "Karthik Raikar",
    role: "Enterprise Frontend Engineering",
    focus: "React · Angular · TypeScript",
    bio: "Senior engineer with client-facing delivery experience across automotive R&D, industrial, and clinical-trial software platforms — built for procurement teams that expect production rigor.",
  },
];

export const industries = [
  "Automotive & EV Mobility",
  "Industrial & Manufacturing",
  "B2B Software Platforms",
];

export const nav = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];
