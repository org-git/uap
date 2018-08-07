<template>
  <header>
    <el-row>
      <el-col :span="15">
        <u-navbar mode="horizontal"></u-navbar>
      </el-col>
      <el-col :span="9" class="text-right">
        <el-menu mode="horizontal" class="pull-left">
          <el-menu-item index="1">
            <u-toolbar></u-toolbar>
          </el-menu-item>
          <el-menu-item index="2">
            <u-lang></u-lang>
          </el-menu-item>
        </el-menu>
        <u-login-status class="pull-left"></u-login-status>
      </el-col>
    </el-row>
  </header>
</template>