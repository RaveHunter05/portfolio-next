import type { ReactElement } from "react";

import { FaGithub, FaRegEnvelope, FaYoutube, FaTwitter } from "react-icons/fa";

export interface FooterProps {}

function Footer(props: FooterProps): ReactElement {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex align-center justify-center mt-4">
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/RaveHunter05"
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300"
          href="https://www.youtube.com/channel/UCt4fA21OSVriW9ajJRNNieA"
        >
          <FaYoutube />
          <span className="sr-only">YouTube</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://twitter.com/Temujin369"
        >
          <FaTwitter />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
          href="https://mailto:paulsotelo97@gmail.com"
        >
          <FaRegEnvelope />
          <span className="sr-only">Email</span>
        </a>
      </div>
      <div className="flex align-center justify-center mt-4">
        <p className="text-black mb-4">
          Made with{" "}
          <span className="mr-2" role="img" aria-label="heart">
            💙{" "}
          </span>
          by
          <a
            className="text-blue-500 hover:underline"
            href="https://mailto:paulsotelo97@gmail.com"
          >
            {" "}
	  Francisco Sotelo
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
