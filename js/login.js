const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const password = document.getElementById("password").value;

  const email = document.getElementById("email").value;

  try {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        if (user) return (window.location.href = "/");
      })
      .catch((error) => {
        if (!user) return (window.location.href = "../views/login.html");
      });
  } catch (error) {
    console.log(error.message);
  }
});
