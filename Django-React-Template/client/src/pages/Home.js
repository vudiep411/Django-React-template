import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'

// import { useDispatch } from 'react-redux'
// import { getObj } from '../actions/object'
// import { useSelector } from 'react-redux'

const Home = () => {
    // const dispatch = useDispatch()
    
    // useEffect(() => {
    //   dispatch(getObj())
    // }, [dispatch])

    // const {people} = useSelector(state => state.object)
    // console.log(people)
    // if(people.length === 0) return null
    const click = () => {
      axios.get('http://localhost:8000/room/')
      .then((res) => console.log(res))
    }
  return (
    <div>
      <Button variant='contained' onClick={click}>Click me</Button>      
    </div>
  )
}

export default Home