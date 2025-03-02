import WavingEmoji from "@/components/animation/WavingEmoji";
import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LIMIT = 2; // max show 2

export default async function Home() {
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <div className="flex flex-col items-center">
          <Image
            className="rounded-lg"
            src="/img/me/me.jpg"
            alt="Photo of Parth"
            width={175}
            height={175}
            style={{ width: "175px", height: "175px" }}
            priority
          />
          <div className="mt-2 flex w-fit items-center gap-2 rounded-full bg-green-500/20 px-2 py-1 pr-2.5">
            <span className="block size-2 animate-pulse rounded-full bg-green-500"></span>
            <span className="text-xs font-medium">Available for work</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="title text-5xl">
            Hi Parth here! <WavingEmoji emoji="👋" />
          </h1>
          <p className="mt-4 font-light">
            Front End Developer | Full Stack Developer
          </p>
          <p className="mt-2 font-light">
            {new Date().getFullYear() -
              2002 -
              Number(new Date() < new Date(new Date().getFullYear(), 8, 8))}
            -year-old software developer from Pune, MH, India 🇮🇳.
          </p>

          <p className="mt-2 font-light">
            Exploring opportunities in Frontend development With React.
          </p>
          <section className="mt-8 flex items-center gap-8">
            <Link href="/resume/Parth_Gorde_9067551734.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">
            Most used technologies.
          </h2>
        </div>
        <Skills />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">Projects.</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>
    </article>
  );
}
