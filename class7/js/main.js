 Vue.component('task',{
	template:"<li><slot></slot></li>",
});

 Vue.component('task-list',{
	template:"<ul><task v-for='taskitem in tasks'>{{taskitem.task}}</task></ul>",
	data(){
		return{ tasks: [
		{key:1,task:"Go Home",complete:true},
		{key:2,task:"Go Work",complete:true}
		]};
	}
});

new Vue({
	
	el:"#root",
	data:{"monster":"me"}
});