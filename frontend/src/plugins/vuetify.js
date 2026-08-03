import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

export default createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#F9FBFC',
          surface: '#ffffff',
          content: '#f3f3f3',
          primary: '#2166EE',
        },
      },

      dark: {
        dark: true,
        colors: {
          background: '#1a1a1a',
          surface: '#232323',
          content: '#343434',
          primary: '#2166EE',
        },
      },
    },
  },
  defaults: {
    global: {
      style: {
        fontFamily: 'Roboto',
        fontWeight: '900',
      },
    },
  },
})
