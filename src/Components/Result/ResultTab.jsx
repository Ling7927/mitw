import React from "react";
import Inform from "./Inform";
import { Space, Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;

const data = [
  {
    title: "Age",
    c1: "First",
    c2: "Last",
    c3: "Add",
    c4: "Tags",
    c5: "Act",
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    title: "Age",
    c1: "First",
    c2: "Last",
    c3: "Add",
    c4: "Tags",
    c5: "Act",
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    title: "Age",
    c1: "First",
    c2: "Last",
    c3: "Add",
    c4: "Tags",
    c5: "Act",
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
function ResultTab() {
  return (
    <Table dataSource={data}>
      <Column title="title" dataIndex="c1" key="age" />
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />

        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </ColumnGroup>
    </Table>
  );
}

export default ResultTab;
