import type { StaticImageData } from "next/image";
import Image from "next/image";

interface image {
  name: string;
  imageLink: StaticImageData;
  designation: string;
}
const CrewImage = (props: image) => {
  return (
    <>
      <div className="my-4 mx-auto flex flex-col justify-start">
        <Image
          src={props.imageLink}
          alt={props.name}
          width="138"
          height="261"
          className="rounded-md"
        />
        <p className="text-bold my-1text-xl absolute text-sm">{props.name}</p>
        <p className="text-bold text-xs uppercase text-gray-500">
          {props.designation}
        </p>
      </div>
    </>
  );
};

export default CrewImage;
