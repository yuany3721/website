<script lang="ts" setup>
import AuthLoading from '../components/AuthLoading.vue'
import { useAuthStore } from '../stores/auth'
import Cookies from 'js-cookie'
import { authService } from '../Auth'
const authStore = useAuthStore()
const authorized = ref(false)
const apiBase = import.meta.env.VITE_API_BASE
onMounted(async () => {
    const queryString = window.location.search.split('?')[1]
    if (queryString && queryString.includes('token=')) {
        const token = queryString.split('token=')[1]?.split('&')[0] ?? null
        Cookies.set('token', token || '', { expires: 7 })
        // console.log('从URL获取token:', token);
        window.location.href = window.location.href.split('?')[0] ?? window.location.href
    }

    if (authStore.token) {
        const valid = await authService.validateAuth()
        if (
            valid &&
            authStore.userInfo.groups.includes('Home') &&
            authStore.userInfo.name.length > 0
        ) {
            // console.log('token有效');
            authorized.value = true
        } else {
            // console.log('token无效');
            authorized.value = false
        }
    } else {
        // console.log('无token');
        authorized.value = false
    }

    if (!authorized.value) {
        try {
            await authService.startLogin(window.location.href)
        } catch (error) {
            console.error('login err:', error)
        }
    } else {
    }
})
</script>
<template>
    <AuthLoading v-if="!authorized" />
    <el-container class="cv-container" v-else>
        <el-main class="cv-main">
            <h1>📚教育经历</h1>
            <el-timeline>
                <el-timeline-item timestamp="2017年9月-至今" type="primary" hollow>
                    <h2>中国科学技术大学</h2>
                    <p>网络空间安全学院 研究生</p>
                </el-timeline-item>
                <el-timeline-item timestamp="2017年9月-2021年7月" type="primary" hollow>
                    <h2>山西大学</h2>
                    <p>经济与管理学院-信息管理与信息系统专业 本科</p>
                </el-timeline-item>
                <el-timeline-item timestamp="2013年9月-2017年2月" type="primary" hollow>
                    <h2>中国科学技术大学</h2>
                    <p>少年班学院-计算机科学与技术方向 本科</p>
                </el-timeline-item>
            </el-timeline>

            <h1>🔬 科研工作</h1>
            <el-timeline>
                <el-timeline-item timestamp="2020年1月-2020年11月" type="primary" hollow>
                    <h2>公共卫生突发事件网络评论的细粒度情感分类</h2>
                    <ul>
                        <li>
                            构建了适用于公共卫生突发事件的情感细粒度分类体系及对应微博评论语料库 。
                        </li>

                        <li>运用改进的SO-PMI算法提取文本情感特征。</li>

                        <li>提出了一种基于情感词典和k-近邻算法的细粒度多标签情感分类方法 。</li>

                        <li>
                            论文《公共卫生突发事件网络评论的细粒度情感分类———以新冠疫情为例》已在《情报杂志》2020年12月增刊发表
                            。
                        </li>
                    </ul>
                </el-timeline-item>
                <el-timeline-item timestamp="2018年12月-2020年6月" type="primary" hollow>
                    <h2>山西大学第十七期本科生科研训练</h2>
                    <ul>
                        <li>开展““双创赛,对大学生创业倾向的影响”调查研究。</li>

                        <li>
                            运用维度规约、主成分分析等方法构建量表，完成问卷调研和信度效度分析 。
                        </li>

                        <li>通过学校中期检查及结题验收，验收结果为优。</li>
                    </ul>
                </el-timeline-item>
            </el-timeline>

            <h1>💼 实习经历</h1>
            <el-timeline>
                <el-timeline-item timestamp="2019年7月-2019年8月" type="primary" hollow>
                    <h2>Web前端工程师@武汉文思特信息工程有限公司 (现路况智行(武汉)科技有限公司)</h2>
                    <ul>
                        <li>
                            参与2019年第七届军运会无人驾驶汽车展示项目子项目的Web前端页面编写及项目迭代
                            。
                        </li>

                        <li>
                            对公司官网进行重构和页面优化，实现新闻管理、后台管理功能
                            (https://www.whlkzx.com/)。
                        </li>
                    </ul>
                </el-timeline-item>
                <el-timeline-item timestamp="2017年6月-2017年8月" type="primary" hollow>
                    <h2>
                        机器人编程讲师(实习) @ 武汉文曲鑫科技信息有限公司
                        (清华少年科学家名都花园校区)
                    </h2>
                    <ul>
                        <li>
                            独立负责并指导武汉市洪山区代表队获2017年全国青少年科技大赛综合组金奖 。
                        </li>
                    </ul>
                </el-timeline-item>
            </el-timeline>

            <h1>💡 个人项目经历</h1>
            <el-timeline>
                <el-timeline-item timestamp="2020年12月" type="primary" hollow>
                    <h2>中文文献全文检索系统 (https://www.yuany3721.top/IR)</h2>
                    <ul>
                        <li>实现结构化文献的上传、入库。</li>

                        <li>
                            使用正向、逆向最大匹配结合的方法利用百度搜索词库和停用词库实现分词处理
                            。
                        </li>

                        <li>
                            利用TF-IDF算法提取关键词，支持标题、作者、全文三种检索字段，提供简单检索和高级检索两种检索方式
                            。
                        </li>
                    </ul>
                </el-timeline-item>
                <el-timeline-item timestamp="2020年4月" type="primary" hollow>
                    <h2>情感标注协同平台</h2>
                    <ul>
                        <li>
                            为《公共卫生突发事件网络评论的细粒度情感分类》中情感标注工作做支撑 。
                        </li>

                        <li>实现分层消息推送算法、消息缓存队列等功能。</li>
                    </ul>
                </el-timeline-item>
                <el-timeline-item timestamp="2019年10月" type="primary" hollow>
                    <h2>餐饮管理信息系统 (https://www.yuany3721.top/MIS/root)</h2>
                    <ul>
                        <li>
                            提供火锅店进货管理、订单管理、后厨管理、库存管理、关联推送一体化的智能解决方案
                            。
                        </li>
                    </ul>
                </el-timeline-item>
                <el-timeline-item timestamp="2019年11月" type="primary" hollow>
                    <h2>物联网简介 (http://wlw.yuany3721.top/index.html)</h2>
                    <ul>
                        <li>使用纯原生HTML5+CSS+JavaScript实现多页面响应式布局 。</li>
                    </ul>
                </el-timeline-item>
            </el-timeline>

            <h1>🛠 技能</h1>
            <p><strong>编程语言:</strong> Java Python C HTML(XML)</p>
            <el-divider border-style="dashed" />

            <p><strong>熟练工具:</strong> Word, Excel, PowerPoint, Focusky</p>

            <p><strong>掌握基本功能:</strong> Photoshop, Premiere, Audition</p>
            <el-divider border-style="dashed" />

            <p><strong>语言能力:</strong> 英语 (CET4 566, CET6 431)</p>
            <el-divider border-style="dashed" />

            <p><strong>特长:</strong> 羽毛球 (接近国家二级运动员水平)</p>
            <el-timeline>
                <h1>🏅🏆 获奖情况</h1>
                <el-timeline-item timestamp="2019年10月"
                    >全国大学生数学建模竞赛山西赛区一等奖</el-timeline-item
                >
                <el-timeline-item timestamp="2018年2月"
                    >美国大学生数学建模竞赛 Honorable Mention 奖</el-timeline-item
                >
                <el-timeline-item timestamp="2018年6月"
                    >'创青春'山西省新晋挑战杯大学生创业大赛银奖</el-timeline-item
                >
                <el-timeline-item timestamp="2013年12月"
                    >中国科学技术大学优秀学生奖学金银奖
                </el-timeline-item>
                <el-timeline-item timestamp="2018年4月"
                    >山西大学高校体育联盟杯团体赛第一名
                </el-timeline-item>
                <el-timeline-item timestamp="2015年5月"
                    >安徽省高校羽毛球邀请赛第四名</el-timeline-item
                >
            </el-timeline>

            <h1>🤝 社团组织经历</h1>
            <el-timeline>
                <el-timeline-item timestamp="2015年8月-2016年7月">
                    <h2>中国科学技术大学学生羽毛球协会会长</h2>
                    <p>组织开展首届师生交流赛、校岛友谊赛，协会年度评定三星 。</p>
                </el-timeline-item>
                <el-timeline-item timestamp="2017年10月-2019年9月">
                    山西大学2017级信息管理与信息系统专业班长
                </el-timeline-item>
                <el-timeline-item timestamp="2013年11月-2015年3月">
                    中国科学技术大学2013级少年班副团支书
                </el-timeline-item>
            </el-timeline>
        </el-main>

        <el-aside>
            <el-avatar
                :size="50"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
            <h1 class="name">李承霖</h1>
            <p class="subtitle">男 | 1997年11月11日出生 | 中共党员</p>
            <el-icon><Message /></el-icon> li1116@mail.ustc.edu.cn

            <el-icon><Phone /></el-icon> 181 4056 0315

            <el-icon><Link /></el-icon>
            <a href="https://www.yuany3721.top/" target="_blank">https://www.yuany3721.top/</a>
        </el-aside>
    </el-container>
</template>
<style scoped>
.cv-container {
    max-width: 1280px;
    margin: auto;
    border: 1px solid;
}
.cv-main h1 {
    margin: 1em 0;
}
</style>
