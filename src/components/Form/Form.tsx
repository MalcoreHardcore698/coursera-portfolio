import React from 'react';
import type { HTMLProps, PropsWithChildren } from 'react';
import cn from 'classnames';

import Button from 'components/Button';

import './Form.scss';

interface Props extends PropsWithChildren<HTMLProps<HTMLFormElement>> {
  /**
   * Text displayed in the button
   */
  submitText?: string;
  /**
   * Function to be called when sending data
   */
  onSubmit?: () => void;
}

/**
 * Base form component with defined styles
 */
const Form: React.FC<Props> = ({
  submitText = 'Submit',
  className,
  children,
  onSubmit,
  ...props
}) => (
  <form {...props} className={cn('form', className)} onSubmit={onSubmit}>
    <fieldset>
      {children}
      <Button type='submit'>
        {submitText}
      </Button>
    </fieldset>
  </form>
);

export default Form;
