import React from 'react'
import Layout from '../components/Layout'
const Contact = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>お問い合わせ</h2>
          
          <form
            className="contact-form"
            name="contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="name"
              placeholder="お名前"
              className="form-control "
              required
            />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="メールアドレス"
              required
            />
            <textarea 
              name="message"
              className="form-textarea"
              placeholder="こちらにお問い合わせ内容を入力してください"
              required
            ></textarea>
            <button type="submit" className="btn form-control submit-btn">
              送信
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
