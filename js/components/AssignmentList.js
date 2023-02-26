export default{
    template:`
        <li>
            <label class="p-3 flex justify-between items-center">
                {{ assignment.name }}
                <input class="ml-2" v-model="assignment.complete" type="checkbox" name="" id="">
            </label>
        </li>
    `,
    props: {
        assignment: {
            type: Object,
        },
    },
}