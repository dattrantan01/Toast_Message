function toast({title = "", msg = "", type, duration = 3000}){
    const main = document.getElementById("toast");
    if(main){
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.classList.add(`toast--${type}`);
        setTimeout(function(){
            main.removeChild(toast);
        },duration+1000);

        
        toast.onclick = function(e){
            if(e.target.closest(".toast__close")){
                main.removeChild(toast);
            };
        }
        // delay
      
        const delay = (duration/1000).toFixed(1);
        toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear ${delay}s forwards`;
        const icon = {
            success: "fa-solid fa-circle-check",
            info: "fa-solid fa-circle-info",
            error: "fa-solid fa-xmark"
        }
        let iconType = type;
        toast.innerHTML = `<div class="toast__icon">
            <i class="${icon[iconType]}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">
                ${title}
            </h3>
            <p class="toast__msg">
                ${msg}
            </p>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-circle-xmark"></i>
        </div>`;

        main.appendChild(toast);
    }
}
// toast("succes", "  Yo! u are connected!", "success");

function successToast(){
    toast({
        title: "success", 
        msg: " Yo! u are connected!",
        type: "success",
        duration: 5000
    });
    
}

function errorToast(){
    toast({
        title: "error", 
        msg: " u failed it, try again boy!",
        type: "error",
        duration: 3000
    });
}