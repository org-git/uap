<template>
  <el-pagination background :page-size="size" :page-sizes="sizes" :current-page="curr" :layout="layout" :total="total"></el-pagination>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    rows: { required: true },
    total: { required: true },
    curr: { default: 1 },
    sizes: {      default: function () {
        return [10, 20, 50];
      }    },
    size: { default: 10 },
    layout: { default: 'total, sizes, prev, pager, next, jumper' }
  }
}
</script>
