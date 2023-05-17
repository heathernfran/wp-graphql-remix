import { NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { getProjects } from "~/lib/wordpressService";

export interface Project {
  assignee: string;
  description: string;
  dueDate: Date;
  name: string;
  slug: string;
}

export async function loader() {
  const projects = await getProjects();
  return projects;
}

export default function ProjectsPage({ project }: any) {
  const projects = useLoaderData();

  return (
    <div>
      {projects.map((project: Project) => (
        <NavLink to={project.slug} key={project.name}>
          <h2>Project: {project.name}</h2>
          <p>Assigned to: {project.assignee}</p>
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
}
