import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
          <li key={link.app}>
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "bg-grey w-full",
              )}
              href={link.link}
            >
              {link.app}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
