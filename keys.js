<script>
  document.onkeyup = function(e) {
  if (e.which == 77) {
    alert("this is the Owner saying stop screwing around");
  } else if (e.ctrlKey && e.which == 66) {
    alert("Ctrl + B shortcut combination was pressed");
  } else if (e.ctrlKey && e.altKey && e.which == 89) {
    alert("Ctrl + Alt + Y shortcut combination was pressed");
  } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
    alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
  }
};
</scipt>
