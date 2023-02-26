import AssignmentList from "./AssignmentList.js"
export default{
    components: {
        AssignmentList

    },
    template:`
    <section v-show="assignments.length" class="mb-8">
        <h2 class="font-bold mb-2">
            {{title}}
            <span>({{ assignments.length }})</span>
        </h2>

        <div class="flex gap-2">
            <button 
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag == currentTag
                }"
                @click="currentTag = tag"
                
            >
                {{tag}}
            </button>
        </div>

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
        tags () {
            return ['all',...new Set(this.assignments.map(e => e.tag))];
        },
        filterAssignments () {
            if (this.currentTag=='all') {
                return this.assignments;
            }
            return this.assignments.filter(e => e.tag == this.currentTag);
        }
    },
}