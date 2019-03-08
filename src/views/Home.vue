<template>
  <figure>
    <input v-model="query" type="text" placeholder="Search for github repository ..." /><br>
    <button @click="search">Search</button>
    <ul>
      <li v-for="repo in $store.state.github.repository" :key="repo.id">
        <a blank="true" :href="repo.html_url">{{ `${repo.owner.login}/${repo.name}` }}</a>
      </li>
    </ul>
  </figure>
</template>

<script>
import APIClient from '../API/APIClient'
import { setTimeout } from 'timers'

import { of } from 'rxjs'
import { filter } from 'rxjs/operators'
export default {
  name: 'home',
  components: {
    
  },
  data: function () {
    return {
      query: ""
    }
  },
  methods: {
    search: function (event) {
      APIClient.query(this.query).then(res => {
        console.log(res.data.items)
        this.$store.dispatch('setRepository', res.data.items)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  input {
    padding: 10px 5px;
    width: 20%;
  }

  button {
    padding: 5px 20px;
    margin-top: 10px;
  }

  ul {
    padding: 0;
  }

  ul li {
    list-style-type: none;
  }
</style>
