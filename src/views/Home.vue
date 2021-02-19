<template>
  <div class="mt-3">
    <img src="/Users/mert/video-chat/src/assets/he.jpg" />
    <div class="text-center" v-if="user.displayName != 'Esra'">
      Welcome <span class="font-weight-bold text-info" v-if="user">{{ user.displayName }}</span> ,<a
        href="#"
        role="button"
        class="text-primary"
        @click="$emit('logout')"
        >logout</a
      >
    </div>

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <img :src="image" />
          <img :src="image" />

          <h4 class="display-4 text-primary mb-2" v-if="user.displayName != 'Esra'">Video Chat</h4>
          <p class="lead">
            This app uses Firebase for real time communication and WebRTC to create video chats
            between multiple users, allowing you to create rooms for your meetings and invite
            attendees.
          </p>
          <h1 class="animate__pulse" v-if="user.displayName != 'somename'">
            Hello Dear Friend!
          </h1>
          <router-link class="nav-item nav-link" to="/rooms" v-if="user">Rooms</router-link>

          <router-link class="btn btn-outline-primary mr-2" to="/login" v-if="!user"
            >Log In</router-link
          >
          <router-link class="btn btn-outline-primary mr-2" to="/register" v-if="!user"
            >Register</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  props: ['user']
}
</script>
