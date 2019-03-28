import React, { Component } from 'react';
import './App.css';
import Canvas from './Canvas.js'

//Debugging: why doesn't setState work for Generators?

class App extends Component {
  //if you want to modify state,use lifecycle method
  componentDidMount() {
    this.valuesGenerator(1000);
    this.opacitiesGenerator(1000);
  }

  componentWillUnmount(){

  }

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      words: [],
      colorLib: [
        //{word: '', r: , g: , b: , o: 0},
        {word: 'red', r: 255, g: 0, b: 0, o: 1},
        {word: 'yellow', r: 255, g: 255, b: 0, o: 1},
        {word: 'blue', r: 0, g: 0, b: 255, o: 1},
        {word: 'green', r: 0, g: 255, b: 0, o: 1},
        {word: 'purple', r: 255, g: 0, b: 255, o: 1},
        {word: 'orange', r: 255, g: 103, b: 0, o: 0},
        {word: 'gold', r: 255, g: 157, b: 0, o: 0},
        {word: 'lavender', r: 178, g: 164, b: 212, o: 0},
        {word: 'pink', r: 255, g: 105, b: 180, o: 0},
        {word: 'muted', r: 183, g: 157, b: 148, o: 0},
        {word: 'tangerine', r: 255, g: 111, b: 89, o: 0},
        {word: 'cherry', r: 89, g: 0, b: 4, o: 0},
        {word: 'peach', r: 255, g: 107, b: 107, o: 0},
        {word: 'navy', r: 20, g: 36, b: 138, o: 0},
        {word: 'apricot', r: 251, g: 206, b: 177, o: 0},
        {word: 'sand', r: 197, g: 152, b: 73, o: 0},
        {word: 'lemon', r: 241, g: 211, b: 2, o: 0},
        {word: 'pale', r: 246, g: 226, b: 127, o: 0},

        //common words
        {word: 'sky', r: 53, g: 144, b: 243, o: 0},
        {word: 'tea', r: 188, g: 211, b: 156, o: 0},
        {word: 'forest', r: 9, g: 161, b: 41, o: 0},
        {word: 'furniture', r: 135, g: 64, b: 0, o: 0},
        {word: 'cat', r: 184, g: 51, b: 106},
        {word: 'dog', r: 242, g: 100, b: 25},

        //heavy connotations
        {word: 'death', r: 40, g: 38, b: 44, o: 0},
        {word: 'sex', r: 255, g: 44, b: 85, o: 0},
        {word: 'ending', r: 0, g: 0, b: 0, o: 0},
        {word: 'happy', r: 255, g: 119, b: 51, o: 0},
        {word: 'good', r: 0, g: 206, b: 203, o: 0},
        {word: 'bad', r: 84, g: 86, b: 119, o: 0},
        {word: 'great', r: 72, g: 201, b: 58, o: 0},

        //common
        {word: 'nyu', r: 178, g: 164, b: 212, o: 0},
        {word: 'stern', r: 170, g: 185, b: 207, o: 0},
        {word: 'barbie', r: 218, g: 24, b: 132, o: 0},
        {word: 'you', r: 104, g: 237, b: 198, o: 0},
        {word: 'I', r: 222, g: 203, b: 183, o: 0},
        {word: 'me', r: 184, g: 242, b: 230, o: 0},
        {word: 'our', r: 137, g: 128, b: 245, o: 0},
        {word: 'woman', r: 237, g: 92, b: 155, o: 0},
        {word: 'female', r: 237, g: 92, b: 155, o: 0},
        {word: 'women', r: 237, g: 92, b: 155, o: 0},
        {word: 'male', r: 0, g: 72, b: 229, o: 0},
        {word: 'man', r: 0, g: 72, b: 229, o: 0},
        {word: 'men', r: 0, g: 72, b: 229, o: 0},
        {word: 'she', r: 163, g: 193, b: 255, o: 0},
        {word: 'he', r: 158, g: 188, b: 158, o: 0},
        {word: 'together', r: 244, g: 172, b: 69, o: 0},
        {word: 'was', r: 203, g: 191, b: 187, o: 0},
        {word: 'can', r: 254, g: 78, b: 0, o: 0},
        {word: 'no', r: 28, g: 49, b: 68, o: 0},
        {word: 'people', r: 213, g: 185, b: 178, o: 0},
        {word: 'make', r: 251, g: 97, b: 7, o: 0},
        {word: 'forbidden', r: 0, g: 38, b: 38, o: 0},
        {word: 'rouge', r: 163, g: 0, b: 21, o: 0},
        {word: 'pickle', r: 178, g: 164, b: 212, o: 0},
        {word: 'pool', r: 18, g: 234, b: 234, o: 0},
        {word: 'chocolate', r: 46, g: 30, b: 15, o: 0},
        {word: 'like', r: 73, g: 185, b: 255, o: 0},
        {word: 'go', r: 90, g: 255, b: 21, o: 0},
        {word: 'bread', r: 255, g: 191, b: 105, o: 0},
        {word: 'denim', r: 10, g: 34, b: 157, o: 0},
        {word: 'spring', r: 245, g: 206, b: 233, o: 0},
        {word: 'hello', r: 255, g: 237, b: 102, o: 0},
        {word: 'coffee', r: 111, g: 78, b: 55, o: 0},

        //time
        {word: 'time', r: 178, g: 164, b: 212, o: 0},
        {word: 'now', r: 231, g: 119, b: 40, o: 0},
        //{word: 'never', r: 178, g: 164, b: 212, o: 0},
        //{word: 'forever', r: , g: , b: , o: 0},
        //{word: 'if', r: , g: , b: , o: 0},
        {word: 'tomorrow', r: 192, g: 218, b: 116, o: 0},
        {word: 'morning', r: 255, g: 159, b: 28, o: 0},
        {word: 'will', r: 78, g: 205, b: 196, o: 0},
        {word: 'future', r: 137, g: 128, b: 245, o: 0},
        //{word: '', r: , g: , b: , o: 0},

        //names
        {word: 'Rebecca', r: 223, g: 194, b: 242, o: 0},
        {word: 'Gayatri', r: 240, g: 162, b: 2, o: 0},
        {word: 'Taj', r: 88, g: 252, b: 236, o: 0},
        {word: 'Victoria', r: 168, g: 180, b: 165, o: 0},
        {word: 'Scarlett', r: 140, g: 0, b: 0, o: 0},
        {word: 'Blake', r: 98, g: 191, b: 237, o: 0},
        {word: 'Mom', r: 149, g: 113, b: 134, o: 0},
        {word: 'Dad', r: 2, g: 103, b: 193, o: 0},
        {word: 'Antoine', r: 255, g: 140, b: 97, o: 0},
        {word: 'Aysha', r: 245, g: 235, b: 49, o: 0}


      ],
      displayedColors: [],
      /*
      box:[
        {
          top:l
        }
      ]
      generate new object and push it into box
      */
      tops: [],
      lefts: [],
      widths: [],
      heights: [],
      opacities: [],
      opacityIndex: 0
    };
    this.textChangeHandler = this.textChangeHandler.bind(this);
    //this.valuesGenerator(1000);
    //this.opacitiesGenerator(1000);
  }

  valuesGenerator = (num) => {
    var t = [];
    var l = [];
    var w = [];
    var h = [];
    for (var i = 0; i < num; i++) {
      var random = Math.floor(Math.random(0,1) * 4);
      if (random === 0) {
        var width= Math.random(0,1) * 100;
        var height= Math.random(0,1) * 400;
        var top = Math.random(0,1) * 700;
        var left = Math.random(0,1) * 1000;
      }
      if (random === 1) {
        var width= Math.random(0,1) * 1000;
        var height= Math.random(0,1) * 300;
        var top = Math.random(0,1) * 500;
        var left = Math.random(0,1) * 300;
      }
      if (random === 2) {
        var width= Math.random(0,1) * 500;
        var height= Math.random(0,1) * 200;
        var top = 654 - Math.random(0,1) * 200;
        var left = 1280 - Math.random(0,1) * 400;
      }
      if (random == 3) {
        var width= Math.random(0,1) * 600;
        var height= Math.random(0,1) * 50;
        var top = 654 - Math.random(0,1) * 500;
        var left = 1280- Math.random(0,1) * 600;
      }
      top = Math.floor(top);
      left = Math.floor(left);
      width = Math.floor(width);
      height = Math.floor(height);
      //console.log("window width: " + window.innerWidth)
      //console.log("window height: " + window.innerHeight)
      //console.log("top: "+ top)
      //console.log("left: " + left)
      //console.log("width: " + width)
      //console.log("height: " + height)
      t.push(top);
      l.push(left);
      w.push(width);
      h.push(height);
    }
    this.setState({tops: t});
    //alert(this.state.tops.length);
    this.setState({lefts: l});
    //alert(this.state.lefts.length);
    this.setState({widths: w});
    this.setState({heights: h});
  }

  opacitiesGenerator = (num) => {
    var o = [];
    for (var i = 0; i < num; i++) {
      var random = 0.2 + Math.random(1) * 0.8;
      o.push(random);
    }
    //alert(o.length);
    this.setState({opacities: o});
    //alert(this.state.opacities.length);
  }

  textChangeHandler = (e) => {
    var text = e.target.value;
    this.setState({text: text});
    //reconstruct the libary of words
    var words = [];
    var word = '';
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      var nextCh = text.charAt(i + 1);
      if (ch !== ' ') {
        word += ch;
      } else if (ch === ' ' && nextCh !== ' ') {
        words.push(word);
        word = '';
      }
    }
    //bug: continuous spaces produce a period for some reason
    this.setState({words: words});
    //find the new corresponding colors
    this.findColors();
  }

  findColors = () => {
    let displayedColors = [];
    const colorLib = this.state.colorLib;

    //go through the words array, push the corresponding color to each word to displayedColors
    //map function
    var j = 0;
    this.state.words.map((word, index) => {
      let found = false;
        //keeps track of the index of displayedColors
      for (var i = 0; i < colorLib.length && !found; i++) {
        if (word.localeCompare(colorLib[i].word, undefined,{sensitivity: 'base'}) == 0) {
          found = true;
          let color =  `rgb(${colorLib[i].r}, ${colorLib[i].g}, ${colorLib[i].b}, `;
          if (colorLib[i].o === 1) {
            color += "1)"
          } else {
            color += `${this.state.opacities[j]})`;
            j++;
          }
          displayedColors.push(color);
        }
      }
    });

    this.setState({displayedColors: displayedColors});
    //console.log(this.state)
  }

  render(){
    const colors = this.state.displayedColors.map((color, index) => {
      return <Canvas
        color = {color}
        top = {this.state.tops[index]}
        left = {this.state.lefts[index]}
        width = {this.state.widths[index]}
        height = {this.state.heights[index]}
        key={index} />
    });

    return (
      <div className = "canvas">

        <div>
          <label className='canvas-label'>
            Start typing and see what happens...
          </label>
        </div>

        <textarea
          type='text'
          name='txt'
          className='canvas-input'
          value={this.state.text}
          onChange={this.textChangeHandler}
          placeholder=''
          rows='5'
        />

        <div>
          <label className='word-count'>
            Word Count: {this.state.words.length}
          </label>
        </div>
        {colors}
      </div>
    );
  }
}

export default App;
