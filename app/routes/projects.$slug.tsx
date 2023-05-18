import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProjectsBySlug } from "~/lib/wordpressService";

export async function loader({ params }: LoaderArgs) {
  const projectBySlug = await getProjectsBySlug(params.slug);
  return json({ projectBySlug });
}

export async function ProjectDetailsPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>{data.projectBySlug.name}</h1>
      <div>{data.projectBySlug.description}</div>
      <p>{data.projectBySlug.dueDate}</p>
    </div>
  );
}
