import React, { useState, useEffect } from "react";
import Loading from "../animation/Loading";
import DropZone from "../components/Dropbox";
import axios from "axios";
import "./Form.css";
import Zoom from "react-reveal/Zoom";

const Form = () => {
  // eslint-disable-next-line
  const [file, setFile] = useState();
  const [text, setText] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(file);
  }, [file]);

  const api = "http://2d03-117-249-221-147.ngrok.io/important/"

  const handleSubmit = async (file) => {
    console.log(api);
    setFile(file.name);
    var formData = new FormData();

    formData.append("input_txt", file);
    setOpen(true);
    try {
      const data = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setOpen(false);
      console.log(data.data)
      let arr = data.data.map(e => {
          return (<>
              <li>{e}</li>
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
        <h4>Provide us with the text messages in the form of a file and we will only show you the important messages according to their relevance</h4>
      <DropZone submit={handleSubmit} />
      </Zoom>

      <br />
      <Zoom>

        <input
          type="file"
          id="myFile"
          name="filename"
          className="custom-file-input"
          onChange={(e) => {
            // setFile(e.target.files[0]);
            handleSubmit(e.target.files[0]);
          }}
        />
      </Zoom>

      {/* <input type="file" id="myFile" name="filename" /> */}
      {/* <input type="button" value="submit" onClick={() => handleSubmit(file)} /> */}
      <br />
      {file}
      
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
