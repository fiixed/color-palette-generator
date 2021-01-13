const App = () => {
    const [color1, setColor1] = React.useState(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    const [color2, setColor2] = React.useState(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    const [color3, setColor3] = React.useState(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    const [color4, setColor4] = React.useState(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    const [color5, setColor5] = React.useState(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    const [color6, setColor6] = React.useState(`#${Math.floor(Math.random()*16777215).toString(16)}`);

    const [lockState, setLock] = React.useState(false);

    const randomize = () => {
        setColor1(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        setColor2(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        setColor3(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        setColor4(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        setColor5(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        setColor6(`#${Math.floor(Math.random()*16777215).toString(16)}`);
    }   

    const changeLock = (isLocked) => {
        isLocked = !isLocked;
        setLock(isLocked);
    }

    return (
        <div>
        <div>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={randomize}>Randomize!</button>
        </div>
        <div className="card-group">
            <div className="card" style={{backgroundColor: color1}}>
                <div className="card-body">
                    <p className="card-text">{color1}</p>
                    <button type="button" className="btn btn-primary btn-lg">Lock</button>
                </div>
            </div>
            <div className="card  mb-3" style={{backgroundColor: color2}}>
                <div className="card-body">
                    <p className="card-text">{color2}</p>
                    <button type="button" className="btn btn-primary btn-lg">Lock</button>
                </div>
            </div>
            <div className="card  mb-3" style={{backgroundColor: color3}}>
                <div className="card-body">
                    <p className="card-text">{color3}</p>
                    <button type="button" className="btn btn-primary btn-lg">Lock</button>
                </div>
            </div>
        </div>
        <div className="card-group">
            <div className="card  mb-3" style={{backgroundColor: color4}}>
                <div className="card-body">
                    <p className="card-text">{color4}</p>
                    <button type="button" className="btn btn-primary btn-lg">Lock</button>
                </div>
            </div>
            <div className="card  mb-3" style={{backgroundColor: color5}}>
                <div className="card-body">
                    <p className="card-text">{color5}</p>
                    <button type="button" className="btn btn-primary btn-lg">Lock</button>
                </div>
            </div>
            <div className="card  mb-3" style={{backgroundColor: color6}}>
                <div className="card-body">
                    <p className="card-text">{color6}</p>
                    <button type="button" className="btn btn-primary btn-lg">Lock</button>
                </div>
            </div>
        </div>
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));