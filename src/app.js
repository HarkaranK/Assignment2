//Array for notes
const notes = [
  /* What notes should look like 
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
  */
]

  // Plus Button
document.querySelector(".icons").addEventListener("click", function () {

  //Text Area 
  const textBoxTitle = document.createElement("input")
  textBoxTitle.placeholder = "Title"

  const textAreaElement = document.createElement("textarea")
  textAreaElement.placeholder = "Body"

  textAreaElement.cols = 30;
  textAreaElement.rows = 10;

  // Cancel Button
  const cancelButton = document.createElement("button")
  cancelButton.className = "cancelBtn"
  cancelButton.textContent = "Cancel"

  // Save Button
  const saveButton = document.createElement("button")
  saveButton.className = "saveBtn"
  saveButton.textContent = "Save"

  saveButton.addEventListener("click", function() {
     saveNote(textBoxTitle.value, textAreaElement.value)
  });

   // Write Note Area
  document.querySelector(".write-note-area").appendChild(textBoxTitle)
  document.querySelector(".write-note-area").appendChild(textAreaElement)
  document.querySelector(".write-note-area").appendChild(saveButton)
  document.querySelector(".write-note-area").appendChild(cancelButton)
});

function saveNote(noteTitle, noteBody){
  notes.push({ 
     title: noteTitle, 
     noteBody: noteBody,
     id: notes.length
  })
  loadNotes()
  document.querySelector(".input").remove()
  document.querySelector(".textarea").remove()
  document.querySelector(".cancelBtn").remove()
  document.querySelector(".saveBtn").remove()
}


window.addEventListener("click", function (event) {

  // if statement for cancel button
  if (event.target.classList.contains("cancelBtn")) {
     document.querySelector("input").remove()
     document.querySelector("textarea").remove()
     document.querySelector(".cancelBtn").remove()
     document.querySelector(".saveBtn").remove()
  }
})


// Note Loader
function loadNotes(){
  document.querySelector(".notes-list").innerHTML = ''  
  for(let i=0;i<notes.length;i++){
     const element = document.createElement("element")
     element.className = "NoteClass"
     element.id = i
     element.addEventListener('click', function(){
        showNote(this.id)
     })
     const TitleNote = document.createElement("TitleNote")
     TitleNote.append(notes[i].title)
     element.appendChild(TitleNote)
     document.querySelector(".notes-list").appendChild(element) 
  }
}

function showNote(id){
  document.querySelector(".read-note-area").innerHTML = ''
  const element = document.createElement("element")
  element.className = "NoteClass note";
  const body = document.createElement("body")
  body.append(notes[id].title)
  const TitleNote = document.createElement("TitleNote")
  TitleNote.append(notes[id].noteBody)
  element.appendChild(body)
  element.appendChild(TitleNote)
  
  document.querySelector(".read-note-area").appendChild(element)
}