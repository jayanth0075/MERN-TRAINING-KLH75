import React, { useState } from 'react'
import { Button, Stack, TextInput } from '@mantine/core';
import Service from '../../utils/http';

export const URLShortener = () => {
   const service = new Service();
   const [originalUrl, setOriginalUrl] = useState("");
   const [title, setTitle] = useState("");
   const [expiryDate, setExpiryDate] = useState("");
   const [shortUrl, setShortUrl] = useState("");

   const handleSubmit = async () => {
       try {
           const response = await service.post('shorturl/post', {
               originalUrl,
               title,
               expiryDate
           });
           setShortUrl(response.shortUrl);
       } catch (error) {
           console.error("Error:", error.message);
       }
   }

   return (
       <Stack style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
           {shortUrl ? (
               <>
                   <p>Short URL: <strong>{shortUrl}</strong></p>
                   <Button onClick={() => setShortUrl("")}>Create Another</Button>
               </>
           ) : (
               <>
                   <TextInput
                       label="Original URL"
                       placeholder="https://example.com"
                       value={originalUrl}
                       onChange={(e) => setOriginalUrl(e.target.value)}
                   />
                   <TextInput
                       label="Title"
                       placeholder="My Link"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                   />
                   <TextInput
                       label="Expiry Date"
                       type="date"
                       value={expiryDate}
                       onChange={(e) => setExpiryDate(e.target.value)}
                   />
                   <Button onClick={handleSubmit} fullWidth>
                       Shorten URL
                   </Button>
               </>
           )}
       </Stack>
   )
}
