import React from 'react';

export const Table = ({columns, rows}) => (
    <table>
        <thead>
        <tr>
            {columns.map(column => <th key={column}>{column}</th>)}
        </tr>
        </thead>
        <tbody>
        { rows.map((row, index) => <tr key={index}>{row.map(value => <td key={value}>{value}</td>)}</tr>)}
        </tbody>
    </table>
);

Table.styleguide = {
    examples: {

        unsorted: {
            columns: ['field', 'value'],
            rows: [['name', 'John Doe'], ['email', 'john@example.com'], ['address', 'St John Street']]
        },

        sorted: {
            columns: ['field', 'value'],
            rows: [['name', 'John Doe'], ['email', 'john@example.com'], ['address', 'St John Street']]
        },

        filtering: {
            columns: ['field', 'value'],
            rows: [['name', 'John Doe'], ['email', 'john@example.com'], ['address', 'St John Street']]
        }

    }
};