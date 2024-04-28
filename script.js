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
    list.appendChild(listItem);
}
