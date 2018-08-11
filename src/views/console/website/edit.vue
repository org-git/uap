<template>
    <el-form label-position="right" label-width="100px" :model="website" size="mini">
        <el-form-item label="网站名称">
            {{ website.name }}
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        let website = {};
        website.name = 'test';
        return { website };
    }
}
</script>
