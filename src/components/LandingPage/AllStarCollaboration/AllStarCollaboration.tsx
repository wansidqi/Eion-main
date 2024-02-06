import asc1 from '@assets/images/AllStarsCollaboration/blck.png';
import asc2 from '@assets/images/AllStarsCollaboration/echo.png';
import asc3 from '@assets/images/AllStarsCollaboration/onicph.png';
import asc4 from '@assets/images/AllStarsCollaboration/tnc.png';
import asc5 from '@assets/images/AllStarsCollaboration/rsgph.png';
import asc6 from '@assets/images/AllStarsCollaboration/hb.png';
import asc7 from '@assets/images/AllStarsCollaboration/ltx.png';
import asc8 from '@assets/images/AllStarsCollaboration/thq.png';
import asc9 from '@assets/images/AllStarsCollaboration/todak.png';
import asc10 from '@assets/images/AllStarsCollaboration/rsgmy.png';
import asc11 from '@assets/images/AllStarsCollaboration/flash.png';
import asc12 from '@assets/images/AllStarsCollaboration/hbsg.png';
import asc13 from '@assets/images/AllStarsCollaboration/stlk.png';
import asc14 from '@assets/images/AllStarsCollaboration/rsgsg.png';

import '../../../css/color.css';
import '../../../css/body.css';

export function AllStarCollaboration() {
  const images = [asc1, asc2, asc3, asc4, asc5, asc6, asc7, asc8, asc9, asc10, asc11, asc12, asc13, asc14];

  return (
    <div className="asc-bg border border-transparent 4k:my-20 4k:scale-[1.5]">
      <div className="mx-8 my-10 text-center sm:my-20 md:my-14 md:flex md:flex-col md:items-center md:justify-center md:py-0 lg:my-20">
        <div className="flex flex-col">
          <h1 className="deadjim-shadow text-center text-3xl font-bold sm:mt-0 lg:text-5xl 4k:text-[120px]">
            ALL-STARS COLLABORATION
          </h1>
          <p className="roboto-condensed text-shadow py-8 text-center text-[16px] sm:text-[20px] lg:py-12 lg:text-[26px] lg:text-base 4k:py-40 4k:text-[50px]">
            Unlock Exclusive Rewards and Fan Experiences with Our Premier Partnered Teams!
          </p>

          <div className="logo-shadow grid grid-cols-4 justify-items-end gap-4 md:grid-cols-6 lg:grid-cols-7 4k:gap-20">
            <img src={images[0]} alt="" />
            <img src={images[1]} alt="" />
            <img src={images[2]} alt="" />
            <img src={images[3]} alt="" />
            <img src={images[4]} alt="" />
            <img src={images[5]} alt="" />
            <img src={images[6]} alt="" />
            <img src={images[7]} alt="" />
            <img src={images[8]} alt="" />
            <img src={images[9]} alt="" />
            <img src={images[10]} alt="" />
            <img src={images[11]} alt="" />
            <img src={images[12]} className="col-start-2 md:col-start-3 lg:col-start-6" alt="" />
            <img src={images[13]} className="col-start-3 md:col-start-4 lg:col-start-7" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
