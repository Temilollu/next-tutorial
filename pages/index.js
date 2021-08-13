import React, { useEffect, useState } from 'react'

import MeetupList from '../components/meetups/MeetupList'
const DUMMY_MEETUPS = [
    {
        id : 'm1',
        title : 'A First Meetup',
        image : 'https://drscdn.500px.org/photo/52071370/q%3D80_m%3D1500/v2?sig=9881dcf51dac9e6d1d82eb353f5d7ad8e70593480de02e85cfa52c530e536758',
        address : 'Some address',
        description : 'Here is desc'
    },
    {
        id : 'm2',
        title : 'A Second Meetup',
        image : 'https://drscdn.500px.org/photo/52071370/q%3D80_m%3D1500/v2?sig=9881dcf51dac9e6d1d82eb353f5d7ad8e70593480de02e85cfa52c530e536758',
        address : 'Some address for you',
        description : 'Here is desc'
    },
]
const HomePage = () => {
   const [loadedMeetups, setLoadedMeetups] = useState([])
    useEffect(() => {
        setLoadedMeetups(DUMMY_MEETUPS)
    },[])
    return (
        <MeetupList meetups={loadedMeetups}/>
    )
}

export default HomePage
