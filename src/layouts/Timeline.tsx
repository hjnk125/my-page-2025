import TimelineList from '@components/organisms/TimelineList.tsx';
import Title from '@components/molecules/Title.tsx';

const Timeline = () => {
  return (
    <div className="flex w-full px-[24px] lg:mt-[112px] lg:px-[36px]">
      <div className="flex w-full flex-col gap-[12px] lg:flex-row">
        <div className="bento p-bento border-1 dark:border-white">
          <Title
            tag="Timeline"
            title={`User-centered experiences across diverse projects`}
            description={`사용자를 최우선으로 고려하여 사용자 중심의 경험을 제공합니다.\n다양한 요구를 신속하게 반영하며,\n모든 사용자가 만족할 수 있는 프로덕트를 만드는 데 집중합니다.`}
          />
        </div>
        <TimelineList />
      </div>
    </div>
  );
};

export default Timeline;
