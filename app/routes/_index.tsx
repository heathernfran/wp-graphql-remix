import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import Project from "~/components/Project";
import type { Project as ProjectType } from "~/components/Project";
import { getProjects } from "~/lib/wordpressService";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export async function loader() {
  return await getProjects();
}

export default function Index() {
  const projects = useLoaderData();

  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {projects.map((project: ProjectType) => (
              <Project project={project} key={project.name} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
