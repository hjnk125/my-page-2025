import Logo from '@icons/logo.svg?react';
import ThemeToggle from '@components/molecules/ThemeToggle.tsx';
import StorybookIcon from '@icons/tech/storybook.svg?react';
import LinkIcon from '@icons/external-link.svg?react';
import useActiveCursor from '@/hooks/useActiveCursor';
import Text from '@components/atoms/Text.tsx';

const NavHeader = () => {
  const { actions } = useActiveCursor();

  const handleClickLink = () => {
    window.open(`${window.location.origin}/storybook/index.html`, '_blank');
  };

  return (
    <header className="noise theme-background-color fixed z-10 h-[72px] w-full border-b border-black px-[20px] lg:px-[64px] dark:border-white">
      <div className="theme-text-color mx-auto flex h-full w-full items-center justify-between 2xl:max-w-[1440px]">
        <Logo
          {...actions}
          width="76"
          height="32"
          className="h-[24px] w-[57px] lg:h-[32px] lg:w-[76px]"
        />
        <div {...actions} className="flex items-center gap-[24px]">
          <ThemeToggle />
          <button
            className="bg-dark-background flex items-center gap-[8px] px-[10px] py-[8px] text-white lg:px-[16px] lg:py-[12px] dark:bg-white dark:text-black"
            onClick={handleClickLink}
          >
            <StorybookIcon
              width="24"
              height="24"
              className="h-[16px] w-[16px] lg:h-[24px] lg:w-[24px]"
            />
            <Text typography="regular" className="hidden lg:block">
              Storybook
            </Text>
            <LinkIcon
              width="24"
              height="24"
              className="h-[16px] w-[16px] lg:h-[24px] lg:w-[24px]"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
