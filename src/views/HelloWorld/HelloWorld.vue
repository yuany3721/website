<script setup lang="ts">
import Card from "./CardsMain/Card.vue";
</script>

<template>
    <el-container>
        <el-main class="card-wrap">
            <Card
                title="周计划"
                message="<p>简洁清晰的每周工作内容总结与计划展示页面</p>
                <p>支持设置多项工作、低优先级工作、待跟进任务，按时间线呈现内容</p>"
                :techs="['Vite', 'Vue']"
                href="https://plan.yuany3721.site"
                start="2023.06"
                newCard
            />
            <Card
                title="Vuepress-reco-yuany3721"
                message="<p>一个使用VuePress搭建的静态博客，支持katex数学公式。</p>
                <p>主题魔改自优秀的<a href='https://vuepress-theme-reco.recoluan.com/'>Vuepress-theme-reco</a>。</p>"
                :techs="['VuePress']"
                href="https://blog.yuany3721.site"
                start="2022.05"
            />
            <Card
                title="基于LDA的社交网络话题-情感分析系统"
                message="<p>一个能根据用户输入话题实时（伪）爬取知乎、微博、贴吧三个平台话题评论，并进行关键词提取、主题分析、情感分析的舆情监测系统</p>
                <p><strong><small>平台已申请并获得软件著作权，著作权号：2021SR0952399</small></strong></p>"
                :techs="['LDA算法', 'Vue', 'Spring']"
                start="2021.04毕业设计"
                stop="由于相关平台爬取规则改变等原因，平台demo于2021年9月暂停展示"
            />
            <Card
                title="培训班作业管理系统"
                message="<p>一个由jsp实现的管理信息系统。</p>
                <p>系统含有管理员、教师、学生三种角色，实现了人员、课程、作业等实体增删改查等功能的呈现。</p>"
                :techs="['jsp']"
                author="董怡婷 刘艺瀛 阳灵鑫 李承霖"
                start="2020.12《信息系统设计与开发》"
                stop="由于服务器迁移，于2022.12停止服务"
            />
            <Card
                title="在线协同标注平台"
                message="<p>为《公共卫生突发事件网络评论的细粒度情感分类》提供数据支持。</p>
                <p>对微博评论语料采用分层随机抽样的方式进行推送。情感分类标注人员对收到的推送评论进行14类细粒度情感标注。</p>
                <p>通过合理的推送算法和缓存方式，在测试中平台支持不超过百人规模的在线标注实验。</p>
                <p><small>相关论文发表于《情报杂志》2020年12月增</small></p>"
                :techs="['Python', 'Spring']"
                author="李承霖 阳灵鑫 董怡婷 孙丽晨 杜鸿伦 由丽萍"
                start="2020.04"
                stop="由于语料具有与社会环境强关联的时效性，于2021.07关闭平台"
            />
            <Card
                title="用户权限管理"
                message="<p>一个没啥用的用户权限控制。</p>
                <p>提供了极其简陋的用户注册、登录、权限控制和一个胡乱设计的积分系统。</p>
                <p><small>为什么不直接用开源的单点登录系统呢</small></p>"
                start="2020.03"
                archived
            />
            <Card
                title="中文文献全文检索系统"
                message="<p>一个不借用三方自然语言处理库实现的中文文献全文检索系统。</p>
                <p>使用双向最大匹配法通过百度中文分词、停用词词库处理文献，通过处理中生成的倒排档实现关键词和全文检索，检索支持简单的布尔逻辑输入。系统同时支持以设定的格式上传文献并自动处理入库。</p>
                <p><small>于2022.04使用Vue3、Java11重构</small></p>
                <p><small>开源于<a href='https://github.com/yuany3721/ir'>https://github.com/yuany3721/ir</a></small></p>"
                :techs="['双向最大匹配', '布尔逻辑检索', 'Vue', 'Spring']"
                start="2020.01《信息组织、存储与检索》"
                stop="由于服务器迁移，于2022.12停止服务"
            />
            <Card
                title="物联网简介"
                message="<p>一个使用原生HTML5+CSS3盒模型实现的响应式静态网页。</p>
                <p>感谢<a href='http://www.iotcn.org.cn/'>中国物联网</a>和<a href='http://www.chinacloud.cn/'>云计算世界</a>公开的资源。</p>
                <p><small>开源于<a href='https://github.com/yuany3721/wlw'>https://github.com/yuany3721/wlw</a></small></p>"
                :techs="['html5', 'css3']"
                href="https://wlw.yuany3721.site/"
                start="2019.12《网站设计与开发》"
            />
            <Card
                title="悦读频道"
                message="<p>一个使用Dreamweaver2017和Table布局实现的静态网页。</p>
                <p><small>开源于<a href='https://github.com/yuany3721/ydpd'>https://github.com/yuany3721/ydpd</a></small></p>"
                :techs="['Dreamweaver']"
                href="https://ydpd.yuany3721.site/index.html"
                author="小婷婷<span style='color:red;'>❤</span>"
                start="2019.12《网站设计与开发》"
            />
            <Card
                title="文件管理系统"
                message="<p>一个没啥用的文件管理系统。</p>
                <p>提供了文件上传、下载及相关统计功能。</p>
                <p><small>为什么不直接搭一个网盘呢</small></p>"
                start="2019.11"
                archived
            />
            <Card
                title="火锅店"
                message="<p>一个简单的管理信息系统。</p>
                <p>包括食材采购统计、点菜统计等功能。</p>
                <p><small>于2022.04使用Vue3、Java11重构</small></p>
                <p><small>开源于<a href='https://github.com/yuany3721/glxxxt'>https://github.com/yuany3721/glxxxt</a></small></p>"
                :techs="['Vue', 'Spring']"
                href="http://glxxxt.yuany3721.top"
                start="2019.10《管理信息系统》"
                stop="由于服务器迁移，于2022.12停止服务"
            />
        </el-main>
    </el-container>
</template>

<style scoped>
.footer {
    margin: 0;
    padding: 0;
    height: auto !important;
    display: flex;
    opacity: 0.8;
}

.card-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
</style>
