import React from 'react'
import styles from './Profile.module.css';
import profile1 from '../../assets/profile1.png';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { IconContext } from 'react-icons';
import Card from '../UI/Card/Card';


const Profile = ({ image, name, job, company, link }) => {
  return (
    <Card>
        <div className={styles.profile}>
            <img src={image} alt={image} />
            <h3>My Profile</h3>
            <div className={styles.text}>
                <p>Name: </p>
                <p>{name}</p>
            </div>
            <div className={styles.text}>
                <p>Job: </p>
                <p>{job}</p>
            </div>
            <div className={styles.text}>
                <p>Company: </p>
                <p>{company}</p>
            </div>

            <IconContext.Provider value={{
                color: '#666', 
                size: '20px'
            }}>
                <div className={styles.icons}>
                    <FaGithub />
                    <FaTwitter />
                    <AiOutlineGooglePlus />
                </div>
            </IconContext.Provider>

            <div className={styles.btn}>
                <a href={link} target='_blank' rel='noreferrer'>View Profile</a>
            </div>
        </div>
    </Card>
  )
}

export default Profile
