import { PortableText } from "@/components";
import { client } from "@root/sanity/lib/client";
import { projectPage } from "@root/sanity/queries";
import { PageDoc } from "@root/typings";

const pages: PageDoc[] = await client.fetch(projectPage);
const pageRoutes = pages.map(({ slug }) => slug.current);

export default function Page() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-track-[#023047]/40 scrollbar-thumb-white">
      <main>
        <PortableText value={} />
      </main>
    </div>
  );
}
