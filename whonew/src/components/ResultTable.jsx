import React from 'react'

export default function ResultTable() {
  return (
    <div>
        <table>
          <thead className='table-header'>
            <tr className='table-row'>
              <td>Score: </td>
              <td>Your Quality of Life is :</td>
            </tr>
          </thead> 
          <tbody>
            <tr className='table-body'>
              <td>50</td>
              <td>Neither good nor bad</td>
            </tr>
          </tbody>
         </table>
    </div>
  )
}
