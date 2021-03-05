export default {
    name: 'customCode',
    props: {
        template: String, // template 模板
        js: String, // js 逻辑
        css: String, // css 样式
    },
    computed: {
        className() {
            // 生成唯一class, 主要用于做scoped的样式
            const uid = Math.random().toString(36).slice(2)
            return `custom-code-${uid}`
        },
        scopedStyle() {
            if(this.css) {
                const scope = `.${this.className}`
                const reg = /(^|\})\s*([^{]+)/g
                // 为class 加前缀， 做类似scope的效果
                return this.css.trim().replace(reg, (m, g1, g2) => {
                    return g1 ? `${g1} ${scope} ${g2}` : `${scope} ${g2}`;
                })
            }
            return ''
        },
        component() {
            // 把代码字符串转成JS对象
            const result = safeStringToObject(this.js)
            const component = result.value

            if(result.error) {
                console.log('js 脚本错误', result.error)
                result.error = {
                    msg: result.error.toString(),
                    type: 'js脚本错误'
                }
                result.value = { hasError: true }
                return result
            }
            // 去掉template前后标签
            const template = (this.template || '')
                                .replace(/^ *< *template *> | <\/ *template *> *$/g, '')
                                .trim()
            
            // 注入template或render，设定template优先级高于render
            if(this.template) {
                component.template = this.template
                component.render = undefined
            } else if(!component.render) {
                component.render = '<div>未提供模板或render函数</div>'
            }

            return result
        }
    },
    render() {
        const { component } = this
        return (
            <div class={this.className}>
                <style>{this.scopedStyle}</style>
                <component />
            </div>
        )
    }
}