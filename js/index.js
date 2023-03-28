import Timer from "./timer.js";
import Controls from "./controls.js";
import Sounds from "./sounds.js";
import Events from "./events.js";
import {
  btnPause,
  btnPlay,
  btnSet,
  btnStop,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const controls = Controls({
  btnPause,
  btnPlay,
  btnSet,
  btnStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sounds = Sounds();
//events
Events({
  sounds,
  controls,
  timer,
});
