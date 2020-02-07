import React,{useState} from 'react';
//MdImportExport


export default props => {

  const bookmarks = props.bookmarks || []

  return (
    <>
      {
        bookmarks.map(item=> (
            <div>{item.hash} - {item.title} - <a href={item.url} target="_blank">go</a></div>
          )
        )
      }
    </>
  )

}
