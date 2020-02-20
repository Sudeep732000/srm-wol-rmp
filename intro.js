const login = document.querySelector(".login");
const showModal = () => {
  loginModal.style.display = "block";
};
login.addEventListener("click", () => {
  showModal();
});