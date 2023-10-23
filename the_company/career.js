let level = document.querySelector("#level");
let field = document.querySelector("#field");
// let radio = document.querySelectorAll("[name='gender']");


level.addEventListener("change", () => {
    let selectedLevel = level.options[level.selectedIndex].value;
    (selectedLevel === "High School" || selectedLevel === "initial") ? field.setAttribute("disabled", "") : field.removeAttribute("disabled") ;
});



let resetBtn = document.querySelector(`[type="reset"]`);
resetBtn.onclick = () => {
    let overlay = document.createElement("div");
    overlay.style.cssText = "position: fixed; top: 0; right: 0; left: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5); z-index: 100;";
    document.body.append(overlay);
    window.setTimeout( () => document.body.removeChild(overlay), 500);
};
