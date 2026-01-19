const modal = document.querySelector(".modal");
const openBtn = document.querySelector("#btn-get");
const closeBtn = document.querySelector(".modal_close");
const form = document.querySelector("#death-note-form");
const modalResult = document.querySelector("#modal_result");

const modalOpen = () => {
    modal.style.display = "block";
    setTimeout(() => modal.classList.add("show"), 10); 
    document.body.style.overflow = "hidden";
    clearTimeout(modalTimer);
};

const modalClose = () => {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 400);
    document.body.style.overflow = "";
};
openBtn.onclick = modalOpen;
closeBtn.onclick = modalClose;

//при нажатии не на модалку закрывается

modal.onclick = (e) => { if (e.target === modal) modalClose(); };

//при скролле до конца открывается модалка, один раз
const endScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        modalOpen();
        window.removeEventListener("scroll", endScroll);
    }
};
window.addEventListener("scroll", endScroll);

const modalTimer = setTimeout(modalOpen, 10000);
