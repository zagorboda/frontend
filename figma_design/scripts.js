let sign_up_modal = document.getElementById("sign_up");
// Collect all buttons that open sign_up modal
let sign_up_btns = document.getElementsByClassName("sign_up_btn");
// Add click event to open modal
for (let i=0; i < sign_up_btns.length; i++){
    sign_up_btns[i].onclick = function() {
        sign_up_modal.style.display = "block";
    }
}
let close_sign_up = document.getElementById("close_sign_up");
close_sign_up.onclick = function() {
    sign_up_modal.style.display = "none";
}

let log_in_modal = document.getElementById("log_in");
let log_in_btns = document.getElementsByClassName("log_in_btn");
for (let i=0; i < log_in_btns.length; i++){
    log_in_btns[i].onclick = function() {
        log_in_modal.style.display = "block";
    }
}
let close_log_in = document.getElementById("close_log_in");
close_log_in.onclick = function() {
    log_in_modal.style.display = "none";
}

let forgot_password_modal = document.getElementById("forgot_password");
let forgot_password_btn = document.getElementById("forgot_password_btn");
let close_forgot_password = document.getElementById("close_forgot_password");
forgot_password_btn.onclick = function() {
    forgot_password_modal.style.display = "block";
}
close_forgot_password.onclick = function() {
    forgot_password_modal.style.display = "none";
}

function open_menu(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    // Hide dropdown
    if (!event.target.matches('.drop_btn')) {
        let dropdown = document.getElementById("myDropdown");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }

    // let is_modal_click = 0;
    // let modals = document.getElementsByClassName("modal");
    // for(let i = 0; i < modals.length; i++){
    //     if (event.target !== modals[i] && !modals[i].contains(event.target)) {
    //         is_modal_click = 1;
    //         break;
    //     }
    // }
    //
    // if (is_modal_click === 1){
    //     for(let i = 0; i < modals.length; i++){
    //         modals[i].style.display = "none";
    //     }
    // }
}