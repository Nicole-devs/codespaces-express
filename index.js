const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


const panels = document.querySelectorAll('.cards');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});


function removeActiveClasses() {
  panels.forEach(panel => {
      panel.classList.remove('active');
  });
}