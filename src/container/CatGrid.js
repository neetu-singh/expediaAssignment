import React from 'react';
import '../App.css';

export  class catGrid extends React.Component{
	constructor(props){
   super(props);

   this.state = {
    rowColNum : 0
  };
}

showMessage(){
 console.log('this.state.rowColNum',this.state.rowColNum);
 if(this.state.rowColNum === 12 ){
   document.getElementById('finalMsg').classList.remove('dn');
   for(let i=0; i<=3; i++){
    let a=[];
    for(let j=0 ; j<=2;j++){
      let index = j+1;
      a[j] = document.getElementById('cat_'+index).classList[1];
    }
    let hasDup = a.some((val,i)=>{
      return a.indexOf(val)!=i
    })
    console.log('hasDuplicates',hasDup);
    if(hasDup){
      document.getElementById('finalMsg').innerHTML = 'YOU LOSE';
      return;
    }        
  }
  document.getElementById('finalMsg').innerHTML = 'YOU WIN';
       // return;
     }
   }
  fillGridRow(e) {
      if(this.state.rowColNum < 12){
        let catElem = e.target.classList[1];
        let rowColNum = this.state.rowColNum + 1;
        document.getElementById('cat_' + rowColNum ).classList.add(catElem);
         // console.log('dfghjk',catElem);
         this.setState({
          rowColNum : rowColNum
        },()=> {         
          this.showMessage();
      });        
    }
  }

       render() {
        return (
         <div id="mainContent">

         <div className="cat-container">
         <div className="cat_1" onClick={(evt) => this.fillGridRow(evt)}><i className="sprite sprite-cat_1"></i></div>
         <div className="cat_2" onClick={(evt) => this.fillGridRow(evt)}><i className="sprite sprite-cat_2"></i></div>
         <div className="cat_3" onClick={(evt) => this.fillGridRow(evt)}><i className="sprite sprite-cat_3"></i></div>  
         <div className="cat_4" onClick={(evt) => this.fillGridRow(evt)}><i className="sprite sprite-cat_4"></i></div>
         <div className="cat_5" onClick={(evt) => this.fillGridRow(evt)}><i className="sprite sprite-cat_5"></i></div>
         <div className="cat_6" onClick={(evt) => this.fillGridRow(evt)}><i className="sprite sprite-cat_6"></i></div>
         <div className="cat_7" onClick={(evt) => this.fillGridRow(evt)}><i className="sprite sprite-cat_7"></i></div>
         <div className="cat_8" onClick={(evt) => this.fillGridRow(evt)}><i className="sprite sprite-cat_8"></i></div>
         <div className="cat_9" onClick={(evt) => this.fillGridRow(evt)}><i className="sprite sprite-cat_9"></i></div>
         <div className="cat_10" onClick={(evt) => this.fillGridRow(evt)}><i className="sprite sprite-cat_10"></i></div>
         <div className="cat_11" onClick={(evt) => this.fillGridRow(evt)}><i className="sprite sprite-cat_11"></i></div>
         <div className="cat_12" onClick={(evt) => this.fillGridRow(evt)}><i className="sprite sprite-cat_12"></i></div>
         </div>
         <div id='finalMsg' className = 'dn'></div>
         <div className="grid-container">
         <div ><i id='cat_1' className="sprite "></i></div>
         <div ><i id='cat_2' className="sprite "></i></div>
         <div ><i id='cat_3' className="sprite "></i></div>  
         <div ><i id='cat_4' className="sprite "></i></div>
         <div ><i id='cat_5' className="sprite "></i></div>
         <div ><i id='cat_6' className="sprite "></i></div>
         <div ><i id='cat_7' className="sprite "></i></div>
         <div ><i id='cat_8' className="sprite "></i></div>
         <div ><i id='cat_9' className="sprite "></i></div>
         <div ><i id='cat_10' className="sprite "></i></div>
         <div ><i id='cat_11' className="sprite "></i></div>
         <div ><i id='cat_12' className="sprite "></i></div>
         </div>
         </div>);
      }
    }


    export default catGrid;
