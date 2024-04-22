import type { UButton } from '#build/components'

declare global {
  export type Nullable<T> = T | null
  export type Keys<T extends Record<string, unknown>> = keyof T
  export type ButtonVariant = typeof UButton.__defaults.variant
}

export {}
