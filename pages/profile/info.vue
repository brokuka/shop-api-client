<template>
  <ProfileSectionHeader>Контактная информация</ProfileSectionHeader>

  <UForm :schema="UpdateProfileDataSchema" :state="state" class="w-full space-y-4" @submit="onSubmit">
    <UFormGroup label="Имя" name="name" size="lg">
      <UInput v-model="state.name" placeholder="Иван" />
    </UFormGroup>

    <UFormGroup label="Фамилия" name="surname" size="lg">
      <UInput v-model="state.surname" placeholder="Иванов" />
    </UFormGroup>

    <UFormGroup label="Отчество" name="middlename" size="lg">
      <UInput v-model="state.middlename" placeholder="Иванович" />
    </UFormGroup>

    <UTooltip
      text="Чтобы сохранить, нужно изменить как минимум одно поле"
      :popper="{ arrow: true }"
      :ui="tooltipConfig"
      :prevent="isDirty"
    >
      <UButton type="submit" block :disabled="!isDirty" :loading="isLoading"> Сохранить </UButton>
    </UTooltip>
  </UForm>
</template>

<script setup lang="ts">
import type { User } from '~/utils/types';

const userStore = useUserStore();
const toast = useToast();

const state = reactive({
  name: userStore.user?.name ?? '',
  surname: userStore.user?.surname ?? '',
  middlename: userStore.user?.middlename ?? '',
});

const isDirty = computed(() => {
  let key: Keys<typeof state>;

  for (key in state) {
    if (state[key] !== userStore.user?.[key]) {
      return true;
    }
  }

  return false;
});

const isLoading = ref(false);

type UpdateProfileDataResponse = {
  user: User;
  message: string;
};

const onSubmit = async (event: UpdateProfileDataSchemaType) => {
  isLoading.value = true;

  const { data } = await useAuthFetch<UpdateProfileDataResponse>('/user', {
    method: 'PATCH',
    body: {
      user_id: userStore.user?.user_id,
      ...event.data,
    },
  });

  if (data.value) {
    userStore.user = data.value.user;
    toast.add({ title: data.value.message });
  }

  isLoading.value = false;
};

const tooltipConfig = {
  wrapper: 'w-full',
  width: '',
};
</script>
