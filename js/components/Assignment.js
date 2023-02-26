
import AssignmentList from "./AssignmentList.js"
import AssignmentTag from "./AssignmentTag.js";
export default{
    components: {
        AssignmentList,AssignmentTag
    },
    template:`
    <section v-show="assignments.length" class="mb-8">
        <h2 class="font-bold mb-2">
            {{title}}
            <span>({{ assignments.length }})</span>
        </h2>

        <assignment-tag 
            :tags="assignments.map(e => e.tag)"
            :current-tag="currentTag"
            @change="currentTag = $event" 
        ></assignment-tag>

        <ul class="border divide-y mt-4">
            <assignment-list
                v-for="assignment in filterAssignments" 
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
    data () {
        return {
            currentTag: 'all'
        };
    },
    computed: {
        filterAssignments () {
            if (this.currentTag=='all') {
                return this.assignments;
            }
            return this.assignments.filter(e => e.tag == this.currentTag);
        }
    },
}