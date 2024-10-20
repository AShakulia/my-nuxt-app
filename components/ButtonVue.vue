<template>
  <button
    :class="[
      'button', 
      getColorClasses(), 
      { 'button--rounded': rounded }, 
      { 'button--disabled': disabled }, 
      { 'button--enabled': !disabled },
      { 'button--large': size === 'large' }
    ]"
    :disabled="disabled"
    @click="clickOnButton"
  >
    <span class="button__label">
      {{ label }}
    </span>
  </button>
</template>

<script setup lang="js">
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    required: false
  },
  outlined: {
    type: Boolean,
    required: false
  },
  size: {
    type: String,
    default: 'normal'
  }
})

const emit = defineEmits(['click'])

const clickOnButton = () => {
    emit('click')
}

const getColorClasses = () => {
  const baseColor = {
    primary: 'button--primary',
    success: 'button--success',
    danger: 'button--danger',
    warning: 'button--warning',
    info: 'button--info'
  }

  return props.outlined
    ? `button--outlined-${props.color}`
    : baseColor[props.color] || baseColor.primary
}
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 8px 16px;
  transition: background-color 0.2s ease, color 0.2s ease;
  border-radius: 4px;
}

.button--rounded {
  border-radius: 50%;
}

.button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button--enabled {
  cursor: pointer;
}

.button--large {
  font-size: 1.125rem;
}

/* Цветовые схемы */
.button--primary {
  background-color: #3b82f6; /* bg-blue-500 */
  color: white;
}
.button--primary:hover {
  background-color: #1d4ed8; /* hover:bg-blue-700 */
}

.button--success {
  background-color: #10b981; /* bg-green-500 */
  color: white;
}
.button--success:hover {
  background-color: #047857; /* hover:bg-green-700 */
}

.button--danger {
  background-color: #ef4444; /* bg-red-500 */
  color: white;
}
.button--danger:hover {
  background-color: #b91c1c; /* hover:bg-red-700 */
}

.button--warning {
  background-color: #f59e0b; /* bg-yellow-500 */
  color: white;
}
.button--warning:hover {
  background-color: #d97706; /* hover:bg-yellow-700 */
}

.button--info {
  background-color: #14b8a6; /* bg-teal-500 */
  color: white;
}
.button--info:hover {
  background-color: #0f766e; /* hover:bg-teal-700 */
}

/* Для outlined кнопок */
.button--outlined-primary {
  border: 2px solid #3b82f6; /* border-primary */
  color: #3b82f6; /* text-primary */
  background: transparent;
}
.button--outlined-primary:hover {
  background-color: #3b82f6;
  color: white;
}

.button--outlined-success {
  border: 2px solid #10b981;
  color: #10b981;
  background: transparent;
}
.button--outlined-success:hover {
  background-color: #10b981;
  color: white;
}

.button--outlined-danger {
  border: 2px solid #ef4444;
  color: #ef4444;
  background: transparent;
}
.button--outlined-danger:hover {
  background-color: #ef4444;
  color: white;
}

.button--outlined-warning {
  border: 2px solid #f59e0b;
  color: #f59e0b;
  background: transparent;
}
.button--outlined-warning:hover {
  background-color: #f59e0b;
  color: white;
}

.button--outlined-info {
  border: 2px solid #14b8a6;
  color: #14b8a6;
  background: transparent;
}
.button--outlined-info:hover {
  background-color: #14b8a6;
  color: white;
}

.button__label {
  width: 100%;
}
</style>
