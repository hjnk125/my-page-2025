import useActiveCursor from '@/hooks/useActiveCursor';
import Title from '@components/molecules/Title.tsx';
import GoogleIcon from '@icons/contact/google.svg?react';
import GithubIcon from '@icons/contact/github.svg?react';
import LinkedInIcon from '@icons/contact/linkedin.svg?react';
import Text from '@components/atoms/Text.tsx';

const Contact = () => {
  const { actions } = useActiveCursor();

  return (
    <div className="flex w-full flex-col gap-[12px] px-[20px] py-[64px] lg:gap-[12px] lg:px-[36px] lg:py-[112px]">
      <div className="bento p-bento border-1 dark:border-white">
        <Title
          tag="Hojung Kim"
          title="Contact"
          description="함께 성장할 수 있는 기회를 찾고 있거나, 궁금하신 점이 있다면 아래의 연락처로 문의해 주세요."
        />
      </div>

      <div
        {...actions}
        className="theme-text-color grid grid-rows-3 gap-[12px] lg:grid-cols-3 lg:grid-rows-1"
      >
        <a
          href="mailto:hjnk125@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bento p-bento dark:bg-dark-gray flex flex-col gap-[16px] bg-white"
        >
          <GoogleIcon width={48} height={48} />
          <Text typography="h5" className="font-bold">
            Email
          </Text>
        </a>
        <a
          href="https://github.com/hjnk125/"
          target="_blank"
          rel="noopener noreferrer"
          className="bento p-bento dark:bg-dark-gray flex flex-col gap-[16px] bg-white"
        >
          <GithubIcon width={48} height={48} />
          <Text typography="h5" className="font-bold">
            Github
          </Text>
        </a>
        <a
          href="https://www.linkedin.com/in/%ED%98%B8%EC%A0%95-%EA%B9%80-2879b5259/"
          target="_blank"
          rel="noopener noreferrer"
          className="bento p-bento dark:bg-dark-gray flex flex-col gap-[16px] bg-white"
        >
          <LinkedInIcon width={48} height={48} />
          <Text typography="h5" className="font-bold">
            LinkedIn
          </Text>
        </a>
      </div>
    </div>
  );
};

export default Contact;
