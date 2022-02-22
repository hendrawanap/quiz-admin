<template>
  <div class="card" style="width: 18rem;">
    <img :src="src" alt="img" class="w-100" style="object-fit: cover; height: 200px"/>
    <div class="card-body">
      <h5 class="card-title">{{ question.question }}</h5>
      <h6 class="card-subtitle mb-2" :class="[choice == question.answer ? 'text-bold text-danger' : 'text-muted']" v-for="(choice, index) in question.choices" :key="'choice-'+index">{{ choice }}</h6>
      <div class="d-flex justify-content-between align-items-end">
        <div v-if="!hideButton">
          <router-link :to="'/edit/'+question.id">
            <button class="btn btn-primary me-2">Edit</button>
          </router-link>
          <button @click="$emit('delete')" class="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#modalDelete">Hapus</button>
        </div>
        <span class="badge rounded-pill bg-primary">{{ question.topic }}</span>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "QuestionCard",
  components: {},
  props: ['question', 'hide-button'],
  data() {
    return {
      src: "#"
    }
  },
  methods: {
    fetchImg() {
      if (this.question.img) {
        this.src = this.question.img
      } else {
        this.src = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
      }
    }
  },
  mounted() {
    this.fetchImg()
  }
};
</script>

<style scoped>
</style>