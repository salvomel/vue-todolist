// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": 
// cliccando su di essa, il todo viene rimosso dalla lista.

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
        },
        methods: {
            deleteToDo: function(index) {
                // splice per rimuovere elementi da un array
                this.todos.splice(index, 1);
            }
        }
    }
);