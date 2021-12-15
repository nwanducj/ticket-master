<template>
  <div>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
div {
  background: rgba(51, 51, 51, 0.45);
  min-height: 100%;
  z-index: 4;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>