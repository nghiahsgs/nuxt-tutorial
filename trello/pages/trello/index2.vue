<template>
  <div>
    <div class="simple-page">
      <Container @drop="onDrop">
        <Draggable v-for="item in items" :key="item.id">
          <div class="draggable-item">
            {{ item.data }}
          </div>
        </Draggable>

        <hr>

        <Draggable v-for="item in items" :key="item.id">
          <div class="draggable-item">
            {{ item.data }}
          </div>
        </Draggable>
      </Container>
    </div>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import { applyDrag, generateItems } from '@/service/helper'
export default {
  components: { Container, Draggable },
  data () {
    return {
      items: generateItems(3, i => ({ id: i, data: 'Draggable ' + i }))
    }
  },
  methods: {
    onDrop (dropResult) {
      this.items = applyDrag(this.items, dropResult)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
