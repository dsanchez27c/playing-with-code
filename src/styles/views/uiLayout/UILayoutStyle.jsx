import { style } from 'typestyle';

export const UILayoutStyle = style({
  minHeight: '100vh',

  $nest: {
    '& .detail-container': {
      backgroundColor: '#c2c2c2'
    }
  }
});
