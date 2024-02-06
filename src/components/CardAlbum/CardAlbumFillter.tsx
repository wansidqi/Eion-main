import { useState } from 'react';
import { CardSorting } from './CardSorting';
// import freeze from '@assets/images/HowtoPlay/freeze.png';
import FilterDetails from './FilterDetails';
// import { CardSortingType } from './CardSortingType';
import player from './playerData';
import leader from './leaderData';
import support from './supportData';
import skill from './skillData';

export type CardType = 'leader' | 'player' | 'skill' | 'support' | 'All Type';
export interface CardData {
  id: string;
  name: string;
  type: string;
  rarity: string;
  image: string;
  team: string;
  country?: string;
}

export function CardAlbumFilter() {
  const [filterbtn, setFilterbtn] = useState(false);
  const [search, setSearch] = useState('');
  const allCards: CardData[] = [...player, ...skill, ...support, ...leader];
  const [card, _] = useState<CardData[]>(allCards);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'highestToLowest' | 'lowestToHighest'>('highestToLowest');
  const [filterType, ] = useState<CardType>('player');

  const sortedCards = card
    .filter(
      cardItem =>
        cardItem.name.toLowerCase().includes(search.toLowerCase()) ||
        (cardItem.team === null ||
          cardItem.team.toString().toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      const typeOrder = ['leader', 'player', 'skill', 'support'];
      const rarityOrderAscending = ['basic', 'silver', 'gold', 'alternative_art'];
      // const rarityOrderDescending = ['alternative_art', 'gold', 'silver', 'basic'];

      const typeValueA = typeOrder.indexOf(a.type);
      const typeValueB = typeOrder.indexOf(b.type);
      const rarityValueA = rarityOrderAscending.indexOf(a.rarity);
      const rarityValueB = rarityOrderAscending.indexOf(b.rarity);

      if (sortOrder === 'highestToLowest') {
        // First, compare based on rarity in descending order
        if (rarityValueA !== rarityValueB) {
          return rarityValueB - rarityValueA;
        } else {
          // If rarity is the same, compare based on type
          return typeValueA - typeValueB;
        }
      } else {
        // For lowestToHighest, compare based on rarity in ascending order
        if (rarityValueA !== rarityValueB) {
          return rarityValueA - rarityValueB;
        } else {
          return typeValueA - typeValueB;
        }
      }
    })
    .filter(card => filterType === 'All Type' || card.type === filterType);


  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#233A30] to-black/10 py-2">
        <div className="flex items-center gap-y-3 lg:my-6 p-2 flex-col sm:flex-row justify-around">
          <div className="w-4/5 sm:w-2/5">
            <div className="relative">
              <input
                className="w-full rounded-md border bg-black p-2 text-sm text-white lg:text-lg"
                placeholder="Search"
                onChange={e => setSearch(e.target.value)}
              />
              <svg
                fill="#b0b0b0"
                height="10px"
                width="10px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490.4 490.4"
                xmlSpace="preserve"
                stroke="#b0b0b0"
                className="absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 transform text-gray-500"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"></path>{' '}
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="flexcenter w-4/5 sm:w-auto">
            <div className="flex justify-between sm:flexcenter w-full gap-x-4">
              {/* <CardSortingType setFilterType={setFilterType} /> */}
              <CardSorting sortOrder={sortOrder} setSortOrder={setSortOrder} />
            </div>
            <button>
              <div className="mx-2 hidden rounded-md border border-white bg-black p-[8px] lg:p-[11px] ">
                <svg
                  viewBox="0 0 24 24"
                  height="22px"
                  width="22px"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setFilterbtn(state => !state)}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466V6.50448C2 7.54232 2 8.06124 2.2596 8.49142C2.5192 8.9216 2.99347 9.18858 3.94202 9.72255L6.85504 11.3624C7.49146 11.7206 7.80967 11.8998 8.03751 12.0976C8.51199 12.5095 8.80408 12.9935 8.93644 13.5872C9 13.8722 9 14.2058 9 14.8729L9 17.5424C9 18.452 9 18.9067 9.25192 19.2613C9.50385 19.6158 9.95128 19.7907 10.8462 20.1406C12.7248 20.875 13.6641 21.2422 14.3321 20.8244C15 20.4066 15 19.4519 15 17.5424V14.8729C15 14.2058 15 13.8722 15.0636 13.5872C15.1959 12.9935 15.488 12.5095 15.9625 12.0976C16.1903 11.8998 16.5085 11.7206 17.145 11.3624L20.058 9.72255C21.0065 9.18858 21.4808 8.9216 21.7404 8.49142C22 8.06124 22 7.54232 22 6.50448V5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3Z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {filterbtn && (
        <>
          <FilterDetails />
        </>
      )}
      <div className="scrollbar flex max-h-[1000px] flex-wrap items-center justify-center overflow-y-scroll ">
        {sortedCards
          // .filter(card => card.type === filterType)
          .map(card => {
            return (
              <div key={card.id} className="m-1 flex w-1/5 justify-center">
                <img src={card.image} alt={card.name} width={250} onClick={() => openImageModal(card.image)} />
              </div>
            );
          })}
      </div>
      {selectedImage && (
        <div className="image-popup" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full Size" className="max-h-screen max-w-full" />
        </div>
      )}
    </>
  );
}
