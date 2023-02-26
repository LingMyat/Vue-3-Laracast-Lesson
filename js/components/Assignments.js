import Assignment from "./Assignment.js";

export default{
    components: {
        Assignment
    },
    template:`
        <section class="space-y-6">
            <assignment :assignments="filters.progress" title="In Progress"></assignment>
            <assignment :assignments="filters.completed" title="Completed"></assignment>

            <form @submit.prevent="add">
                <div class="border text-black">
                    <input placeholder="New assignment..." v-model='task' class="p-2" />
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>
        </section>  
    `,
    data() {
        return {
            assignments: [
                { name: 'Finish Project', complete: false, id:1 },
                { name: 'Read Chapter 4', complete: false, id:2},
                { name: 'Turn in homework', complete: false, id:3 }
            ],
            task:''
        }
    },
    computed: {
        filters(){
            return {
                completed: this.assignments.filter(a => a.complete),
                progress: this.assignments.filter(a => !a.complete)
            }
        }
    },
    methods: {
        add () {
            this.assignments.push({
                name: this.task,
                completed: false,
                id: ++this.assignments.length
            });
            this.task="";
        }
    }

};