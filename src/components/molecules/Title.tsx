import Text from '@components/atoms/Text.tsx';

interface Props {
  tag: string;
  title: string;
  description: string;
}

const Title = ({ tag, title, description }: Props) => {
  return (
    <div className="theme-text-color flex flex-col">
      <Text
        typography="tagline"
        className="mb-[12px] font-semibold lg:mb-[16px]"
      >
        {tag}
      </Text>
      <Text
        as="h2"
        typography="h2"
        className="mb-[20px] font-bold break-keep whitespace-pre-line lg:mb-[24px]"
      >
        {title}
      </Text>
      <Text
        as="p"
        typography="regular"
        className="break-keep whitespace-pre-line"
      >
        {description}
      </Text>
    </div>
  );
};

export default Title;
