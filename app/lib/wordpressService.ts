import { gql } from "@apollo/client";

import { client } from "~/lib/apollo";

export async function getProjects() {
  const ProjectsQuery = gql`
    query ProjectsQuery {
      projects {
        nodes {
          assignee
          description
          dueDate
          name
          slug
        }
      }
    }
  `;

  const response = await client.query({
    query: ProjectsQuery,
  });

  const projects = response.data.projects.nodes;

  return projects;
}
