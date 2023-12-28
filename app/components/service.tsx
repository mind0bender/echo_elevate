import Image, { ImageProps } from "next/image";

export interface ServiceProps {
  title: string;
  description: string;
  image: ImageProps;
}

export function Service({
  title,
  description,
  image,
}: ServiceProps): JSX.Element {
  return (
    <li
      className={`px-4 py-3 hover:-translate-y-2 cursor-pointer hover:shadow-md flex flex-col justify-center items-center rounded-md border bg-white max-w-sm duration-150`}
    >
      <Image draggable={false} {...image} className={`px-2 py-4`} />
      <div className={`flex flex-col justify-center gap-2`}>
        <h5 className={`text-lg sm:text-xl`}>{title}</h5>
        <p>{description}</p>
      </div>
    </li>
  );
}
