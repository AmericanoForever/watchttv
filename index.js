function loadCh() {
    const embeded = document.getElementById('twitch-embed');
    while (embeded && embeded.parentNode) {
        embeded.parentNode.removeChild(embeded);
    }

    const container = document.getElementById('body');
    const divChild = document.createElement('div');
    divChild.setAttribute('id', 'twitch-embed');
    container.appendChild(divChild);

    const scriptChild = document.createElement('script');
    scriptChild.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
    divChild.appendChild(scriptChild);

    const name = document.getElementById("name").value;
    new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channel: name,
        parent: ["americanoforever.github.io"]
    });
}

document.getElementById('load').addEventListener('click', function() {
    loadCh();
});

document.getElementById("name").addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        loadCh();
    }
});
