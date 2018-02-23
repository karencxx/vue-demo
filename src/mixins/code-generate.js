
export const generate = {
	data() {
		return {
			html: ''
		}
	},
	methods: {
		genHtml(data) {
			console.log(data, 'gen html element');

			if(data.type == "table") {
				let a = `<table class="`;

				for(let i = 0; i < data.theadClass.length; i++){
					a += `${data.theadClass[i]} `;
				}
				a += `">
						<thead>
						<tr>`;
				
				for(let i = 0; i < data.column; i++){
					a += `<th>${data.thead[i]? data.thead[i] : ''}</th>`;
				}
				a += `</tr>
						</thead>
						<tbody>
							<tr>`;

				for(let i = 0; i < data.column; i++){
					a += data.tbody[i] ? `<td>{{ ${data.tbody[i]} }}</td>` : `<td></td>`;
				}

				a +=`</tr>
						</tbody>
							</table>`;

				this.html = a;
			}

			if(data.type == "form") {}

			return this.html;
		}
	},
	mounted() {
	}

}