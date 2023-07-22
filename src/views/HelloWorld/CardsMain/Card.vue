<template>
    <el-card :class="stop?.length != undefined && stop?.length > 1 ? 'card archived' : 'card'" @click="open">
        <template #header>
            <div :class="newCard ? 'card-header new' : 'card-header'">
                <template v-if="newCard">
                    <svg height="1em" width="1em" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="#2172f3"
                            d="M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
                        ></path>
                    </svg>
                </template>
                <span v-html="title"></span>
            </div>
        </template>
        <p class="card-message" v-html="message"></p>
        <div class="author" v-if="author?.length != undefined && author?.length > 1">
            <el-divider content-position="left">Author</el-divider>
            <span v-html="author"></span>
        </div>
        <el-divider content-position="left">
            <template v-if="start?.length != undefined && start?.length > 1">{{ start }}</template>
        </el-divider>
        <template v-if="stop">
            <p class="card-message"><small v-html="stop"></small></p>
            <br />
        </template>
        <div class="tag-container" v-for="tech in techs">
            <el-tag size="small">{{ tech }}</el-tag>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({
    title: String, // card header
    message: String, // html string --> card content
    href: String, // card link to (can be blank)
    start: String, // start time string
    stop: String, // stop time string
    techs: Array, // tech list
    author: String, // author info, default blank
    newCard: Boolean, // new card selection, default blank for not new
});
function open(event: MouseEvent) {
    if ((event.target as HTMLElement).tagName === "A") {
        event.preventDefault();
        const href = (event.target as HTMLElement)?.getAttribute("href");
        if (href) {
            window.open(href);
        }
        return; // 阻止冒泡
    }
    if (props.href?.length == undefined || props.href?.length < 1) return;
    if (props.stop?.length != undefined && props.stop?.length > 1) return;
    window.open(props.href);
    // console.log(props.href);
}
// console.log(props.title, props.archived);

const { title, message, newCard, start, stop, author, techs } = toRefs(props);
</script>

<style scoped>
.card {
    width: 420px;
    margin: 10px;
    cursor: pointer;
    opacity: 0.9;
}
.archived {
    cursor: default !important;
    opacity: 0.7;
}
.archived:hover {
    box-shadow: 0 1px 8px 0 #666 !important;
    transition: 0.5s;
}
.card:hover {
    box-shadow: 0 1px 8px 0 #2172f3;
    transition: 0.5s;
}
.card-header {
    font-weight: bolder;
    display: flex;
    align-content: center;
    line-height: 1em;
}
.card .author {
    font-size: smaller;
}
.card-message {
    margin: 0;
    font-family: "element-icons";
}
.card-message:deep(p) {
    margin: 0 0 0.3em 0;
}
.card-message:deep(a) {
    text-decoration: none;
    color: inherit;
    color: #2172f3;
}
.card-message:deep(small) {
    color: rgba(0, 0, 0, 0.6);
}
.card-message:deep(a:hover) {
    color: #1b0ff5;
}
.card-message:deep(ul) {
    margin: 0;
    padding-left: 20px;
}
.new {
    color: #2172f3;
}
.tag-container {
    display: inline-flex;
    padding: 0 0.4em 0 0;
}
.card:deep(.el-divider__text.is-left) {
    font-size: x-small;
    left: 8px;
    padding: 0 5px;
}
.card:deep(.el-divider.el-divider--horizontal) {
    height: 2px;
    background-color: #4775ff;
    width: 225px;
    margin: 20px 0;
}
.author:deep(.el-divider__text.is-left) {
    font-size: x-small;
    left: 8px;
    padding: 0 5px;
}
.author:deep(.el-divider.el-divider--horizontal) {
    height: 2px;
    background-color: #4775ff;
    width: 135px;
    margin: 20px 0;
}
</style>
