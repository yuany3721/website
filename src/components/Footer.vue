<template>
    <el-footer class="footer">
        <div class="text">
            互联网ICP备案：
            <el-link href="http://www.beian.miit.gov.cn/">鄂ICP备2022017895号-1 </el-link>
        </div>
        <div class="text">
            <span>
                公安联网备案：
                <el-link
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011102005054"
                >
                    <img src="../assets/beian.png" /> 鄂公网安备 42011102005054号
                </el-link>
            </span>
        </div>
        <div class="text">
            <el-link href="http://jubao.py.cnhubei.com/">
                湖北互联网违法和不良信息举报平台
            </el-link>
        </div>
        <div class="text">
            网上有害信息举报专区：
            <el-link href="https://www.12377.cn/" target="_blank">
                中国互联网违法和不良信息举报中心
            </el-link>
        </div>
        <div class="text">
            <a href="mailto:yuany3721@qq.com" class="mailto">yuany3721</a> @ 2021-{{
                new Date().getFullYear()
            }}
        </div>
    </el-footer>
</template>

<style scoped>
.footer {
    display: block;
    padding: 0.5rem 0;
    height: auto;
    text-align: center;
    font-size: small;
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: #4775ff 0px -2px 10px -5px;
}
.text,
.text a {
    color: rgba(0, 0, 0, 0.75);
    text-decoration: none;
}
</style>
