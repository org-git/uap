<template>
    <el-row :gutter="20">
        <el-col :span="4">
            <el-card>
                <img :src="$store.getters.user.avatar" alt="avactar"/>
            </el-card>
        </el-col>
    </el-row>
</template>
