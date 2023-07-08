export const uploadFile = async (file) => {
  const url = 'https://api.cloudinary.com/v1_1/coddica/upload'

  const formData = new FormData()
  formData.append('upload_preset', 'journalapp')
  formData.append('file', file)

  try {
    const resp = await fetch(url, {
      method: 'POST',
      body: formData,
    })

    if (!resp.ok) throw new Error('Could not upload file, please try again')

    const json = await resp.json()
    return json.secure_url
  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
}
