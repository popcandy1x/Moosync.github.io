export function setupPageFunctionality() {
  const music = document.getElementById("music");
  music.volume = 0.2;
  const playButton = document.getElementById("playButton");
  let isPlaying = false;

  const playPause = () => {
    if (!isPlaying) {
      isPlaying = true;

      music.play();
      playButton.title = "Pause";
      playButton.src = "./assets/img/pausebutton_kaq80l.svg";
    } else {
      isPlaying = false;

      music.pause();
      playButton.title = "Play";
      playButton.src = "./assets/img/playbutton_gbdn8n.svg";
    }
  };

  playButton.onclick = playPause;

  document.getElementById("download__btn").onclick = () => {
    document.getElementById("downloads").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  document.getElementById('hamburger-close').onclick = overlayHandler.bind(this)
  document.getElementById('hamburger-open').onclick = overlayHandler.bind(this)

  document.getElementById('home').onclick = overlayHandler.bind(this)
  document.getElementById('privacy').onclick = overlayHandler.bind(this)
  document.getElementById('documentation').onclick = overlayHandler.bind(this)
  document.getElementById('download').onclick = overlayHandler.bind(this)

}

let toggleStatus = true;

function overlayHandler () {
  const overlayElement = document.getElementById("menu-overlay");

  if (toggleStatus) {
    overlayElement.classList.remove(
      "moosync__navbar-mobileScreen-overlayClose"
    );
    overlayElement.classList.add("moosync__navbar-mobileScreen-overlayOpen");
    toggleStatus = false;
  } else {
    overlayElement.classList.remove("moosync__navbar-mobileScreen-overlayOpen");
    overlayElement.classList.add("moosync__navbar-mobileScreen-overlayClose");
    toggleStatus = true;
  }
}
