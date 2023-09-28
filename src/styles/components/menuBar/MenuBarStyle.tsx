import { style } from "typestyle";

export const MenuBarStyle = style({

  $nest: {
    '& .menu-bar': {
      display: "flex",
      justifyContent: 'space-between',
      alignItems: 'center',

      $nest: {
        '& .logo-container': {
          width: '100px'
        },

        '& .menu-bar-list-container': {
          padding: 0,
          margin: 0,
          listStyle: 'none',
          display: 'flex',

          $nest: {
            '& li': {
              $nest: {
                '& a': {
                  padding: '0.6rem 1rem',
                  margin: '0rem 0.6rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  color: '#000000'
                },
              },
            },
          },
        },
      },
    },
  },
});