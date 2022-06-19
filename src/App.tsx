import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import { Header } from './components/header/Header'
import {Post} from  './components/posts/Post'
import { Sidebar } from './components/sidebar/Sidebar'
import { posts } from './data'
function App() {

  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
    <Sidebar/>
      <main>
        {posts.map(post =>{
          return( 
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
      </main>
    </div>
    </>
 
  )
}

export default App
