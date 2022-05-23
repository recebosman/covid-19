import React,{useEffect,useState} from 'react'
import axios from 'axios'
import moment from 'moment'
const url = "https://api.covid19api.com/summary"

const Fetchdata = () => {

    const [list,setList] = useState([])
    const [isloading, setIsloading ] = useState(true)

    useEffect(() => {
    
     const listData = async () => {
         const response = await axios.get(url)
         setList(response.data.Countries)
         console.log(response.data.Countries)
         setIsloading(false)
     }
     
  listData();

    } ,[])



    return (
        <>
        {isloading ? <h1 className=' items-center justify-center font-bold text-4xl border-2 bg-teal-700 w-full h-full flex absolute' >Loading</h1> :
        
        
        
        
          <section className=" bg-teal-700 grid grid-cols-1 gap-10 px-10 py-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:px-20">
            {list.map((country) => {
              const {
                ID,
                Country,
                CountryCode,
                NewConfirmed,
                TotalConfirmed,
                NewDeaths,
                TotalDeaths,
                NewRecovered,
                TotalRecovered,
                Date
              } = country
    
              return (
                <div key={ID} className="bg-gray-800 p-4 rounded">
                       

                  <h2 className="font-bold text-3xl mb-4  text-pink-400 ">
                    {Country},{CountryCode}
                  </h2>
    
                  <ul>
                    <li className="flex justify-between my-2 text-red-300">
                    New Confirmed Cases: {NewConfirmed.toLocaleString()}
                    </li>
                    <li className="flex justify-between my-2 text-blue-300">
                    Total Confirmed Cases: {TotalConfirmed.toLocaleString()}
                    </li>
                    <li className="flex justify-between my-2 text-yellow-300">
                    New Deaths: {NewDeaths.toLocaleString()}
                    </li>
                    <li className="flex justify-between my-2 text-purple-300">
                    Total Deaths: {TotalDeaths.toLocaleString()}
                    </li>
                    <li className="flex justify-between my-2 text-indigo-300">
                    New Recovered Cases:  {NewRecovered.toLocaleString()}
                    </li>
                    <li className="flex justify-between my-2 text-pink-300">
                    Total Recovered Cases:   {TotalRecovered.toLocaleString()}
                    </li>
                    <li className="text-green-100 mt-5">
                    Date:
                  {moment(`${Date}`).format('MMMM Do YYYY hh:mm:ss')}
                </li>
                  </ul>
                </div>
              )
            })}
          </section>
        }
        </>
      )
}

export default Fetchdata