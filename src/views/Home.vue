<template>
  <div class="home">

    <Quest :quest="demo_quest" />
  </div>
</template>

<script>
// @ is an alias to /src
import Quest from "@/components/Quest.vue";

export default {
  name: "Home",
  components: {
    Quest,
  },

  data() {
    return {
      demo_quest: {
        id: "demo_quest_id",
        summary: "Demo Quest",
        description: "Something very descriptive about what this quest is for",
        deadline: "Feb 20 @ 11:00 AM",
      }
    }
  },
};
</script>
