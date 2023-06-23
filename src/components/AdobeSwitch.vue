<template>
  <div>
    <div class="var wrapper" style="width: min-content" :style="style">
      <input
        type="checkbox"
        :id="`switch-${hash}`"
        class="switch-input"
        :disabled="disabled"
      />
      <label :for="`switch-${hash}`" class="switch"></label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    size: { default: "medium" },
    disabled: { default: false },
  },
  computed: {
    style() {
      return {
        xs: {
          "--switch-width": "28px",
          "--switch-height": "16px",
          "--circle-size": "16px",
        },
        small: {
          "--switch-width": "32px",
          "--switch-height": "20px",
          "--circle-size": "20px",
        },
        medium: {
          "--switch-width": "40px",
          "--switch-height": "24px",
          "--circle-size": "24px",
        },
        large: {
          "--switch-width": "48px",
          "--switch-height": "28px",
          "--circle-size": "28px",
        },
      }[this.size];
    },
    hash() {
      return Math.random().toFixed(16);
    },
  },
};
</script>
<style lang="scss" scoped>
.var {
  --switch-width: 40px;
  --switch-height: 24px;
  --circle-size: 24px;
  --circle-padding: 0px;
  --circle-bg: #fff;
  --circle-on-bg: #fff;
  --switch-bg: #e1e1e1;
  --switch-on-bg: #1473e6;
  --ripple-color: #ffffff70;
  --border-width: 0px;
  --border-color: transparent;
  --shadow-color: transparent;
  --circle-border-width: 2px;
  --circle-border-color: #8e8e8e;
  --circle-on-border-width: 2px;
  --circle-on-border-color: #1473e6;
}

.switch {
  width: var(--switch-width);
  height: var(--switch-height);
  border-radius: 100px;
  border: var(--border-width) solid var(--border-color);
  cursor: pointer;
  background: var(--switch-bg);
  display: flex;
  position: relative;
  align-items: center;
  transition: all 125ms;
  z-index: 0;
  // The plate
  &::before {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    content: "";
    display: block;
    background: var(--circle-bg);
    width: var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    border: var(--circle-border-width) solid var(--circle-border-color);
    position: absolute;
    transition: all 125ms ease-in-out;
    // transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    left: var(--circle-padding);
    filter: drop-shadow(0px 0px 4px var(--shadow-color));
  }
  // The circle handle
  &::after {
    content: "";
    display: block;
    background: var(--ripple-color);
    width: var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    position: absolute;
    // transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: all 125ms ease-in-out;
    left: var(--circle-padding);
    opacity: 0;
    transform: scale(0);
    z-index: -1;

    /*   left: calc(var(--circle-padding) * 2 + var(--circle-size)); */
  }
  .switch-input:checked + & {
    background: var(--switch-on-bg);
    &::before {
      background: var(--circle-on-bg);
      border: var(--circle-on-border-width) solid var(--circle-on-border-color);
    }
    &::after {
      z-index: -1;
      // animation: ripple 0.3s alternate;
    }
    &::before,
    &::after {
      left: calc(
        var(--switch-width) - var(--circle-size) - var(--circle-padding)
      );
    }
  }
  .switch-input:not(:checked):not(:disabled):hover + &:hover {
    --circle-border-color: #707070;
    --circle-padding: 4px;
  }
  .switch-input:checked:not(:disabled):hover + &:hover {
    --switch-on-bg: #0d66d0;
  }
  .switch-input:not(:checked):disabled + & {
    --switch-bg: #e1e1e1;
    --circle-border-color: #cacaca;
  }
  .switch-input:checked:disabled + & {
    --switch-on-bg: hsl(213,60%,89%);
    --circle-on-border-color: hsl(213,60%,89%);
  }
}

.switch-input {
  display: none;
}
</style>
