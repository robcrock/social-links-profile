import { ComponentProps } from "react";
import { Avatar } from "./avatar";
import { NameAndLocation } from "./name-and-location";
import { Quote } from "./quote";
import { SocialLinks } from "./social-links";

type TProps = {
  image: ComponentProps<typeof Avatar>["src"];
  name: ComponentProps<typeof NameAndLocation>["name"];
  location: ComponentProps<typeof NameAndLocation>["location"];
  quote: ComponentProps<typeof Quote>["quote"];
  links: ComponentProps<typeof SocialLinks>["links"];
};

export const SocialLinksCard = ({
  image,
  name,
  location,
  quote,
  links,
}: TProps) => {
  return (
    <section className="flex-col items-center justify-between p-24">
      <div className="bg-offBlack h-content flex w-[384px] flex-col items-center gap-6 rounded-xl p-10 text-white">
        <Avatar src={image} alt={`${name}'s profile image}`} />
        <NameAndLocation name={name} location={location} />
        <Quote quote={quote} />
        <SocialLinks links={links} />
      </div>
    </section>
  );
};
