import React, { Component } from 'react';

class App extends Component {
    state = {
        // todos : initialTodos,
        name : ''
    }
handleNameChange = e => {
this.setState ({name: e.currentTarget.value})
}    
render (){


        return <div>
            <form>
                <label>name</label>
                <br/>
                    <input 
                    type='text'
                    value={this.state.name}
                    onChange={this.handleNameChange}></input>
            </form>
        </div>
    }
}
export default App