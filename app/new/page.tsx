import React from 'react'
import Link from 'next/link'
import styles from './NewUserStyle.module.css'

function NewUser() {
  return (
    <div className='bg-sky-300 p-5'>
        <h5>
        Now you landed on NewUser</h5>
        <Link href="/"><button className='btn my-5'>
            
                go back to home
            
        </button>
        </Link>
        <button className={styles.buttonStyle}>custom style</button>
    </div>
  )
}

export default NewUser