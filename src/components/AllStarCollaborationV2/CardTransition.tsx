import { useEffect, useRef, useState } from 'react';

import inactiveDots from '@assets/images/LandingPage/inactive-dots.png';
import activeDots from '@assets/images/LandingPage/active-dots.png';
import { useBoundStore } from '../../store';

export function CardTransition() {
  const { playerCard } = useBoundStore();
  const { selectedTeam } = playerCard;

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectSliderIndex = (i: number) => {
    setCurrentIndex(i);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex == selectedTeam.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex == 0;
    const newIndex = isFirstSlide ? selectedTeam.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    const timerId = setTimeout(() => {
      goToNext();
    }, 3000);
    timerRef.current = timerId;

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  });

  return (
    <div className="flex flex-row">
      <div className="relative h-auto">
        <div className="relative h-[320px] w-52 items-center xl:h-[450px] xl:w-64">
          <button onClick={goToNext} className="lg:hidden arrow-box absolute -right-14 bottom-1/2 rounded-md p-3">
            <Arrow />
          </button>
          <button onClick={goToPrev} className="lg:hidden arrow-box absolute -left-14 bottom-1/2 rotate-180 rounded-md p-3">
            <Arrow />
          </button>
          <img key={currentIndex} src={selectedTeam?.[currentIndex]} className="flexcenter relative xl:scale-[1.3]" />

          <div className="w-fixed absolute bottom-0 flex w-52 flex-row justify-center xl:w-64">
            {selectedTeam.map((slideIndex, i) => (
              <>
                <img
                  width={'20px'}
                  key={slideIndex}
                  src={i === currentIndex ? activeDots : inactiveDots}
                  onClick={() => selectSliderIndex(i)}
                  className="flexcenter relative"
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 9L0 9L0 7L8 7L8 0L16 8L8 16L8 9Z" fill="white" />
  </svg>
);
