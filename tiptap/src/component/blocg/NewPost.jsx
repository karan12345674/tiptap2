 // Import useState
import React from 'react'
import Tiptap from '../tiptap';
import ShowPost from './showpost';
import { useState } from 'react';

const NewPost = () => {

      const [htmlContent, setHtmlContent] = useState('');

    const handleEditorContentSave = (html) =>{
        setHtmlContent(html);
    }
  return (
    <>
    <Tiptap onEditorContentSave = {handleEditorContentSave}/>
    <ShowPost content ={htmlContent}/>
    </>
  )
}

export default NewPost;