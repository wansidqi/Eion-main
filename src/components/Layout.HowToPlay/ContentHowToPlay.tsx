import { ReactNode } from 'react';

export function ContentHowToPlay({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      <div className="mx-3 mt-5 h-[40vh] border border-[#168FFF] bg-black">{children}</div>
    </div>
  );
}
