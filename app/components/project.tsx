import Image, { ImageProps } from "next/image";

export interface ProjectProps {
  title: string;
  description: string;
  image: ImageProps;
}

export default function Project({
  title,
  description,
  image,
}: ProjectProps): JSX.Element {
  return (
    <li className={`px-4 py-3 hover:shadow-md rounded-md border bg-white`}>
      <div className={`flex flex-col justify-center gap-2`}>
        <Image {...image} className={`rounded-md`} />
        <h4 className={`text-xl sm:text-2xl`}>{title}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
}
