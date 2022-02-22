<template>
  <div>
    <div class="container">
      <h1 class="mb-3">Daftar Pertanyaan</h1>
      <select class="form-select mb-3" v-model="filter">
        <option :value="f" v-for="(f, index) in filters" :key="'filter-'+index">{{ f }}</option>
      </select>
      <div class="row gx-3 gy-3">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="question in filtered" :key="'question-'+question.id">
          <QuestionCard :question="question" @delete="openModal(question)"/>
        </div>
      </div>
    </div>
    <div class="modal fade" id="modalDelete" tabindex="-1" aria-labelledby="modalDeleteLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalDeleteLabel">Hapus Pertanyaan?</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex justify-content-center">
            <QuestionCard v-if="selectedQuestion" :question="selectedQuestion" :hide-button="true"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
            <button type="button" class="btn btn-danger" @click="deleteQuestion()" data-bs-dismiss="modal">Hapus Pertanyaan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionCard from '@/components/QuestionCard'
import axios from 'axios'
import { Modal } from 'bootstrap'

// axios.defaults.headers.common

export default {
  name: "Home",
  components: {
    QuestionCard
  },
  data() {
    return {
      filters: ["All","Makanan", "Ikon", "Wisata"],
      filter: "All",
      questions: [],
      selectedQuestion: null,
      modal: null,
    }
  },
  computed: {
    filtered() {
      if (this.filter == "All") return this.questions
      return this.questions.filter(q => q.topic == this.filter)
    }
  },
  methods: {
    fetchQuestions() {
      axios.get(this.$apiAddress + '/questions').then(r => {
        this.questions = r.data
      })
    },
    deleteQuestion() {
      axios.delete(this.$apiAddress + '/questions/' + this.selectedQuestion.id).then(r => {
        this.fetchQuestions()
      })
    },
    openModal(question) {
      this.selectedQuestion = question;
    }
  },
  mounted() {
    this.fetchQuestions()
    this.modal = new Modal(document.getElementById("modalDelete"))
  }
};
</script>
