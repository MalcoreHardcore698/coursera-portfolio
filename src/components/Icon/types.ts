import { CSSProperties, SVGProps } from 'react';

export interface IconProps {
  spin?: boolean;
  style?: CSSProperties;
  rotate?: number;
  className?: string;
  component?: React.FC<SVGProps<SVGSVGElement>>;
  onClick?: React.ReactEventHandler;
}

export interface ExtendedIconProps extends Omit<IconProps, 'component'> {
  component: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}
