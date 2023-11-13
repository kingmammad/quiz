function Option({questions,dispatch,answer}) {
    const hasanswer=answer!==null;
    return <div className="options">
         {questions.options.map((option,index)=>
         <button 
         onClick={()=> dispatch({type:'answercurrect', payload:index})}
          key={option}
          disabled={hasanswer}
          className={`btn btn-option ${index===answer ?'answer':''}
          ${hasanswer? index===questions.correctOption? 'correct':'wrong':''}`}>
            {option}
        </button>)}
    </div>;
}

export default Option;