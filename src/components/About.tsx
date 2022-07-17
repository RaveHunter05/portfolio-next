import type { ReactElement } from "react";

import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

export interface AboutProps {}

const About = (props: AboutProps): ReactElement => {
  return (
    <div>
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center">
          Hello 👋
        </p>
        <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
          I’m a full stack web developer who can build apps from the ground up.
          I’ve worked mostly at startups so I am use to wearing many hats. I am
          a very product focussed developer who priotizes user feedback first
          and foremost. I’m generally very flexible when investigating new
          roles.
        </p>
      </div>

      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
};

export default About;
