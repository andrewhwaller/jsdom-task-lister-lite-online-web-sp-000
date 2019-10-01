document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', onSubmit)
});

function onSubmit(event) {
  event.preventDefault()
  const newTask = document.querySelector('input').value

}
