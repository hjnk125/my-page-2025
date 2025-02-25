import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useActiveCursor from '@/hooks/useActiveCursor';
import Text from '@components/atoms/Text.tsx';
import Arrow from '@icons/hero-arrow.svg?react';
import hero3dGif from '@images/hero-3d.gif';
import Eyes from '@icons/Microsoft-FluentUI-Emoji-Eyes-3d.svg?react';

const HeroHeader = () => {
  const { actions } = useActiveCursor();

  useGSAP(() => {
    gsap.fromTo(
      '.animate-line',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
      },
    );
  }, []);

  return (
    <div className="theme-text-color flex w-full min-w-[320px] flex-col items-center justify-center py-[112px]">
      <div
        {...actions}
        className="animate-line flex items-center gap-[8px] whitespace-nowrap lg:gap-[24px]"
      >
        <Text as="h1" typography="hero" className="font-roboto font-bold">
          Crafting
        </Text>
        <div className="relative h-[34px] w-[60px] lg:h-[80px] lg:w-[120px]">
          <img
            className="transition-default-all absolute-position-center block h-[48px] w-[68px] max-w-none object-contain lg:h-[100px] lg:w-[140px] dark:invert"
            src={hero3dGif}
            alt=""
          />
        </div>
        <Text as="h1" typography="hero" className="font-roboto font-bold">
          intuitive
        </Text>
      </div>
      <div
        {...actions}
        className="animate-line flex items-center gap-[8px] whitespace-nowrap lg:gap-[24px]"
      >
        <Text as="h1" typography="hero" className="font-roboto font-bold">
          interfaces with
        </Text>
        <Arrow className="h-[32px] w-[61px] lg:h-[68px] lg:w-[126px]" />
      </div>
      <div
        {...actions}
        className="animate-line flex items-center gap-[8px] whitespace-nowrap lg:gap-[24px]"
      >
        <Text as="h1" typography="hero" className="font-roboto font-bold">
          a keen
        </Text>
        <div className="relative hidden lg:block lg:h-[80px] lg:w-[60px]">
          <Eyes className="absolute-position-center animate-bounce lg:h-[80px] lg:w-[80px]" />
        </div>
        <Text as="h1" typography="hero" className="font-roboto font-bold">
          visual sense
        </Text>
      </div>
      <Text
        as="p"
        typography="regular"
        className="animate-line mt-[20px] w-[320px] text-center whitespace-pre-line lg:mt-[24px] lg:w-fit lg:whitespace-nowrap"
      >
        섬세한 시각적 감각과 사용자 중심의 접근으로, {'\n'}디자인과 개발이
        조화를 이루는 인터페이스를 설계하고 {'\n'}더 나은 경험을 만들어갑니다.
      </Text>
    </div>
  );
};

export default HeroHeader;
