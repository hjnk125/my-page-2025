import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
  bgImage?: string;
}

const ProjectBanner = ({ children, className, bgImage }: Props) => {
  return (
    <div
      className={'bento sticky top-[72px] min-h-[300px] w-full ' + className}
      style={{
        ...(bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}),
      }}
    >
      {children}
    </div>
  );
};

export default ProjectBanner;
