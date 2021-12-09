// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": 
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
// che quindi viene aggiunto alla lista dei todo esistenti.

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            newToDo: '',
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
            },
            addToDo: function() {

                // if per far sì che non vengano aggiunte righe senza testo
                // trim per togliere gli spazi prima e/o dopo del testo 
                const newToDoTrim = this.newToDo.trim();
                if(newToDoTrim.length > 0) {
                    this.todos.push({
                        text: newToDoTrim,
                        done: false
                    });
                    this.newToDo = '';
                }
            }
        }
    }
);