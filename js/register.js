const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("cpassword").value;
  const email = document.getElementById("email").value;
  const Alert = document.getElementById("alert-text");
  try {
    if (password !== confirmPassword) return alert("password do not match");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.innerText = "user was registered";
        setTimeout(() => {
          if (user) return (window.location.href = "../views/login.html");
        }, 1000);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error.message);
  }
});
