<template lang="pug">

    #app
        img(
            alt="Vue logo"
            src="./assets/logo.png"
        )
        p Input content: {{ input }}
        input-component(
            v-model="input"
        )

</template>

<script lang="ts">
import Input from "./components/Input.vue"

export default {
    name: 'App',
    data: () => ({
        input: ''
    }),
    components: {
        'input-component': Input,
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
