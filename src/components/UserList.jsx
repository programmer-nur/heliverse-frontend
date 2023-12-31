import React, { useEffect, useState } from "react";
import { Pagination, Input, Select, Button } from "antd";
import { RedoOutlined } from "@ant-design/icons";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import { setPagination } from "../redux/features/usersSlice";

const { Search } = Input;
const { Option } = Select;

function UserList({ users }) {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(users?.meta?.page);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDomain, setFilterDomain] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterAvailability, setFilterAvailability] = useState("");

  const totalUsers = users.meta.total;
  const allDomain = [...new Set(users.data.map((domain) => domain.domain))];
  const allGender = [...new Set(users.data.map((gender) => gender.gender))];

  const handelResetFilter = ()=>{
    setCurrentPage(1);
    setFilterDomain("");
    setFilterAvailability("");
    setFilterGender("");
    setSearchQuery("");
  }
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        setPagination({
          page: currentPage,
          searchTerm: searchQuery,
          domain: filterDomain,
          gender: filterGender,
          available: filterAvailability,
        })
      );
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [
    currentPage,
    searchQuery,
    filterDomain,
    filterGender,
    filterAvailability,
  ]);

  const handleFilterChange = (key, value) => {
    switch (key) {
      case "domain":
        setFilterDomain(value);
        break;
      case "gender":
        setFilterGender(value);
        break;
      case "availability":
        setFilterAvailability(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div
        style={{
          margin: "20px 0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Search
          placeholder="Search By Name"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
          style={{ width: 300, marginRight: 16 }}
        />
        <Select
          placeholder="Filter by Domain"
          onChange={(value) => handleFilterChange("domain", value)}
          size="large"
          style={{ width: 150, marginRight: 16 }}
        >
          {allDomain.map((domain) => (
            <Option value={domain}>{domain}</Option>
          ))}
        </Select>
        <Select
          placeholder="Filter by Gender"
          onChange={(value) => handleFilterChange("gender", value)}
          size="large"
          style={{ width: 150, marginRight: 16 }}
        >
           {allGender.map((gender) => (
            <Option value={gender}>{gender}</Option>
          ))}
        </Select>
        <Select
          placeholder="Filter by Availability"
          onChange={(value) => handleFilterChange("availability", value)}
          size="large"
          style={{ width: 150, marginRight: 16 }}
        >
          <Option value="true">Available</Option>
          <Option value="false">Not Available</Option>
        </Select>
        <Button size="large" onClick={handelResetFilter} type="primary"><RedoOutlined /> Reset</Button>
      </div>

      <div>
        <div className="container">
          {users.data.length > 0 ? (
            users.data.map((user) => <UserCard key={user.id} user={user} />)
          ) : (
            <p>Data not found</p>
          )}
        </div>
      </div>

      <Pagination
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
        current={currentPage}
        pageSize={users?.meta?.limit}
        total={totalUsers}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default UserList;
