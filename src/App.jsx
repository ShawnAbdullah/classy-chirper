import React from "react";
// import ChirpList from "./ChirpList";
// import ChirpsFeed from "./ChirpsFeed";
// import Chirp from "./Chirp";

class App extends React.Component {
  constructor(props) {
    this.state = {
      username: "",
      text: "",
      chirps: [
        {
          username: "joebiden",
          text: `this is a battle for the soul of america`,
        },
        {
          username: "donaldjtrump",
          text: `it's gonna be huge, nobody's seen anything like it before`,
        },
        {
          username: "berniesanders",
          text: `we're in an unprecedented crisis, and we're gonna have to think big to get out of it`,
        },
      ],
    }
  }

  handleClick = () => {
    // called setState to update the value of this.state.chirps with the new chirp when the button is clicked. equivalent to chirplist on functional components
  this.setState({
    chirps: [...this.state.chirps, { username: this.state.username, text: this.state.text }],
  });
};

  render() {
      return (
        <div>
        <h1 class="text-primary">welcome to chirper!</h1>
        <input
          value={this.state.username}
          onChange={(e) => this.setState({ username: e.target.value })}
        />
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">your chirp</span>
          </div>
          <input
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            class="form-control"
            aria-label="With textarea"
          ></input>
        </div>
        <button onClick={this.handleClick}>post chirp</button>
      </div>
      )
   
  }
}

// const [username, setUsername] = useState('');
//     const [text, addText] = useState('');
//     const [chirps, ChirpList] =
//     useState[{username: 'joebiden', text: `this is a battle for the soul of america`},
//     {username: 'donaldjtrump', text: `it's gonna be huge, nobody's seen anything like it before`},
//     {username: 'berniesanders', text: `we're in an unprecedented crisis, and we're gonna have to think big to get out of it`}]
//     const handleClick = e => {
//         chirps = chirps.map({username, text})}
//     render (
//         <div>
//             <h1 class='text-primary'>welcome to chirper!</h1>
//             <input value={username} onChange={e => setUsername(e.target.value)} />
//             <div class="input-group">
//   <div class="input-group-prepend">
//     <span class="input-group-text">your chirp</span>
//   </div>
//   <input value={text} onChange={e => addText(e.target.value)} class="form-control" aria-label="With textarea"></input>
// </div>
//     <button onClick={handleClick}>post chirp</button>
//         </div>
//     );

export default App;
