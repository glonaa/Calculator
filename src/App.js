import React, { Component } from "react";
import { evaluate } from "mathjs";
import "./App.css";

class App extends Component {
  state = {
    screen: ["0"],
    keys: [
      { value: "AC",styling: "clear wide" },
      { value: "/", styling: "operator" },
      { value: "7", styling: "num" },
      { value: "8", styling: "num" },
      { value: "9", styling: "num" },
      { value: "*", styling: "operator" },
      { value: "4", styling: "num" },
      { value: "5", styling: "num" },
      { value: "6", styling: "num" },
      { value: "+", styling: "operator" },
      { value: "1", styling: "num" },
      { value: "2", styling: "num" },
      { value: "3", styling: "num" },
      { value: "-", styling: "operator" },
      { value: "0", styling: "zero wide" },
      { value: ".", styling: "num" },
      { value: "=", styling: "operator" },
    ],
    
  };

  handleInput = (val) => {
    if (val === "AC") {
      this.setState({ screen: ["0"] });
    } else if (val === "=") {
      let evalStr = this.state.screen.join("");
      let output = evaluate(evalStr);
      this.setState({ screen: [output] });
    } else {

      let newArray = [...this.state.screen, val];
      if (newArray[0] === "0") {
        newArray.shift();
        
      }
  
      this.setState({ screen: newArray });
    }
  };
  

  render() {
    return (
    <div className="container">
        <h1>The Calculator</h1>
      
        <div className="wrapper">
          
          <div className="screen">
          <div className="display">
        
            <h2>{this.state.screen}</h2>
          </div>
</div>
          <div className="buttons">
            {this.state.keys.map((item) => {
              return (
                <KeyButton
                  number={item.value}
                  styling={item.styling}
                  clickFunction={this.handleInput}
                  
                />
              );
            })}
            
          </div>
        </div>

        <h4 className="tag">
          Made with Love  | <button className="tagbtn"><a href="https://github.com/glonaa" >My github</a></button>
        </h4>
      </div>
    );
  }
}

const KeyButton = (props) => {
  return (
    <button
      className={`btn ${props.styling}`}
      onClick={() => props.clickFunction(props.number)}
    >
      {props.number}

      

    </button>
  );

};

export default App