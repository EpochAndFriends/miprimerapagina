var gifs = [
    "ypepino1.gif",
    "ypepino2.gif",
    "ypepino3.gif",
    "ypepino4.gif",
    "ypepino5.gif",
    "ypepino6.gif",
    "ypepino7.gif",
    "ypepino8.gif",
    "ypepino9.gif",
    "ypepino10.gif"
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
