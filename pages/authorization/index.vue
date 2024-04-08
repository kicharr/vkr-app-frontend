<script setup>

</script>

<template>
  <main class="main authorization">
    <div class="authorization-content container">
      <authorization-form/>
    </div>
  </main>
</template>

<style scoped lang="scss">
.authorization {
  background-image: url("/images/authorization/auth-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;

  position: relative;
}

.authorization-content {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
}
</style>