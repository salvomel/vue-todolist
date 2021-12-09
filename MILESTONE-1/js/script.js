// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            todos: [
                {
                    text: 'Comprare il pane',
                    done: true
                },
                {
                    text: 'Chiamare la nonna',
                    done: false
                },
                {
                    text: 'Andare in palestra',
                    done: true
                },
                {
                    text: 'Preparare la valigia',
                    done: false
                },
            ]
        }
    }
);