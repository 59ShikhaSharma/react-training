type Prop = {
    onPlay: any,
    onUpload: any
}

function Toolbar({ onPlay, onUpload }: Prop) {
    return (
        <div>
            <button onClick={onPlay}>Play</button>
            <button onClick={onUpload}>Upload</button>
        </div>
    )
}


function Event() {
    return (
        <div>
            <h2>Handling Events</h2>
            <Toolbar
                onPlay={() => alert("Playing")}
                onUpload={() => alert("Uploading")}
            />

        </div>
    )
}

export default Event



