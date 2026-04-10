import projects from "@/data/projects.json";

const siteUrl = "https://spectra010s.vercel.app";
const siteName = "Spectra010s";
const pageUrl = siteUrl;
const personId = `${siteUrl}#person`;
const websiteId = `${siteUrl}#website`;
const webpageId = `${siteUrl}#webpage`;
const projectsId = `${siteUrl}#projects`;

function getProjectUrl(project: (typeof projects)[number]) {
  return project.demo ?? project.github ?? siteUrl;
}

function getProjectType(project: (typeof projects)[number]) {
  if (project.category === "CLI") return "SoftwareSourceCode";
  if (project.category === "Web" || project.category === "Freelance" || project.category === "Product") {
    return "WebApplication";
  }

  return "CreativeWork";
}

function buildProjectsItemList() {
  return {
    "@type": "ItemList",
    "@id": projectsId,
    name: "Projects by Adeloye Adetayo",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": getProjectType(project),
        name: project.name,
        description: project.description,
        url: getProjectUrl(project),
        applicationCategory: project.category,
        programmingLanguage: project.tech,
        creator: {
          "@id": personId,
        },
        codeRepository: project.github ?? undefined,
      },
    })),
  };
}

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Adeloye Adetayo",
        alternateName: "Spectra010s",
        description:
          "Mechatronist building across web, Web3, and hardware, usually from a phone.",
        url: siteUrl,
        image: "https://mycampuslib.vercel.app/spectra010s.jpg",
        sameAs: [
          "https://github.com/Spectra010s",
          "https://x.com/spectra010s",
          "https://www.linkedin.com/in/adeloye-adetayo-273723253",
          "https://tiktok.com/@Spectra010s",
          "https://www.reddit.com/user/Spectra010s/",
        ],
        jobTitle: "Mechatronics Engineer",
        worksFor: [
          {
            "@type": "Organization",
            name: "Flowbonds",
            url: "https://flowbonds.com",
          },
          {
            "@type": "Organization",
            name: "My Campus Library",
            url: "https://mycampuslib.vercel.app",
          },
        ],
        knowsAbout: [
          "Software Development",
          "Web Development",
          "Web3",
          "Hardware",
          "Robotics",
          "Embedded Systems",
          "TypeScript",
          "React",
          "Next.js",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        description:
          "Portfolio site for Adeloye Adetayo, showcasing projects across web, Web3, and hardware-adjacent work.",
        publisher: {
          "@id": personId,
        },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: pageUrl,
        name: "Adeloye Adetayo | Spectra010s",
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": personId,
        },
        description:
          "Portfolio of Adeloye Adetayo featuring current work, projects, skills, and software experiments.",
      },
      buildProjectsItemList(),
    ],
  };
}
