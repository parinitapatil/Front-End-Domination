function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.querySelector('.btn').addEventListener('click', function () {
    const change = getRandomColor();
    document.body.style.backgroundColor = change;
})