import React, { Suspense } from 'react';
import ProjectBanner from '@components/molecules/ProjectBanner.tsx';
import firstBg from '@images/first-banner-bg.png';
import pawdly from '@images/pawdly-banner.png';
import { useMediaQuery } from 'react-responsive';
import { getLgBreakpoint } from '@/constants/breackpoints.ts';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const FirstBanner = () => {
  return (
    <ProjectBanner
      bgImage={firstBg}
      className="group h-[calc(100vh-72px)] pb-[72px]"
    >
      <Suspense
        fallback={
          <div className="absolute-position-center h-full w-full">
            <img
              className="h-full object-cover"
              src="/assets/photogray-spline-thumbnail.png"
              alt="photogray"
            />
          </div>
        }
      >
        <Spline
          scene="/assets/photogray_move.splinecode"
          className="absolute-position-center h-full w-full group-hover:hidden"
        />
      </Suspense>
      <Suspense
        fallback={
          <div className="absolute-position-center h-full w-full">
            <img
              className="h-full object-cover"
              src="/assets/photogray-spline-thumbnail.png"
              alt="photogray"
            />
          </div>
        }
      >
        <Spline
          scene="/assets/photogray_look.splinecode"
          className="absolute-position-center hidden h-full w-full group-hover:block"
        />
      </Suspense>
    </ProjectBanner>
  );
};

const SecondBanner = () => {
  return (
    <ProjectBanner className="h-[720px] bg-gradient-to-b from-[#FCFBF7] to-[#F7F168]">
      <Suspense
        fallback={
          <div className="absolute-position-center h-full w-full">
            <img
              className="h-full object-cover"
              src="/assets/ocup-spline-thumbnail.png"
              alt="ocup"
            />
          </div>
        }
      >
        <Spline
          scene="/assets/ocup.splinecode"
          className="absolute-position-center h-full w-full"
        />
      </Suspense>
    </ProjectBanner>
  );
};

const ThirdBanner = () => {
  return (
    <ProjectBanner className="bg-gradient-to-b from-[#b3daaf] to-[#143b18]">
      <img
        className="h-full w-full object-cover px-[24px] py-[48px]"
        src={pawdly}
        alt="Pawdly"
      />
    </ProjectBanner>
  );
};

const ProjectBannerList = () => {
  const isMobile = useMediaQuery({ maxWidth: getLgBreakpoint() - 1 });

  if (isMobile) {
    return null;
  }
  return (
    <div className="relative w-1/2 pr-[12px] pl-[36px]">
      <FirstBanner />
      <div className="sticky top-[72px] mt-auto w-full">
        <SecondBanner />
        <ThirdBanner />
      </div>
    </div>
  );
};

export default ProjectBannerList;
