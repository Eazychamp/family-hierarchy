import React from 'react'
import TableComponent from './TableComponent'

export default {
    title : 'Table Component',
    component : TableComponent
}

const Template = (args) => <TableComponent {...args} />;

export const TableComp = Template.bind({});
TableComp.args = {
    headers : [
        {
            path : 'id',
            name : 'Id',
            width : '20%'
        },
        {
            path : 'name',
            name : 'Name',
            width : '20%'
        },
    ],
    tableData : [
        {
            id : 0,
            name : 'Something'
        },
        {
            id : 1,
            name : 'Something 1'
        }
    ]
};