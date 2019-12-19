
document.querySelector("#forme").addEventListener("submit", function (e) {
  e.preventDefault()
  console.log("zaeza")
  submitProduct()
})

var firebaseConfig = {
  apiKey: "AIzaSyBLnO_vTfSefq2ghnAip0vIY3YOssbpcJg",
  authDomain: "facts2-2db14.firebaseapp.com",
  databaseURL: "https://facts2-2db14.firebaseio.com",
  projectId: "facts2-2db14",
  storageBucket: "",
  messagingSenderId: "198515689021",
  appId: "1:198515689021:web:18c5fa91d262bf70"
};

firebase.initializeApp(firebaseConfig);

let database = firebase.database()

function submitProduct() {
  let ref = database.ref("product/" + document.querySelector("#name").value)
  let data = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#Email").value,
    // number: document.querySelector("#number").value,
    // link : document.querySelector("#link").value,
    message: document.querySelector("#message").value
  }
  console.log(data)
  ref.push(data)
}

