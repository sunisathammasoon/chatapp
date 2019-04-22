import React from "react"

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Username: '',
            message: '',
            messages: []
        };
    }
    render(){
        render(
            <div className = "container">
                <div className = "row">
                    <div className = "col-4">
                        <div className = "card-body">
                            <div className = "card-title">Global Chat</div>
                            <hr/>
                            <div className = "messages">
                                {this.state.message.map(message => {
                                    return(
                                        <div>{message.author}: {message.message}</div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className = "card-footer">
                                <input type = "text" placeholder = "Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className = "form-control"/>
                                <br/>
                                <input type = "text" placeholder = "Message" className = "form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                <button className = "btn btn-primary form-control">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}   

export default Chat;