import React from 'react'
import './table.css'

const Table = ({ data }) => {
  return (
    <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Percentage funded</th>
              <th>Amount pledged</th>
            </tr>
          </thead>
          <tbody>
            {data?.length != 0 ? data?.map((item,) => <tr key={item['s.no']}>
              <td>{item['s.no']}</td>
              <td>{item['percentage.funded']}</td>
              <td>{item['amt.pledged']}</td>
            </tr>) : ''}
          </tbody>
        </table>
    </div>
  )
}

export default Table