import React, {useState, useEffect} from 'react'
import './App.css';
// import Introduction from './components/introduction'
// import Profile from './components/profile'

function App() {
  //kiri - getter
  //kanan - setter
  const [namaDepan, namaBelakang] = useState(0)
  const [panggilanDepan, setPanggilanDepan] = useState("")

  useEffect(()=>{
    if (namaDepan === 1){
      setPanggilanDepan("OK Berhasil ..")
    }else if(namaDepan === 2){
      setPanggilanDepan("Sudah Cukup !!")
    }else if (namaDepan > 2){
      setPanggilanDepan("Kelewatan Oii ................")
    }
  },[namaDepan])

  return (
    <div>
      <h5>Nama Depan: {panggilanDepan}</h5>
      <h1>{namaDepan}</h1>
      <button onClick={() => namaBelakang((prev) => prev+1)}>tambah pacar</button>
      {/* <Profile />
      <Introduction name="ringin"/>
      <Introduction name="restu pati"/> */}
    </div>
  );
}

//useState sebagai penampungan data sementara
//useEffect digunakkan untuk merender ke browser
export default App;
