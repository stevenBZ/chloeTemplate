
            
<template>
<el-table
    :data="tableDemo"
    border
    style="width: 100%">
<el-table-column
    prop="name"
    label="name">
</el-table-column>
<el-table-column
    prop="route"
    label="route">
</el-table-column>
<el-table-column
    prop="isMenuPage"
    label="isMenuPage">
</el-table-column>
<el-table-column
    prop="menuName"
    label="menuName">
</el-table-column>
<el-table-column
    prop="pageType"
    label="pageType">
</el-table-column>
<el-table-column
    prop="pageDetail"
    label="pageDetail">
</el-table-column>

</el-table>

</template>

            
    <script>
    import {list} from '@/api/list';
    export default {
        name: 'tableDemo',
        created() {
            this.init();
        },
        data() {
            return {
                tableDemo: []
            };
        },
        methods: {
            init() {
                Promise.all([
                    list.gettableDemo()
                ]).then((values) => {
                    console.log(values[0]);
                });
            }
        }
    };
  </script>
        