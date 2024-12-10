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
        <TreeMenu :index="1" :menuData="menuData"/>
    </el-menu>
</template>

<script setup>
/**
 * 这里注意script后面添加了setup，没有添加就无法打印router，会导致undefined.
 * <script setup> 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用单文件组件与组合式 API 时该语法是默认推荐。
 */
import TreeMenu from "../components/treeMenu.vue";
import { useRouter } from "vue-router";
import { reactive } from "vue";

const router = useRouter()
// console.log(router, 'router')
const menuData = reactive(router.options.routes[0].children)


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