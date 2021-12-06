import ExampleBlockText from "@/src/components/guide/atoms/ExampleBlockParagraph";
import GuideParagraph from "@/src/components/shared/atoms/GuideParagraph";
import GuideSectionSubtitle from "@/src/components/shared/atoms/GuideSectionSubtitle";
import GuideSectionTitle from "@/src/components/shared/atoms/GenericSectionTitle";
import ExampleBlock from "@/src/components/guide/molecules/ExampleBlock";
import { FilterDummy } from "@/src/components/shared/blocks/filters/GenericFilter";
import { GroupDummy } from "@/src/components/shared/blocks/groups/GenericGroup";
import { OperationDummy } from "@/src/components/shared/blocks/operations/GenericOperation";
import { SortDummy } from "@/src/components/shared/blocks/sorts/GenericSort";
import { StarterDummy } from "@/src/components/shared/blocks/starters/GenericStarter";
import { SubjectDummy } from "@/src/components/shared/blocks/subjects/GenericSubject";
import Head from "next/head";
import {
  FilterId,
  GroupId,
  OperationId,
  StarterId,
  SubjectId,
} from "shared/types";

export default function GuidePage() {
  return (
    <>
      <Head>
        <title>Querying Guide - DataHarvest</title>
      </Head>
      <div className="w-full p-4 lg:p-8 overflow-y-auto">
        <div className=" flex flex-col max-w-3xl ">
          <GuideSectionTitle>
            TL;DR (if you already figured out how queries work)
          </GuideSectionTitle>
          <GuideParagraph>
            Clicking blocks on the left panel will add them to the current
            query; clicking blocks on the current query will remove them.
            Results are automatically limited to 10 by design (it will become an
            option in the future). You can run a query once every 10 seconds.
          </GuideParagraph>
          <div className="mt-8 flex flex-col">
            <GuideSectionTitle>Building queries</GuideSectionTitle>
            <GuideParagraph>
              You can create queries by clicking on blocks from the left side
              panel.{" "}
              <strong>
                A query must have at least a Starter block and an Operation
                block to be valid.
              </strong>{" "}
              <br /> <br />
              Queries are meant to be in this order:
              <br />
              <strong>
                Starter {"->"} Filter(s) {"->"} Subject {"->"} Group {"->"}{" "}
                Operation(s) {"->"} Sort
              </strong>
              <br />
              <br />
              You can remove blocks from your current query by clicking on them.
            </GuideParagraph>
            <div className="mt-6">
              <GuideSectionSubtitle>Starters</GuideSectionSubtitle>
              <GuideParagraph>
                Starter blocks{" "}
                <strong>
                  describe the initial set of games you will analyze with your
                  query.
                </strong>{" "}
                They are essentially a bunch of preset filters (see the filters
                section next) put together for convenience in common queries.
              </GuideParagraph>
            </div>
            <div className="mt-6">
              <GuideSectionSubtitle>Filters</GuideSectionSubtitle>
              <GuideParagraph>
                Filters are used to{" "}
                <strong>narrow down the set of games you will analyze </strong>{" "}
                using some criteria. <br /> <br />
                One of the most common examples is wanting to only get data
                about your own ranked games. Another common case is making sure
                we&apos;re only taking into account Solo Queue games from a
                particular region (Korea for example). Our query would contain
                this set of filters:
              </GuideParagraph>
              <ExampleBlock>
                <ExampleBlockText>
                  <i>Some starter...</i>
                </ExampleBlockText>
                <FilterDummy id={FilterId.Region} initialState="KR" />
                <FilterDummy id={FilterId.Queue} initialState={420} />
                <ExampleBlockText>
                  <br />
                  <i>Rest of query...</i>
                </ExampleBlockText>
              </ExampleBlock>
              <GuideParagraph>
                Keep in mind that filters do just that. A common mistake is to
                assume the query understands your subject (see subject section
                next) when you&apos;ve only given it filters, here&apos;s an
                example:
              </GuideParagraph>
              <ExampleBlock>
                <ExampleBlockText>
                  The following query may look like it&apos;s using all games
                  from the summoner &quot;Babus&quot; and then calculating their
                  average damage to structures.
                </ExampleBlockText>
                <StarterDummy id={StarterId.All} initialState={null} />
                <FilterDummy id={FilterId.Summoner} initialState="Babus" />
                <OperationDummy
                  id={OperationId.AverageDamageDealtToStructures}
                />
                <ExampleBlockText className="mt-4">
                  Instead it&apos;s actually just telling the database to use
                  games where the summoner &quot;Babus&quot; has played in.{" "}
                  <strong>
                    The database still doesn&apos;t know that they will be the
                    focus of the operations.
                  </strong>{" "}
                  This is intentional and allows for a lot more freedom in other
                  scenarios. <br />
                  <br /> The correct query would add the appropriate subject
                  block, like this:
                </ExampleBlockText>
                <StarterDummy id={StarterId.All} initialState={null} />
                <FilterDummy id={FilterId.Summoner} initialState="Babus" />
                <SubjectDummy id={SubjectId.Summoner} initialState="Babus" />
                <OperationDummy
                  id={OperationId.AverageDamageDealtToStructures}
                />
              </ExampleBlock>
              <GuideParagraph>
                <span className="text-sm">
                  <i>
                    You may have already picked up on the fact that certain
                    subject blocks render some filters redundant. This is better
                    explained in the next section.
                  </i>
                </span>
              </GuideParagraph>
            </div>
            <div className="mt-6">
              <GuideSectionSubtitle>Subject</GuideSectionSubtitle>
              <GuideParagraph>
                The Subject block is used to{" "}
                <strong>specify the target of your operations</strong>. In the
                simplest scenario the target is a particular player in a game,
                and you perform operations using their end-game data.
                <br />
                <br />
                However a subject may also have a broader scope, such as anyone
                who&apos;s playing in a particular role, or anyone who owns a
                specific mythic item.
              </GuideParagraph>
              <ExampleBlock>
                <ExampleBlockText>
                  In the following example we want to know the average damage AD
                  carries deal to champions during this patch, and we are only
                  interested in ranked games.
                </ExampleBlockText>
                <StarterDummy id={StarterId.All} initialState={null} />
                <FilterDummy id={FilterId.Queue} initialState={420} />
                <SubjectDummy id={SubjectId.Role} initialState="BOTTOM" />
                <OperationDummy
                  id={OperationId.AverageDamageDealtToChampions}
                />
              </ExampleBlock>
              <GuideParagraph>
                As mentioned above, there are some cases in which a Subject
                block overlaps its scope with a Filter block: In a query where
                we use a summoner name as our subject, we are also indirectly
                telling the query that we only care about games with that
                summoner. <br />
                <br />
                In this case the best thing to do is to still use the
                appropriate filter (Summoner, in this case) for two reasons:
                firstly it&apos;s logically correct to reduce the sample size to
                just the games with a particular summoner, making the
                query&apos;s meaning more apparent to anyone who reads it;
                secondly dataharvest&apos;s current implementation isn&apos;t
                smart enough to handle these cases, so not adding that filter
                has a much bigger toll on our database. <br />
                <br /> In the future our database will understand these
                scenarios and regardlessly add a filter on our end.
              </GuideParagraph>
            </div>
            <div className="mt-6">
              <GuideSectionSubtitle>Grouping</GuideSectionSubtitle>
              <GuideParagraph>
                Group blocks allow you to separate batches of games based on
                differences in a particular value, and then apply all operations
                on them separately. <br />
                <br />
                This allows you to answer any question that might contain the
                word &quot;which&quot;, such as &quot;Which champion has the
                highest average vision score?&quot; or &quot;Which summoner in
                EUW has the most damage to structures?&quot;.
              </GuideParagraph>
              <ExampleBlock>
                <ExampleBlockText>
                  Here&apos;s a query to tell which keystone on Jhin leads to
                  the highest average damage to champions:
                </ExampleBlockText>
                <StarterDummy id={StarterId.All} initialState={null} />
                <FilterDummy id={FilterId.Champion} initialState="Jhin" />
                <SubjectDummy id={SubjectId.Champion} initialState="Jhin" />
                <GroupDummy id={GroupId.Keystone} initialState={null} />
                <OperationDummy
                  id={OperationId.AverageDamageDealtToChampions}
                />
                <SortDummy
                  id={OperationId.AverageDamageDealtToChampions}
                  initialState={false}
                />
              </ExampleBlock>
              <GuideParagraph>
                In general we aim to have as many grouping blocks as we find
                necessary (they get added over time based on our needs and user
                feedback), but when there isn&apos;t the grouping you need
                it&apos;s possible to run multiple queries and write down the
                different results.
              </GuideParagraph>
            </div>
            <div className="mt-6">
              <GuideSectionSubtitle>Operations</GuideSectionSubtitle>
              <GuideParagraph>
                Operation blocks are usually self-explanatory in their
                description sentence. They refer to a single (or calculated,
                like win rate or K/D) piece of data you might want to read from
                the current chunk of games you have up to that point in your
                query. <br /> <br /> There should be an operation block for most
                of the values you see in the graphs and the end of a game, and
                we are constantly working on adding more useful blocks that are
                calculated server-side (again, like win rate).
              </GuideParagraph>
            </div>
            <div className="mt-6">
              <GuideSectionSubtitle>Sorts</GuideSectionSubtitle>
              <GuideParagraph>
                Sort blocks are even more self-explanatory than operation
                blocks: they sort groups of data by a particular value. <br />{" "}
                <br />
                You can sort in descending or ascending order; descending is the
                default because (from our experience) understanding the highest
                values of something is usually the reason people use this tool
                in the first place.
              </GuideParagraph>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <GuideSectionTitle>Limitations</GuideSectionTitle>
            <GuideParagraph>
              Currently, queries can only output a maximum of 10 groups per
              query. This is imposed on our end to manage traffic and allow
              queries that emcompass the whole database for everyone. If there
              is demand we might give API keys in the future for use-cases that
              need more freedom. <br /> <br />
              There is also a 10 second IP-based timer to queries to prevent
              abuse and a minute-long timer when you add games.
            </GuideParagraph>
          </div>
        </div>
      </div>
    </>
  );
}
