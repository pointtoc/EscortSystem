<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="aside-constainer"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        >

        <p class="logo-lg">DIDI 陪诊</p>
        <TreeMenu/>
    </el-menu>
</template>

<script>
import TreeMenu from "../components/treeMenu.vue"
const handleOpen = () => {

}
const handleClose = () => {

}
</script>

<style lang="less" scoped>
    .aside-constainer{
        height: 100%;
        .logo-lg{
            height: 50px;
            font-size: 20px;
            line-height: 50px;
            text-align: center;
            color: aliceblue;
        }
    }
</style>