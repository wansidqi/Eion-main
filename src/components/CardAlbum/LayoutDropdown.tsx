import { Dispatch, SetStateAction, useState } from 'react';
interface Props {
  items: string[];
  selectItems: string;
  setSelectItems: Dispatch<SetStateAction<string>>;
  setInputTag: (i: string) => void;
}
export function LayoutDropdown({ items, selectItems, setSelectItems, setInputTag }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = (i: string) => {
    // setSelectDropdown(i);
    setShowDropdown(false);
    setSelectItems(i);
    setInputTag(i);
  };

  return (
    <div>
      <div className="flexcenter roboto-condensed ">
        <div className="sansation roboto relative mx-3 w-auto flex-row rounded-md text-[14px]">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex h-[44px] items-center border border-[#FFFFFF] bg-black w-48 justify-between"
          >
            <p className="roboto-condensed m-3">{selectItems}</p>
            <div className="px-3">
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00001 10L0.928345 2.93L3.28668 0.573334L8.00001 5.28667L12.7133 0.573334L15.0717 2.93L8.00001 10.0017V10Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div>
            {showDropdown && (
              <div className="roboto absolute z-10  mt-2 flex w-full flex-col rounded-md bg-gradient-to-br from-[#0D0D0E] to-[#0A1B41] py-2 text-[14px]">
                {items.map((item: string, i: number) => (
                  <button
                    onClick={() => handleDropdown(item)}
                    className={`my-1 px-4 py-2 text-left ${
                      item === selectItems
                        ? 'w-full border border-[#00519B] bg-gradient-to-r from-[#00519B]/70 to-[#5097D9]/0'
                        : ''
                    }`}
                    key={i}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
