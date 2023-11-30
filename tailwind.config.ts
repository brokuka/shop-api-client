import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      spacing: {
        4.5: '1.125rem',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
    },
  },
};
