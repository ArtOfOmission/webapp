<template>    
    <div class="s-margin"> 
        <h2>博客页</h2> 
            <template>
                <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="title"
                    label="标题"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="body"
                    label="内容"
                    width="500">
                </el-table-column>
                <el-table-column
                    prop="author"
                    label="作者">
                </el-table-column>
                <el-table-column
                    prop="updateTime"
                    label="更新时间">
                </el-table-column>
                </el-table>
            </template>

    </div>
</template>
<script>
/* eslint-disable */
export default {
    name:'Posts',
    data(){
      return {
          tableData:null
        }
    },
    mounted(){

        var $this=this;
        $this.$axios.get('/api/Posts?pageindex=1&pagesize=5')
        .then(function (response) {
            $this.tableData=response.data;
        })
        .catch(function (error) {
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