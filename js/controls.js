export default function Controls({ btnPlay, btnPause, btnSet, btnStop }) {
  function play() {
    btnPlay.classList.add("hide");
    btnPause.classList.remove("hide");
    btnSet.classList.add("hide");
    btnStop.classList.remove("hide");
  }

  function pause() {
    btnPlay.classList.remove("hide");
    btnPause.classList.add("hide");
  }
  function reset() {
    btnPlay.classList.remove("hide");
    btnPause.classList.add("hide");
    btnStop.classList.add("hide");
    btnSet.classList.remove("hide");
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos?");
    if (!newMinutes) {
      return false;
    }
    return newMinutes;
    // minutes = prompt("Quantos minutos?") || minutes;
    // return updateDisplay(minutes, 0);
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  };
}
