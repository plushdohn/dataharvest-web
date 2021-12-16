import GenericSectionTitle from "@/src/components/shared/atoms/GenericSectionTitle";
import GenericParagraph from "@/src/components/shared/atoms/GuideParagraph";
import Head from "next/head";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Contact - DataHarvest</title>
      </Head>
      <div className="w-full  p-4 lg:p-8 overflow-y-auto">
        <div className="flex flex-col w-full lg:w-1/2 2xl:w-1/3">
          <GenericSectionTitle>Reach out to me</GenericSectionTitle>
          <GenericParagraph>
            You can reach me on personal Discord for feature requests, bug
            reports or just to say hi:{" "}
            <span className="font-semibold">DoHn#3669</span>
            <br />
            <br />
            For any inquiry, advertising or support please contact me directly
            at{" "}
            <a
              href="mailto:dohn@dataharvest.lol"
              className="font-semibold hover:underline focus:underline"
            >
              dohn@dataharvest.lol
            </a>
            .
          </GenericParagraph>
        </div>
      </div>
    </>
  );
}
