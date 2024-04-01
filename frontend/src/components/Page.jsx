// src/components/Page.js
import React, { useState } from 'react';
import { Tab, Tabs, Input } from '@material-tailwind/react';
import { Table } from './table';


const Page = () => {
  const [selectedTab, setSelectedTab] = useState('Pending');
  const [data, setData] = useState([
    {
      name: "abcd efg",
      email: "abc@abc.def",
      phone_num: "1234567890",
      time: 127589522,
      status: "pending"
    },
    {
      name: "xyz abc",
      email: "xyz@xyz.xyx",
      phone_num: "0123456789",
      time: 127589522,
      status: "cancelled"
    },
    {
      name: "aabb ccdd",
      email: "abcde@abc.def",
      phone_num: "0011223344",
      time: 127589522,
      status: "pending"
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('all');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  return (
    //  <Table></Table>
    <Table/>
  );
};

export default Page;
