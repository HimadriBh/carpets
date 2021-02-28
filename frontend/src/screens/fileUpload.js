import { Fragment, useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose file...');

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

  }

  const onChange = (e) => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  return (
    <Fragment>
        <form onSubmit={onSubmit}>
          <div className='custom-file'>
              <input
                type='file'
                id='customFile'
                className='custom-file-input'
                onChange={onChange}
                />
                <label className='custom-file-label' htmlFor='customFile'>
                  {filename}
                </label>
          </div>
          <input
          type='submit'
           />
        </form>
    </Fragment> );
}

export default FileUpload;