function aumentarImagem() {
    var rectangle = document.getElementById("quadgosto");
    rectangle.classList.toggle("clicked");
  }

  function submitComment() {
    var comment = document.getElementById("comment-input").value;
    if (comment.trim() !== "") {
      displayComment(comment);
      document.getElementById("comment-input").value = "";
    } else {
      alert("Por favor, digite um comentário antes de enviar.");
    }
  }

  function displayComment(comment) {
    var commentsList = document.getElementById("commentslista");
    var listItem = document.createElement("ol");
    listItem.appendChild(document.createTextNode(comment));
    commentsList.appendChild(listItem);
  }