'use client';
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import axios from 'axios'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [datos, setDatos] = useState([])

  useEffect(()=>{
    const fetchDatos = async() => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
      setDatos(res.data)
      console.log(res)
    } 
    fetchDatos()
  }, [])

  return (
      <div className={styles.flexContainer}>
      {datos.length > 0 ? (
        datos.map((data:any) => (
          <div key={data.id} className={styles.card}>
            <h2>{data.id}. {data.title}</h2>
            <Image width={200} height={200} alt={data.thumbnailUrl} src={data.url} />
            <Link href={data.thumbnailUrl} target="_blank"> {data.thumbnailUrl} </Link>
          </div>
        ))
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}
