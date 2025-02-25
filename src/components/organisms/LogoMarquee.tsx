import Marquee from '@components/molecules/Marquee.tsx';
import JsIcon from '@icons/tech/javascript.svg?react';
import TsIcon from '@icons/tech/typescript.svg?react';
import ReactIcon from '@icons/tech/react.svg?react';
import NextJsIcon from '@icons/tech/nextjs.svg?react';
import CssIcon from '@icons/tech/css.svg?react';
import StorybookIcon from '@icons/tech/storybook.svg?react';
import FigmaIcon from '@icons/tech/figma.svg?react';
import GithubIcon from '@icons/tech/github.svg?react';
import Text from '@components/atoms/Text.tsx';

const LogoMarquee = () => {
  return (
    <Marquee>
      <JsIcon width="24" height="24" className="mx-3 lg:mx-5" />
      <Text typography="medium" className="font-manrope mx-3 lg:mx-5">
        JavaScript
      </Text>
      <TsIcon width="24" height="24" className="mx-3 lg:mx-5" />
      <Text typography="medium" className="font-manrope mx-3 lg:mx-5">
        TypeScript
      </Text>
      <ReactIcon width="24" height="24" className="mx-3 lg:mx-5" />
      <Text typography="medium" className="font-manrope mx-3 lg:mx-5">
        React
      </Text>
      <NextJsIcon width="24" height="24" className="mx-3 lg:mx-5" />
      <Text typography="medium" className="font-manrope mx-3 lg:mx-5">
        Next.js
      </Text>
      <CssIcon width="24" height="24" className="mx-3 lg:mx-5" />
      <Text typography="medium" className="font-manrope mx-3 lg:mx-5">
        CSS
      </Text>
      <StorybookIcon width="24" height="24" className="mx-3 lg:mx-5" />
      <Text typography="medium" className="font-manrope mx-3 lg:mx-5">
        Storybook
      </Text>
      <FigmaIcon width="24" height="24" className="mx-3 lg:mx-5" />
      <Text typography="medium" className="font-manrope mx-3 lg:mx-5">
        Figma
      </Text>
      <GithubIcon width="24" height="24" className="mx-3 lg:mx-5" />
      <Text typography="medium" className="font-manrope mx-3 lg:mx-5">
        Github
      </Text>
    </Marquee>
  );
};

export default LogoMarquee;
