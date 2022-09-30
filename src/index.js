const refs = {
  btnPlay: document.querySelector('.js-btn-play'),
  btnStop: document.querySelector('.js-btn-stop'),
};

refs.btnPlay.addEventListener('click', onBtnPlayClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

// console.log(events);
// console.log(names);

// ===================================================================
btnStopIsHidden();

function onBtnPlayClick(e) {
  console.log('Click play');
  btnPlayIsHidden();
  btnStopIsNotHidden();
}

function onBtnStopClick(e) {
  console.log('Click stop');
  btnStopIsHidden();
  btnPlayIsNotHidden();
}

function btnPlayIsHidden() {
  refs.btnPlay.classList.add('is-hidden');
}

function btnPlayIsNotHidden() {
  refs.btnPlay.classList.remove('is-hidden');
}

function btnStopIsHidden() {
  refs.btnStop.classList.add('is-hidden');
}

function btnStopIsNotHidden() {
  refs.btnStop.classList.remove('is-hidden');
}
