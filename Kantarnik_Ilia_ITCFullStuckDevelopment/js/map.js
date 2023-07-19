const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');

const cities = [
  { name: 'Вена', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170128.87924986912!2d16.215251032336276!3d48.22079589398245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0xfdc2e58a51a25b46!2z0JLQtdC90LAsINCQ0LLRgdGC0YDQuNGP!5e0!3m2!1sru!2sil!4v1689721234716!5m2!1sru!2sil' },
  { name: 'Берлин', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310844.36299317604!2d13.095091373313611!3d52.50680415535846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2z0JHQtdGA0LvQuNC9LCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2sil!4v1689721277381!5m2!1sru!2sil' },
  { name: 'Прага', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327870.3462499137!2d13.841803216300645!3d50.05843910762455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2z0J_RgNCw0LPQsCwg0KfQtdGF0LjRjw!5e0!3m2!1sru!2sil!4v1689721309981!5m2!1sru!2sil' },
  { name: 'Варшава', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.46657071757!2d20.89638626833434!3d52.233033477403986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2z0JLQsNGA0YjQsNCy0LAsINCf0L7Qu9GM0YjQsA!5e0!3m2!1sru!2sil!4v1689721348377!5m2!1sru!2sil' }
];

let currentIndex = 0;

function showMap(index) {
  const city = cities[index];
  mapFrame.src = city.url;
  backButton.disabled = index === 0;
  nextButton.disabled = index === cities.length - 1;
  
}
document.addEventListener('DOMContentLoaded', function() {
  showMap(currentIndex);
  
function showPreviousMap() {
  currentIndex = (currentIndex - 1);
  showMap(currentIndex);
  console.log(`Выбранный город: ${cities[currentIndex].name}, Номер в массиве: ${currentIndex}`);
}

function showNextMap() {
  currentIndex = (currentIndex + 1);
  showMap(currentIndex);
  console.log(`Выбранный город: ${cities[currentIndex].name}, Номер в массиве: ${currentIndex}`);
}

backButton.addEventListener('click', showPreviousMap);
nextButton.addEventListener('click', showNextMap);

});

