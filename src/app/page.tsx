import avatar from "../../public/assets/images/avatar-jessica.jpeg";
import { SocialLinksCard } from "./components/social-links-card";
import { Attribution } from "./components/attribution";

const links = [
  { app: "GitHub", link: "https://github.com/" },
  { app: "Frontend Mentor", link: "https://www.frontendmentor.io/" },
  { app: "LinkedIn", link: "https://www.linkedin.com/" },
  { app: "Twitter", link: "https://x.com/" },
  { app: "Instagram", link: "https://www.instagram.com/" },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black p-4">
      <SocialLinksCard
        image={avatar}
        name={"Jessica Randall"}
        location={"London, United Kingdom"}
        quote={"Front-end developer and avid reader."}
        links={links}
      />
      <Attribution
        name={"Robert Crocker"}
        link={"https://www.frontendmentor.io/profile/robcrock"}
      />
    </main>
  );
}
