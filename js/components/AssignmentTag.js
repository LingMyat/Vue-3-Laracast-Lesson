export default{
    template:`
        <div class="flex gap-2">
            <button 
                v-for="tag in allTags" 
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag == currentTag
                }"
                @click="$emit('change',tag)"
                
            >
                {{tag}}
            </button>
        </div>
    `,
    props: {
        tags: {
            type: Array
        },
        currentTag:String
    },
    computed: {
        allTags () {
            return ['all',...new Set(this.tags)];
        }
    },
}