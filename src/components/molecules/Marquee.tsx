import { PropsWithChildren } from 'react';

const Marquee = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-primary flex w-full py-[12px] lg:w-[calc(100%-72px)] lg:rounded-[16px]">
      <div className="relative flex grow overflow-x-hidden">
        <div className="animate-marquee flex h-[28px] items-center whitespace-nowrap">
          {children}
        </div>
        <div className="animate-marquee2 absolute top-0 flex h-[28px] items-center whitespace-nowrap">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
