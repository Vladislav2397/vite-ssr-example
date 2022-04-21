<template lang="pug">

    label.b-input
        .__label
        input.__field(
            type="text"
            v-model="valueModel"
        )
        .__description

</template>

<script lang="ts">
import { Component, VModel, Vue } from 'vue-property-decorator'

@Component
export default class Input extends Vue {
    @VModel() valueModel!: string
}
</script>