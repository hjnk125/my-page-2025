import Text from '@components/atoms/Text.tsx';

interface Props {
  logo: string;
  title: string;
  description: string;
  detailList: string[];
}

const TimelineItem = ({ logo, title, description, detailList }: Props) => {
  return (
    <li className="timeline-item bento p-bento dark:bg-dark-gray bg-white">
      <div className="flex items-center gap-[16px]">
        <img
          src={logo}
          alt={title}
          className="h-[42px] w-[42px] min-w-[42px] rounded-full object-cover lg:h-[52px] lg:w-[52px] lg:min-w-[52px]"
        />
        <div>
          <Text as="h5" typography="h5" className="theme-text-color font-bold">
            {title}
          </Text>
          <Text as="p" typography="regular" className="text-gray">
            {description}
          </Text>
        </div>
      </div>
      <ul className="theme-text-color list-outside list-disc pl-[2rem] break-keep lg:pl-[84px]">
        {detailList.map((item, i) => (
          <li key={i}>
            <Text typography="regular">{item}</Text>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default TimelineItem;
