import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Books() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/admin/getLivres')
      .then((res) => {
        setData(res.data);
      })
  }, [])

  return (
    <div className='w-full flex justify-evenly flex-wrap gap-5 mt-5'>
      {data.map((item) => {
        return (
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={'http://localhost/Hub%20Littéraire/back-end/storage/app/public/' + item.image} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{item.nom_livre}</div>
              <p class="text-white text-base">
                {item.created_at}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item.nom_cat}</span>
            </div>
            <button className="btn">{!item.id_user ? <i class="fa-solid fa-thumbs-up" style={{ color: '#107be0;' }}></i> : <i class="fa-regular fa-thumbs-up" className='bg-blue-300'></i>}</button>
            <button className="btn"><i class="fa-regular fa-thumbs-up fa-rotate-180" style={{ color: '#d9d9d9;' }}></i></button>
          </div>
        )
      })}
    </div >
  );
}