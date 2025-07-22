document.addEventListener('DOMContentLoaded', function () {
  initWheel();

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];
      const randomOutcome = order[Math.floor(Math.random() * order.length)];
      spinWheel(randomOutcome);
    });
  });
});

function initWheel() {
  const wheel = document.querySelector('.roulette-wrapper .wheel');
  let row = "";

  row += "<div class='row'>";
  row += `  <div class='card red'><img src="Ash.webp"></div>`;
  row += `  <div class='card black'><img src="Atlas.webp"></div>`;
  row += `  <div class='card red'><img src="Banshee.webp"></div>`;
  row += `  <div class='card black'><img src="Baruuk.webp"></div>`;
  row += `  <div class='card red'><img src="Chroma.webp"></div>`;
  row += `  <div class='card black'><img src="Ember.webp"></div>`;
  row += `  <div class='card red'><img src="Equinox.webp"></div>`;
  row += `  <div class='card green'><img src="Excalibur.webp"></div>`;
  row += `  <div class='card red'><img src="Frost.webp"></div>`;
  row += `  <div class='card black'><img src="Gara.webp"></div>`;
  row += `  <div class='card red'><img src="Garuda.webp"></div>`;
  row += `  <div class='card black'><img src="Gauss.webp"></div>`;
  row += `  <div class='card red'><img src="Mesa.webp"></div>`;
  row += `  <div class='card black'><img src="Mirage.webp"></div>`;
  row += `  <div class='card red'><img src="Revenant.webp"></div>`;
  row += "</div>";

  for (let x = 0; x < 29; x++) {
    wheel.insertAdjacentHTML('beforeend', row);
  }
}

function spinWheel(roll) {
  const wheel = document.querySelector('.roulette-wrapper .wheel');
  const order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];
  const position = order.indexOf(roll);

  const rows = 12;
  const card = 75 + 3 * 2;
  let landingPosition = (rows * 15 * card) + (position * card);

  const randomize = Math.floor(Math.random() * 75) - (75 / 2);
  landingPosition = landingPosition + randomize;

  const object = {
    x: Math.floor(Math.random() * 50) / 100,
    y: Math.floor(Math.random() * 20) / 100
  };

  wheel.style.transitionTimingFunction = `cubic-bezier(0, ${object.x}, ${object.y}, 1)`;
  wheel.style.transitionDuration = '6s';
  wheel.style.transform = `translate3d(-${landingPosition}px, 0px, 0px)`;

  setTimeout(function () {
    wheel.style.transitionTimingFunction = '';
    wheel.style.transitionDuration = '';

    const resetTo = -(position * card + randomize);
    wheel.style.transform = `translate3d(${resetTo}px, 0px, 0px)`;
  }, 6 * 1000);
}