export default{
    template:`
    <form @submit.prevent="add">
        <div class="border text-black">
            <input placeholder="New assignment..." v-model='task' class="p-2" />
            <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
    </form>
    `,
    data () {
        return {
            task: ''
        }
    },
    methods: {
        add () {
            this.$emit('add',this.task);
            this.task="";
        }
    }
}