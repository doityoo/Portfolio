import fs from 'fs';
import path from 'path';

const projectDirectory = path.join(process.cwd(), 'projects')

export const getProjectFiles = () => {
  return fs.readdirSync(projectDirectory)
}

export const getResumeData = (projectIdentifier) => {
  const projectSlug = projectIdentifier.replace(/\.md$/, '');
  return projectSlug;
}

export const getAllResume = async () => {
  const projectFiles = getProjectFiles();
  const allProjects = projectFiles.map(projectFile => {
    return getResumeData(projectFile)
  })
  const sortResume = allProjects.sort((prjA, prjB) => prjA.date > prjB.date ? -1 : 1)
  return sortResume;
}

export const getFeaturedProjects = async () => {
  const allProjects = await getAllProjectsNotion();
  const featuredProjects = allProjects.slice(undefined, 2)

  return featuredProjects;
}

export const getAllProjectsNotion = async () => {
  const response = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: process.env.NOTION_TOKEN
    },
    body: JSON.stringify({ page_size: 100 })
  }
  );
  const data = await response.json();
  const projects = data.results;

  return projects;
}

export const getResume = async () => {
  const response = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: process.env.NOTION_RESUME_TOKEN
    },
    body: JSON.stringify({ page_size: 100 })
  }
  );
  const data = await response.json();

  return data;
}