import { CardAlbumFooter, Footer } from '../components';
import { CardAlbumFilter } from '../components/CardAlbum/CardAlbumFillter';
import cardAlbum from '@assets/images/CardAlbum/bg-cardalbum.png';
import { Navbar } from '../components';

export function CardAlbum() {
  return (
    <>
      <section className="max-h-auto height relative h-auto min-h-screen w-full overflow-auto">
        <Navbar />
        <div>
          <div className="m4 relative flex flex-row justify-center">
            <img src={cardAlbum} alt="" className='w-full' />
            <div className="absolute flex h-full flex-col items-center justify-center">
              <div className="deadjim-shadow tracking-wider mb-3 text-center lg:text-[64px]">
                CARD ALBUM
              </div>
              <div className="roboto-condensed w-[80%] lg:w-[60%] font-extralight text-xs lg:text-xl text-center">
                Explore the Vast Collection of Unique Cards, Fuel Your Collecting Passion, and Boost Your Chances of
                Earning Greater Rewards!
              </div>
            </div>
          </div>
          <CardAlbumFilter />
          <CardAlbumFooter />
        </div>
        <Footer />
      </section>
    </>
  );
}
