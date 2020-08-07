import React from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'
import "./TableForm.css"

const TableForm = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>업체명</Table.HeaderCell>
        <Table.HeaderCell>담보물명</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>홍길동 업체</Table.Cell>
        <Table.Cell>홍길동 담보물</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>이순신 업체</Table.Cell>
        <Table.Cell>이순신 담보물</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>장영실 업체</Table.Cell>
        <Table.Cell>장영실 담보물</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>장영실 업체</Table.Cell>
        <Table.Cell>장영실 담보물</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>장영실 업체</Table.Cell>
        <Table.Cell>장영실 담보물</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>장영실 업체</Table.Cell>
        <Table.Cell>장영실 담보물</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>장영실 업체</Table.Cell>
        <Table.Cell>장영실 담보물</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>장영실 업체</Table.Cell>
        <Table.Cell>장영실 담보물</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>장영실 업체</Table.Cell>
        <Table.Cell>장영실 담보물</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>장영실 업체</Table.Cell>
        <Table.Cell>장영실 담보물</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default TableForm;