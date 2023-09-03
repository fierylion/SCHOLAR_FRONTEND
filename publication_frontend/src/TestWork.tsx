import React from 'react'
import axios from 'axios'
import {saveAs} from 'file-saver'
const TestWork = () => 
{
 const[error, setError] = React.useState(null);
 const [loading, setLoading] = React.useState(false);
 const [ur, setUr] = React.useState('');
 const fetchData= async (e) =>{
  e.preventDefault()
  setLoading(true)
  const dev = false
  try{
    if(! ur) return;
    const data = {
      links: [
        // 'https://scholar.google.com/citations?hl=en&user=ke9PXIIAAAAJ',
        // 'https://scholar.google.com/citations?hl=en&user=hTxY1RoAAAAJ',
        // 'https://scholar.google.com/citations?hl=en&user=ke9PXIIAAAAJ',
      ur,


      ],
    }
    const url = dev
      ? 'http://localhost:8000/results'
      : 'https://gscrape.fierylion.me/results'
    const response = await axios.post(url, data, {responseType: 'blob'})
    saveAs(response.data, 'result.xlsx')
  }catch(error){
    console.log(error)
  }
  finally{
   setLoading(false)
  }
 }

  return (
    <div>
     {
      loading && <div className='text-success'><h1>Loading....</h1></div>
     }
     <div>
      {error && <div className='text-danger'><h1>There is an error, Please Try again later!!!!</h1></div>}
     </div>
     <div>
      <form onSubmit={fetchData} className='form'>
        <label htmlFor="url" className='label m-3'>Enter Instructor URL: </label>
        <input type="text" name="url" id="url" className='form-control m-3' value={ur} onChange={(e)=>setUr(e.target.value)}/>

      </form>
     </div>
     <button className='btn btn-primary' onClick={fetchData}>
      DOWNLOAD EXCEL
     </button>
    </div>
  )
}

export default TestWork