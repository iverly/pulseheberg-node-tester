import React, { Component } from 'react';
import dateFormat from 'dateformat';

class Chat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            userInput: '',
            messages: []
        }
    }

    handleInput(e) {
        this.setState({ userInput: e.target.value })
    }

    handleFormUsername(e) {
        e.preventDefault();
        this.setState({ username: this.state.userInput, userInput: '' })
    }

    handlePostMessage(e) {
        e.preventDefault();
        this.setState({ messages: [{author: this.state.username, body: this.state.userInput, date: dateFormat(new Date(), '"L"e dd/mm/yy à HH:MM:ss') } ,...this.state.messages], userInput: '' })
    }

    render() {
        return (
            <div class="card">
                <h5 class="card-header">Chat (with Websocket)</h5>
                <div class="card-body">
                    {this.state.username === '' ? 
                        <>
                            <h5>Entrez votre pseudo</h5>
                            <form>
                                <div class="form-row align-items-center">
                                    <div class="col-sm-3 my-1">
                                        <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">@</div>
                                            </div>
                                            <input type="text" class="form-control" value={this.state.userInput} onChange={this.handleInput.bind(this)} placeholder="Username" />
                                        </div>
                                    </div>
                                    <div class="col-auto my-1">
                                        <button type="submit" class="btn btn-primary" onClick={this.handleFormUsername.bind(this)}>Valider</button>
                                    </div>
                                </div>
                            </form>
                        </>
                    :
                        <>
                            <h6 class="card-title">Vous êtes connecté en tant que <b>{this.state.username}</b></h6>
                            <div style={{height: '20rem', overflowY: 'scroll'}}>
                                {
                                    this.state.messages.length === 0 ?
                                        <>
                                            <p className="card-text">Il y a actuellement aucun message ...</p>
                                        </>
                                    :
                                        this.state.messages.map((message, index) => {
                                            return <Message key={index} author={message.author} body={message.body} date={message.date} />
                                        })
                                }
                            </div>
                            <form>
                                <div class="form-row align-items-center">
                                    <div class="col-11 my-1">
                                        <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" value={this.state.userInput} onChange={this.handleInput.bind(this)} placeholder="Message" />
                                        </div>
                                    </div>
                                    <div class="col-1 my-1">
                                        <button type="submit" class="btn btn-primary" onClick={this.handlePostMessage.bind(this)}>Envoyer</button>
                                    </div>
                                </div>
                            </form>
                        </>
                    }
                </div>
            </div>
        )
    }

}

const Message = (props) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.author} <span style={{fontSize: '0.6em', color: '#BBB'}}>{props.date}</span></h5>
                <p class="card-text">{props.body}</p>
            </div>
        </div>
    )
}

export default Chat;