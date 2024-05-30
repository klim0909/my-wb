import { poup } from "./poup";

const btn = document.querySelector(".menubar");
const container = document.querySelector('.container');
const form = new poup(container);

btn.onclick = function(e) {
    e.preventDefault();
    form.bindToDOM();
};
