<<<<<<< HEAD
<<<<<<< HEAD
import { SectionTitle } from "@components/SectionTitle";
import { InfoCard } from "@components/InfoCard";
import { STORIES, TODAY_STATISTICS } from "@data";
import { Sponsors } from "@components/Sponsors";
import { TitleSubtitle } from "@components/TitleSubtitle";

const About = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <SectionTitle
        title="About Us"
        subtitle="The community for designers and engineers at Yale."
      />

      <div
        className="bg-ycs-gray p-8 md:p-12 m-8 md:m-12 mb-0 md:mb-0 text-lg md:text-2xl"
        style={{
          borderRadius: 40,
        }}
      >
        <text>
          As the place for CS at Yale, we&apos;re a team of computer science enthusiasts looking to
          revolutionize the campus and make students&apos; lives easier through the use of
          technology. As a cohort of product designers, software engineers, and computing
          ambassadors, we develop high-quality, open-source products, host speaker events with
          technologists and industry professionals, and break barriers for students to gain
          real-world software engineering experience.
        </text>
      </div>

      <TitleSubtitle
        title="Our Story"
        subtitle="The founding and growth of y/cs can be attributed to three crucial years."
        className="mb-10 mt-32"
      />

      <div className="flex flex-col md:flex-row pt-10 gap-16 md:gap-4 mx-10">
=======
import Image from "next/image";

=======
>>>>>>> b3ae02a (Make events page responsive)
import { SectionTitle } from "@components/SectionTitle";
import { InfoCard } from "@components/InfoCard";
import { STORIES, TODAY_STATISTICS } from "@data";
import { Sponsors } from "@components/Sponsors";
import { TitleSubtitle } from "@components/TitleSubtitle";

const About = () => {
  return (
    <div className="flex justify-center items-center flex-col text-white">
      <SectionTitle
        title="About Us"
        subtitle="The community for designers and engineers at Yale."
      />

      <div
        className="bg-ycs-gray p-6 md:p-12 m-6 md:m-12 text-lg md:text-2xl"
        style={{
          borderRadius: 40,
        }}
      >
        <text>
          As the place for CS at Yale, we&apos;re a team of computer science enthusiasts looking to
          revolutionize the campus and make students&apos; lives easier through the use of
          technology. As a cohort of product designers, software engineers, and computing
          ambassadors, we develop high-quality, open-source products, host speaker events with
          technologists and industry professionals, and break barriers for students to gain
          real-world software engineering experience.
        </text>
      </div>

      <TitleSubtitle
        title="Our Story"
        subtitle="The founding and growth of y/cs can be attributed to three crucial years."
        className="mb-10"
      />

<<<<<<< HEAD
<<<<<<< HEAD
      <div
        className="flex flex-row pt-10 gap-4"
        style={{ marginBottom: "5vh" }}
      >
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
      <div className="flex flex-row pt-10 gap-4" style={{ marginBottom: "5vh" }}>
>>>>>>> 449454f (Adjust section title to be fully responsive')
=======
      <div className="flex flex-col md:flex-row pt-10 gap-16 md:gap-4 mx-10">
>>>>>>> b3ae02a (Make events page responsive)
        {STORIES.map((story, i) => (
          <InfoCard data={story.data} description={story.description} key={i} />
        ))}
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      <TitleSubtitle title="Today" subtitle="By the Numbers" className="mb-10 mt-32" />

      <div className="flex flex-col md:flex-row pt-10 gap-16 md:gap-4 mx-10">
=======
      <SmallSectionTitle header={"Today"} subheader={"By the Numbers"} />

<<<<<<< HEAD
      <div
        className="flex flex-row pt-10 gap-4"
        style={{ marginBottom: "10vh" }}
      >
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
      <div className="flex flex-row pt-10 gap-4" style={{ marginBottom: "10vh" }}>
>>>>>>> 449454f (Adjust section title to be fully responsive')
=======
      <TitleSubtitle title="Today" subtitle="By the Numbers" className="mb-10" />

      <div className="flex flex-col md:flex-row pt-10 gap-16 md:gap-4 mx-10">
>>>>>>> b3ae02a (Make events page responsive)
        {TODAY_STATISTICS.map((story, i) => (
          <InfoCard data={story.data} description={story.description} key={i} />
        ))}
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <Sponsors />
      <div className="mt-20" />
<<<<<<< HEAD
=======
      <p style={{ fontSize: 20, marginTop: "5vh" }}>Our Partners & Sponsors</p>

      <div className="mt-10 grid grid-rows-2 grid-cols-5 gap-y-4 justify-items-center w-full">
        <div
          style={{ backgroundColor: "#323844", gridArea: "1 / 1 / 2 / 6" }}
          className="w-full h-28 shadow-lg shadow-black rounded-full col-span-5"
        />
        {PARTNERSHIPS.map((project, i) => (
          <Image
            className="rounded-lg"
            style={{
              height: 50,
              gridArea: `1 / ${i + 1} / 2 / ${i + 2}`,
              alignSelf: "center",
            }}
            key={i}
            src={project.image}
            alt={project.name}
          />
        ))}

        {PARTNERSHIPS.map((project, i) => (
          <div className="text-md text-gray-400" key={i}>
            {project.name}
          </div>
        ))}
      </div>
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
      

=======
>>>>>>> 638938f (Fix linting error)
      <Sponsors />
>>>>>>> d6e3433 (Fix sponsors)
=======
>>>>>>> b3ae02a (Make events page responsive)
    </div>
  );
};

export default About;
