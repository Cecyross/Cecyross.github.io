let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #00BFFF;">Me encanta crear aplicaciones web y diseñar.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
