import { useMediaQuery } from 'react-responsive';
import { getLgBreakpoint } from '@/constants/breackpoints.ts';
import {
  Project,
  MainProject,
  SmallProject,
  ProjectTitle,
  PROJECT_DATA,
} from '@/data/projects.ts';
import ProjectTitleItem from '@components/molecules/ProjectTitleItem.tsx';
import ProjectItem from '@components/molecules/ProjectItem.tsx';
import SmallProjectItem from '@components/molecules/SmallProjectItem.tsx';

const ProjectList = () => {
  const isMobile = useMediaQuery({ maxWidth: getLgBreakpoint() - 1 });

  const isProjectTitle = (item: Project): item is ProjectTitle => {
    return 'titleImage' in item;
  };

  const isMainProject = (item: Project): item is MainProject => {
    return 'mainImage' in item;
  };

  const isSmallProject = (item: Project): item is SmallProject => {
    return 'smallProjects' in item;
  };

  const renderProjectItem = (projectData: Project) => {
    if (isProjectTitle(projectData)) {
      return (
        <ProjectTitleItem
          key={projectData.category + '-title'}
          {...projectData}
        />
      );
    }
    if (isMainProject(projectData)) {
      return (
        <ProjectItem
          key={projectData.category + projectData.id}
          {...projectData}
        />
      );
    }
    if (isSmallProject(projectData)) {
      return projectData.smallProjects.map((item) => {
        return (
          <SmallProjectItem
            key={projectData.category + projectData.id + '-' + item.id}
            {...item}
          />
        );
      });
    }
  };

  if (!isMobile)
    return (
      <div className="flex w-full gap-[12px] pr-[36px]">
        <div className="flex max-w-1/2 basis-1/2 flex-col gap-[12px]">
          {PROJECT_DATA.filter((item) => item.id % 2).map((item) =>
            renderProjectItem(item),
          )}
        </div>
        <div className="flex max-w-1/2 basis-1/2 flex-col gap-[12px]">
          {PROJECT_DATA.filter((item) => !(item.id % 2)).map((item) =>
            renderProjectItem(item),
          )}
        </div>
      </div>
    );
  return (
    <div className="flex w-full px-[24px]">
      <div className="flex flex-col gap-[12px]">
        {PROJECT_DATA.map((item) => renderProjectItem(item))}
      </div>
    </div>
  );
};

export default ProjectList;
