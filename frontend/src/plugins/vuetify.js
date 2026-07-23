import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

export default createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'system',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#dadada',
          surface: '#ffffff',
          content: '#f3f3f3',
          primary: '#1867C0',
        },
      },

      dark: {
        dark: true,
        colors: {
          background: '#1a1a1a',
          surface: '#212121',
          content: '#343434',
          primary: '#90caf9',
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
