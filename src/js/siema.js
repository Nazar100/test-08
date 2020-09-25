import Siema from 'siema';
const siema = new Siema();
const nextBtnRef = document.querySelector('.next');
const prevBtnRef = document.querySelector('.prev');
nextBtnRef.addEventListener('click', () => siema.next());
prevBtnRef.addEventListener('click', () => siema.prev());
