<template>
  <div id="app">
    <Navigation :user="user" />

    <router-view :user="user" />
  </div>
</template>
<script>
import Navigation from '@/components/Navigation'
import db from './db.js'
export default {
  data: function() {
    return {
      user: null
    }
  },
  mounted() {
    db.collection('users')
      .doc('')
      .get()
      .then(snapshot => {
        this.user = snapshot.data().name
      })
  },
  components: {
    Navigation
  }
}
</script>
