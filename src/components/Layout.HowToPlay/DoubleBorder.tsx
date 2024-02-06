import { ReactNode } from 'react';

export function DoubleBorder({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      <div className="blue-border mx-3 mt-5 h-[30vh] p-[0.1rem] lg:min-h-[306px] lg:w-[494px]">
        <div className="h-full w-full bg-[#242424] p-[0.2rem]">
          <div className="blue-border h-full w-full p-[0.1rem]">
            <div className="flex h-full w-full items-center justify-start bg-[#242424]">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
