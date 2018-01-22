//mixins 混合
export const toggle = {
	data() {
		return {
			isShowing: false
		}
	},
	methods: {
		toggleShow() {
			this.isShowing = !this.isShowing
		},
	},
	mounted() {
		console.log('mixin toggle.js')
	}
}