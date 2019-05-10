import Ajax from '@/utils/ajax';

const ajax = Ajax.getInstance();
////获取列表
export function getList({ params }) {
    return ajax.get('/api/v1/getList', { params });
}
////角色获取接口
export function getRole({ params }) {
    return ajax.get('/api/v1/getRole', { params });
}
////小组获取接口
export function getGroup() {
    return ajax.get('/api/v1/getGroup');
}
////用户新增接口
export function postAddUser({ data }) {
    return ajax.post('/api/v1/addUser', { data });
}
