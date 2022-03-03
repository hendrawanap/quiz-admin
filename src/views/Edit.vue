<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 mx-auto">
        <h1 class="mb-3">Edit Pertanyaan</h1>
        <form @submit.prevent="submit" enctype="multipart/form-data">
          <div class="mb-3">
            <label for="question" class="form-label">Question</label>
            <input type="text" class="form-control" id="question" v-model="question.question" required />
          </div>
          <div class="mb-3">
            <label for="answer" class="form-label">Answer</label>
            <input type="text" class="form-control" id="answer" v-model="question.answer" required />
          </div>
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="choice-1" class="form-label">Choice 1</label>
                <input
                  type="text"
                  class="form-control"
                  id="choice-1"
                  v-model="question.choices[0]"
                  required
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="choice-2" class="form-label">Choice 2</label>
                <input
                  type="text"
                  class="form-control"
                  id="choice-2"
                  v-model="question.choices[1]"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="choice-3" class="form-label">Choice 3</label>
                <input
                  type="text"
                  class="form-control"
                  id="choice-3"
                  v-model="question.choices[2]"
                  required
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="choice-4" class="form-label">Choice 4</label>
                <input
                  type="text"
                  class="form-control"
                  id="choice-4"
                  v-model="question.choices[3]"
                  required
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="topic" class="form-label">Topic</label>
            <select class="form-control form-select mb-3" v-model="question.topic" required>
              <option value="" disabled selected hidden>Select topic...</option>
              <option :value="topic" v-for="(topic, index) in topics" :key="'topic-'+index">{{ topic }}</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">Image</label>
            <input type="file" class="form-control" id="image" @change="(e) => question.file = e.target.files[0]" />
          </div>
          <button type="submit" class="btn btn-primary" id="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: "Edit",
  components: {},
  data() {
    return {
      topics: ['Makanan', 'Ikon', 'Wisata'],
      question: {
        question: "",
        answer: "",
        topic: "",
        choices: ["", "", "", ""],
        file: null
      },
    };
  },
  methods: {
    submit() {
      const formData = new FormData()
      formData.append('json', JSON.stringify({
        question: this.question.question,
        answer: this.question.answer,
        choices: this.question.choices,
        topic: this.question.topic,
      }))
      this.question.file ? formData.append('imgFile', this.question.file) : null
      axios.put(this.$apiAddress + '/questions/' + this.$route.params.id, formData).then(({data}) => {
        console.log(data)
        this.$router.push('/')
      }).catch((error) => console.log(error.message));
    },
    fetchPertanyaan() {
      axios.get(this.$apiAddress + '/questions/' + this.$route.params.id).then(({data}) => {
        const { question, answer, choices, topic } = data
        this.question.question = question
        this.question.answer = answer
        this.question.choices = choices
        this.question.topic = topic
      })
    }
  },
  mounted() {
    this.fetchPertanyaan()
  }
};
</script>
