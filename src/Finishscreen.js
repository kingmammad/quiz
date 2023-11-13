function Finishscreen({point,maxpoints,hightscore}) {
    const present=(point/maxpoints)*100;
    let imoji;
    if(present===100 ) imoji='🥇';
    if(present>80 && present<100) imoji='🎉';
    if(present<80 && present >50) imoji='😊';
    if(present===0) imoji='🤦';
    if(present>0 && present<50) imoji='🤔';


    return <>  
        <p className="result"><span>{imoji}</span> your scored <strong>{point}</strong> out of {maxpoints} ({Math.ceil(present)}%)</p>
        <p className="highscore">( hight score: {hightscore} )</p>
    </>
}

export default Finishscreen;