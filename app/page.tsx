import AboutSection from '@/components/section/about/AboutSection';
import ExperienceSection from '@/components/section/experience/ExperienceSection';
import Hero from '@/components/section/hero/Hero';
import ProjectSection from '@/components/section/project/ProjectSection';
import SkillSection from '@/components/section/skill/SkillSection';
import {
  experienceService,
  pageService,
  projectService,
  skillService,
} from '@/lib/service/cms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chinwendu Onyedikachi - Portfolio',
  // description: '',
  robots: {
    googleBot: 'noindex;nofollow',
  },
  authors: [
    {
      name: 'Philip Nwokedi',
      url: 'https://x.com/philip_nwookedi',
    },
  ],
  keywords: ['Chinwendu Onyedikachi', ''],
  creator: 'Philip Nwokedi',
};

export const revalidate = 5;

async function getSkillsData() {
  return await skillService.fetchAll().catch((e) => {
    return [];
  });
}

async function getHomePageData() {
  return await pageService.fetchHomePage();
}

async function getProjectsData() {
  return await projectService.fetchAll().catch((e) => {
    return [];
  });
}

async function getExperiencesData() {
  return await experienceService.fetchAll().catch((e) => {
    return [];
  });
}

export default async function HomePage() {
  const homePageData = getHomePageData();
  const skillsData = getSkillsData();
  const experiencesData = getExperiencesData();
  const projectsData = getProjectsData();
  const [homePage, skills, experiences, projects] = await Promise.all([
    homePageData,
    skillsData,
    experiencesData,
    projectsData,
  ]);

  return (
    <>
      <Hero data={homePage.hero} />
      <AboutSection data={homePage.about} />
      <SkillSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      <ProjectSection projects={projects} />
    </>
  );
}
