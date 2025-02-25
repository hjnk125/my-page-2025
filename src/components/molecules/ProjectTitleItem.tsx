interface Props {
  titleImage: string;
}

const ProjectTitleItem = ({ titleImage }: Props) => {
  return (
    <div className="bento w-full">
      <img src={titleImage} className="bento h-full w-full" />
    </div>
  );
};

export default ProjectTitleItem;
