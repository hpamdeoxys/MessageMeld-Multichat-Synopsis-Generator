import React, { useState, useEffect } from "react";
import Loading from "../animation/Loading";
import DropZone from "../components/Dropbox";
import axios from "axios";
import "./Form.css";
import Zoom from "react-reveal/Zoom";

const Form = () => {
  const [file, setFile] = useState();
  const [display, setDisplay] = useState()
  const [text, setText] = useState(``);
  const [open, setOpen] = useState(false);
const[key, setKey] = useState('')
  useEffect(() => {
    console.log(file);
  }, [file]);

  const api = "https://2d03-117-249-221-147.ngrok.io/custom/";

  const handleSubmit = async (file, key) => {
    console.log(file);
    // setFile(file.name);

    var formData = new FormData();

    formData.append("input_txt", file);
    formData.append("string" , key)

    
    setOpen(true);
    try {
      const data = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setOpen(false);
      console.log(data.data)
      let arr = data.data.map( (e, i )=> {
          return (<>
              <li key={i}>{e}</li>
              <br/>
              </>
          )
      })
      setText(arr);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="form">
      <Zoom>
        <h4>Provide us with the text messages in the form of a file and also give us the keywords and will only show the relevant messages according to keywords provided by you</h4>
      <DropZone submit={setFile} bool = {true}/>
      </Zoom>

      <br />
      <Zoom>

        <input
          type="file"
          id="myFile"
          name="filename"
          className="custom-file-input"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setDisplay(e.target.files[0].name)
            // handleSubmit(e.target.files[0]);
          }}
        />
      </Zoom>
<br/>
      {display}
<br/>
<br/>
      <input type="text" className="keyword-input"  name="filename" placeholder="Give space separated keywords" onChange={(e) => setKey(e.target.value) } style={{textAlign:'center', letterSpacing: '2px'}}/>
      <br/>
      <div className="send-btn" onClick={() => handleSubmit(file, key)} style={{textAlign:'center'}}>
          Send
      </div>
      {/* <input type="button" value="submit" onClick={() => handleSubmit(file)} /> */}
      <br />
      <p className="output">
        <h2 style={{textAlign: 'center'}}>Summary</h2>
        <hr />
        <div style={open ? { display: "inline-block" } : { display: "none" }}>
        <Loading />
      </div>
        {text}
      </p>
    </div>
  );
};

export default Form;
