var gifs = [
    "gif/ypepino1.gif",
    "gif/ypepino2.gif",
    "gif/ypepino3.gif",
    "gif/ypepino4.gif",
    "gif/ypepino5.gif",
    "gif/ypepino6.gif",
    "gif/ypepino7.gif",
    "gif/ypepino8.gif",
    "gif/ypepino9.gif",
    "gif/ypepino10.gif"
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
