import { ImageList, ImageListItem } from '@mui/material'
import { useSelector } from 'react-redux'

export const ImageGallery = () => {
  const { activeNote } = useSelector((state) => state.journal)

  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
      {activeNote.imageUrls.map((item) => (
        <ImageListItem key={item}>
          <img src={item} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
