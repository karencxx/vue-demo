<template>
	<div>
		<section class="left">
			<div class="btn-group">
				<Button type="primary" size="small" @click="showTable">表格</Button>
				<Button type="primary" size="small" @click="showForm">表单</Button>
			</div>

			<div class="content">
				<section v-show="showTableArea">
					<div class="form-group">
						<label for="">列数</label>
						<InputNumber v-model="table.column"></InputNumber>
					</div>
					<div class="form-group">
						<label class="text-left">表头信息</label>
						<input type="text" v-model="table.thead" placeholder="输入表头名，以逗号隔开" class="form-control">
					</div>
					<div class="form-group">
						<label class="text-left">表头修饰类名</label>
						<input type="text" v-model="table.theadClass" placeholder="输入表头修饰类名，以逗号隔开" class="form-control">
					</div>
					<div class="form-group">
						<label class="text-left">表格内容属性名</label>
						<input type="text" class="form-control" v-model="table.tbody" placeholder="输入每个单元格绑定的属性名，逗号隔开">
					</div>
				</section>
				<section v-show="showFormArea">
					<div class="icon-plus-area">
						<a class="pull-right" @click="add"><Icon type="plus-circled" size="28"></Icon></a>
					</div>
					<!-- <template v-for="(i, n) in form.limit">{{n}}
						<div class="form-group">
							<label class="text-left">元素</label>
							<input type="text" placeholder="" class="form-control" >
						</div>
					</template> -->
					<template v-for="(item, n) in form.list">
						<div class="form-group">
							<input type="text" placeholder="repeat" class="form-control">
						</div>
					</template>
				</section>
				<Button type="success" @click="create" long>生成</Button>
			</div>
		</section>
		
	</div>
</template>
<script>
	export default {
		props: ['callback'],
		data() {
			return {
				showTableArea: false,
				table: {
					type: 'table',
					column: 5,
					thead: '姓名，性别，年龄',
					theadClass: 'table,table-hover,table-stripped',
					tbody: 'name, gender, age'
				},
				showFormArea: true,
				form: {
					type: 'form',
					list: [{}],
					limit: 1
				},
				formObj: {}
			}
		},
		methods: {
			showTable() {
				this.showTableArea = true;
				this.showFormArea = false;
			},
			createTable() {
				let d = {
					type: this.table.type,
					column: this.table.column,
					thead: this.table.thead ? 
							this.table.thead.replace(/，/ig,',').split(',') : [],
					theadClass: this.table.theadClass ? 
							this.table.theadClass.replace(/，/ig,',').split(',') : [],
					tbody: this.table.tbody ? 
							this.table.tbody.replace(/，/ig,',').split(',') : [],		
				};
				this.callback(d);
			},
			showForm() {
				this.showFormArea = true;
				this.showTableArea = false;
			},
			createForm() {
				console.log(this.form.list)
			},
			add() {
				if(this.form.limit > 5) { console.log('超过5个啦!');return; }
				this.form.limit++;
				this.form.list.push(this.formObj)
				console.log(this.form.list, 'list')
			},
			create() {
				if(this.showTableArea) {
					this.createTable();
				}else if(this.showFormArea) {
					this.createForm();
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.left {
		float: left;
		width: 45%;
	}
	.content {
		margin: 20px 0;
	}
	.icon-plus-area {
		height: 28px;
	}
</style>