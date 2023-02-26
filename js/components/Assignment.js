import AssignmentList from "./AssignmentList.js"
export default{
    components: {
        AssignmentList

    },
    template:`
    <section v-show="assignments.length" class="mb-8">
        <h2 class="font-bold mb-2">{{title}}</h2>

        <ul class="border divide-y">
            <assignment-list
                v-for="assignment in assignments" 
                :key="assignment.id"
                :assignment="assignment"
            >
            </assignment-list>
        </ul>
    </section>
    `,
    props: {
        assignments: {
            type: Array,
        },
        title:String
    },
}