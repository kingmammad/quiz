function Progress({index,numberquestion,point,maxpoint}) {
    return <div className="progress">
        <progress max={numberquestion} value={index+1} />
    <p>Question <strong>{index+1}</strong>/{numberquestion}</p>
    <p><strong>{point}</strong>/{maxpoint}</p>
    </div>;
}

export default Progress;