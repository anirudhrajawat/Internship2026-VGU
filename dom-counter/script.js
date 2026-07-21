let count = 0;

const countSpan = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', function () {
    count = count + 1;
    countSpan.textContent = count;
});
