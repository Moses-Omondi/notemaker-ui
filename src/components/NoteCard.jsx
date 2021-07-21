import React from 'react';

import { Card, CardHeader, CardContent, IconButton, Typography, Avatar } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const NoteCard = ({ note, handleDelete }) => {
    const { title, category, details, id } = note;
    return (
        <div>
            <Card elevation={3}>
                <CardHeader
                    avatar={
                        <Avatar>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(id)}>
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      } 
                      title={title}
                      subheader={category}        
                />
                <CardContent>
                    <Typography color='textSecondary' variant='body2'>
                        {details}
                    </Typography>
                </CardContent>
                </Card>
        </div>
    )
}

export default NoteCard;
