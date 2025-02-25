import ProjectBannerList from '@components/organisms/ProjectBannerList.tsx';
import ProjectList from '@components/organisms/ProjectList.tsx';

const Projects = () => {
  return (
    <div className="flex w-full">
      <ProjectBannerList />
      <div className="w-full lg:w-1/2">
        <ProjectList />
      </div>
    </div>
  );
};

export default Projects;
