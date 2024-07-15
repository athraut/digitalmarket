document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('popup').style.display = 'block';
    setTimeout(function () {
        document.getElementById('popup').style.display = 'none';
    }, 3000);
});
