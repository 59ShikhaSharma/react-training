type Iss = {
    onPlay:any,
    onUpload:any
}

function Toolbar({onPlay, onUpload}:Iss) {
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
        <Toolbar 
        onPlay={() => alert("Playing")}
        onUpload={() => alert("Uploading")}
        />

      
    </div>
  )
}

export default Event



