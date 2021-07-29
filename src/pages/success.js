import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const Success = () => {
  return (
    <Layout>
      <section className="success-page">
        <div className="page-center">
          <h2>送信完了！</h2>
          <Link to="/" className="btn" aria-label="back">
            戻る
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success
