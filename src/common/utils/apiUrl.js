const API_HOST = 'http://192.168.1.177:8088/backstage';
//const API_HOST = 'http://192.168.1.223:8088/backstage';
// const API_HOST = 'http://localhost:9103/wealth/';

let options = {
    "login": API_HOST+"/api/login", //这里是注释
    "roleselectlist":API_HOST+"/api/role/selectList",//后台角色管理列表
    "selectoneRole":API_HOST+"/api/role/selectOne",//角色管理单条查询
    "updateRole":API_HOST+"/api/role/update",//角色管理更新--编辑
    "deleteRole":API_HOST+"/api/role/delete",//角色管理--删除
    "saveRole":API_HOST+"/api/role/save",//角色管理-新增或更新  

    "smartask": API_HOST+"/api/cabinet/selectName", //智能柜列表查询
    'getMenusByPid': API_HOST+"/api/menu/getMenusByMid", //根据父类id获取菜单列表
    'getMenuById': API_HOST+"/api/menu/selectOne",   //根据id获取菜单详情
    'addOrUpdateMenu': API_HOST+"/api/menu/addOrUpdate",  //新增或修改菜单
    "orderselect":API_HOST+"/api/Order/selectList",//订单管理列表查询
    "orderselectone":API_HOST+"/api/Order/orderInfo",//订单详情查询
    "accountselect":API_HOST+"/api/account/selectList",//用户管理列表查询
    "accountselectone":API_HOST+"/api/account/selectOne",//用户详情查询
    "accountcoupon":API_HOST+"/api/accountcoupon/selectList",//用户优惠券详情查询
    "accountupdate":API_HOST+"/api/account/update",//用户管理更新--状态
    "couponselect":API_HOST+"/api/coupon/selectList",//优惠管理列表查询
    "couponinsert":API_HOST+"/api/coupon/insert",//优惠券新增
    "updatecoupon":API_HOST+"/api/coupon/update",//优惠券更新
    "rechargeselect":API_HOST+"/api/chargeconfig/selectList",//充值赠送列表查询
    "rechargeinsert":API_HOST+"/api/chargeconfig/insert",//充值赠送新增
    "rechargeselectone":API_HOST+"/api/chargeconfig/selectOne",//充值单条查询
    "updaterecharge":API_HOST+"/api/chargeconfig/update",//充值更新
    "deleterecharge":API_HOST+"/api/chargeconfig/remove",//充值赠送删除
    "couponselectone":API_HOST+"/api/coupon/selectOne",//优惠管理单条查询
    "paylogselect":API_HOST+"/admin/payLog/selectList",//交易管理列表查询
    "cabinetselect":API_HOST+"/api/cabinet/selectName",//智能柜体管理
    "accountcoupondelete":API_HOST+"/api/accountcoupon/remove",//用户优惠券删除

    "getclothesparme": API_HOST+"/api/clothes/selectList", //获取衣物参数
    "insertclothesparme": API_HOST+"/api/clothes/insert", //新增一条衣物数据
    "updataclothesparme": API_HOST+"/api/clothes/update", //编辑一条衣物数据
    "deleteclothesparme": API_HOST+"/api/clothes/deletedate", //删除一条衣物数据
    "getclothesparmeone": API_HOST+"/api/clothes/selectonedate", //获取衣物参数单条信息
    "uploadimg": API_HOST+"/api/imgUpload/upload", //图片上传接口
    "allclothes": API_HOST+"/api/clothes/allName", //获取衣物大类
    "getclothescolorlist": API_HOST+"/api/clothescolor/selectList", //获取衣物颜色列表
    "insertclothescolor": API_HOST+"/api/clothescolor/insert", //新增衣物颜色
    "getclothescolorone": API_HOST+"/api/clothescolor/selectOne", //查看单条衣物颜色
    "upclothescolorone": API_HOST+"/api/clothescolor/update", //修改单条衣物颜色
    "delclothescolorone": API_HOST+"/api/clothescolor/remove", //删除单条衣物颜色
    "getsmarklist": API_HOST+"/api/cabinet/selectList", //获取柜子列表
    "getsmarkone": API_HOST+"/api/cabinet/select", //查看单个柜子信息
    "getsmarkgroup": API_HOST+"/api/cabinetGroup/all", //获取所有柜子组别
    "insertsmark": API_HOST+"/api/cabinet/insert", //新增柜子信息
    "bannerlist": API_HOST+"/api/sysAdv/selectList", //广告列表
    "bannerone": API_HOST+"/api/sysAdv/selectOne", //广告详情
    "removebannerone": API_HOST+"/api/sysAdv/remove", //删除单条广告
    "updatebannerone": API_HOST+"/api/sysAdv/update", //更新广告信息
    "insertbanner": API_HOST+"/api/sysAdv/insert", //新增广告
    "smarkgrouplist": API_HOST+"/api/cabinetGroup/selectList", //智能柜分组列表
    "insertsmarkgroup": API_HOST+"/api/cabinetGroup/insert", //新增智能柜分组
    "selectsmarkgroup": API_HOST+"/api/cabinetGroup/selectOne", //查看单条智能柜分组
    "updatesmarkgroup": API_HOST+"/api/cabinetGroup/update", //编辑智能柜分组
    "logisticslist": API_HOST+"/api/courier/selectList", //物流人员列表
    "logisticsone": API_HOST+"/api/courier/selectOne", //物流人员详情
    "removelogistics": API_HOST+"/api/courier/remove", //删除物流人员
    "insertlogistics": API_HOST+"/api/courier/insert", //新建物流人员
    "updatelogistics": API_HOST+"/api/courier/update", //编辑物流人员
    "updatelogisticspwd": API_HOST+"/api/courier/updatecupsw", //修改物流人员密码
    "factoryperlist": API_HOST+"/api/personnel/selectList", //工厂人员列表
    "insertfactoryper": API_HOST+"/api/personnel/insert", //新增工厂人员
    "factoryperone": API_HOST+"/api/personnel/selectOne", //工厂人员信息
    "removefactoryperone": API_HOST+"/api/personnel/remove", //删除工厂人员
    "updatefactoryperone": API_HOST+"/api/personnel/update", //编辑工厂人员
    "updatefactoryperpwd": API_HOST+"/api/personnel/updatepsw", //修改工厂人员密码
    "selectsglog": API_HOST+"/api/courier/selectcourier", //柜子组可选物流列表
    "facordercount": API_HOST+"/api/Order/getOrderCount", //工厂概况统计
  
    "roleselectlist":API_HOST+"/api/role/selectList",//后台角色管理列表
    "systemuserlist":API_HOST+"/api/user/selectList",//后台用户管理列表
    "addsystemuserone":API_HOST+"/api/user/addUser",//后台用户添加新用户
    "systemuserone":API_HOST+"/api/user/selectOne",//后台用户信息
    "updatesystemuserone":API_HOST+"/api/user/updateUser",//后台用户信息修改
    "removesystemuserone":API_HOST+"/api/user/remove",//后台用户删除
    "changeuserone":API_HOST+"/api/user/disableUser",//后台用户状态改变
    "systemrolelist":API_HOST+"/api/role/all",//后台角色列表
    
    "versionsend":API_HOST+"/api/version/send",//广播通知终端热更新
    "versionsendone":API_HOST+"/api/version/sendByCabinetId",//(柜子)通知终端热更新

}

module.exports = {
    options: options
}
