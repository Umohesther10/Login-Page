new Vue({
  el: "#app",
  data: {
    fName: "",
    lName: "",
    email: "",
    password: "",
    showEmail: "",
    showPassword: "",
    showfName: "",
    showlName: ""
  },
  methods: {
    show: function() {
      if (this.fName && this.lName && this.email && this.password) {
        this.showfName = this.fName;
        this.showlName = this.lName;
        this.showEmail = this.email;
        this.showPassword = this.password;
        this.email = "";
        this.password = "";
        this.fName = "";
        this.lName = "";
      } else {
        alert("Enter all fields");
      }
    }
  }
});
