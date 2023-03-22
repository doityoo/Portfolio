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

export const getFeaturedProjects = () => {
  const allProjects = getAllProjects();
  const featuredProjects = allProjects.filter(project => project.isFeatured);
  return featuredProjects;
} 