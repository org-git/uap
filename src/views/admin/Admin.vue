<template>
  <el-container>
    <el-header>
      <u-header></u-header>
    </el-header>
  <el-container>
    <el-row>
      <el-col :span="4">
        <el-aside></el-aside>
      </el-col>
      <el-col :span="20">
        <el-main></el-main>
      </el-col>
    </el-row>
  </el-container>
    <el-footer>
      <u-footer></u-footer>
    </el-footer>
  </el-container>
</template>
