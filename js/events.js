import {
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOff,
  btnSoundOn,
} from "./elements.js";
export default function Events({ sounds, controls, timer }) {
  btnPlay.addEventListener("click", function () {
    sounds.pressButton();
    controls.play();
    timer.countdown();
  });

  btnPause.addEventListener("click", function () {
    sounds.pressButton();
    controls.pause();
    timer.hold();
  });

  btnStop.addEventListener("click", function () {
    controls.reset();
    timer.reset();
    sounds.pressButton();
  });

  btnSoundOn.addEventListener("click", function () {
    btnSoundOn.classList.add("hide");
    btnSoundOff.classList.remove("hide");
    sounds.bgAudio.pause();
  });

  btnSoundOff.addEventListener("click", function () {
    btnSoundOff.classList.add("hide");
    btnSoundOn.classList.remove("hide");
    sounds.bgAudio.play();
  });

  btnSet.addEventListener("click", function () {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });
}
