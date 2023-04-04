const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const description = document.getElementById("description").value;
  const Alert = document.getElementById("alert-text");
  try {
    // Create a new URLSearchParams object from the current URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get the value of the 'id' parameter
    const id = urlParams.get("id");

    console.log(id);
    var articleRef = db.collection("articles").doc(id);

    function validateInputs() {
      let d = {};
      if (title !== "") d.title = title;
      if (description !== "") d.description = description;
      if (content !== "") d.content = content;
      console.log(d);
      return d;
    }
    console.log(validateInputs());
    return articleRef
      .update(validateInputs())
      .then(() => {
        alert("Document successfully updated!");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  } catch (error) {
    console.log(error);
  }
});
