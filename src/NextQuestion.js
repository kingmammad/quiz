function NextQuestion({dispatch,answer,index,numberquestion}) {
    if(answer==null)return null;
    
  if(index<numberquestion-1){ return (<button className="btn btn-ui"
    onClick={()=>dispatch({type:'nextquestion'})}>Next</button>)
  };
  console.log(index);
 if(index===numberquestion-1) return (<button className="btn btn-ui"
    onClick={()=>dispatch({type:'finish'})}>finish</button>)

}

export default NextQuestion;