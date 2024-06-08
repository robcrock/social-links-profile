import avatar from "../../public/assets/images/avatar-jessica.jpeg";
import { Avatar } from "./components/avatar";
import { NameAndLocation } from "./components/name-and-location";
import { Quote } from "./components/quote";
import { SocialLinks } from "./components/social-links";

const links = [
  { app: "GitHub", link: "https://github.com/" },
  { app: "Frontend Mentor", link: "https://www.frontendmentor.io/" },
  { app: "LinkedIn", link: "https://www.linkedin.com/" },
  { app: "Twitter", link: "https://x.com/" },
  { app: "Instagram", link: "https://www.instagram.com/" },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black p-24">
      <div className="bg-offBlack flex h-[611px] w-[384px] flex-col items-center gap-6 p-10 text-white">
        {/* placeholder for the image */}
        <Avatar src={avatar} alt="Jessica Randall's profile image" />
        <NameAndLocation
          name="Jessica Randall"
          location="London, United Kingdom"
        />
        <Quote quote="Front-end developer and avid reader." />
        <SocialLinks links={links} />
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </main>
  );
}
