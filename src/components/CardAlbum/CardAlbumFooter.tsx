import card from '@assets/images/CardAlbum/bottom.png';
import joinNow from '@assets/images/Details/join-now-btn.png';

// import cardfooter from '@assets/images/CardAlbum/cardfooter.png'

export function CardAlbumFooter() {
  return (
    <>
      <div className='card-bg smoky-shadow'>
        <div className="flex flex-row items-center justify-center mx-auto lg:py-4">
          <div>
            <img src={card} className="hidden w-full lg:block " />
          </div>

          <div className="w-3/5 text-center lg:w-[37%] lg:my-0 my-6 lg:ml-8">
            <div className="flex h-full flex-col items-center lg:items-start ">
              <div className="lg:text-lg text-xs font-extralight text-center lg:text-left roboto-condensed">
                Explore the Vast Collection of Unique Cards, Fuel Your Collecting Passion, and Boost Your Chances of Earning Greater Rewards!
              </div>
              <a href="https://play.eion.gg/register" className='mt-4'>
                <img src={joinNow} className='w-40'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
