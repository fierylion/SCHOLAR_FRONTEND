import React from 'react'
import axios from 'axios'
import {saveAs} from 'file-saver'
const TestWork = () => 
{
 const[error, setError] = React.useState(null);
 const [loading, setLoading] = React.useState(false);
 const fetchData= async () =>{
  setLoading(true)
  try{
    const response = await axios.post('https://scholar-pphp.onrender.com/results', {
      links: ['https://scholar.google.com/citations?hl=en&user=ke9PXIIAAAAJ'],
    })
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
     <button className='btn btn-primary' onClick={fetchData}>
      DOWNLOAD EXCEL
     </button>
    </div>
  )
}

export default TestWork