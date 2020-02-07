/* global chrome */
import resolvePromise from '../async-dispatch';

import sha1 from 'sha1'

export const ADD_BOOKMARK     = 'ADD_BOOKMARK';
export const SELECT_BOOKMARK  = 'SELECT_BOOKMARK';
export const BAD_BOOKMARK     = 'BAD_BOOKMARK';
export const TAG_BOOKMARK     = 'TAG_BOOKMARK';
export const ERROR            = 'ERROR';

export const add_bookmark = (bookmark)=>{


  if(bookmark.url){
    if(!bookmark.hash){
      bookmark.hash = new String(sha1(bookmark.url)).slice(0,6)
    }
    if(!bookmark.status){
      bookmark.status = 'imported'
    }
    return {type:ADD_BOOKMARK,payload:bookmark}
  }else{
    return {type:BAD_BOOKMARK,payload:bookmark}

  }
}

export const set_error = (error)=>({type:ERROR,payload:error})

const promiseResolverWithError = resolvePromise(set_error)

export const add_bookmarks = (list=[])=>{
  return (dispatch)=> list.map(item=> dispatch(add_bookmark(item)))
}

export const get_browsers_bookmarks = ()=> async(dispatch,getState)=>{
  return dispatch ( promiseResolverWithError(add_bookmarks) (load_browsers_bookmarks()))
}

export const loadsub = leaf => {
  return leaf.reduce((acc,item)=>{
    if(item.children && item.children.length>0){
      const children = [...item.children];
      delete item.children
      acc = [...acc,item,...loadsub(children)]
    }else{
      acc = [...acc,item]
    }
    return acc
  },[])

}
// b
export const load_browsers_bookmarks = ()=>{

  return new Promise ((resolve,reject)=>{
    let results = [];
    try{
      chrome.bookmarks.getTree(x=>{
        resolve(loadsub(x))
      })
    }catch (err){
      reject(err)
    }

  })
}
