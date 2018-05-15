import Vue from "vue";
import Router from "vue-router";
import Events from "./views/Events.vue";
import Create from "./views/Create.vue";
import FullEvent from "./views/FullEvent.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "events",
      component: Events
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },
    {
      path: "/fullevent",
      name: "fullevent",
      component: FullEvent
    }
  ]
});
