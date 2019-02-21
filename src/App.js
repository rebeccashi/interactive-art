import React  from 'react';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:'',
            word:'',
            display: false,
            colors: [],
            count: 0,
            top: 0,
            left: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        var name = e.target.value
        this.setState({text:name})
        var ch = name.charAt(name.length-1)
        var w = this.state.word
        var random = Math.floor(Math.random(0,1) * 2)
        var random2 = Math.floor(Math.random(0.1) * 2)
        var opacity = 0.2 + Math.random(0, 1) * 0.8;
        if (ch === ' ') {
          if (name.charAt(name.length-2) !== ' ') {
            this.setState({count: this.state.count+1})
          }
          var style = {
           position:"absolute",
           width: `${this.state.width}px`,
           height: `${this.state.height}px`,
           top:`${this.state.top}px`,
           left:`${this.state.left}px`
          }

          //myscreen: 1280 * 800
          if (random === 0) {
            if (random2 === 0) {
              var width= Math.random(0,1) * 100;
              var height= Math.random(0,1) * 1200;
              var top = Math.random(0,1) * 700;
              var left = Math.random(0,1) * 1000;
            } else {
              var width= Math.random(0,1) * 1000;
              var height= Math.random(0,1) * 300;
              var top = Math.random(0,1) * 500;
              var left = Math.random(0,1) * 300;
            }
          }
          if (random === 1) {
            if (random2 === 0) {
              var width= Math.random(0,1) * 500;
              var height= Math.random(0,1) * 1000;
              var top = 800 - Math.random(0,1) * 200;
              var left = 1280 - Math.random(0,1) * 400;
            } else {
              var width= Math.random(0,1) * 600;
              var height= Math.random(0,1) * 50;
              var top = 800 - Math.random(0,1) * 500;
              var left = 1280- Math.random(0,1) * 600;
            }
          }

          //actual colors
          if(w.search(new RegExp('red', 'i')) !== -1){
            style.background = `rgb(255,0,0,1)`;
            if (random === 0) {
              var width= Math.random(0,1) * 5;
              var height = 700 + Math.random(0,1) * 300;
            } else {
              var height = Math.random(0,1) * 5;
              var width = 500 + Math.random(0,1) * 300;
            }
          } else if (w.search(new RegExp('yellow', 'i')) !== -1){
            style.background = `rgb(255,255,0,1)`;
            if (random === 0) {
              var width= Math.random(0,1) * 5;
              var height = 700 + Math.random(0,1) * 300;
            } else {
              var height = Math.random(0,1) * 5;
              var width = 500 + Math.random(0,1) * 300;
            }
          } else if (w.search(new RegExp('blue', 'i')) !== -1){
            style.background = `rgb(0,0,255,1)`;
            if (random === 0) {
              var width= Math.random(0,1) * 5;
              var height = 700 + Math.random(0,1) * 300;
            } else {
              var height = Math.random(0,1) * 5;
              var width = 500 + Math.random(0,1) * 300;
            }
          } else if (w.search(new RegExp('green', 'i')) !== -1){
            style.background = `rgb(0,255,0,1)`;
            if (random === 0) {
              var width= Math.random(0,1) * 5;
              var height = 700 + Math.random(0,1) * 300;
            } else {
              var height = Math.random(0,1) * 5;
              var width = 500 + Math.random(0,1) * 300;
            }
          } else if (w.search(new RegExp('purple', 'i')) !== -1){
            style.background = `rgb(255,0,255,1)`;
            if (random === 0) {
              var width= Math.random(0,1) * 5;
              var height = 700 + Math.random(0,1) * 300;
            } else {
              var height = Math.random(0,1) * 5;
              var width = 500 + Math.random(0,1) * 300;
            }
          } else if (w.search(new RegExp('black','i')) !== -1){
            style.background = `rgb(0,0,0,1)`;
            if (random == 0) {
              var width= Math.random(0,1) * 5;
              var height = 900 + Math.random(0,1) * 300;
            } else {
              var height = Math.random(0,1) * 5;
              var width = 500 + Math.random(0,1) * 300;
            }
        } else if (w.search(new RegExp('grey','i')) !== -1
        || w.search(new RegExp('gray','i')) !== -1){
          style.background = `#eeeeee`;
          if (random == 0) {
            var width= Math.random(0,1) * 5;
            var height = 900 + Math.random(0,1) * 300;
          } else {
            var height = Math.random(0,1) * 5;
            var width = 500 + Math.random(0,1) * 300;
          }
        }

        else if(w.search(new RegExp('Rebecca', 'i')) !== -1){
          style.background = `rgb(223,194,242,${opacity})`;
        } else if(w.search(new RegExp('Gayatri', 'i')) !== -1){
          style.background = `rgb(240,162,2,${opacity})`;
        } else if(w.search(new RegExp('Taj', 'i')) !== -1){
          style.background = `rgb(88,252,236,${opacity})`;
          //164, 176, 245
        } else if(w.search(new RegExp('Victoria', 'i')) !== -1){
          style.background = `rgb(168,180,165,${opacity})`;
        } else if(w.search(new RegExp('Scarlett', 'i')) !== -1){
          style.background = `rgb(255,0,255,${opacity})`;
        } else if(w.search(new RegExp('Blake', 'i')) !== -1){
          style.background = `rgb(98,191,237,${opacity})`;
        } else if(w.search(new RegExp('Mom', 'i')) !== -1){
          style.background = `rgb(149,113,134,${opacity})`;
        } else if(w.search(new RegExp('Dad', 'i')) !== -1){
          style.background = `rgb(2,103,193,${opacity})`;
        } else if(w.search(new RegExp('Antoine', 'i')) !== -1){
          style.background = `rgb(255,140,97,${opacity})`;
        }


          //special words with heavy connotation
          else if(w.search(new RegExp('death', 'i')) !== -1){
            style.background = `rgb(40,38,44,${opacity})`;
          } else if(w.search(new RegExp('sex', 'i')) !== -1){
            //ff2c55
            //rgb(255,44,85)
            style.background = `rgb(165,1,4, ${opacity})`;
          } else if(w.search(new RegExp('ending', 'i')) !== -1){
            style.background = `rgb(255,0,255,${opacity})`;
          } else if(w.search(new RegExp('happy', 'i')) !== -1){
            style.background = `rgb(255,119,51,${opacity})`;
          } else if(w.search(new RegExp('elegance', 'i')) !== -1){
            style.background = `rgb(207,179,205,${opacity})`;
          } else if(w.search(new RegExp('love', 'i')) !== -1){
            style.background = `rgb(255,0,255,${opacity})`;
          } else if(w.search(new RegExp('serenity', 'i')) !== -1){
            style.background = `rgb(143,184,237,${opacity})`;
          } else if(w.search(new RegExp('be', 'i')) !== -1){
            style.background = `rgb(186,209,205,${opacity})`;
            //desert crest
          } else if(w.search(new RegExp('fresh', 'i')) !== -1){
            style.background = `rgb(122,253,214,${opacity})`;
          } else if(w.search(new RegExp('passion', 'i')) !== -1){
            style.background = `rgb(208,0,0,${opacity})`;
          } else if(w.search(new RegExp('evil', 'i')) !== -1){
            style.background = `rgb(10,46,54,${opacity})`;
            //very dark and cold green
          } else if(w.search(new RegExp('home', 'i')) !== -1){
            style.background = `rgb(255,191,105,${opacity})`;
          } else if(w.search(new RegExp('light', 'i')) !== -1){
            style.background = `rgb(224,186,215,${opacity})`;
          } else if(w.search(new RegExp('spring', 'i')) !== -1){
            style.background = `rgb(97,208,149,${opacity})`;
          } else if(w.search(new RegExp('cute', 'i')) !== -1){
            style.background = `rgb(238,66,102,${opacity})`;
          } else if(w.search(new RegExp('sunlight', 'i')) !== -1){
            style.background = `rgb(255,210,63,${opacity})`;
          } else if(w.search(new RegExp('innocence', 'i')) !== -1
          || w.search(new RegExp('innocent', 'i')) !== -1){
            style.background = `rgb(242,183,158,${opacity})`;
          } else if(w.search(new RegExp('evil', 'i')) !== -1){
            style.background = `rgb(10,46,54,${opacity})`;
          } else if(w.search(new RegExp('blood', 'i')) !== -1){
            style.background = `rgb(224,54,22, ${opacity})`;
          } else if(w.search(new RegExp('faded', 'i')) !== -1){
            style.background = `rgb(168,188,161, ${opacity})`;
          } else if(w.search(new RegExp('blood', 'i')) !== -1){
            style.background = `rgb(224,54,22, ${opacity})`;

          } else if(w.search(new RegExp('maturity', 'i')) !== -1
          ||w.search(new RegExp('mature', 'i')) !== -1){
            style.background = `rgb(51,0,54, ${opacity})`;
          } else if(w.search(new RegExp('hope', 'i')) !== -1
          ||w.search(new RegExp('hopeful', 'i')) !== -1){
            style.background = `rgb(166,87,174, ${opacity})`;
          } else if(w.search(new RegExp('good', 'i')) !== -1){
            style.background = `rgb(253,202,64, ${opacity})`;
          } else if(w.search(new RegExp('opportunity', 'i')) !== -1){
            style.background = `rgb(33,118,255, ${opacity})`;
          } else if(w.search(new RegExp('female', 'i')) !== -1
            || w.search(new RegExp('girl','i')) !== -1
            || w.search(new RegExp('women', 'i')) !== -1) {
            style.background = `rgb(255,15,128, ${opacity})`;
          } else if(w.search(new RegExp('snake', 'i')) !== -1){
            style.background = `rgb(38,64,39, ${opacity})`;
          } else if(w.search(new RegExp('best', 'i')) !== -1){
            style.background = `rgb(202,60,255, ${opacity})`;
          } else if(w.search(new RegExp('hot', 'i')) !== -1){
            style.background = `rgb(255,38,10, ${opacity})`;
          } else if(w.search(new RegExp('cold', 'i')) !== -1){
            style.background = `rgb(62,80,91, ${opacity})`;
          } else if(w.search(new RegExp('hate', 'i')) !== -1){
            style.background = `rgb(27,61,51, ${opacity})`;
          } else if(w.search(new RegExp('domestic', 'i')) !== -1){
            style.background = `rgb(239,176,161, ${opacity})`;
          } else if(w.search(new RegExp('burn', 'i')) !== -1){
            style.background = `rgb(91,15,0, ${opacity})`;
          } else if(w.search(new RegExp('so', 'i')) !== -1){
            //style.background = `rgb(239,176,161, ${opacity})`;
          } else if(w.search(new RegExp('gross', 'i')) !== -1){
            style.background = `rgb(81,90,71, ${opacity})`;
          } else if(w.search(new RegExp('depress', 'i')) !== -1){
            style.background = `rgb(43,45,66, ${opacity})`;
          } else if(w.search(new RegExp('dark', 'i')) !== -1){
            style.background = `rgb(17,21,28, ${opacity})`;
          } else if(w.search(new RegExp('school', 'i')) !== -1){
            style.background = `rgb(63,136,197, ${opacity})`;
          } else if(w.search(new RegExp('proper', 'i')) !== -1){
            //style.background = `rgb(63,136,197, ${opacity})`;
          } else if(w.search(new RegExp('social', 'i')) !== -1
            ||w.search(new RegExp('society', 'i')) !== -1){
            style.background = `rgb(135,255,101, ${opacity})`;
          } else if(w.search(new RegExp('crazy', 'i')) !== -1){
            style.background = `rgb(244,68,46, ${opacity})`;
          } else if(w.search(new RegExp('bright', 'i')) !== -1){
            style.background = `rgb(248,243,43, ${opacity})`;
          }

          else if(w.search(new RegExp('tired', 'i')) !== -1){
            style.background = `rgb(109,76,61, ${opacity})`;
          } else if(w.search(new RegExp('delirious', 'i')) !== -1){
            style.background = `rgb(152,206,0, ${opacity})`;
          } else if(w.search(new RegExp('high', 'i')) !== -1){
            style.background = `rgb(213,242,0, ${opacity})`;
          } else if(w.search(new RegExp('drunk', 'i')) !== -1){
            style.background = `rgb(127,103,91, ${opacity})`;
          } else if(w.search(new RegExp('excited', 'i')) !== -1){
            //style.background = `rgb(109,76,61, ${opacity})`;
          }


          //Hogwarts
          else if(w.search(new RegExp('gryffindor', 'i')) !== -1){
            style.background = `rgb(127, 9, 9, 0.8)`;
          }
          else if(w.search(new RegExp('hufflepuff', 'i')) !== -1){
            style.background = `rgb(196,146,44,0.8)`;
          }
          else if(w.search(new RegExp('slytherin', 'i')) !== -1){
            style.background = `rgb(0,52,7,0.8)`;
          }
          else if(w.search(new RegExp('ravenclaw', 'i')) !== -1){
            style.background = `rgb(45,111,196, 0.8)`;
          }

          //less common colors
          else if(w.search(new RegExp('orange', 'i')) !== -1){
            style.background = `rgb(255,103,0, ${opacity})`;
          } else if(w.search(new RegExp('gold', 'i')) !== -1){
            style.background = `rgb(255,157,0, ${opacity})`;
          } else if(w.search(new RegExp('lavender', 'i')) !== -1){
            style.background = `rgb(178,164,212, ${opacity})`;
          } else if(w.search(new RegExp('pink', 'i')) !== -1){
            style.background = `rgb(255,105,180, ${opacity})`;
          } else if(w.search(new RegExp('muted', 'i')) !== -1){
            style.background = `rgb(183,157,148, ${opacity})`;
          } else if(w.search(new RegExp('tangerine', 'i')) !== -1){
            style.background = `rgb(255,111,89, ${opacity})`;
          } else if(w.search(new RegExp('cherry', 'i')) !== -1){
            style.background = `rgb(89,0,4, ${opacity})`;
          } else if(w.search(new RegExp('peach', 'i')) !== -1){
            style.background = `rgb(255,107,107, ${opacity})`;
          } else if(w.search(new RegExp('navy', 'i')) !== -1){
            style.background = `rgb(20,36,138, ${opacity})`;
          } else if(w.search(new RegExp('apricot', 'i')) !== -1){
            style.background = `rgb(251,206,177, ${opacity})`;
          } else if(w.search(new RegExp('sand', 'i')) !== -1){
            style.background = `rgb(197,152,73, ${opacity})`;
          } else if(w.search(new RegExp('lemon', 'i')) !== -1){
            style.background = `rgb(241,211,2, ${opacity})`;
          } else if(w.search(new RegExp('pale', 'i')) !== -1){
            style.background = `rgb(246,226,127, ${opacity})`;
          }
          //INTERNET SLANG?

          //COMMON words
          else if(w.search(new RegExp('sky', 'i')) !== -1){
            style.background = `rgb(53,144,243, ${opacity})`;
          } else if(w.search(new RegExp('tea', 'i')) !== -1){
            style.background = `rgb(188,211,156, ${opacity})`;
          } else if(w.search(new RegExp('forest', 'i')) !== -1){
            style.background = `rgb(9,161,41, ${opacity})`;
          } else if(w.search(new RegExp('furniture', 'i')) !== -1){
            style.background = `rgb(135,64,0, ${opacity})`;
          }

          //random
          else if(w.search(new RegExp('nyu', 'i')) !== -1){
            style.background = `rgb(178,164,212, ${opacity})`;
          } else if(w.search(new RegExp('stern', 'i')) !== -1){
            style.background = `rgb(170,185,207, ${opacity})`;
          } else if(w.search(new RegExp('barbie', 'i')) !== -1){
            style.background = `rgb(218,24,132, ${opacity})`;
          } else if(w.search(new RegExp('you', 'i')) !== -1){
            style.background = `rgb(104,237,198, ${opacity})`;
          } else if(w.search(new RegExp('I', 'i')) !== -1 && w.length=== 1){
            style.background = `rgb(222,203,183, ${opacity})`;
          } else if(w.search(new RegExp('me', 'i')) !== -1){
            style.background = `rgb(184,242,230, ${opacity})`;
          } else if(w.search(new RegExp('our', 'i')) !== -1){
              //style.background = `rgb(137,128,245, ${opacity})`;
          } else if(w.search(new RegExp('woman', 'i')) !== -1
          ||w.search(new RegExp('female', 'i')) !== -1
          ||w.search(new RegExp('women', 'i')) !== -1){
              style.background = `rgb(237,92,155, ${opacity})`;
          } else if(w.search(new RegExp('men', 'i')) !== -1
          ||w.search(new RegExp('male', 'i')) !== -1
          ||w.search(new RegExp('man', 'i')) !== -1){
              style.background = `rgb(0,72,229, ${opacity})`;
          } else if(w.search(new RegExp('she', 'i')) !== -1){
              style.background = `rgb(163,193,255, ${opacity})`;
          } else if(w.search(new RegExp('he', 'i')) !== -1){
              style.background = `rgb(158,188,158, ${opacity})`;
          } else if(w.search(new RegExp('together', 'i')) !== -1){
            style.background = `rgb(244,172,69, ${opacity})`;
          } else if(w.search(new RegExp('was', 'i')) !== -1){
            style.background = `rgb(203,191,187, ${opacity})`;
          } else if(w.search(new RegExp('can', 'i')) !== -1){
            style.background = `rgb(254,78,0, ${opacity})`;
          } else if(w.search(new RegExp('no', 'i')) !== -1){
            style.background = `rgb(28,49,68, ${opacity})`;
          } else if(w.search(new RegExp('people', 'i')) !== -1){
              style.background = `rgb(213,185,178, ${opacity})`;

          } else if(w.search(new RegExp('make', 'i')) !== -1){
              style.background = `rgb(251,97,7, ${opacity})`;
          } else if(w.search(new RegExp('forbidden', 'i')) !== -1){
              style.background = `rgb(0,38,38, ${opacity})`;
          } else if(w.search(new RegExp('rouge', 'i')) !== -1){
              style.background = `rgb(163,0,21, ${opacity})`;
          } else if(w.search(new RegExp('pickle', 'i')) !== -1){
              style.background = `rgb(178,164,212, ${opacity})`;
          } else if(w.search(new RegExp('pool', 'i')) !== -1){
              style.background = `rgb(18,234,234, ${opacity})`;
          } else if(w.search(new RegExp('chocolate', 'i')) !== -1){
              style.background = `rgb(46,30,15, ${opacity})`;
          } else if(w.search(new RegExp('like', 'i')) !== -1){
              style.background = `rgb(73,185,255, ${opacity})`;
          } else if(w.search(new RegExp('go', 'i')) !== -1){
              style.background = `rgb(90,255,21, ${opacity})`;
          } else if(w.search(new RegExp('bread', 'i')) !== -1){
              style.background = `rgb(255,191,105, ${opacity})`;
          } else if(w.search(new RegExp('denim', 'i')) !== -1){
              style.background = `rgb(10,54,157, ${opacity})`;
          }
          //time-related
           else if(w.search(new RegExp('time', 'i')) !== -1){
              style.background = `rgb(178,164,212, ${opacity})`;
          } else if(w.search(new RegExp('now', 'i')) !== -1){
              style.background = `rgb(231,119,40, ${opacity})`;

          } else if(w.search(new RegExp('never', 'i')) !== -1){
              style.background = `rgb(178,164,212, ${opacity})`;
          } else if(w.search(new RegExp('forever', 'i')) !== -1){
              style.background = `rgb(178,164,212, ${opacity})`;
          } else if(w.search(new RegExp('if', 'i')) !== -1){
              style.background = `rgb(178,164,212, ${opacity})`;
          } else if(w.search(new RegExp('tomorrow', 'i')) !== -1){
              style.background = `rgb(192,218,116, ${opacity})`;
          } else if(w.search(new RegExp('morning', 'i')) !== -1){
              style.background = `rgb(255,159,28, ${opacity})`;
          } else if(w.search(new RegExp('will', 'i')) !== -1){
              style.background = `rgb(78,205,196, ${opacity})`;
          } else if(w.search(new RegExp('future', 'i')) !== -1){
              style.background = `rgb(137,128,245, ${opacity})`;
          }

          if (top + height > 800) {
            height = 650-top;
          }
          if (left + width > 1024) {
            width = 1024-left;
          }

          this.setState({top:top,left:left,width: width, height:height, word:''})

          this.setState((prevState)=>{
            return {
              colors: prevState.colors.concat(style)
            }
          })
          this.setState({display:true})
        } else {
          w += ch
          this.setState({word: w});
        }
    }

    /*
    clearText = () => {
      this.setState({text:null})
    }
    */

    render(){
      return <div className='canvas'>
        {this.state.colors.map((color,key) => {
          return <div key={key} style={color}></div>
        })}
        <div><label className='canvas-label'>Start typing and see what happens...</label></div>
        <textarea type='text'name='txt' className='canvas-input' value={this.state.text}
        onChange={this.handleChange} placeholder='' rows='5'/>
        <div><label className='word-count'>Word Count: {this.state.count}</label></div>

      </div>
    }
}
  //<button onClick={this.clearText}id='clear'>Clear</button>


export default App;
