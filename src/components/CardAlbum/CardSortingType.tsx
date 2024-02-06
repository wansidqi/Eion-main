import { useState } from 'react';
import { CardType } from './CardAlbumFillter';
interface CardSortingProps {
  setFilterType: (order: CardType) => void;
}

export function CardSortingType({ setFilterType }: CardSortingProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectDropdown, setSelectDropdown] = useState('All Type');

  const sortItem = ['All Type', 'leader', 'player', 'skill', 'support'];

  const handleDropdown = (i: CardType) => {
    setSelectDropdown(i);
    setShowDropdown(false);
    setFilterType(i);
  };

  return (
    <div>
      <div className="flexcenter roboto-condensed w-24">
        <div className="sansation roboto relative w-full flex-row justify-between rounded-md border border-white bg-black">
          <button onClick={() => setShowDropdown(!showDropdown)} className="flex h-[44px] items-center rounded-md">
            <div className="roboto-condensed m-3 text-sm capitalize">{selectDropdown}</div>
            <div className="px-3">
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-1/2 -translate-y-1/2 transform"
              >
                <path
                  d="M8.00001 10L0.928345 2.93L3.28668 0.573334L8.00001 5.28667L12.7133 0.573334L15.0717 2.93L8.00001 10.0017V10Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>

          <div>
            {showDropdown && (
              <button className="roboto absolute z-10  mt-2 flex w-full flex-col rounded-md bg-gradient-to-br from-[#0D0D0E] to-[#0A1B41] py-2 text-[14px]">
                {sortItem.map((item: any, i: number) => (
                  <button
                    onClick={() => handleDropdown(item)}
                    className={`my-1 px-4 py-2 text-left capitalize ${
                      item === selectDropdown
                        ? 'w-full border border-[#00519B] bg-gradient-to-r from-[#00519B]/70 to-[#5097D9]/0'
                        : ''
                    }`}
                    key={i}
                  >
                    {item}
                  </button>
                ))}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
