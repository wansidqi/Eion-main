import { useEffect, useState } from 'react';
import { LayoutDropdown } from './LayoutDropdown';
import { Filter, FiltersContent } from '../../store/slice/cardalbum.slice';
import { CardSorting } from './CardSorting';

import upArrow from '@assets/images/CardAlbum/up-arrow.png';
import downArrow from '@assets/images/CardAlbum/down-arrow.png';
import close from '@assets/images/LandingPage/icon-cancel.png';
import { useBoundStore } from '../../store';

type FilterChoice = {
  label: keyof Filter;
  isOpen: boolean;
  toggle: () => void;
  lists: string[];
  hasColor: boolean;
};

export default function FilterDetails() {
  const [filterbtnMob, setFilterbtnMob] = useState(false);
  const [sortOrder, setSortOrder] = useState<'highestToLowest' | 'lowestToHighest'>('highestToLowest');
  // const [selectedDropdownItems, setSelectedDropdownItems] = useState('');

  const [raritydropdownItems, setRarityDropdownItems] = useState('Rarities');
  const [typedropdownItems, setTypeDropdownItems] = useState('Types');
  const [teamDropdownItems, setTeamDropdownItem] = useState('Teams');
  const [regionDropdownItems, setRegionDropdownItem] = useState('Region');
  const [rolesDropdownItems, setRolesDropdownItems] = useState('Roles');

  const allRarityDropdown = ['All Rarities', 'Basic', 'Silver', 'Gold', 'Aternative Art'];
  const allTypesDropdown = ['All Types', 'Leader', 'Player', 'Skill', 'Support'];
  const allTeamDropdown = [
    'All Teams',
    'Blacklist International',
    'Echo',
    'Homebois Malaysia',
    'Homebois Singapore',
    'Lunatix',
    'Onic',
    'RSG Malaysia',
    'RSG Philippines',
    'RSG Singapore',
    'Stellark SG',
    'Team Flash',
    'Team HAQ',
    'TNC Pro Team',
    'Todak',
  ];
  const allRegionDropdown = ['All Regions', 'Malaysia', 'Singapore', 'Philippines'];
  const allRolesDropdown = ['All Roles', 'Gold Laner', 'Mid Laner', 'Exp Laner', 'Jungler', 'Roamer'];

  // const [isActive, setIsActive] = useState(false);
  const [inputTag, setInputTag] = useState<string[]>([]);

  const addTag = (i: string) => {
    setInputTag((prevArray: string[]) => [...prevArray, i]);
  };

  function removeFilter(): void {
    throw new Error('Function not implemented.');
  }

  const { cardalbum, setcardalbumState } = useBoundStore();
  const { filtersContent, filters } = cardalbum;

  // const handleFilterBreakdown = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, checked } = event.target;

  //   const updatedFilter: Filter = { ...filters };
  //   const filterValues = filters[name] as string[];

  //   if (['rarity', 'type', 'team', 'season', 'role'].includes(name)) {
  //     updatedFilter[name] = checked ? [...filterValues, value] : filterValues.filter(item => item !== value);
  //   }

  //   setcardalbumState({ filters: updatedFilter });
  // };

  const handleFilterBreakdown = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    const updatedFilter: Filter = { ...filters };
    const filterValues = filters[name] as string[];

    if (['rarity', 'type', 'team', 'season', 'role'].includes(name)) {
      const lowercaseValue = value.toLowerCase(); // Convert input value to lowercase

      updatedFilter[name] = checked
        ? [...filterValues, lowercaseValue]
        : filterValues.filter(item => item !== lowercaseValue);
    }

    setcardalbumState({ filters: updatedFilter });
  };

  const regionMap: Record<string, string> = {
    'Malaysia': 'my',
    'Singapore': 'sg',
    'Philippines': 'ph',
    // Add more mappings if needed
  };

  const roleMap: Record<string, string> = {
    'Gold Laner': 'gold',
    'Mid Laner': 'mid',
    'Exp Laner': 'exp',
    'Jungler': 'jungle',
    'Roamer': 'roam',
  };

  useEffect(() => {
    const mappedRegion = regionMap[regionDropdownItems] || 'All Regions';
    setRegionDropdownItem(mappedRegion);
    const mappedRole = roleMap[rolesDropdownItems] || 'All Roles';
    setRolesDropdownItems(mappedRole);
  }, [regionDropdownItems, rolesDropdownItems]);

  function getOptionColor(option: string) {
    switch (option) {
      case 'Basic':
        return 'bg-[#D9D9D9]';
      case 'Silver':
        return 'bg-[#838383]';
      case 'Gold':
        return 'bg-[#FFC700]';
      case 'Alternative Art':
        return 'bg-gradient-to-br from-[#FF0000] to-[#168FFF]';
    }
  }

  const toggle = (item: keyof FiltersContent) => {
    const updatedFilters = {
      ...filtersContent,
      [item]: !filtersContent[item],
    };
    setcardalbumState({
      filtersContent: updatedFilters,
    });
  };

  const filterChoices: FilterChoice[] = [
    {
      label: 'rarity',
      isOpen: filtersContent.rarity,
      toggle: () => toggle('rarity'),
      lists: ['Basic', 'Silver', 'Gold', 'Alternative Art'],
      hasColor: true,
    },
    {
      label: 'team',
      isOpen: filtersContent.team,
      toggle: () => toggle('team'),
      lists: [
        'Blacklist International',
        'Echo',
        'Homebois Malaysia',
        'Homebois Singapore',
        'Lunatix',
        'Onic',
        'RSG Malaysia',
        'RSG Philippines',
        'RSG Singapore',
        'Stellark SG',
        'Team Flash',
        'Team HAQ',
        'TNC Pro Team',
        'Todak',
      ],
      hasColor: false,
    },
    {
      label: 'type',
      isOpen: filtersContent.type,
      toggle: () => toggle('type'),
      lists: ['leader', 'support', 'player', 'skill'],
      hasColor: false,
    },
    {
      label: 'role',
      isOpen: filtersContent.role,
      toggle: () => toggle('role'),
      lists: ['Gold Laner', 'Jungler', 'Mid Laner', 'Exp Laner', 'Roamer'],
      hasColor: false,
    },
  ];

  return (
    <>
      <>
        {/* desktop */}
        <div className="hidden lg:block">
          <div className="flex flex-row justify-center">
            <div className='cursor-pointer'>
              <LayoutDropdown
                items={allRarityDropdown}
                selectItems={raritydropdownItems}
                setSelectItems={setRarityDropdownItems}
                setInputTag={addTag}
              />
            </div>
            <div className='cursor-pointer'>
              <LayoutDropdown
                items={allTypesDropdown}
                selectItems={typedropdownItems}
                setSelectItems={setTypeDropdownItems}
                setInputTag={addTag}
              />
            </div>
            <div className='cursor-pointer'>
              <LayoutDropdown
                items={allTeamDropdown}
                selectItems={teamDropdownItems}
                setSelectItems={setTeamDropdownItem}
                setInputTag={addTag}
              />
            </div>
            <div className='cursor-pointer'>
              <LayoutDropdown
                items={allRegionDropdown}
                selectItems={regionDropdownItems}
                setSelectItems={setRegionDropdownItem}
                setInputTag={addTag}
              />
            </div>
            <div className='cursor-pointer'>
              <LayoutDropdown
                items={allRolesDropdown}
                selectItems={rolesDropdownItems}
                setSelectItems={setRolesDropdownItems}
                setInputTag={addTag}
              />
            </div>

          </div>
        </div>

        <div className="m-4 mx-[10rem]">
          <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-2">
              {inputTag.map((tags: string) => (
                <button
                  className="flexcenter h-auto w-auto rounded-md border bg-black p-2"
                  onClick={() => removeFilter()}
                >
                  <p className="text-[Sans Opens] text-xs"> {tags}</p>
                  <img src={close} alt="close" className="mx-1 h-4" />
                </button>
              ))}
            </div>
            {inputTag.length > 1 && (
              <div className="flex h-auto w-auto flex-row rounded-md border bg-black p-2">
                <button onClick={() => setInputTag([])}>
                  <p className="text-sm">Clear All</p>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* mobile  */}
        {!filterbtnMob && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="h-full w-full bg-gradient-to-b from-[#00284D] to-black p-5">
              <div
                className="rounded text-white transition hover:text-white md:hidden block items-end cursor-pointer"
                onClick={() => {
                    console.log("Filter button clicked");
                    setFilterbtnMob(prevState => !prevState);
                  }}
                >
                  <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >

                      <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                      />
                  </svg>
              </div>
              <div className="mx-10">
                <div className="mt-10 text-[#848484]">Sort By</div>
                  <CardSorting sortOrder={sortOrder} setSortOrder={setSortOrder} />
                <div className="mt-10 text-[#848484]">Filter By</div>

                <div className="text-white">
                  {filterChoices.map(item => (
                    <>
                      <div className="border-b border-[#2D2D2D] py-5 text-[20px]">
                        <button onClick={item.toggle} className="flex w-full items-center justify-between">
                          <p className="capitalize">{item.label}</p>
                          <img src={item.isOpen ? upArrow : downArrow} alt="" />
                        </button>
                        {item.isOpen && (
                          <div className="mt-5 flex flex-col gap-2 capitalize">
                            {item.lists?.map((option: string) => (
                              <div key={option} className="flex justify-between">
                                <div className="flex items-center gap-2 text-sm">
                                  {item.hasColor && <div className={`${getOptionColor(option)} h-[13px] w-[13px]`} />}
                                  <p>{option}</p>
                                </div>
                                <input
                                  name={item.label.toString()}
                                  type="checkbox"
                                  value={option}
                                  className="h-4 w-4 rounded-md"
                                  checked={filters?.[item.label]?.includes(option)}
                                  onChange={handleFilterBreakdown}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  ))}
                </div>

                <div className="roboto-condensed mt-8 flex w-full flex-col text-[16px]">
                  <button className="mb-3 w-full border bg-gradient-to-t from-sky-700 to-blue-500 py-3">Filter</button>
                  <button className="w-full border py-3">Clear All</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
}
