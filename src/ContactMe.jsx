import React from 'react';
import linkdin from './assets/linkedin.png';
import github from './assets/git.svg';
import twitter from './assets/twitter.png';
import instagram from './assets/instagram.png';
import GFG from './assets/GFG.png';
import leetcode from './assets/leetcode.png';

function ContactMe() {
  return (
    <div className="ContactMe">
       
      <a href="https://www.linkedin.com/in/samarth-koli-4073b523b/" target='_'>
      
        <img src={linkdin} alt="LinkedIn" />
      </a>
      <a href="https://github.com/SamarthKoli" target='_'>
        <img src={github} alt="GitHub" />
      </a>
      <a href="https://www.geeksforgeeks.org/user/samkoli/" target='_'>
        <img src={GFG} alt="GeeksForGeeks" />
      </a>
      <a href="https://leetcode.com/u/KoliSamarth/" target='_'>
        <img src={leetcode} alt="LeetCode" />
      </a>
      <a href="https://x.com/KoliSamarthh" target='_'>
        <img src={twitter} alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/samarth_k301?igsh=MWQwdjl6bG5veDh2ZQ==" target='_'>
        <img src={instagram} alt="Instagram" />
      </a>
    </div>
  );
}

export default ContactMe;
