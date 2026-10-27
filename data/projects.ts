export type Discipline =
  | "Instructional Design"
  | "Developer Education"
  | "Enablement"
  | "Hardware & AI";

export type Project = {
  slug: string;
  title: string;
  discipline: Discipline;
  context: string;
  summary: string;
  /** Longer notes shown on the project page, one paragraph per entry. */
  notes?: string[];
  tools: string[];
  /** Optional facts shown at the top of the project page. */
  client?: string;
  audience?: string;
  role?: string;
  year?: string;
  /** Longer write-up, keyed by the headings in sectionHeadings for this project's kind. */
  sections?: Record<string, string[]>;
  /** Lead image in /public/images, if there is one. */
  image?: string;
  /** How the work is viewed, which decides the project page's main block. */
  view:
    | { kind: "course"; url: string }
    | { kind: "video"; youtubeId: string }
    | { kind: "document"; driveId: string }
    | { kind: "app"; url: string }
    | { kind: "build"; repo: string; youtubeId?: string };
};

export const disciplines: Discipline[] = [
  "Instructional Design",
  "Developer Education",
  "Enablement",
  "Hardware & AI",
];

/** Write-up headings for each kind of project, in page order. */
export const sectionHeadings: Record<Project["view"]["kind"], string[]> = {
  course: ["The problem", "Approach", "Outcome"],
  video: ["The goal", "Approach", "Outcome"],
  document: ["Context", "What's inside", "Outcome"],
  app: ["Why I built it", "How it works", "What I learned"],
  build: ["The challenge", "What we built", "My part"],
};

/** What the thing is, in plain words, from how it's viewed. */
export function formatOf(p: Project) {
  return {
    course: "E-learning course",
    app: "Web app",
    video: "Video",
    document: "PDF",
    build: "GitHub project",
  }[p.view.kind];
}

export const projects: Project[] = [
  {
    slug: "what-is-search",
    title: "What Is Search?",
    discipline: "Instructional Design",
    context: "E-learning course",
    summary:
      "What happens between typing a term into a search engine and getting results, and how a database answers.",
    tools: ["Storyline", "Camtasia", "Adobe Audition", "Photoshop"],
    image: "/images/what-is-search.jpg",
    view: {
      kind: "course",
      url: "https://katiebucket.s3.amazonaws.com/What+is+Search+Remix+2/story.html",
    },
  },
  {
    slug: "creating-an-expense-report",
    title: "Creating an Expense Report",
    discipline: "Instructional Design",
    context: "E-learning course",
    summary:
      "How to create an expense report in Integra, the International Rescue Committee's ERP system built on Microsoft Dynamics 365.",
    notes: ["Built on an existing course template."],
    tools: ["Storyline", "Photoshop"],
    image: "/images/expense-report.jpg",
    view: {
      kind: "course",
      url: "https://360.articulate.com/review/content/983e47a4-5a5c-4705-9a08-e121e7af6380/review",
    },
  },
  {
    slug: "using-the-lifecycle-optimizer",
    title: "Using the Lifecycle Optimizer",
    discipline: "Instructional Design",
    context: "E-learning course",
    summary:
      "A walkthrough of Sailthru's Lifecycle Optimizer: the interface, and how to build automated, individualized messaging flows across channels.",
    notes: ["I narrated the audio."],
    tools: ["Rise 360", "Camtasia", "Adobe Audition"],
    image: "/images/lifecycle-optimizer.jpg",
    view: {
      kind: "course",
      url: "https://360.articulate.com/review/content/d13ce5d8-d85d-4478-86b0-148ea76444ac/review",
    },
  },
  {
    slug: "the-listener",
    title: "The Listener",
    discipline: "Instructional Design",
    context: "Radio spectrum explorer",
    summary:
      "Tune across the radio spectrum and see what lives at each frequency, from broadcast and voice to data and amateur radio, with plain explanations of how those signals travel.",
    tools: ["React", "v0"],
    image: "/images/the-listener.jpg",
    view: { kind: "app", url: "https://v0-the-listener-tool.vercel.app/" },
  },
  {
    slug: "open-bands",
    title: "Open Bands",
    discipline: "Instructional Design",
    context: "Live amateur radio visualization",
    summary:
      "Amateur radio activity in real time, shown through motion, color, and abstract forms instead of call signs and logs, so newcomers can see bands open, go quiet, and connect distant places.",
    notes: ["Start with the Guide tab."],
    tools: ["React", "v0"],
    image: "/images/open-bands.jpg",
    view: { kind: "app", url: "https://v0-open-bands-visualization.vercel.app/" },
  },
  {
    slug: "ayla-service-apis-node-red",
    title: "Introduction to the Ayla Service APIs using Node-RED",
    discipline: "Developer Education",
    context: "E-learning course",
    summary:
      "A course on using an IoT platform's custom APIs inside Node-RED, the visual programming tool.",
    notes: ["I narrated the audio. The course template already existed."],
    tools: ["Storyline", "Camtasia", "Adobe Audition", "Node-RED"],
    image: "/images/node-red.jpg",
    view: { kind: "course", url: "https://katiebucket.s3.amazonaws.com/story_html5.html" },
  },
  {
    slug: "hamlib-api-playground",
    title: "Hamlib API Playground",
    discipline: "Developer Education",
    context: "API sandbox",
    summary:
      "How modern software controls radio hardware, explained through a web API you can try, connecting traditional radio with software culture.",
    tools: ["React", "v0", "API"],
    image: "/images/hamlib-api.jpg",
    view: { kind: "app", url: "https://v0-hamlib-api-documentation.vercel.app/" },
  },
  {
    slug: "dss-api-specification-guide",
    title: "Data Stream Service API Specification Guide",
    discipline: "Developer Education",
    context: "Technical writing",
    summary:
      "Specification of the REST APIs for creating, updating, and deleting data subscriptions on the Ayla IoT platform.",
    notes: ["Graphics made in Photoshop."],
    tools: ["Technical writing", "API", "Photoshop"],
    image: "/images/dss-api.jpg",
    view: { kind: "document", driveId: "1SCvlUaWBbvxvFCLYrzVxFDIY_WnTyFp2" },
  },
  {
    slug: "msp-sales-enablement-plan",
    title: "MSP Sales Enablement Performance Plan",
    discipline: "Enablement",
    context: "Enablement plan",
    summary:
      "A sales enablement initiative for managed service providers: the needs identified, the training design approach, sample content, and the rollout plan.",
    notes: [
      "AI writing tools helped with clarity edits. The design decisions are my own.",
    ],
    tools: ["Performance consulting", "Presentation"],
    image: "/images/msp-sales.jpg",
    view: { kind: "document", driveId: "13N1ApzhBl9uLXFByfOVPWIE_VkNbYY4p" },
  },
  {
    slug: "ayla-iot-platform-overview",
    title: "Ayla IoT Platform Extended Overview",
    discipline: "Enablement",
    context: "3.5-minute product video",
    summary:
      "A complex enterprise IoT platform turned into a clear story for technical and executive viewers: how connected products and cloud infrastructure support business growth.",
    tools: ["Premiere Pro", "After Effects", "Photoshop", "Adobe Audition"],
    image: "/images/ayla-overview.jpg",
    view: { kind: "video", youtubeId: "qmMH4I_RVno" },
  },
  {
    slug: "optimizing-truck-rolls",
    title: "Optimizing Truck Rolls",
    discipline: "Enablement",
    context: "2-minute explainer",
    summary:
      "How an IoT platform helps industrial companies with connected devices cut the time and cost of sending technicians into the field.",
    notes: ["I narrated the audio."],
    tools: ["After Effects", "Adobe Audition", "Photoshop"],
    image: "/images/truck-rolls.jpg",
    view: { kind: "video", youtubeId: "tf02hk0VtZw" },
  },
  {
    slug: "freshfridge",
    title: "FreshFridge",
    discipline: "Hardware & AI",
    context: "Google x DeepStation Hackathon, 3rd place",
    summary:
      "An ordinary fridge retrofitted into a smart inventory system with an ESP32-CAM, a Raspberry Pi, Gemini Vision, and a swarm of Google ADK agents.",
    tools: ["ESP32-CAM", "Raspberry Pi", "Gemini Vision", "Google ADK"],
    image: "https://i.ytimg.com/vi/oZljbCxnYxU/hqdefault.jpg",
    view: { kind: "build", repo: "https://github.com/b-urge/freshfridge", youtubeId: "oZljbCxnYxU" },
  },
  {
    slug: "joulehound",
    title: "Joulehound",
    discipline: "Hardware & AI",
    context: "Energy profiling for local AI agents",
    summary: "Physics-grounded energy profiling for local AI agents running on Arm devices.",
    tools: ["Python", "Arm"],
    view: { kind: "build", repo: "https://github.com/b-urge/Joulehound" },
  },
  {
    slug: "dwell-protocol",
    title: "Dwell Protocol",
    discipline: "Hardware & AI",
    context: "ESP32 and Solana",
    summary:
      "Turns physical presence in a workspace into a real-time micropayment stream, bridging ESP32 hardware with the Solana blockchain.",
    tools: ["ESP32", "Solana", "TypeScript"],
    view: { kind: "build", repo: "https://github.com/b-urge/Dwell-Protocol" },
  },
  {
    slug: "chairforce-one",
    title: "Chairforce One",
    discipline: "Hardware & AI",
    context: "SCI Hackathon 2026",
    summary: "A health-sensing platform for wheelchair users in extreme environments.",
    tools: ["Python", "Sensors"],
    view: { kind: "build", repo: "https://github.com/b-urge/chairforce-one" },
  },
];

export function projectNumber(slug: string) {
  return String(projects.findIndex((p) => p.slug === slug) + 1).padStart(2, "0");
}
