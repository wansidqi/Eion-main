import { useBoundStore } from '../../store';
import activeNext from '@assets/images/nav/activeNext.png';
import inactiveNext from '@assets/images/nav/inactiveNext.png';
import inactiveBack from '@assets/images/nav/inactiveBack.png';
import activeBack from '@assets/images/nav/activeBack.png';

export function SideSection({ data }: any) {
  const { tutorial, setTutorialState } = useBoundStore();
  const { selectIndex, autoPlay } = tutorial;

  const handleSelectIndex = (i: number) => setTutorialState({ selectIndex: i });

  return (
    <div className="lg:absolute lg:right-8">
      <div className="roboto-condensed flex flex-col items-center justify-center gap-2 text-[18px] lg:my-10 lg:items-end lg:justify-end lg:gap-3">
        <div className="flexcenter my-4 gap-2">
          <p className="roboto text-[14px] lg:text-[18px]">Autoplay</p>
          <label htmlFor="AcceptConditions" className="relative h-8 w-14 scale-[0.6] cursor-pointer lg:scale-[1]">
            <input
              onChange={() => setTutorialState({ autoPlay: !autoPlay })}
              type="checkbox"
              checked={autoPlay}
              id="AcceptConditions"
              className="peer sr-only"
            />
            <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-[#00519B]"></span>
            <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
          </label>
        </div>
        <div className="flexcenter -mt-3 lg:mt-0 lg:flex-col lg:items-end lg:justify-end lg:gap-2">
          <button className="lg:hidden" onClick={() => selectIndex && setTutorialState({ selectIndex: selectIndex - 1 })}>
            <img src={!selectIndex ? inactiveBack : activeBack} alt="" />
          </button>
          {data.map((button: any, i: number) => (
            <button onClick={() => handleSelectIndex(i)} className="flexcenter lg:gap-3">
              <p className={`hidden lg:block ${selectIndex === i ? 'dead-jim text-[#0185FF]' : 'dead-jim'}`}>
                {button.item}
              </p>
              {selectIndex === i ? activeButton : inactiveButton}
            </button>
          ))}
          <button
            className="lg:hidden"
            onClick={() =>
              selectIndex !== null && selectIndex < 12 && setTutorialState({ selectIndex: selectIndex + 1 })
            }
          >
            <img src={selectIndex === 12 ? inactiveNext : activeNext} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

const activeButton = (
  <svg width="28" height="28" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1938_1038)">
      <path
        d="M28.8098 19.3719L19.9075 28.2565C19.8718 28.2921 19.8185 28.3099 19.7828 28.2921L7.62209 25.0339C7.56871 25.016 7.53309 24.9804 7.53309 24.9448L4.25684 12.8019C4.23909 12.7485 4.25684 12.7129 4.29259 12.6773L13.195 3.79264C13.2306 3.75701 13.284 3.73914 13.3196 3.75701L25.4803 7.01526C25.5338 7.03314 25.5693 7.06876 25.5693 7.10426L28.8277 19.2473C28.8633 19.3006 28.8455 19.3363 28.8098 19.3719ZM16.8806 9.70389L4.93359 12.8909C4.91571 12.8909 4.89796 12.9265 4.91571 12.9443L13.658 21.6688C13.6757 21.6865 13.7113 21.6865 13.7113 21.6509L16.9162 9.72164C16.934 9.72164 16.8985 9.68601 16.8806 9.70389Z"
        fill="#0185FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1938_1038">
        <rect width="32" height="32" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const inactiveButton = (
  <svg width="28" height="28" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1938_1042)">
      <path
        d="M28.3098 19.8719L19.4075 28.7565C19.3718 28.7921 19.3185 28.8099 19.2828 28.7921L7.12209 25.5339C7.06871 25.516 7.03309 25.4804 7.03309 25.4448L3.75684 13.3019C3.73909 13.2485 3.75684 13.2129 3.79259 13.1773L12.695 4.29264C12.7306 4.25701 12.784 4.23914 12.8196 4.25701L24.9803 7.51526C25.0338 7.53314 25.0693 7.56876 25.0693 7.60426L28.3277 19.7473C28.3633 19.8006 28.3455 19.8363 28.3098 19.8719ZM16.3806 10.2039L4.43359 13.3909C4.41571 13.3909 4.39796 13.4265 4.41571 13.4443L13.158 22.1688C13.1757 22.1865 13.2113 22.1865 13.2113 22.1509L16.4162 10.2216C16.434 10.2216 16.3985 10.186 16.3806 10.2039Z"
        fill="#414141"
      />
    </g>
    <defs>
      <clipPath id="clip0_1938_1042">
        <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);
