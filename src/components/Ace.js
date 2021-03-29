import React from 'react';
import CodeMirror from 'react-codemirror';  
import 'codemirror/lib/codemirror.css';  
const options={  
  lineNumbers: false,                     //显示行号  
  mode: {name: "css"},          //定义mode  
  extraKeys: {"Ctrl": "autocomplete"},   //自动提示配置  
  theme: "ambiance"                  //选中的theme  
};  
export default class Root extends React.Component {
     constructor(){
      super();
      this.state= {
        mode:"css",
        displayAce:"none",
      }
    }
   
    render=()=>{
        var d=new Date();
        return(
        <div
            style={{
                display:"flex",
                zIndex:99,
                flexDirection:"column",
                alignItems:"flex-end",
                position:"absolute",
                top:0,
                right:0}}>
            <button onClick={()=>{
              if(this.state.displayAce==="none"){
                this.setState({displayAce:"block"})
              }
              else{
                this.setState({displayAce:"none"}) 
              }
            }}>edit  style</button>
            <div style={{    display:this.state.displayAce
                                ,width:"100%",height:"100%"
                                ,border:"solid gray 5px"
                              }}>
                    <CodeMirror 
                              ref="editor-sql" 
                              value={this.props.css}
                    onChange={this.props.cssChange} options={options} />  
            </div>

        </div>);
    }
}