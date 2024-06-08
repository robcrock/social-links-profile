type TLink = {
  app: string;
  link: string;
};

type TProps = {
  links: TLink[];
};
export const SocialLinks = ({ links }: TProps) => {
  return (
    <ul className="flex w-full flex-col gap-4">
      {links.map((link) => {
        return (
          <li
            key={link.app}
            className="bg-grey align-center flex h-[45px] items-center justify-center rounded-lg text-base"
          >
            {link.app}
          </li>
        );
      })}
    </ul>
  );
};
