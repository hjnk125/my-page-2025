import { AllHTMLAttributes, forwardRef, JSX, ReactNode, Ref } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getLgBreakpoint } from '@/constants/breackpoints.ts';

export const FONT_THEME = {
  hero: {
    default: { fontSize: '80px', lineHeight: 1.2 },
    mobile: { fontSize: '34px', lineHeight: 1.2 },
  },
  h1: {
    default: { fontSize: '56px', lineHeight: 1.2 },
    mobile: { fontSize: '40px', lineHeight: 1.2 },
  },
  h2: {
    default: { fontSize: '40px', lineHeight: 1.2 },
    mobile: { fontSize: '32px', lineHeight: 1.2 },
  },
  h3: {
    default: { fontSize: '32px', lineHeight: 1.3 },
    mobile: { fontSize: '24px', lineHeight: 1.4 },
  },
  h4: {
    default: { fontSize: '24px', lineHeight: 1.4 },
    mobile: { fontSize: '20px', lineHeight: 1.4 },
  },
  h5: {
    default: { fontSize: '20px', lineHeight: 1.4 },
    mobile: { fontSize: '18px', lineHeight: 1.4 },
  },
  tagline: {
    default: { fontSize: '16px', lineHeight: 1.5 },
    mobile: { fontSize: '16px', lineHeight: 1.5 },
  },
  large: {
    default: { fontSize: '20px', lineHeight: 1.5 },
    mobile: { fontSize: '18px', lineHeight: 1.5 },
  },
  medium: {
    default: { fontSize: '18px', lineHeight: 1.5 },
    mobile: { fontSize: '16px', lineHeight: 1.5 },
  },
  regular: {
    default: { fontSize: '16px', lineHeight: 1.5 },
    mobile: { fontSize: '14px', lineHeight: 1.5 },
  },
  small: {
    default: { fontSize: '14px', lineHeight: 1.5 },
    mobile: { fontSize: '12px', lineHeight: 1.5 },
  },
  tiny: {
    default: { fontSize: '12px', lineHeight: 1.5 },
    mobile: { fontSize: '10px', lineHeight: 1.5 },
  },
};

type Typography = keyof typeof FONT_THEME;

interface Props {
  children?: ReactNode;
  className?: string;
  typography?: Typography;
}

type TextProps<Element extends keyof JSX.IntrinsicElements = 'span'> = Props & {
  as?: Element;
} & Omit<AllHTMLAttributes<Element>, 'as'>;

const Text = <Element extends keyof JSX.IntrinsicElements = 'span'>(
  props: TextProps<Element>,
  ref: Ref<HTMLElement>,
) => {
  const isMobile = useMediaQuery({ maxWidth: getLgBreakpoint() - 1 });

  const {
    as: Component = 'span',
    children,
    className,
    typography = 'regular',
    role,
    style,
  } = props as TextProps;

  return (
    <Component
      ref={ref}
      role={role ?? (Component === 'span' ? 'text' : undefined)}
      className={className}
      style={{
        ...FONT_THEME[typography][isMobile ? 'mobile' : 'default'],
        ...style,
      }}
    >
      {children}
    </Component>
  );
};

export default forwardRef(Text);
