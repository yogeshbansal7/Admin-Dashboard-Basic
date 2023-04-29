// rafc
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import './new.scss'
import { useState } from 'react';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState('');



  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form className='form' action="">
              <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className='icon' /> </label>
                <input type="file" id='file' style={{ display: 'none' }} onChange={e=>setFile(e.target.files[0])} />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id} >
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>

              ))}


              {/* <div className="formInput">
                  <label htmlFor="">Name and surname</label>
                  <input type="text" placeholder='Yogesh Bansal' />
                </div>
                <div className="formInput">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder='Yogesh@bansal.com' />
                </div>
                <div className="formInput">
                  <label htmlFor="">Phone Number</label>
                  <input type="number" placeholder='0123456789' />
                </div>
                <div className="formInput">
                  <label htmlFor="">Password</label>
                  <input type="password" />
                </div>
                <div className="formInput">
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder='Bathinda' />
                </div>
                <div className="formInput">
                  <label htmlFor="">Country</label>
                  <input type="text" placeholder='USA'  />
                </div> */}
              <button >Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New