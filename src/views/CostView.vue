<script setup lang="ts">
import AuthLoading from '@/components/AuthLoading.vue'
import { authService } from '../Auth'
import { useAuthStore } from '../stores/auth'
import Cookies from 'js-cookie'
import { format } from 'date-fns'
import axios from 'axios'
const apiBase = import.meta.env.VITE_API_BASE

const authorized = ref(false)
const authStore = useAuthStore()

interface Item {
    id: number
    name: string
    price: number
    start_at: string
    till_now: number
    inuse: boolean
    discontinued_at: string
    discontinued_price: number
    notes: string
}

const items = ref<Item[]>([])

// computed header info
const headerInfo = computed(() => {
    return {
        total: items.value.length,
        inuse: items.value.filter((item) => item.inuse).length,
        notInuse: items.value.filter((item) => !item.inuse).length,
        totalCost: items.value.reduce((acc, item) => acc + item.price, 0),
        totalCostInuse: items.value
            .filter((item) => item.inuse)
            .reduce((acc, item) => acc + item.price, 0),
        costPerDay: items.value
            .filter((item) => item.inuse)
            .reduce((acc, item) => acc + (item.till_now > 0 ? item.price / item.till_now : 0), 0),
    }
})

const showNotInuse = ref(false)

const itemDialogConfig = reactive({
    visible: false,
    loading: false,
    item_info: {} as Item,
})

const handleCardClick = (item: Item) => {
    // console.log('Card clicked', item)
    itemDialogConfig.item_info = JSON.parse(JSON.stringify(item))
    itemDialogConfig.visible = true
}
const handleDialogClose = (done: () => void) => {
    ElMessageBox.confirm('放弃修改？').then(() => {
        done()
    })
}
const handleItemNew = () => {
    itemDialogConfig.loading = true
    itemDialogConfig.item_info = {
        id: -1,
        name: '',
        price: 0,
        start_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        till_now: 0,
        inuse: true,
        discontinued_at: '',
        discontinued_price: 0,
        notes: '',
    }
    itemDialogConfig.loading = false
    itemDialogConfig.visible = true
}

const handleItemChange = () => {
    itemDialogConfig.loading = true
    console.log('Item changed', itemDialogConfig.item_info)

    if (itemDialogConfig.item_info.id === -1) {
        // id == -1 新建item
        // console.log('Creating new item')
        axios
            .post(`${apiBase}/item_track/create_item`, {
                name: itemDialogConfig.item_info.name,
                price: itemDialogConfig.item_info.price.toFixed(2),
                start_at: itemDialogConfig.item_info.start_at,
                discontinued_at: itemDialogConfig.item_info.discontinued_at,
                discontinued_price: itemDialogConfig.item_info.discontinued_price.toFixed(2),
                notes: itemDialogConfig.item_info.notes,
            })
            .then((response) => {
                if (response.data) {
                    axios
                        .get(`${apiBase}/item_track/get_item/${response.data}`)
                        .then((response) => {
                            console.log('get_item', response.data)
                            items.value.unshift(response.data)
                        })
                    // items.value.unshift(response.data)
                }
            })
    } else {
        // console.log('Updating existing item')
        axios
            .post(`${apiBase}/item_track/update_item`, {
                id: itemDialogConfig.item_info.id,
                name: itemDialogConfig.item_info.name,
                price: itemDialogConfig.item_info.price.toFixed(2),
                start_at: itemDialogConfig.item_info.start_at,
                discontinued_at: itemDialogConfig.item_info.discontinued_at,
                discontinued_price: itemDialogConfig.item_info.discontinued_price.toFixed(2),
                notes: itemDialogConfig.item_info.notes,
                inuse: itemDialogConfig.item_info.inuse,
            })
            .then((response) => {
                if (response.data) {
                    // update item in items array
                    const index = items.value.findIndex(
                        (item) => item.id === itemDialogConfig.item_info.id,
                    )

                    axios
                        .get(`${apiBase}/item_track/get_item/${itemDialogConfig.item_info.id}`)
                        .then((response) => {
                            items.value[index] = response.data
                        })
                }
            })
    }

    itemDialogConfig.loading = false
    itemDialogConfig.visible = false
}

const handleItemDelete = () => {
    itemDialogConfig.loading = true
    // console.log('Item deleted', itemDialogConfig.item_info)
    // console.log(
    //     'Deleting item id',
    //     itemDialogConfig.item_info.id,
    //     typeof itemDialogConfig.item_info.id,
    // )
    axios
        .post(`${apiBase}/item_track/delete_item`, {
            id: itemDialogConfig.item_info.id,
        })
        .then((response) => {
            if (response.data) {
                // remove item from items array
                const index = items.value.findIndex(
                    (item) => item.id === itemDialogConfig.item_info.id,
                )
                if (index !== -1) {
                    items.value.splice(index, 1)
                }
            }
        })
    itemDialogConfig.loading = false
    itemDialogConfig.visible = false
}

const get_all_items = async () => {
    await axios.get(`${apiBase}/item_track/get_all_items`).then((response) => {
        // console.error(response.data)
        // console.log('items', items)
        items.value.push(...response.data)
        // console.log('done')
    })
}

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
        get_all_items()
    }
})
</script>

<template>
    <AuthLoading v-if="!authorized" />
    <el-container class="cost-container" v-else>
        <el-header>
            <el-row :gutter="5" class="header-row">
                <el-col :span="8" :offset="2">
                    <el-statistic
                        title="总资产"
                        :value="headerInfo.totalCost"
                        :precision="2"
                        prefix="¥"
                    />
                </el-col>
                <el-col :span="4">
                    <el-statistic title="使用中资产" :value="headerInfo.inuse" />
                </el-col>
                <el-col :span="4">
                    <el-statistic title="已退役资产" :value="headerInfo.notInuse" />
                </el-col>
            </el-row>
            <el-row class="header-row" :gutter="5">
                <el-col :span="8" :offset="2">
                    <el-statistic
                        title="使用中总资产"
                        :value="headerInfo.totalCostInuse"
                        :precision="2"
                        prefix="¥"
                    />
                </el-col>
                <el-col :span="8">
                    <el-statistic
                        title="日均花费"
                        :value="headerInfo.costPerDay"
                        :precision="2"
                        prefix="¥"
                    />
                </el-col>
            </el-row>
        </el-header>

        <el-main>
            <div class="main-header">
                <el-switch
                    v-model="showNotInuse"
                    class="showInuse-switch"
                    active-text="显示已退役资产"
                    inactive-text="不显示已退役资产"
                    inline-prompt
                    width="12em"
                    size="large"
                    style="--el-switch-on-color: #409eff; --el-switch-off-color: #13ce66"
                />
                <el-button type="primary" @click="handleItemNew">+ New Item</el-button>
            </div>
            <el-card
                v-for="item in items"
                :key="item.id"
                :class="'cost-card ' + (item.inuse ? 'inuse-card' : 'notinuse-card')"
                @click="handleCardClick(item)"
                v-show="showNotInuse ? true : item.inuse"
            >
                <el-splitter>
                    <el-splitter-panel :resizable="false">
                        <el-row class="cost-name">
                            {{ item.name }}
                        </el-row>
                        <el-row>
                            <el-col :span="10" class="cost-start">
                                {{ item.start_at.split('T')[0] }}
                                <template v-if="!item.inuse"
                                    >~ {{ item.discontinued_at.split('T')[0] }}</template
                                >
                            </el-col>
                            <el-col :span="7" class="cost-price">
                                ¥ {{ Number(item.price).toFixed(2) }}
                            </el-col>
                            <el-col :span="7" class="cost-perday" v-if="item.till_now > 0">
                                {{ Number(item.price / item.till_now).toFixed(2) }} / 天
                            </el-col>
                        </el-row>
                        <!-- <p>Notes: {{ item.notes }}</p> -->
                    </el-splitter-panel>
                    <el-splitter-panel size="20%" class="cost-days-panel">
                        <div class="cost-days">
                            <span v-if="!item.inuse">已退役</span>{{ item.till_now }} 天
                        </div>
                    </el-splitter-panel>
                </el-splitter>
            </el-card>
        </el-main>
    </el-container>
    <el-dialog
        v-model="itemDialogConfig.visible"
        :title="itemDialogConfig.item_info.id === -1 ? 'New Note' : 'Note'"
        :before-close="handleDialogClose"
    >
        <div v-loading="itemDialogConfig.loading"></div>

        <el-form>
            <el-form-item label="名称" label-width="8em">
                <el-input v-model="itemDialogConfig.item_info.name" />
            </el-form-item>

            <el-form-item label="价格" label-width="8em">
                <el-input-number
                    v-model="itemDialogConfig.item_info.price"
                    :precision="2"
                    :step="0.1"
                >
                    <template #prefix>
                        <span>￥</span>
                    </template>
                </el-input-number>
            </el-form-item>

            <el-form-item label="购买日期" label-width="8em">
                <el-date-picker
                    v-model="itemDialogConfig.item_info.start_at"
                    type="date"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    :disabled="itemDialogConfig.loading"
                />
            </el-form-item>
            <el-form-item label="状态" label-width="8em">
                <el-switch
                    active-text="还在用"
                    inactive-text="已退役"
                    v-model="itemDialogConfig.item_info.inuse"
                />
            </el-form-item>
            <template v-if="!itemDialogConfig.item_info.inuse">
                <el-form-item label="退役日期" label-width="8em">
                    <el-date-picker
                        v-model="itemDialogConfig.item_info.discontinued_at"
                        type="date"
                        format="YYYY-MM-DD"
                        value-format="YYYY-MM-DD"
                        :disabled="itemDialogConfig.loading"
                    />
                </el-form-item>

                <el-form-item label="残值" label-width="8em">
                    <el-input v-model="itemDialogConfig.item_info.discontinued_price" />
                </el-form-item>
            </template>

            <el-form-item label="备注" label-width="8em">
                <el-input type="textarea" v-model="itemDialogConfig.item_info.notes" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="itemDialogConfig.visible = false">取消</el-button>
                <el-button
                    type="danger"
                    @click="handleItemDelete"
                    v-show="itemDialogConfig.item_info.id > 0"
                    >删除</el-button
                >
                <el-button type="primary" @click="handleItemChange"> 确认 </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<style scoped>
.el-header {
    display: contents;
}
.header-row {
    margin: 1em 0 0 0;
}
.el-statistic:deep(.el-statistic__head) {
    font-size: large;
    font-weight: bold;
    color: rgb(51, 126, 204);
}
.el-statistic:deep(.el-statistic__content) {
    font-weight: bold;
    color: #409eff;
}
.el-main {
    padding: 10px;
}
.cost-container {
    max-width: 720px;
    margin: auto;
}
.cost-card {
    margin: 5px;
    border-radius: 1em;
}
.inuse-card {
    background-color: rgb(160, 207, 255);
}
.notinuse-card {
    background-color: lightgray;
}
.cost-name {
    font-size: larger;
    font-weight: bolder;
}
.cost-card:deep(.cost-days-panel) {
    display: flex;
    align-items: center;
}
.cost-days {
    font-size: larger;
    font-weight: bolder;
    margin: auto;
}
.main-header > .el-switch,
.main-header > .el-button {
    margin: 5px 10px;
}
.showInuse-switch:deep(.is-text) {
    font-size: var(--el-font-size-base);
}
</style>
