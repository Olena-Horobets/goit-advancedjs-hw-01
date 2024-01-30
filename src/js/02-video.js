import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';
let seconds = localStorage.getItem(KEY) ?? 0;

const onTimeUpdate = throttle(({ seconds }) => {
  localStorage.setItem(KEY, seconds);
}, 1000);

player.setCurrentTime(seconds);

player.on('timeupdate', onTimeUpdate);
