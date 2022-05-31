import { VueElement } from 'vue'
import MessageCom from './Message.vue'

const messageArr = ref([]);
const zIndex = ref(2000)

const Message = (options: any) => {
    const messageApp = createApp(MessageCom, options)

    showMessage(messageApp, options)
}

['success', 'warning', 'message', 'error'].forEach(type => {
    Message[type] = (options: any) => {
        options.type = type
        return Message(options)
    }
})


function showMessage(app, options) {
    const oEl = document.createDocumentFragment()

    const vm = app.mount(oEl)
    messageArr.value.push(vm)
    document.body.appendChild(oEl)
    setTop(vm)
    setZIndex(vm)
    vm.setVisible(true)
    watch(messageArr, (val) => {
        setTop(vm)
        if(val.length === 0) {
            zIndex.value = 2000
        }
    })
    hideMessage(app, options, vm)
}

function hideMessage(app, options, vm) {
    vm.timer = setTimeout(async () => {
        await vm.setVisible(false)
        app.unmount()
        messageArr.value = messageArr.value.filter(item => item !== vm)
        clearTimeout(vm.timer)
        vm.timer = null
    }, options.duration || 3000)
}

function setTop(vm) {
    const { setTop, margin, height } = vm
    const currentIndex = messageArr.value.findIndex(item => item === vm)
    setTop(margin * (currentIndex + 1) + height * currentIndex)
}

function setZIndex(vm) {
    const { setzIndex } = vm
    zIndex.value  =  zIndex.value + 1
    setzIndex(zIndex.value)
}
export default Message