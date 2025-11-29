// import { useState, type JSX } from "react";
// import MyButton from "../MyButton/MyButton";

// export default function feedback(): JSX.Element {
//   const [likes, setLikes] = useState(0);
//   const [dislikes, setDislikes] = useState(0);

//   function handleLike() {
//     setLikes(likes + 1);
//   }

//   function handleLDislike() {
//     setDislikes(dislikes + 1);
//   }
//   function handleReset() {
//     setLikes(0);
//     setDislikes(0);
//   }
//   return (
//     <div style = {{backgroundColor: "#a09a9aff", borderRadius: "10px", marginTop:"50px"}}>
//       <h2 style = {{fontWeight: "300",color:"creme"}}>Feedback</h2>
//       <div>
//         <span style={{ fontSize: "1.2rem" }}>{likes} 👍</span>
//         <MyButton onClick={handleLike}>Like</MyButton>

//         <MyButton onClick={handleLDislike}>Dislike</MyButton>
//         <span style={{ fontSize: "1.2rem" }}>👎 {dislikes}</span>
//         <MyButton onClick={handleReset}>Reset Results</MyButton>
//       </div>
//     </div>
//   );
// }

import { useState, type JSX } from "react";
import MyButton from "../MyButton/MyButton";
import styles from "./Feedback.module.css";

export default function Footer(): JSX.Element {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleDislike() {
    setDislikes(dislikes + 1);
  }

  function handleReset() {
    setLikes(0);
    setDislikes(0);
  }

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        
        {/* Footer Header */}
        <div className={styles.footerHeader}>
          
        </div>

        {/* Main Footer Sections - Horizontāli */}
        <div className={styles.footerSections}>
          
          {/* Feedback Section */}
          <div className={styles.footerSection}>
            <div className={styles.feedbackSection}>
              <h3 className={styles.feedbackTitle}>Was this app helpful?</h3>
              <div className={styles.feedbackStats}>
                <div className={styles.likesCount}>
                  <span>👍</span>
                  <span>{likes}</span>
                </div>
                <div className={styles.dislikesCount}>
                  <span>{dislikes}</span>
                  <span>👎</span>
                </div>
              </div>
              <div className={styles.feedbackButtons}>
                <MyButton onClick={handleLike} variant="primary">Like</MyButton>
                <MyButton onClick={handleDislike} variant="secondary">Dislike</MyButton>
                <MyButton onClick={handleReset} variant="danger">Reset</MyButton>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span>📧</span>
                <span>my@app.com</span>
              </div>
              <div className={styles.contactItem}>
                <span>📱</span>
                <span>+371 1234 5678</span>
              </div>
              <div className={styles.contactItem}>
                <span>📍</span>
                <span>Goch, Germany</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <div className={styles.linksList}>
              <a href="/about" className={styles.link}>
                <span>📄</span>
                About Us
              </a>
              <a href="/privacy" className={styles.link}>
                <span>🔒</span>
                Privacy Policy
              </a>
              <a href="/terms" className={styles.link}>
                <span>📝</span>
                Terms of Service
              </a>
              <a href="/support" className={styles.link}>
                <span>💬</span>
                Support
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Follow Us</h4>
            <div className={styles.socialLinks}>
              <p style={{color: '#cccccc', marginBottom: '10px'}}>Stay connected for updates</p>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon} title="Twitter">
                  𝕏
                </a>
                <a href="#" className={styles.socialIcon} title="Facebook">
                  ƒ
                </a>
                <a href="#" className={styles.socialIcon} title="GitHub">
                  ⓖ
                </a>
                <a href="#" className={styles.socialIcon} title="LinkedIn">
                  in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; 2025 My App. All rights reserved. | Made with ❤️ </p>
        </div>
        
      </div>
    </footer>
  );
}