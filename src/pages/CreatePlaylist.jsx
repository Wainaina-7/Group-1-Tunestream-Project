import React, { useState } from 'react'
import { createPlaylist } from '../api/spotify'
export default function CreatePlaylist() {
const [name, setName] = useState('')
const [desc, setDesc] = useState('')
const [status, setStatus] = useState('')
const userId = localStorage.getItem('spotify_user_id')
  return (
    <div>
      
    </div>
  )
}
