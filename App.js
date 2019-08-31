import User from "./User.js";

export default {
  name: "App",
  components: { User },
  template: document.getElementById("app.html").innerHTML,
  data() {
    return {
      drawer: true,
      items: [{ icon: "mdi-account", text: "account" }]
    };
  }
};
