# SHOP-API `[CLIENT]`

## Технологии которые используется в проекте

- [VueJS](https://nuxt.com/) - развивающая библиотека для создания `SPA` приложений.
- [NuxtJS](https://nuxt.com/) - 🚀 фреймворк над [VueJS](https://nuxt.com/) для создания как `CSR` так и `SSR` приложений.
- [NuxtUI](https://ui.nuxt.com/) - UI библиотека для [NuxtJS](https://nuxt.com/).
- [VueUse](https://vueuse.org/) - библиотека с полезными утилитками для [VueJS](https://nuxt.com/) с модульным портированием для [NuxtJS](https://nuxt.com/).
- [Pinia](https://pinia.vuejs.org/) - Крутой стейт менеджер для [VueJS](https://nuxt.com/) с портированным модулем 😎
- [Typescript](https://www.typescriptlang.org/) - Типизация для уменьшение ошибок при (-пере)использования кода.
- [zod](https://zod.dev/) - Полностью типизированная [Typescript](https://www.typescriptlang.org/) библиотека для создания схем, в `моём` случае форм.
- [Eslint](https://eslint.org/) - Линтер отслеживания ошибок в коде (как без этого писать проекты 🤷‍♂️)
- [Tailwind](https://tailwindcss.com/) - Крутой инструмент для БЫСТРОГО написания стилей.
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) - утилитка для [Tailwind](https://tailwindcss.com/) которая форматирует стили в разметке. Удаляет не нужные\повторяющиеся классы.
- [Prettier](https://prettier.io/) - Собрат [Eslint](https://eslint.org/), который форматирует код как душе угодно + установлен плагин который форматирует [Tailwind](https://tailwindcss.com/) стили.
- [maska](https://beholdr.github.io/maska/#/) - библиотека для создания масок для элементов формы и очень даже приятная в использовании.
- [DayJS](https://nuxt.com/modules/dayjs) - старая и популярная либа для форматирования дат, установлена как модульное портирование.
- [@iconify-json](https://www.npmjs.com/package/@iconify/json) - прикольная библиотека для использования КУЧУ иконок в проекте, установлены `mdi` иконки.

## Установка зависимостей

Перед использованием, убедитесь что установили зависимости проекта

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Режим разработки

По умолчанию сервер запускается с портом `3000`, по ссылке: `http://localhost:3000`

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Сборка

Вы можете собрать проект двумя способами:

1. Продакшен `build:prod`
2. Режим разработки `build:dev`

Это было сделано для тестирования приложения внезависимости от того какая цель запуска.

```bash
# npm
npm run build:dev
npm run build:prod

# pnpm
pnpm run build:dev
pnpm run build:prod

# yarn
yarn build:dev
yarn build:prod

# bun
bun run build:dev
bun run build:prod
```

И, так же можно сделать предварительный просмотр сборки

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
