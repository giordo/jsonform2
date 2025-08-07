 
window.addEventListener("load", (event) => {
    const openModal = document.querySelector("#open-modal");
    const modal = document.querySelector(".modal");
    const modalContainer = document.querySelector(".modal-container");
    const body = document.querySelector("body");
    const closebtn = modal.querySelector('#close-modal');

    openModal.addEventListener("click", () => {
    modalContainer.classList.add("show-container");
    modal.classList.add("show");
    body.style.overflowY = "hidden";
    });

    closebtn.addEventListener("click",()=>{
        modalContainer.classList.remove("show-container");
        body.style.overflowY = "visible";
    });
});