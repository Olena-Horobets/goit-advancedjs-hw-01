import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';
let { seconds } = JSON.parse(localStorage.getItem(KEY)) ?? { seconds: 0 };

const onTimeUpdate = ({ duration, percent, seconds }) => {
  localStorage.setItem(KEY, JSON.stringify({ duration, percent, seconds }));
};
const throttledFn = throttle(onTimeUpdate, 1000);

player
  .setCurrentTime(seconds)
  .then()
  .catch(function (err) {
    console.log(err);
  });
player.on('timeupdate', throttledFn);
