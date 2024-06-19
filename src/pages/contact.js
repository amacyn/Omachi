'Use Client'
import React from "react"
import Navbar from "../components/Navbar"
import style from '../app/globals.css'
import styles from '../styles/contact.module.css'

const contact = () => {
  return (
    <div>
      <Navbar/>  
       <main className={styles.main}>
         <h3>contact us via whatsapp or call with this number <i>+2348131827781</i>  or via email <i>omachimerchi54@gmail.com</i></h3>
         <h2>Profile</h2> 
          <form className={styles.form}>
              <h2>Sign In</h2>
              <label htmlFor="Name">Name</label>
              <input 
                  id="Name" 
                  type="text" 
                  placeholder='Enter FullName'
                  required 
              />
              <label htmlFor="username">Username</label>
              <input 
                  id="username" 
                  type="username" 
                  placeholder='Enter username'
                  required 
              />
              <label htmlFor="Email">Email</label>
              <input 
                  id="Email" 
                  type="Email" 
                  placeholder='Enter Email'
                  required 
              />
              <label htmlFor="password">Password</label>
              <input 
                  id="password" 
                  type="password" 
                  placeholder='Enter Password'
                  required 
              />
              <button type="submit">Enter</button>
              <p>Do not have an account? <span className={styles.anchor}>Sign up</span></p>
          </form>
       </main>
    </div>
  )
}

export default contact
