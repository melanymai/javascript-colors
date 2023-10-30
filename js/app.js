const app = {
    colors: [
        'salmon',
        'darkorange',
        'plum',
        'teal',
    ],

    colorDiv: document.querySelector('.colors'),
    form: document.getElementById('form'),

    init() {
        this.colors.forEach((color) => {
        this.generateColorBox(color);
        });
        this.newColor();
    },

    generateColorBox(color, colorName = color) {

        const colorBox = document.createElement('div');

        colorBox.className = 'bg-color-selector';
        colorBox.style.background = color;
        colorBox.innerText = this.capitalizeFirstLetter(colorName);
        colorBox.addEventListener('click', () => {
            document.body.style.backgroundColor = color
        });
        
        this.colorDiv.appendChild(colorBox);
    },

    newColor() {

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            const input = this.form.elements['color'].value;
            const colorName = this.form.elements['name'].value;
            app.generateColorBox(input, colorName);

            this.form.reset();
        });
    },

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
