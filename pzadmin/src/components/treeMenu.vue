<template>
    <!--动态菜单栏实现,嵌套层级-->
    <!--index是结合数据结构写的，取了第一层的props.index和第二层的meta.id，构成唯一的index，因为他们有层级-->
    <!--key和index一致，唯一值-->
    <template v-for = "(item,index) in props.menuData">
        <el-menu-item 
        @click="handleClick(item, index)"
        v-if="!item.children || item.children.length == 0" 
        :index="'${props.index}-${item.meta.id}'" 
        :key="'${props.index}-${item.meta.id}'">
            <el-icon size="20">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.name }}</span>
        </el-menu-item>
        <el-sub-menu v-else :index="'${props.index}-${item.meta.id}'">
            <template #title>
                <el-icon size ="20">
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.meta.name }}</span>
            </template>
            <treeMenu :index="'${props.index}-${item.meta.id}'" :menuData="item.children"/>
        </el-sub-menu>
    </template>
<!-- 这里是写死的方案，但是要求写一个根据数据动态显示的菜单栏。这种比较简单。
    <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>控制台</span>
    </el-menu-item>
    <el-sub-menu index="2">
        <template #title>
        <el-icon><location /></el-icon>
        <span>权限管理</span>
        </template>
        <el-menu-item index="2-1">账号管理</el-menu-item>
        <el-menu-item index="2-2">菜单管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
        <template #title>
        <el-icon><location /></el-icon>
        <span>DIDI 陪诊</span>
        </template>
        <el-menu-item index="3-1">陪护管理</el-menu-item>
        <el-menu-item index="3-2">订单管理</el-menu-item>
    </el-sub-menu>
-->
</template>

<script setup>
import { handleError } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(['menuData', 'index'])
// console.log(props,'props')

// 创建router实例
const router = useRouter()
// 点击菜单
const handleClick = (item, active) => {
    //console.log(item,'item')    // 这是一个点击动作，要点击菜单项目后才会打印
    router.push(item.meta.path)
}
</script>

<style>

</style>