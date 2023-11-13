function Start({numberquestion,dispatch}) {
    return <div className="start">
        <h2>Welcome to react Quiz</h2>
        <h3>{numberquestion} question to test your react mastry</h3>
        <button className="btn btn-ui" onClick={()=>dispatch({type:'start'})}>Let's Start</button>
    </div>;
}

export default Start;