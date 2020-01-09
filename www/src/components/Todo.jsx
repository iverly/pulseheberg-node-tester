import React, { Component } from 'react';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            todos: []
        }
    }

    handleInput(e) {
        this.setState({ userInput: e.target.value })
    }

    handlePostTodo(e) {
        e.preventDefault();
        if (this.state.userInput === '') return;
        this.setState({ todos: [...this.state.todos, this.state.userInput], userInput: '' })
    }

    handleDeleteTodo(index, e) {
        e.preventDefault();
        this.setState({ todos: this.state.todos.filter((v,i) => i !== index) })
    }

    render() {
        return (
            <div class="card" style={{marginTop: '2rem', marginBottom: '2rem'}}>
                <h5 class="card-header">Todo (with Database) </h5>
                <div class="card-body">
                    {
                        this.state.todos.length === 0 ?
                            <>
                                <p className="card-text">Il y a actuellement aucune tâche enregistrer ...</p>
                            </>
                        :
                        <>
                            <p className="card-text">Il y a {this.state.todos.length} tâches en cours ...</p>
                            <ul class="list-group" style={{marginTop: '1rem', marginBottom: '1rem'}}>
                                {
                                    this.state.todos.map((todo, index) => {
                                        return (
                                            <li className="list-group-item" key={index}>
                                                <div className="row">
                                                    <div className="col-11">{todo}</div>
                                                    <div className="col-1">
                                                        <button type="button" class="close" aria-label="Close" onClick={this.handleDeleteTodo.bind(this, index)}>
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </>
                    }
                    <form>
                        <div class="form-row align-items-center">
                            <div class="col-11 my-1">
                                <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" value={this.state.userInput} onChange={this.handleInput.bind(this)} placeholder="Nouvelle tâche ..." />
                                </div>
                            </div>
                            <div class="col-1 my-1">
                                <button type="submit" class="btn btn-primary" onClick={this.handlePostTodo.bind(this)}>Ajouter</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Todo;