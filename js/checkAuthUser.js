// attach an observer to the global authentication object. This observer gets called whenever the user's sign-in state changes.
auth.onAuthStateChanged((user) => {
  if (user) {
    return;
  } else {
    return (window.location.href = "../views/login.html");
  }
});
