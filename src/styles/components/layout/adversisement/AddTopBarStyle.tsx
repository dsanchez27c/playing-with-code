import { style, keyframes } from "typestyle";

const scrollingText = keyframes({
  'from': {
    transform: 'translateX(100%)',
  },
  'to': {
    transform: 'translateX(-130%)',
  },
})

export const AddTopBarStyle = style({
  background: '#020202',
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',

  boxSizing: 'border-box',

  // border: '1px solid red',

  $nest: {
    '& .top-bar-text': {
      padding: 0,
      margin: 0,
      width: '90%',
      color: '#FFFFFF',
      whiteSpace: 'nowrap',
      fontSize: '0.9rem',

      zIndex: 0,

      transform: 'translateX(100%)',
      animation: `${scrollingText} 20s linear infinite`,
    },

    '& .top-bar-btn-container': {
      background: '#020202',
      zIndex: 1,

      $nest: {
        '& .top-bar-btn-action': {
          padding: '0.2rem 0.6rem',
          margin: '0.3rem 0.3rem',
        },
      }
    },


  }
})

