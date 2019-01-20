import User from "./User.js";

export default {
  name: "App",
  components: { User },
  template: document.getElementById("app.html").innerHTML,
  data() {
    return {
      drawer: true,
      items: [{ icon: "account_box", text: "account" }]
    };
  }
};
