import React, { useState } from 'react';
import axios from 'axios';

const UploadClothing = () => {
  const [image, setImage] = useState(null);
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('type', type);
    formData.append('name', name);
    formData.append('description', description);

    try {
      const res = await axios.post('http://localhost:3000/api/clothing/upload', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <select onChange={(e) => setType(e.target.value)}>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
      </select>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadClothing;