/* eslint-disable */
<template>    
    <div class="s-margin"> 
        <h2>博客页</h2> 
            <template>
                <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
                </el-table>
            </template>

    </div>
</template>
<script>

export default {
    name:'Posts',
    data(){
      return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    },
    mounted(){

        console.log('请求');
         this.$axios.get('/api/Posts?pageindex=1&pagesize=5')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            debugger
            console.log('请求失败');
        console.log(error);
        });

    }
}
</script>
<style scoped>
.s-margin{
    padding:0 50px 0 50px;

}

</style>