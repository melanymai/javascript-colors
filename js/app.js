let app = {
    colors: [
        'lightsteelblue',
        'palegreen',
        'crimson',
        'sienna',
    ],

    contentArea: document.querySelector('.content'),

    init: function() {
        for (index in app.colors) {
            app.generateColorBox(app.colors[index]);
        }
        app.newColor()
    },



    generateColorBox: function(color) {
        let colorBox = document.createElement('div');
        colorBox.className = 'bg-color-selector';
        colorBox.style.background = color;
        colorBox.innerText = color;
        colorBox.addEventListener("click", function () {
            document.body.style.backgroundColor = color

        })
        app.contentArea.appendChild(colorBox);
        return colorBox;
    },

    newColor: function() {
        const form = document.getElementById('form')

        form.addEventListener('submit', function (e) {
            e.preventDefault()
            const input = form.elements['color'].value
            app.generateColorBox(input)
            input.value = ""
        })

    },
};

document.addEventListener('DOMContentLoaded', app.init);
