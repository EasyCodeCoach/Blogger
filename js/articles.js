const content = document.getElementById("content-articles");

window.addEventListener("DOMContentLoaded", () => {
  // get all documents from collection
  db.collection("articles")
    .get()
    .then((querySnapshot) => {
      var docs = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const id = doc.id;
        docs.push({ ...doc.data(), id });
      });

      console.log(docs);
      content.innerHTML = docs
        .map((doc) => {
          return `
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <a href="/views/article.html">${doc.title}</a>
              </h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
             ${doc.description}
              </h6>
              <p class="card-text">
              ${doc.content}
              </p>
              <div class="btn-group">
                <button class="btn btn-danger" <button class="btn btn-danger" onclick="deleteArticle('${
                  doc.id
                }')">Delete</button>

                <button class="btn btn-primary">
                  <a
                    href="/views/update.html?${"id=" + doc.id} "
                    class="text-decoration-none text-white"
                    >update</a
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
        
        `;
        })
        .join("");
    });
});

// delete article
window.deleteArticle = function (id) {
  // Assume 'firebase' is already initialized and we have a collection named 'users'

  // Get a reference to the document you want to delete
  const docRef = db.collection("articles").doc(id);

  // Delete the document
  docRef
    .delete()
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};
