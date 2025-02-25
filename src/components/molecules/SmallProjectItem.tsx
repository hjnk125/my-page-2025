import Text from '@components/atoms/Text.tsx';

interface Props {
  id: number;
  title: string;
  description: string;
}

const SmallProjectItem = ({ title, description }: Props) => {
  return (
    <div className="theme-text-color bento py-bento dark:bg-dark-gray flex w-full flex-col gap-[14px] bg-white">
      <div className="px-bento flex w-full flex-col gap-[12px]">
        <Text as="h5" typography="h5" className="font-bold">
          {title}
        </Text>
        <Text as="p" typography="small" className="text-gray">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default SmallProjectItem;
