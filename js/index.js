// document.body.querySelector("#blob");
// window.onload = () => {
//     blob = document.getElementById("blob");
// }
const blob = document.getElementById("blob");
const cursor = document.getElementById("cursor-circle");


function blobFollow(event) {
    const { clientX, clientY } = event;
    // console.log(clientX, clientY);

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
}

function cursorFollow(event) {
    const { clientX, clientY } = event;
    // console.log(clientX, clientY);
    cursor.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 0, fill: "forwards" });
}
document.addEventListener("mousemove", event => {
    blobFollow(event);
    cursorFollow(event);
});//