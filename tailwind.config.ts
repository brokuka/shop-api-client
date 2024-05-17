import type { Config } from 'tailwindcss'
import { SCREEN_SIZES } from './utils/constants'

const screens = Object.fromEntries(
  Object.entries(SCREEN_SIZES).map(([key, value]) => [key.toLowerCase(), `${value}px`]),
)

export default <Partial<Config>>{
  theme: {
    extend: {
      spacing: {
        4.5: '1.125rem',
      },
      screens,
    },
  },
}
