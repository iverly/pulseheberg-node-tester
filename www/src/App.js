import React from 'react';

import Header from './components/Header';
import Chat from './components/Chat';
import Todo from './components/Todo';

function App() {
    return (
       <>
            <Header />
            <div className="container" style={{ marginTop: '4rem' }}>
                <Chat />
                <Todo />
                <p style={{width: '100%', textAlign: 'center'}}>Made by Iverly in <span role="img" aria-label="France">🇫🇷</span> with <span role="img" aria-label="Love">❤️</span></p>
            </div>
       </>
    );
}

export default App;
