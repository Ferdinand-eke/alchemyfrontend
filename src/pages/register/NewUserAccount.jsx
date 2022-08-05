import './newuseraccount.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import GuestSidebar from '../../components/guestsidebar/GuestSidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import axios from 'axios';

const NewUserAccount = ({ inputs, title }) => {
  const [file, setFile] = useState('');

  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'upload');
    try {
      // const

      // const uploadRes = await axios.post(
      //   'https://api.cloudinary.com/v1_1/lamadev/image/upload',
      //   data
      // );
      // const { url } = uploadRes.data;
      // const newUser = {
      //   ...info,
      //   img: url,
      // };
      // await axios.post('/auth/register', newUser);

      const newUserAccount = {
        source: 'TESTAPP',
        app_user_id: 'TESTAPPUSR',
        app_branch_code: '099',
        account_branch_code: '099',
        customer_no: '007479302',
        account_class: '020008',
        account_ccycode: 'NGN',
        account_name: 'DANIEL MAKINDE',
        account_onpnd: 'N',
        account_onpostnocr: 'N',
        account_ondormant: 'N',
        account_classtype: 'S',
        account_opendate: '2022-06-20 12:00:00',
        account_onfrozen: 'N',
        chequebook_account: 'N',
        atm_account: 'N',
        min_balreqd: '0',
        salary_account: 'N',
        maker_id: 'TESTAPPUSR',
        checker_id: 'TESTAPPUSR',
        auth_stat: 'A',
        comp_mis2: 'ABK',
        comp_mis3: '',
        comp_mis4: '12632119',
      };
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <GuestSidebar />
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>

              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button onClick={handleClick}>Send</button>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUserAccount;
