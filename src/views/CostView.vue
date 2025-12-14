<script setup lang="ts">
import { format } from 'date-fns'
import axios from 'axios'
const apiBase = import.meta.env.VITE_API_BASE

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

const items = ref<Item[]>([
    {
        id: 1,
        name: 'Item 1',
        price: 10235,
        start_at: '2022-01-01',
        till_now: 79,
        inuse: false,
        discontinued_at: '2022-02-01',
        discontinued_price: 5,
        notes: 'Item 1 notes',
    },
    {
        id: 2,
        name: 'Item 2',
        price: 20,
        start_at: '2022-02-01',
        till_now: 2010,
        inuse: true,
        discontinued_at: '',
        discontinued_price: 0,
        notes: 'Item 2 notes',
    },
])

const headerInfo = {}

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
    ElMessageBox.confirm('Close without saving?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
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
        /*    name: str
    price: str = "0"
    start_at: datetime = None
    discontinued_at: datetime = None
    discontinued_price: str = "0"
    notes: str = "" */
        console.log('Creating new item')
        console.log(itemDialogConfig.item_info.name, typeof itemDialogConfig.item_info.name)
        console.log(
            itemDialogConfig.item_info.price.toFixed(2),
            typeof itemDialogConfig.item_info.price.toFixed(2),
        )
        console.log(itemDialogConfig.item_info.start_at, typeof itemDialogConfig.item_info.start_at)
        console.log(
            itemDialogConfig.item_info.discontinued_at,
            typeof itemDialogConfig.item_info.discontinued_at,
        )
        console.log(
            itemDialogConfig.item_info.discontinued_price.toFixed(2),
            typeof itemDialogConfig.item_info.discontinued_price.toFixed(2),
        )
        console.log(itemDialogConfig.item_info.notes, typeof itemDialogConfig.item_info.notes)
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
                console.error(response.data)
                itemDialogConfig.item_info.id = response.data
                const newItem = JSON.parse(JSON.stringify(itemDialogConfig.item_info))
                // items.value.push(newItem)
                // push new item to top
                items.value.unshift(newItem)
            })
    } else {
        // Existing item logic
        const index = items.value.findIndex((it) => it.id === itemDialogConfig.item_info.id)
        if (index !== -1) {
            items.value[index] = JSON.parse(JSON.stringify(itemDialogConfig.item_info))
        }
    }

    itemDialogConfig.loading = false
    itemDialogConfig.visible = false
}

const handleItemDelete = () => {
    itemDialogConfig.loading = true
    console.log('Item deleted', itemDialogConfig.item_info)
    itemDialogConfig.loading = false
    itemDialogConfig.visible = false
}

onMounted(async () => {
    await axios.get(`${apiBase}/item_track/get_all_items`).then((response) => {
        console.error(response.data)
        console.log('items', items)
        items.value.push(...response.data)
        console.log('done')
    })
})
</script>

<template>
    <el-container class="cost-container">
        <el-header>Header</el-header>
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
                class="cost-card"
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
                                {{ item.start_at.replace('T', ' ').split('.')[0] }}
                                <template v-if="!item.inuse">~ {{ item.discontinued_at }}</template>
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
                        <div class="cost-days">{{ item.till_now }} 天</div>
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
            <el-form-item label="Name" label-width="8em">
                <el-input v-model="itemDialogConfig.item_info.name" />
            </el-form-item>

            <el-form-item label="price" label-width="8em">
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

            <el-form-item label="start_at" label-width="8em">
                <el-date-picker
                    v-model="itemDialogConfig.item_info.start_at"
                    type="datetime"
                    placeholder="DateTime"
                    format="YYYY/MM/DD HH:mm:ss"
                    value-format="x"
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
                <el-form-item label="discontinued_at" label-width="8em">
                    <el-date-picker
                        v-model="itemDialogConfig.item_info.start_at"
                        type="datetime"
                        placeholder="DateTime"
                        format="YYYY/MM/DD HH:mm:ss"
                        value-format="x"
                        :disabled="itemDialogConfig.loading"
                    />
                </el-form-item>

                <el-form-item label="discontinued_price" label-width="8em">
                    <el-input v-model="itemDialogConfig.item_info.discontinued_price" />
                </el-form-item>
            </template>

            <el-form-item label="notes" label-width="8em">
                <el-input type="textarea" v-model="itemDialogConfig.item_info.notes" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="itemDialogConfig.visible = false">Cancel</el-button>
                <el-button
                    type="danger"
                    @click="handleItemDelete"
                    v-show="itemDialogConfig.item_info.id > 0"
                    >Delete</el-button
                >
                <el-button type="primary" @click="handleItemChange"> Confirm </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<style scoped>
.cost-container {
    max-width: 1024px;
    margin: auto;
}
.cost-card {
    margin: 5px;
    border-radius: 1em;
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
