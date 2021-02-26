import React, { Component } from 'react';
import ChirpList from './ChirpList';



class ChirpsFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chirpList: [],
            chirpUser: "Charles",
            chirpContent: ""

        }
        this.handlesNewChirp = this.handlesNewChirp.bind(this);
        this.handlesPost = this.handlesPost.bind(this);
    }

    //     useState[{username: 'joebiden', text: `this is a battle for the soul of america`},
    // {username: 'donaldjtrump', text: `it's gonna be huge, nobody's seen anything like it before`},
    // {username: 'berniesanders', text: `we're in an unprecedented crisis, and we're gonna have to think big to get out of it`}]

    componentDidMount() {
        const chirp = [
            {
                time: new Date(2020, 11, 2),
                user: "joebiden",
                content: "this is a battle for the soul of america"
            },
            {
                time: new Date(2020, 11, 2),
                user: "realdonaldtrump",
                content: "it's gonna be huge, nobody's seen anything like it before"
            },
            {
                time: new Date(2020, 11, 29),
                user: "berniesanders",
                content: "we're in an unprecedented crisis, and we're gonna have to think big to get out of it?"
            }

        ]

        this.setState({
            chirpList: chirp


        })
    }

    handlesNewChirp(e) {
        this.setState({
            chirpContent: e.target.value

        });

    }

    handlesPost(e) {
        e.preventDefault();
        if (this.state.chirpContent.length > 0) {
            let oddList = this.state.chirpList;
            oddList.unshift(
                {
                    time: new Date(Date.now()),
                    user: this.state.chirpUser,
                    content: this.state.chirpContent
                }
            );
            this.setState({
                chirpList: oddList,
                chirpContent: ""
            })


        } else {
            return alert("\t\t\tEmpty Chirp:\n\nAdd a message before posting Chirps!")
        }

    }

    render() {

        return (
            <div className="card mt-5" style={{ maxWidth: " 90vw" }} >

                <div className="card-header">
                    To get started, type a message and post a chirp.
                </div>
                <div className="input-group">
                    <textarea className="form-control" required onChange={this.handlesNewChirp} value={this.state.chirpContent} />
                    <div className="input-group-append">
                        <button type="button" className=" btn btn-primary" onClick={this.handlesPost} >Post</button>
                    </div>
                </div>

                <ChirpList chirps={this.state.chirpList} />

            </div>

        );
    }


}

export default ChirpsFeed;
