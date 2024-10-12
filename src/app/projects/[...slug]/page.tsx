import { PortableText } from "@/components";
import { client } from "@root/sanity/lib/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string[];
  };
}

async function fetchPost(slug: string) {
  const query = `*[_type == "projectPage" && slug.current == '${slug}'][0]`;
  const post = await client.fetch(query);
  console.log(post.portableText.value);
  return post;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await fetchPost(params.slug[0]);

  if (!post) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: post.title || "Project",
    description: post.description || "Page about a project by Julio",
  };
}

export default async function Page({ params }: PageProps) {
  const post = await fetchPost(params.slug[0]);

  if (!post) {
    notFound(); // Handles cases where the slug isn't found
  }

  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-track-[#023047]/40 scrollbar-thumb-white">
      <main>
        <div className="pt-28">
          <PortableText value={post.portableText.value} />
        </div>
      </main>
    </div>
  );
}
