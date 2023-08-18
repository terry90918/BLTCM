<template>
    <input type="text" v-model="something">
    <select>
        <option v-for="item in newList" :value="item">{{ item }}</option>
    </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    't-drop': Boolean,
  },
  data() {
    return {
        list: ['apple', 'cat', 'moon'],
        something: '',
    }
  },
  computed: {
    newList () {
        let temp = []
        if (this.something) {
            temp = this.list.filters((e) => {
                return e.indexOf(this.something) !== -1
            });
        } else {
            temp = this.list
        }
        return temp
    }
  },
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
</style>