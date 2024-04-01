import { IoFilterOutline } from "react-icons/io5";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Spinner } from "@material-tailwind/react";
import MemberForm from "./formdata";
// import axios from "axios";

import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useState,useEffect } from "react";
// const url='http://localhost:4000/api/v1/getdata'
// const adddata_url="http://localhost:4000/api/v1/adddata"
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
];
 

const TABLE_HEAD = ["Name", "Email", "Phone Number", "Status", "Date/Time", ""];
 


export const Table=()=> {
    
  const [selectedTab, setSelectedTab] = useState('all');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // api call for get data
      // const response = await axios.get(url);
      // console.log(response.data)
      // setData(response.data.data);
      // console.log(response.data.data);
      // console.log(data);
      const response=setData([
        {
          name: "ravi Kumar",
          email: "raviashu712@gmail.com",
          phone_number: "1234345515",
          status: "paid",
          date: "2024-04-06T07:56:19.439+00:00",
        },
        {
          name: "Nitish Kumar",
          email: "nitish12@gmail.com",
          phone_number: "1234345525",
          status: "paid",
          date: "2024-04-04T08:56:19.439+00:00",
        },
        {

          name: "ashish Kumar",
          email: "ashishashu712@gmail.com",
          phone_number: "123434555",
          status: "pending",
          date: "2024-04-01T07:56:19.439+00:00",
        },
        {

          name: "devansh Kumar",
          email: "devansh712@gmail.com",
          phone_number: "1234334555",
          status: "cancelled",
          date: "2024-04-01T07:56:19.439+00:00",
        },
      ])
      setLoading(false); // Data fetched successfully
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error); // Set error state
      setLoading(false); // Failed to fetch data
    }
  };

      const handleTabChange = (tab) => {
        setSelectedTab(tab);
      };
      const handleFormOpen = () => {
        setIsFormOpen(true);
      };
    
      const handleFormClose = () => {
        setIsFormOpen(false);
      };

      const handleSubmit = async (formData) => {
        try {
          // await axios.post(adddata_url, formData);
          // fetchData();
          console.log(formData);
          handleFormClose();
        } catch (error) {
          console.error("Error inserting data:", error);
        }
      };

      let filteredData = [];
      if (selectedTab === "all") {
        filteredData = data;
      } else {
        filteredData = data.filter((item) => item.status === selectedTab);
      }
    
        if (loading) {
          return <div className="flex justify-center">  <Spinner color="red" /></div>; // Show loading indicator
        }
      
        if (error) {
          return <div>Error: {error.message}</div>; // Show error message
        }
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-6">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
            <IoFilterOutline />
            </Button>
            <Button className="flex items-center gap-3" size="sm" onClick={handleFormOpen}>
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <Tabs value={selectedTab} className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} onClick={() => handleTabChange(value)}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
      <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map(
              (
                {
                  img,
                  name,
                  email,
                  phone_number,
                  status,
                  date
                 
                },
                index,
              ) => {
                const isLast = index === filteredData.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {phone_number}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "paid"
                              ? "green"
                              : status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <MemberForm onSubmit={handleSubmit} onClose={handleFormClose} />
        </div>
      )}
    </Card>
  );
}