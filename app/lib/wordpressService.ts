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

export async function getProjectsBySlug(slugParam: any) {
  const ProjectBySlugQuery = gql`
    query ProjectBySlug($id: ID!) {
      project(id: $id, idType: SLUG) {
        assignee
        description
        dueDate
        name
        slug
      }
    }
  `;

  const response = await client.query({
    query: ProjectBySlugQuery,
    variables: {
      id: slugParam,
    },
  });

  const project = response.data.project;
  return project;
}
