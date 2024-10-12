import Image from "next/image";

interface ProjectPageProps {
  image: {
    url: string;
    title: string;
  };
}

export default function ProjectPage({ image }: ProjectPageProps) {
  return (
    <div>
      <Image src={image.url} alt={image.title} fill />
    </div>
  );
}
