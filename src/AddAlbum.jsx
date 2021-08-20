import React, { useState } from "react";

const AddAlbum = (props) => {
  const [state, setState] = useState({
    album_title: "",
    artist: "",
    image: "",
  });
    const [uimage, setUimage] = useState("");

    const handleChangetextField = (name) => (event) => {
      setState({ ...state, [name]: event.target.value });
    };


    const handleChangeFile = (event) => {
      setUimage(event.target.files[0]);
    };

    const uploadImage = async () => {
      const data = new FormData();
      data.append("file", uimage);
      data.append("upload_preset", "vishaldev");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dfdxz6jkp/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const file = await res.json();
        setState({ ...state, image: file.secure_url });
    };

    const onSubmit = (e) => {
      e.preventDefault();
      uploadImage();
    };

    return (
      <div>
        <div>
          {" "}
          <h1>Add Your Album</h1>{" "}
        </div>

        <form action="" className="formdata" onSubmit={onSubmit}>
          <div style={{ margin: "2em" }}>
            <input
              type="text"
              value={state.album_title}
              name="album_title"
              placeholder="album_title"
              onChange={handleChangetextField("album_title")}
            />
          </div>
          <div style={{ margin: "2em" }}>
            <input
              type="text"
              value={state.artist}
              name="artist"
              placeholder="artist"
              onChange={handleChangetextField("artist")}
            />
          </div>
          <div style={{ margin: "2em" }}>
            <input
              type="file"
              name="upload-file"
              placeholder="upload-cover-pic"
              onChange={handleChangeFile}
            />
          </div>
          <div>
            {" "}
            <input type="submit" value="Submit" onClick={()=>props.updateAlbum(state)} />
          </div>
            </form>
            <div style={{color: "blue", width:"320px", height:"300px"}}>
                <img src={state.image} alt="" width="300px" height="300px" />
               { console.log(state.image)}
            <p>  album_name: {state.album_title}</p>
            <p>artist: {state.artist}</p>
            </div>
           
      </div>
    );
};

export default AddAlbum;















// import React, { useState } from "react";

// const AddAlbum = () => {
//   const [state, setState] = useState({
//     album_title: "",
//     artist: "",
//     image: "",
//   });
//     const [uimage, setUimage] = useState("");

//     const handleChangetextField = (name) => (event) => {
//       setState({ ...state, [name]: event.target.value });
//     };
//     const handleChangeFile = (event) => {
//       setState({ ...state, image: event.target.files[0] });
//     };

//     const uploadImage = async () => {
//       const data = new FormData();
//       data.append("file", state.image);
//       data.append("upload_preset", "vishaldev");

//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dfdxz6jkp/image/upload",
//         {
//           method: "POST",
//           body: data,
//         }
//       );

//       const file = await res.json();
//       setUimage(file.secure_url);
//     };

//     const onSubmit = (e) => {
//       e.preventDefault();
//       console.log(state);
//       uploadImage();
//       console.log("new", uimage);
//     };

//     return (
//       <div>
//         <div>
//           {" "}
//           <h1>Add Your Album</h1>{" "}
//         </div>

//         <form action="" className="formdata" onSubmit={onSubmit}>
//           <div style={{ margin: "2em" }}>
//             <input
//               type="text"
//               value={state.album_title}
//               name="album_title"
//               placeholder="album_title"
//               onChange={handleChangetextField("album_title")}
//             />
//           </div>
//           <div style={{ margin: "2em" }}>
//             <input
//               type="text"
//               value={state.artist}
//               name="artist"
//               placeholder="artist"
//               onChange={handleChangetextField("artist")}
//             />
//           </div>
//           <div style={{ margin: "2em" }}>
//             <input
//               type="file"
//               name="upload-file"
//               placeholder="upload-cover-pic"
//               onChange={handleChangeFile}
//             />
//           </div>
//           <div>
//             {" "}
//             <input type="submit" value="Submit" />
//           </div>
//         </form>
//         <img src={uimage} alt="" width="300px" height="300px" />
//       </div>
//     );
// };

// export default AddAlbum;
