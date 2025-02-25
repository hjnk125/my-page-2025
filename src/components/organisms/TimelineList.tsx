import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TimelineItem from '@components/molecules/TimelineItem.tsx';
import aprLogo from '@images/apr-logo.png';
import ocupLogo from '@images/ocup-logo.png';
import pawdlyLogo from '@images/pawdly-logo.png';

gsap.registerPlugin(ScrollTrigger);

const TimelineList = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.timeline-item',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.timeline-item',
          start: 'top bottom',
          toggleActions: 'restart none none none',
        },
      },
    );
  }, []);

  return (
    <ul className="relative flex w-full flex-col gap-[12px] lg:w-1/2 lg:min-w-1/2">
      <TimelineItem
        logo={aprLogo}
        title="에이피알"
        description="포토그레이개발팀 | 프론트엔드 개발"
        detailList={[
          '포토그레이 하이브리드 앱 개발 및 운영',
          '포토그레이 관리자 시스템 개발',
          '포토그레이 사진 다운로드 페이지 개발',
        ]}
      />
      <TimelineItem
        logo={ocupLogo}
        title="오늘의 컵홀더"
        description="팀 프로젝트 | 기획, 개발 및 운영"
        detailList={['오늘의 컵홀더 웹 서비스 기획, 개발 및 운영']}
      />
      <TimelineItem
        logo={pawdlyLogo}
        title="포들리"
        description="개발팀 | 프론트엔드 개발"
        detailList={['포들리 유저 웹앱 개발', '포들리 파트너스 센터 웹앱 개발']}
      />
    </ul>
  );
};

export default TimelineList;
