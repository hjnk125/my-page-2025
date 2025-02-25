import Text from '@components/atoms/Text.tsx';
import { MainProject } from '@/data/projects.ts';

const ProjectItem = ({
  mainImage,
  title,
  description,
  featureDetails,
}: MainProject) => {
  return (
    <div className="theme-text-color bento py-bento dark:bg-dark-gray flex w-full flex-col gap-[14px] bg-white">
      <img src={mainImage} alt={title} />
      <div className="px-bento flex w-full flex-col gap-[12px]">
        <Text as="h5" typography="h5" className="font-bold">
          {title}
        </Text>
        <Text as="p" typography="small" className="text-gray">
          {description}
        </Text>
      </div>
      <ul className="px-bento list-outside list-disc">
        {featureDetails.map((item, i) => (
          <li key={i} className="ml-[1rem]">
            <Text typography="small">{item}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItem;
