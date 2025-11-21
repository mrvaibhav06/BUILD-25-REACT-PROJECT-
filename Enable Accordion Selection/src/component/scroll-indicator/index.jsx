import {useEffect,useState} from 'react'
 
export default function ScrollIndicator(url) {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false)
  const [errorMessage,setErrorMessage]=useState('')

  async function fetchData(getUrl){
    try {
      setLoading(true)
      const response = await fetch(getUrl);
      const data = await response.json()
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchData(url)
  },[url])

  return(
     <div>
      <h1>Custom Scroll Indicator</h1>
      <div className='data-container'>
        {data && data.length>0 ? data.map((dataItem) => <p>{dataItem.title}</p>)
        :null
        }
      </div>
     </div>
  )
 
}
