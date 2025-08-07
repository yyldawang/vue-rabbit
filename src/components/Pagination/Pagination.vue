<template>
  <div class="container">
    <el-button
      size="small"
      @click="handlePrev"
      :disabled="currentPage === 1 || disabled"
      class="pagination-btn"
    ><</el-button>
    <template v-for="page in 5" :key="page">
      <el-button
        size="small"
        @click="handlePageChange(page)"
        :disabled="disabled"
        :class="{
          'pagination-btn': true,
          'pagination-btn-active': currentPage === page,
        }"
      >
        {{ page }}
      </el-button>
    </template>
    <el-button
      size="small"
      @click="handleNext"
      :disabled="currentPage === 5 || disabled"
      class="pagination-btn"
    >
      >
    </el-button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  // page: {
  //   type: Number,
  //   default:1
  // }
});

const emit = defineEmits<{ (e: "page-change", page: number): void }>();

const handlePrev = () => {
  if (props.currentPage > 1) {
    emit("page-change", props.currentPage - 1);
  }
};

const handleNext = () => {
  if (props.currentPage < 5) {
    emit("page-change", props.currentPage + 1);
  }
};

const handlePageChange = (page: number) => {
  if (page !== props.currentPage && page >= 1 && page <= 5) {
    emit("page-change", page);
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  width: 1240px;
  margin: 0 auto;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
.pagination-btn {
  min-width: 32px;
  height: 32px;
  margin: 0 4px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  transition: all 0.2s;

  &:hover {
    color: #409eff;
    border-color: #409eff;
  }

  &.pagination-btn-active {
    background-color: #409eff;
    color: #fff;
    border-color: #409eff;

    &:hover {
      background-color: #66b1ff;
      border-color: #66b1ff;
    }
  }

  &:disabled {
    background-color: #f5f7fa;
    color: #c0c4cc;
    border-color: #e4e7ed;
    cursor: not-allowed;
  }
}
</style>
