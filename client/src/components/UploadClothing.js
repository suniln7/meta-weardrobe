jsx
import React, { useState } from 'react';
import axios from 'axios';

const UploadClothing = () => {
  const [image, setImage] = useState(null);
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    const formData = new FormData();
    formData.append('image', image);
    formData.append('type', type);
    formData.append('name', name);
    formData.append('description', description);

    try {
      const res = await axios.post('/api/clothing/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data);
      setUploading(false);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <select onChange={(e) => setType(e.target.value)} required>
        <option value="">Select Type</option>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
      </select>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
  );
};

export default UploadClothing;