export function initializeModal() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("addTask");
    var span = document.getElementsByClassName("close")[0];
    var titleInput = document.getElementById("title");
    var priorityInput = document.getElementById("priority");
    var dateInput = document.getElementById("dateInput");
    var descInput = document.getElementById("desc");
    var submit = document.getElementById("submitTask");
  
    btn.onclick = function() {
      modal.style.display = "block";
      titleInput.value = "";
      priorityInput.value = "";
      dateInput.value = "";
      descInput.value = "";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }

    submit.onclick = function() {
        modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }