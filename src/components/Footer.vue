<template>
    <el-footer class="footer">
        <div class="text">
            <span>
            互联网ICP备案：
            <el-link type="info" href="http://www.beian.miit.gov.cn/"
                >鄂ICP备2022017895号-1
            </el-link>
            </span>
            <span>
                公安联网备案：
            <el-link
                type="info"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011102005054"
            >
                <img src="../assets/beian.png" /> 鄂公网安备 42011102005054号
            </el-link>
            </span>
            
        </div>
        <div class="text">
            <el-link type="info" href="http://jubao.py.cnhubei.com/">
                湖北互联网违法和不良信息举报平台
            </el-link>
        </div>
        <div class="text">
            网上有害信息举报专区：
            <el-link type="info" href="https://www.12377.cn/" target="_blank">
                中国互联网违法和不良信息举报中心
            </el-link>
        </div>
        <div class="support">
            <a href="mailto:yuany3721@qq.com" class="mailto">yuany3721</a> @ 2021-{{
                new Date().getFullYear()
            }}
        </div>
    </el-footer>
</template>

<style scoped>
.footer {
    display: flex;
    flex-direction: column;
    min-height: 8rem;
    padding: 0.5rem 0;
    background: rgba(30, 50, 70, 0.95);
    text-align: center;
    color: whitesmoke;
    font-size: small;
}

.text {
    font-size: 14px;
}
.support {
    font-size: smaller;
    color: grey;
}
.mailto {
    text-decoration: none;
    color: white;
}
</style>
