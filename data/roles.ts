export type Role = {
  slug: string;
  label: string;
  title: string;
  pitch: string;
  /** Project slugs that prove it, strongest first. */
  proof: string[];
};

export const roles: Role[] = [
  {
    slug: "enablement",
    label: "Role",
    title: "Enablement",
    pitch:
      "Training that changes what people do on the job: finding the real need, designing the learning, and planning the rollout.",
    proof: [
      "msp-sales-enablement-plan",
      "using-the-lifecycle-optimizer",
      "creating-an-expense-report",
      "ayla-service-apis-node-red",
      "optimizing-truck-rolls",
    ],
  },
  {
    slug: "developer-education",
    label: "Role",
    title: "Developer education",
    pitch:
      "Teaching developers how APIs and platforms work, through courses, sandboxes they can try, and reference docs.",
    proof: [
      "ayla-service-apis-node-red",
      "hamlib-api-playground",
      "dss-api-specification-guide",
      "what-is-search",
      "ayla-iot-platform-overview",
    ],
  },
  {
    slug: "technical-writing",
    label: "Role",
    title: "Technical writing",
    pitch: "API specifications and documentation written for the person who has to use them.",
    proof: ["dss-api-specification-guide", "hamlib-api-playground", "msp-sales-enablement-plan"],
  },
  {
    slug: "hardware-and-ai",
    label: "Building",
    title: "Hardware & AI",
    pitch:
      "Hackathon builds that connect sensors and microcontrollers to AI agents, and the tools that explain them.",
    proof: ["freshfridge", "joulehound", "dwell-protocol", "chairforce-one", "the-listener", "open-bands"],
  },
];

export type Capability = { skill: string; tools: string[]; proof: string[] };
export type Pillar = { title: string; skills: Capability[] };

export const pillars: Pillar[] = [
  {
    title: "Instructional design",
    skills: [
      {
        skill: "Scenario and software-simulation e-learning",
        tools: ["Storyline", "Rise 360"],
        proof: ["creating-an-expense-report", "using-the-lifecycle-optimizer", "what-is-search"],
      },
      {
        skill: "Technical courses for developers",
        tools: ["Storyline", "Node-RED"],
        proof: ["ayla-service-apis-node-red"],
      },
      {
        skill: "Narration and audio editing",
        tools: ["Adobe Audition"],
        proof: ["ayla-service-apis-node-red", "using-the-lifecycle-optimizer", "optimizing-truck-rolls"],
      },
    ],
  },
  {
    title: "Enablement",
    skills: [
      {
        skill: "Needs analysis and performance consulting",
        tools: ["Performance consulting"],
        proof: ["msp-sales-enablement-plan"],
      },
      {
        skill: "Training rollout planning",
        tools: ["Presentation"],
        proof: ["msp-sales-enablement-plan"],
      },
    ],
  },
  {
    title: "Documentation",
    skills: [
      {
        skill: "REST API specifications",
        tools: ["Technical writing", "Photoshop"],
        proof: ["dss-api-specification-guide"],
      },
      {
        skill: "Interactive API documentation",
        tools: ["React", "v0"],
        proof: ["hamlib-api-playground"],
      },
    ],
  },
  {
    title: "Video",
    skills: [
      {
        skill: "Product and explainer video",
        tools: ["After Effects", "Premiere Pro", "Photoshop"],
        proof: ["ayla-iot-platform-overview", "optimizing-truck-rolls"],
      },
      {
        skill: "Screen recording",
        tools: ["Camtasia"],
        proof: ["what-is-search", "using-the-lifecycle-optimizer"],
      },
    ],
  },
  {
    title: "Interactive tools",
    skills: [
      {
        skill: "Learning apps and data visualization",
        tools: ["React", "v0"],
        proof: ["the-listener", "open-bands"],
      },
    ],
  },
  {
    title: "Hardware & AI",
    skills: [
      {
        skill: "Microcontrollers and sensors",
        tools: ["ESP32", "Raspberry Pi"],
        proof: ["freshfridge", "dwell-protocol", "chairforce-one"],
      },
      {
        skill: "AI agents and vision models",
        tools: ["Google ADK", "Gemini Vision"],
        proof: ["freshfridge"],
      },
      {
        skill: "Energy profiling for local AI",
        tools: ["Python", "Arm"],
        proof: ["joulehound"],
      },
    ],
  },
];
