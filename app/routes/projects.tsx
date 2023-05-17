import { Link } from "@remix-run/react";

export type Project = {
  assignee: string;
  description: string;
  dueDate: Date;
  name: string;
  slug: string;
};

export default function Project({ project }: any) {
  return (
    <Link to={`/projects/${project.slug}`}>
      <h2>{project.name}</h2>
      <p>{project.assignee}</p>
    </Link>
  );
}
