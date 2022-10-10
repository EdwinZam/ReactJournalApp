import { AddOutlined, MailOutline } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../views'
import { NothingSelectedView } from '../views/NothingSelectedView'

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector(state => state.journal);

  const onCLickNewNote =()=>{
       dispatch(startNewNote()); 
  }  
  return (
    <JournalLayout>
      {/* <Typography variant='h3'>Minim consequat reprehenderit ex qui nulla ullamco ex laboris laboris duis sunt. Irure cupidatat ipsum amet in laboris. Reprehenderit id sit voluptate ad ea.</Typography> */}
    
    {
      (!!active)? <NoteView /> : <NothingSelectedView />
    }
 
    <IconButton
      onClick={onCLickNewNote}
      size='large'
      disabled={isSaving}
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': {backgroundColor: 'error.main', opacity: 0.9},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >
      <AddOutlined sx={{fontSize:30}}/>
    </IconButton>
    </JournalLayout>  
  
  )
}
