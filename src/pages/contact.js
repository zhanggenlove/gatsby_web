import React from "react"
import Layout from "../components/layout"

export default function Contact() {
  return (
      <Layout>
        <div>
        <h1 style={{ fontSize:`30px`,fontWeight:`bold`,marginBottom:`8px`}}>支持</h1>
        <p style={{ fontSize:`16px`,marginBottom:`20px`,lineHeight:`30px`}}> 
        👋您好，我希望您喜欢文档扫描仪Pro。
        </p>
        <p style={{ fontSize:`16px`,marginBottom:`20px`,lineHeight:`30px`}}>如果您需要任何帮助或想发送一些反馈，请给我发电子邮件至<a href="mailto:zhanggenlove@gmail.com" style={{color:`blue`}}>zhanggenlove@gmail.com</a>。</p>
        </div>
    </Layout>
  )
}
