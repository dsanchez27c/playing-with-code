import { style } from "typestyle";

export const HomeStyle = style({
  padding: '0',
  margin: '0',
  minHeight: '100vh',
  background: '#c4c4c4',

  $nest: {
    '& .logoContainer': {
      width: '100px',
    },
  },
})
