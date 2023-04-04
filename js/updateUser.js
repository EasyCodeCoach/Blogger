firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("name").innerText = user.displayName || "";
    document.getElementById("email").innerText = user.email;
  }
});

const btnUpdate = document.getElementById("update-user");
// update user
btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("nme").value;

  const user = auth.currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(() => {
      // Update successful

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
});
