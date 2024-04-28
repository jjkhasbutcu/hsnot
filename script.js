function addNote() {
    var input = document.getElementById("note-input");
    var text = input.value;
    input.value = "";

    if (text.trim() === "") {
        return;
    }

    var list = document.getElementById("note-list");
    var listItem = document.createElement("li");
    listItem.textContent = text;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
        listItem.remove();
    };

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
}
