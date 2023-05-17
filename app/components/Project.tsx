import { Link } from "@remix-run/react";

export type Project = {
  name: string;
  assignee: string;
  dueDate: Date;
  description: string;
};

export default function Project({ project }: any) {
  return (
    <Link to={`/projects/${project.slug}`}>
      <h2>{project.name}</h2>
      <p>{project.assignee}</p>
    </Link>
  );
}
