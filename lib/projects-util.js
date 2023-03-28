import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectDirectory = path.join(process.cwd(), 'projects')

export const getProjectFiles = () => {
  return fs.readdirSync(projectDirectory)
}

export const getProjectData = (projectIdentifier) => {
  const projectSlug = projectIdentifier.replace(/\.md$/, '');
  const filePath = path.join(projectDirectory, `${projectSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent);
  const projectData = {
    slug: projectSlug,
    ...data,
    content
  }
  return projectData;
}

export const getAllProjects = () => {
  const projectFiles = getProjectFiles();
  const allProjects = projectFiles.map(projectFile => {
    return getProjectData(projectFile)
  })
  const sortProjects = allProjects.sort((prjA, prjB) => prjA.date > prjB.date ? -1 : 1)
  return sortProjects;
}

export const getFeaturedProjects = async () => {
  const allProjects = await getAllProjectsNotion();
  const featuredProjects = allProjects.results.slice(undefined, 2)
  
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

  return data;
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