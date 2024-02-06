import my from '@assets/images/Reward Page/my.png';
import ph from '@assets/images/Reward Page/ph.png';
import sg from '@assets/images/Reward Page/sg.png';
import other from '@assets/images/Reward Page/other.png';
import lbMobile from '@assets/images/Reward Page/lbMobile.png';
import lbImg from '@assets/images/Reward Page/lbImg.png';

const style: React.CSSProperties = {
  background: 'linear-gradient(180deg, #0185ff 0%, #6bb8ff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

export function Weekly() {
  return (
    <div className="mx-4 grid grid-cols-1 gap-5 py-10 xl:mx-24 xl:grid-cols-2 xl:grid-rows-4 xl:gap-0 xl:py-20">
      <Title />
      <Image />
      <Description />
      <TotalPrice />
      <Country />
    </div>
  );
}

function Title() {
  return (
    <div className="flexcenter my-5 xl:col-start-2 xl:row-start-1 xl:mr-20">
      <b style={style} className="roboto-bold text-[24px] md:text-[40px]">
        WEEKLY LEADERBOARD
      </b>
    </div>
  );
}

function Image() {
  return (
    <div className="flexcenter pb-8 xl:col-start-1 xl:row-span-4 xl:row-start-1 xl:py-10 xl:mr-20">
      <img className="block xl:hidden md:scale-[1.3] md:py-4" src={lbMobile} alt="" />
      <img className="hidden  xl:block " src={lbImg} alt="" />
    </div>
  );
}

function Description() {
  return (
    <div className="flexcenter xl:col-start-2 xl:row-start-2 xl:-mt-0 2xl:-mt-10 xl:mr-20">
      <p className="roboto-condensed mx-5 text-center text-[16px] sm:mx-40 xl:mx-0 md:text-[20px] xl:text-[20px]">
        Embark on an exhilarating journey to conquer the seasonal leaderboard, rise to the pinnacle of the ranks, and
        bask in the unrivalled glory that awaits! Every victory brings not only a surge of excitement but also the
        chance to claim epic weekly and seasonal rewards, making each step in this esports adventure more enticing!
      </p>
    </div>
  );
}

function TotalPrice() {
  const style: React.CSSProperties = {
    alignItems: 'flex-end',
    textAlign: 'center',
    color: '#FFFFFF',
    textShadow: '0px 0px 11px #0185FF',
  };

  return (
    <div className="flexcenter xl:col-start-2 xl:row-start-3 xl:-mt-10 2xl:-mt-24 xl:mr-20">
      <b style={style} className="roboto-bold text-[20px] xl:text-[30px] 2xl:text-[40px]">
        US$ 250 Per Region Each Week
      </b>
    </div>
  );
}

function Country() {
  const countries = [my, sg, ph, other];

  return (
    <div className="flexcenter xl:col-start-2 xl:row-start-4 xl:-mt-48 xl:mr-20">
      <div>
        <p style={style} className="roboto-bold text-center text-[20px] xl:text-[32px]">
          Now Available For
        </p>
        <div className="flexcenter my-10 mt-5 gap-6 xl:gap-14">
          {countries.map(country => (
            <div className="relative">
              <img className="xl:scale-[1.3]" src={country} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
