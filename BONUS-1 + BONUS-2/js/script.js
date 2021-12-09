// BONUS-1:
// Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

// BONUS-2:
// Cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente 
// (se done era uguale a false, impostare true e viceversa)

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
                }
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
            },
            addDone: function(index) {
                
                // l'oggetto su cui clicco diventa la negazione di se stesso
                this.todos[index].done = !this.todos[index].done

            }
        }
    }
);