import Assignment from "./Assignment.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default{
    components: {
        Assignment,AssignmentCreate
    },
    template:`
        <section class="space-y-6">
            <assignment :assignments="filters.progress" title="In Progress"></assignment>
            <assignment :assignments="filters.completed" title="Completed"></assignment>

            <assignment-create @add="add"></assignment-create>
        </section>  
    `,
    data() {
        return {
            assignments: [
                { name: 'Finish Project', complete: false, id:1, tag: 'math' },
                { name: 'Read Chapter 4', complete: false, id:2, tag: 'sience' },
                { name: 'Turn in homework', complete: false, id:3, tag: 'english' },
                { name: 'Read Chapter 5', complete: false, id:4, tag: 'english' }
            ],
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
        add (task) {
            this.assignments.push({
                name: task,
                completed: false,
                id: ++this.assignments.length
            });
        }
    }

};