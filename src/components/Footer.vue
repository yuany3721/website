<template>
    <div class="footer">
        <div class="text">
            互联网ICP备案：
            <el-link type="info" href="http://www.beian.miit.gov.cn/">鄂ICP备19027833号-1 </el-link>
        </div>
        <div class="text">
            公安联网备案：
            <el-link type="info" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011102003698">
                <img src="../assets/beian.png" /> 鄂公网安备 42011102003698号
            </el-link>
        </div>
        <div class="text">
            <el-link type="info" href="http://jubao.py.cnhubei.com/"> 湖北互联网违法和不良信息举报平台 </el-link>
        </div>
        <div class="text">
            网上有害信息举报专区：
            <el-link type="info" href="https://www.12377.cn/" target="_blank">
                中国互联网违法和不良信息举报中心
            </el-link>
        </div>
        <div class="support">lcl提供技术支持</div>
    </div>
</template>

<style scoped>
.footer {
    height: 7rem;
    padding: 1.5rem 0;
    background: rgb(35 40 45);
    text-align: center;
    color: whitesmoke;
    font-size: small;
}

.text {
    font-size: 14px;
    display: flex;
    justify-content: center;
    margin: 5px;
}
.support {
    font-size: smaller;
    color: grey;
}
</style>
