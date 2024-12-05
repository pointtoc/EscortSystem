<template>
    <div class="common-layout">
        <el-container>
            <!--注释掉用引入代替  <el-aside width="200px">Aside</el-aside>-->
            <Aside />
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Aside from '../components/aside.vue'
</script>