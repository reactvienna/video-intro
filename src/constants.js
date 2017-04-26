import {delay, duration, sound} from './config.json';

const constants = {
  animationDuration: `${duration / 1000}s`,
  animationEasing: 'ease-in-out',
  delay,
  sound: `sounds/${sound}.mp3`,
};

export default constants;
