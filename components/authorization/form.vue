<script setup>
const studentStore = useStudentStore();

const currentEnterType = ref('studentNumber');

const studentNumber = ref('');
const phoneNumber = ref('');
const password = ref('');


const authorization = () => {

  if (!studentNumber.value && !phoneNumber.value) {
    document.querySelector('input[name="login"]').classList.add('input--invalid');
    return;
  }

  if (!password.value) {
    document.getElementById('password').classList.add('input--invalid');
    return;
  }

  studentStore.authorization({
    login: studentNumber.value,
    password: password.value
  });

  password.value = '';
  phoneNumber.value = '';
  studentNumber.value = '';
  document.querySelector('input[name="login"]').classList.remove('input--invalid');
  document.getElementById('password').classList.remove('input--invalid');
}


</script>

<template>
  <form id="authorizationForm" class="authorization-form">
    <h1 class="authorization-form__title">Авторизация</h1>

    <div class="authorization-form__select">
      <button @click="currentEnterType = 'studentNumber'" type="button" class="button button--select"
              :class="{'button--select-active' : currentEnterType === 'studentNumber'}">По учебному номеру
      </button>
      <button @click="currentEnterType = 'phoneNumber'" type="button" class="button button--select"
              :class="{'button--select-active' : currentEnterType === 'phoneNumber'}">По номеру телефона
      </button>
    </div>

    <div class="authorization-form__inputs">
      <input
          v-model="studentNumber"
          v-if="currentEnterType === 'studentNumber'"
          id="studentNumber"
          name="login"
          type="text"
          class="input input--authorization"
          placeholder="Введите учебный номер"
          autocomplete="off"
          required
      >

      <input
          v-model="phoneNumber"
          v-else
          type="text"
          class="input input--authorization"
          id="phoneNumber"
          name="login"
          placeholder="Введите номер телефона"
          autocomplete="off"
          required
      >

      <input
          v-model="password"
          type="password"
          class="input input--authorization"
          id="password"
          placeholder="Введите пароль от аккаунта"
          autocomplete="off"
          required
      >
    </div>


    <button @click="authorization" type="button" class="button button--blue">Войти в систему</button>
  </form>
</template>

<style scoped lang="scss">
.authorization-form {
  max-width: 720px;
  width: 100%;

  color: $white;
  box-shadow: 0 8px 100px 0 rgba(0, 0, 0, 0.25);
  background: rgba(53, 53, 53, 0.7);
  border-radius: 5px;
  padding: 50px;


  &__title {
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 30px;

    @include tablet {
      font-size: 25px;
      text-align: center;
    }
  }

  &__select {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;

    @include tablet {
      flex-direction: column;
      gap: 10px;
    }
  }

  &__inputs {
    margin-bottom: 40px;
  }
}
</style>