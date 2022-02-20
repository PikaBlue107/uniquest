<template>
    <b-card
        :title="quest.summary"
        style="max-width: 18rem"
        class="mb-2"
    >
        <b-card-text>
            {{quest.description}}
            <p v-if="quest.deadline" >{{quest.deadline}}</p>
        </b-card-text>

        <b-button :to="'/quests/' + quest.id" variant="primary" >View</b-button>
    </b-card>
</template>

<script>
export default {
    name: "Quest",
    props: {
        quest: Object
        /*
        {
            summary: String,
            description: String,
            deadline: DateTime?
            type: String
            item_offers: [
                Object(Item)
            ],
            item_requests: [
                {
                    ...
                }
            ],
            match: String(QuestID)?
            owner: User
        }

        */
    }
}
</script>

<style>

</style>