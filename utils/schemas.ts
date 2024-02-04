import { z } from 'zod'
import { MIN_PASSWORD_LENGTH } from './constants'
import type { FormSubmitEvent } from '#ui/types'

export const LoginSchema = z.object({
  email: z.string({ required_error: 'Обязательное поле' }).email('Неверный формат Email'),
  password: z
    .string({ required_error: 'Обязательное поле' })
    .min(MIN_PASSWORD_LENGTH, `Минимальное количество символов ${MIN_PASSWORD_LENGTH}`),
})

export const RegisterSchema = LoginSchema.extend({
  confirm_password: z
    .string({ required_error: 'Обязательное поле' })
    .min(MIN_PASSWORD_LENGTH, `Минимальное количество символов ${MIN_PASSWORD_LENGTH}`),
}).refine(data => data.password === data.confirm_password, {
  message: 'Пароли не совпадают',
  path: ['confirm_password'],
})

export const UpdateProfileDataSchema = z.object({
  name: z.string(),
  surname: z.string(),
  middlename: z.string(),
})

export type LoginSchemaType = FormSubmitEvent<z.output<typeof LoginSchema>>
export type RegisterSchemaType = FormSubmitEvent<z.output<typeof RegisterSchema>>
export type UpdateProfileDataSchemaType = FormSubmitEvent<z.output<typeof UpdateProfileDataSchema>>
