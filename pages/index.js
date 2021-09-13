
import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header title={'Cookie Stand Admin'}>
        {/* <h1> Cookie Stand Admin </h1> */}
      </Header>
      <Main>

      </Main>
     
      
      <Footer></Footer>
    </div>
  )
}