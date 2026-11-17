const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const details = document.getElementById('details');
const weddingSong = document.getElementById('weddingSong');
const musicBtn = document.getElementById('musicBtn');
const celebration = document.getElementById('celebration');
const rain = document.querySelector('.rain');
let opened = false;
const shapes = ['✦','❀','✿','♥','•','◆'];
for(let i=0;i<28;i++){
  const item=document.createElement('span');
  item.textContent=shapes[i%shapes.length];
  item.style.setProperty('--x',`${Math.random()*100}%`);
  item.style.setProperty('--delay',`${Math.random()*5}s`);
  item.style.setProperty('--duration',`${5+Math.random()*5}s`);
  item.style.setProperty('--drift',`${-80+Math.random()*160}px`);
  rain.appendChild(item);
}
function openInvitation(){
  if(opened) return;
  opened = true;
  envelope.classList.add('open');
  celebration.classList.add('active');
  musicBtn.classList.remove('muted');
  weddingSong.play().catch(()=>{});
  openBtn.textContent = 'التفاصيل بالأسفل ↓';
  details.setAttribute('aria-hidden','false');
  setTimeout(()=>{ details.classList.add('visible'); details.scrollIntoView({behavior:'smooth'}); }, 650);
}
envelope.addEventListener('click',openInvitation);
envelope.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openInvitation()}});
openBtn.addEventListener('click',openInvitation);
musicBtn.addEventListener('click',()=>{
  if(weddingSong.paused){ weddingSong.play(); musicBtn.classList.remove('muted'); musicBtn.setAttribute('aria-label','إيقاف الموسيقى'); }
  else { weddingSong.pause(); musicBtn.classList.add('muted'); musicBtn.setAttribute('aria-label','تشغيل الموسيقى'); }
});
