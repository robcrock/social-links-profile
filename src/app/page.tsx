import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black p-24">
      <div className="bg-offBlack h-[611px] w-[384px]">
        <p>
          Jessica Randall London, United Kingdom Front-end developer and avid
          reader. GitHub Frontend Mentor LinkedIn Twitter Instagram
        </p>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </main>
  );
}
