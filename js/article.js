const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const description = document.getElementById("description").value;
  const Alert = document.getElementById("alert-text");
  try {
    db.collection("articles")
      .add({
        title,
        description,
        content,
      })
      .then((docRef) => {
        Alert.innerText = "Document was created";
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  } catch (error) {
    console.log(error);
  }
});
