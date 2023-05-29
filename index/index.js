var gifs = [
    "gif/Ypepino1.gif",
    "gif/Ypepino2.gif",
    "gif/Ypepino3.gif",
    "gif/Ypepino4.gif",
    "gif/Ypepino5.gif",
    "gif/Ypepino6.gif",
    "gif/Ypepino7.gif",
    "gif/Ypepino8.gif",
    "gif/Ypepino9.gif",
    "gif/Ypepino10.gif"
];

var gifIndex = 0;

function changeGif() {
    var gif = document.getElementById("gif");
    gifIndex = (gifIndex + 1) % gifs.length;
    gif.src = gifs[gifIndex];

    var audio = document.getElementById("audio");
    audio.currentTime = 0.1;
    audio.play();
}
