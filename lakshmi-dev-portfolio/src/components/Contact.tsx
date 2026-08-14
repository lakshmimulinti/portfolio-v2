import React from 'react';
import styles from '../styles/components/contact.module.scss';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="container py-5 border-top border-secondary">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className={`${styles.contactWrapper} p-4 p-md-5`}>
            <div className="text-center mb-4">
              <h2 className="text-light fw-bold">Get In Touch</h2>
              <p className="text-muted small">Have a project or opportunity? Feel free to write to me!</p>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="aa2d9cf5-0883-4d7c-8849-884610fb4aa9" />

              <div className="mb-3">
                <input type="text" name="name" className="form-control bg-dark text-light border-secondary p-3" placeholder="Your Name" required />
              </div>

              <div className="mb-3">
                <input type="email" name="email" className="form-control bg-dark text-light border-secondary p-3" placeholder="Your Email" required />
              </div>

              <div className="mb-3">
                <input type="text" name="subject" className="form-control bg-dark text-light border-secondary p-3" placeholder="Subject" required />
              </div>

              <div className="mb-3">
                <textarea name="message" className="form-control bg-dark text-light border-secondary p-3" rows={4} placeholder="Your Message" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 py-3 fw-bold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};