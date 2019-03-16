<template>
  <div class="content">
    <el-breadcrumb style="margin:5px 0 10px 5px" separator="/">
      <el-breadcrumb-item>测试页面一</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mg-b20">
      <el-form ref="form" :model="searchForm" label-width="60px" label-position="left">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="组名">
              <el-input size="small" v-model="searchForm.group"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="角色">
              <el-input size="small" v-model="searchForm.role"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-button size="small" style="float:right; margin-top: 5px;" type="primary">查询</el-button>
            <el-button size="small" style="float:right; margin-right:10px; margin-top: 5px;" >重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card>
        <el-button type="primary" size="small">新增</el-button>
        <el-table
            :data="searchData"
            border
            style="width: 100%; margin-top:20px;margin-bottom:10px;">
            <el-table-column
              prop="name"
              label="名称">
            </el-table-column>
            <el-table-column
              prop="group"
              label="小组">
            </el-table-column>
            <el-table-column
              prop="role"
              label="角色">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="160">
              <!-- <template slot-scope="scope">
                <el-button type="text" size="small" class="mg-r10">删除</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template> -->
            </el-table-column>
          </el-table>
          <el-pagination
            layout="prev, pager, next"
            style="float:right;"
            :total="50">
          </el-pagination>
    </el-card>
  </div>
</template>

<style>

</style>

<script>
export default {
    name: 'list-detail',
    data() {
        return {
            form: {
                listInterfaceUrl: 'api/v1/demo/list'
            },
            searchForm: {
                name: ''
            },
            listData: [{
                props: 'name',
                type: 'String',
                desc: '姓名'
            }, {
                props: 'birth',
                type: 'date',
                desc: '生日'
            }],
            searchData: [{
                name: '张明明',
                group: '测试小组一',
                role: '测试员'
            }, {
                name: '赵丽',
                group: '开发小组一',
                role: '后台开发'
            }, {
                name: '施紫薇',
                group: '开发小组一',
                role: '前端开发'
            }, {
                name: '陆超',
                group: '开发小组一',
                role: '后台开发'
            }],
            demoListData: []
        };
    }
};
</script>