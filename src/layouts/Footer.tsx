import Text from '@components/atoms/Text.tsx';

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center py-[64px] lg:pt-[112px]">
      <Text typography="regular" className="text-medium-gray text-center">
        © 2025 Hojung Kim
      </Text>
    </footer>
  );
};

export default Footer;
