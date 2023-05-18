import { NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { getProjects } from "~/lib/wordpressService";

export interface Project {
  description: string;
  dueDate: Date;
  name: string;
  slug: string;
}

export async function loader() {
  const projects = await getProjects();
  return projects;
}

export default function ProjectsPage() {
  const projects = useLoaderData();

  return (
    <div>
      {projects.map((project: Project) => (
        <NavLink to={project.slug} key={project.name}>
          <h2>Project: {project.name}</h2>
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
}
