const bodyElt = document.getElementById('settings');

document.getElementById('btn-theme-dark').addEventListener('click', function() {
    bodyElt.classList.add('theme-dark');
});

document.getElementById('btn-theme-light').addEventListener('click', function() {
    bodyElt.classList.remove('theme-dark');
});


document.getElementById('btn-line-large').addEventListener('click', function() {
    bodyElt.classList.add('line-large');
});

document.getElementById('btn-line-normal').addEventListener('click', function() {
    bodyElt.classList.remove('line-large');
});
