const playBtn = document.getElementById('play');
const video = document.getElementById('video');
const image = document.getElementById('image');
const elements = document.getElementById('text');
const cancelBtn = document.getElementById('cancel-container');

let wasVideoPlayed = false;

function isVideoVisible(el) {
  const { top, bottom, left, right } = el.getBoundingClientRect();

  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView = (top <= windowHeight) && (bottom >= 0);
  const horInView = (left <= windowWidth) && (right >= 0);

  return vertInView && horInView;
}

window.addEventListener('scroll', () => {
  if (!isVideoVisible(video)) {
    hideVideo(resetVideo = false);
  }
});

function toggleElementClass(element, show) {
  element.classList.remove(show ? 'hide' : 'show');
  element.classList.add(show ? 'show' : 'hide');
}

function showVideo() {
  if (wasVideoPlayed == false) {
    video.src = './src/assets/videos/home.mp4'; 
  }

  video.play();
  video.style.zIndex = 0;

  toggleElementClass(video, true);
  toggleElementClass(cancelBtn, true);
  toggleElementClass(elements, false);

  image.classList.add('hide');

  wasVideoPlayed = true;
  video.addEventListener('ended', () => hideVideo(resetVideo = true));
}

function hideVideo() {
  if (resetVideo) {
    video.load();
  } else {
    video.pause();
  }

  toggleElementClass(video, false);
  toggleElementClass(cancelBtn, false);
  toggleElementClass(elements, true);

  image.classList.remove('hide');

  video.removeEventListener('ended', hideVideo);
}

playBtn.addEventListener('click', showVideo);
cancelBtn.addEventListener('click', () => hideVideo(resetVideo = true));
