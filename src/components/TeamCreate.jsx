// components/TeamCreationForm.js
import React, { useState } from 'react';
import { Modal, Button, Select } from 'antd';

const { Option } = Select;

const TeamCreate = ({ visible, onCancel, onCreate, availableUsers }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleUserSelect = (value) => {
    setSelectedUsers(value);
  };

  const handleCreateTeam = () => {
    onCreate(selectedUsers);
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      title="Create Team"
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="create" type="primary" onClick={handleCreateTeam}>
          Create Team
        </Button>,
      ]}
    >
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Select team members"
        onChange={handleUserSelect}
        value={selectedUsers}
      >
        {availableUsers.map((user) => (
          <Option key={user._id}>{`${user.first_name} ${user.last_name}`}</Option>
        ))}
      </Select>
    </Modal>
  );
};

export default TeamCreate;
