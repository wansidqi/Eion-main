import { CardTransition, TeamsCard } from '..';

export function AllStarCollaborationV2() {
  return (
    <div className="asc-bg border border-transparent 4k:my-20 4k:scale-[1.5]">
      <h1 className="deadjim-shadow pb-10 pt-20 text-center text-3xl font-bold sm:mt-0 lg:text-5xl 4k:text-[120px]">
        ALL-STARS COLLABORATION
      </h1>

      <div className="grid lg:grid-cols-2 px-10 xl:px-20">
        <div className="flexcenter">
          <CardTransition />
        </div>
        <div className="xl:-ml-20">
          <TeamsCard />
        </div>
      </div>
    </div>
  );
}
