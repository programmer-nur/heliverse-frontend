
import React, { useEffect, useState } from 'react';
import { Pagination, Input, Select, Button , Row, Col } from 'antd';
import UserCard from './UserCard';
import { useDispatch } from 'react-redux';
import { setPagination } from '../redux/features/usersSlice';

const { Search } = Input;
const { Option } = Select;

function UserList({ users }) {

  const dispatch = useDispatch()
  
  const [currentPage, setCurrentPage] = useState(users.meta.page);
  const [pageSize, setPageSize] = useState(users.meta.limit);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDomain, setFilterDomain] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterAvailability, setFilterAvailability] = useState('');

  const totalUsers = users.meta.total;

  const allDomain = [...new Set(users.data.map(domain => domain.domain))];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  useEffect(()=>{
    dispatch(setPagination({
      page:currentPage,
      searchTerm:searchQuery,
      domain:filterDomain,
      gender:filterGender,
      available:filterAvailability
    }
      ))
  },[currentPage,searchQuery,filterDomain,filterGender,filterAvailability])

  const handleFilterChange = (key, value) => {
    switch (key) {
      case 'domain':
        setFilterDomain(value);
        break;
      case 'gender':
        setFilterGender(value);
        break;
      case 'availability':
        setFilterAvailability(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div style={{marginBottom:"20px"}}>
        <Search placeholder="Search by name" onSearch={handleSearch} style={{ width: 200, marginRight: 16 }} />
        <Select placeholder="Filter by Domain" onChange={(value) => handleFilterChange('domain', value)} style={{ width: 120, marginRight: 16 }}>
        {
          allDomain.map(domain=><Option  value={domain}>{domain}</Option>)
        }
        </Select>
        <Select placeholder="Filter by Gender" onChange={(value) => handleFilterChange('gender', value)} style={{ width: 120, marginRight: 16 }}>
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Agender">Agender</Option>
        </Select>
        <Select placeholder="Filter by Availability" onChange={(value) => handleFilterChange('availability', value)} style={{ width: 120, marginRight: 16 }}>
          <Option value="true">Available</Option>
          <Option value="false">Not Available</Option>
        </Select>
        <Button type="primary">Create Team</Button>
      </div>

      <Row gap="middle" vertical>
        {users.data.map((user) => (
          <Col span={6} key={user._id}>
          <UserCard  user={user} />
          </Col>
        ))}
      </Row>

      <Pagination current={currentPage} pageSize={pageSize} total={totalUsers} onChange={handlePageChange} />
    </div>
  );
}

export default UserList;
