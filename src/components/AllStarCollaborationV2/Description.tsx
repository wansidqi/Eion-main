import { useNavigate } from 'react-router-dom';

import learntoplay from '@assets/images/CardRarity/learn-to-play.png';
import cardAlbum from '@assets/images/CardRarity/card-album.png';

export function Description() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex justify-start py-4">
        <p className="roboto-condensed  my-4 text-justify text-[12px] xl:text-[23px]">
          Choose your star players as they accumulate points that reflect their prowess in the game. Earn points based
          on their Kills, Assists, and Deaths, and the longer the game goes, the more opportunities for points!
        </p>
      </div>
      <div className="my-5 flex justify-start">
        <button onClick={() => navigate('/how-to-play')} className="w-auto xl:w-44">
          <img src={learntoplay} />
        </button>
        <button onClick={() => navigate('/card-album')} className="w-auto xl:w-44">
          <img src={cardAlbum} />
        </button>
      </div>
    </div>
  );
}
