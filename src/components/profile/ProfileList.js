import React from 'react';
import styles from './ProfileList.module.css';
import Profile from './Profile';
import {profiles} from '../../profile-data';


const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>
        <div className={styles["profile-container"]}>
            {profiles.map((profile) => {
                const { img, name, job, company, link } = profile;
                return(
                <Profile 
                    name={name}
                    job={job}
                    company={company}
                    link={link}
                    image={img}
                />)
        })}
        </div>
      </div>
    </section>
  )
}

export default ProfileList
