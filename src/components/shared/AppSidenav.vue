<template>
  <div>
    <ul class="sidenav-links">
      <li v-for="(route, index) in routes" v-bind:key="index">
        <b-link :to="route.to">
          <span class="route-icon"><Icon :icon="route.icon" /></span>
          {{ route.name }}
        </b-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/shared/Icon';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      routes: [
        {
          icon: 'tachometer-alt',
          name: 'Dashboard',
          to: '/app/dashboard',
        },
        {
          icon: 'cube',
          name: 'My APIs',
          to: '/app/my-apis',
        },
        {
          icon: 'cubes',
          name: 'My Apps',
          to: '/app/my-apps',
        },
        {
          icon: 'certificate',
          name: 'My Licenses',
          to: '/app/my-licenses',
        },
        {
          icon: 'file-powerpoint',
          name: 'My Policies',
          to: '/app/my-policies',
        },
        {
          icon: 'globe',
          name: 'Explore',
          to: '/app/explore',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul.sidenav-links {
  list-style-type: none;
  padding: 0;
  margin: 1em;

  li {
    a {
      display: block;
      position: relative;
      padding-left: 2em;
      padding-top: .5em;
      padding-bottom: .5em;

      .route-icon {
        position: absolute;
        top: .5em;
        left: 0;
      }
    }
  }
}
</style>