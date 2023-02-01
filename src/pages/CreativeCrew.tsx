import React from "react";

import CrewImage from "../../components/CrewImage";

import photo1 from "/public/CrewMember/photo1.png";
import photo2 from "/public/CrewMember/photo2.png";
import photo3 from "/public/CrewMember/photo3.png";
import photo4 from "/public/CrewMember/photo4.png";
import photo5 from "/public/CrewMember/photo5.png";
import photo6 from "/public/CrewMember/photo6.png";

const CreativeCrew = () => {
  return (
    <>
      <div className="flex h-full flex-col p-2">
        <div className="flex flex-col p-2">
          <nav className="mt-2 cursor-pointer text-2xl font-bold tracking-wide">
            The Creative Crew
          </nav>
          <div className="flex flex-col align-top">
            <p className="my-4 text-xl font-bold">WHO WE ARE</p>
            <p className="my-2 max-w-xs text-lg font-medium tracking-wide">
              We are team of creatively diverse. driven. innovative individuals
              working in various locations from the world
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col justify-start ">
            <CrewImage
              imageLink={photo1}
              name="Bill Mahoney"
              designation="Product owner"
            />
            <CrewImage
              imageLink={photo2}
              name="Saba Cabrera"
              designation="Art Director"
            />
            <CrewImage
              imageLink={photo3}
              name="Shae Le"
              designation="Tech Lead"
            />
          </div>
          <div className="mt-20 flex flex-col justify-start">
            <CrewImage
              imageLink={photo4}
              name="Skylah Lu"
              designation="UX Designer"
            />
            <CrewImage
              imageLink={photo5}
              name="Griff Richards"
              designation="Developer"
            />
            <CrewImage
              imageLink={photo6}
              name="Stan John"
              designation="Developer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeCrew;
