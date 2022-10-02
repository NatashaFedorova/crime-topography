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
fetch('http://localhost:3000/events')
  .then(r => r.json())
  .then(events => {
    // console.log(events[events.length - 100]); // 24-02-2022
    // console.log(events[events.length - 1]); // 16-09-2022
    let total = 0;
    events.filter((eventEl, idx, events) => {
      if (idx >= events.length - 100) {
        total += 1;
        console.log(total);
        console.log(idx, eventEl); // 20455-20553
      }
    });
  });
