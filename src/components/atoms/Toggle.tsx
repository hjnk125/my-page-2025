import { ReactElement } from 'react';

interface Props {
  value: boolean;
  onClick: () => void;
  icon?: ReactElement;
}

const Toggle = ({ value, onClick, icon }: Props) => (
  <button
    onClick={onClick}
    className={`relative h-[24px] w-[44px] rounded-full transition-colors duration-300 ${value ? 'bg-primary' : 'bg-gray'}`}
  >
    <span
      className={`absolute top-[2px] left-[2px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${value ? 'translate-x-[20px]' : 'translate-x-0'}`}
    >
      {icon}
    </span>
  </button>
);

export default Toggle;
