// MemberForm.js
import React, { useState } from 'react';
import { Input, Button } from '@material-tailwind/react';

const MemberForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    status: "pending", // Default status
  });

  const handleInputChange = (event) => {
    const{name,value,checked,type}=event.target;
    setFormData(prevdata=>({
      ...prevdata,
      [name]:type==="checkbox"?checked:value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-10 space-y-6 bg-white border-r-4 rounded-lg ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Input
          label="Phone Number"
          name="phone_number"
          type="tel"
          value={formData.phone_number}
          onChange={handleInputChange}
          required
        />
<br/>
<label htmlFor="status" className="text-blue-gray-500 ">Status</label>
<select
  id="status"
  name="status"
  value={formData.status}
  onChange={handleInputChange}
  required
  className="block appearance-none w-full bg-white border border-blue-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 "
>
  <option className="text-blue-gray-500">Paid</option>
  <option className="text-blue-gray-500">Pending</option>
  <option className="text-blue-gray-500">Cancelled</option>
</select>
        <div className="flex justify-between">
          <Button type="submit" color="lightBlue">Submit</Button>
          <Button onClick={onClose} color="red">Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
