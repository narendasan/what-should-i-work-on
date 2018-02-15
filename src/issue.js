import React, { Component } from 'react';


class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.issue.html_url,
            title: this.props.issue.title,
            body: this.props.issue.body.slice(0,100) + "...",
            lang: null,
            project: null, 
            project_url: this.props.issue.repository_url
        }
    }

    componentWillMount() {
        fetch(this.state.project_url, {method: 'GET',
                                    headers: {
                                        'Accept': 'application/vnd.github.preview',
                                        'Content-Type': 'application/json',
        }}).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState((state) => ({ project: responseJson.full_name, lang: responseJson.language}))
            });
    }

    render() {
        return(
            <li>
                <a href={this.state.url}>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.body}</p>
                </a>
                <a href={this.state.project_url}><span>{this.state.project} - {this.state.lang}</span></a>
            </li>
        )
    }   
}

export default Issue;