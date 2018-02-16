import React, { Component } from 'react';
import Issue from './issue';
import './issues.css';


const QUERY =  "https://api.github.com/search/issues?q=label:HackIllinois2018&sort=comments&order=desc"

class Issues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: null
        }   
    }

    componentWillMount() {
        fetch(QUERY, {method: 'GET',
                      headers: {
                            'Accept': 'application/vnd.github.preview',
                            'Content-Type': 'application/json',
                        }}).then((response) => response.json())
                        .then((responseJson) => {
                            this.setState({issues: responseJson.items});
                        });
    }

    render() {
        console.log(this.state.issues);
        var issues = []
        if (this.state.issues != null) {
            return (
                <div className="issues">
                    <ul>
                        {this.state.issues.map(function(i) {
                            return <Issue issue={i}/>
                        })}
                    </ul>
                </div>
            );
        }

        return (
            <div className="issues">
                "Loading"
            </div>
        );
    }
}

export default Issues;
