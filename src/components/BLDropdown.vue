<template>
    <select :style="`width: ${selectedWidth}%;`">
        <option v-for="item in list" :key="item">
            {{ item }}
        </option>
    </select>
</template>

<script setup>
const props = defineProps({
    list: {
        type: Array,
        default: () => ([]),
    },
    selectedWidth: {
        type: Number,
        default: 10
    }
})

</script>

<style scoped>
* {
    box-sizing: border-box;
}
</style>