/*global chrome*/
import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector}                       from 'react-redux'

import List from 'components/BookmarkManager/List'
import InOut from 'components/BookmarkManager/InOut'
import {IoMdTrash} from 'react-icons/io'
import {MdImportExport} from 'react-icons/md'

import {get_browsers_bookmarks} from 'redux/Bookmarks/actions';
import {get_bookmarks} from 'redux/selectors'

import Inspector from 'react-inspector';

export default props => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(get_bookmarks)

  const [importExport,showImportExport] = useState();

  useEffect(()=>{
    dispatch(get_browsers_bookmarks());
  },[])

  return (
    <>
      <h1>Tag bookmark manager</h1> <MdImportExport onClick={()=>showImportExport(true)} style={{width:'36px',height:'36px'}}/>

      {importExport && <InOut/>}

      <IoMdTrash style={{width:'36px',height:'36px'}}/>

      <List bookmarks={bookmarks}/>


    </>
  )
}
