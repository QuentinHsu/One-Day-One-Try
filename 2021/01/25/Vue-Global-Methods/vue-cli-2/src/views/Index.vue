<template>
  <div>
    <h2>Vue 全局/局部引入方法</h2>
  </div>
</template>

<script>
import exportDefaultImport from '@/components/local/exportDefault/exportDefault.js'
import * as exportImport from "@/components/local/export/export.js"
import {consoleLogLocal} from "@/components/local/export/exportObject.js"
export default {
    data() {
        return {

        }
    },
    created()  {
        exportDefaultImport.consoleLogLocal()
        exportImport.consoleLogLocal()
        consoleLogLocal()
    }
};
</script>

<style>
</style>