import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1 style={{ fontSize:`30px`,fontWeight:`bold`,marginBottom:`8px`}}>隐私政策</h1>
      <p style={{ fontSize:`16px`,marginBottom:`12px`,lineHeight:`30px`}}>
        <strong>我不会从您那里收集任何数据。</strong>既不个人也不匿名。您的照片和视频完全不公开。我不会使用广告或分析来跟踪您的行为。
      </p>
      <p style={{ fontSize:`16px`,marginBottom:`20px`,lineHeight:`30px`}}>有一个简单的例外：支持请求。</p>
      <p style={{ fontSize:`22px`,marginBottom:`12px`,lineHeight:`30px`,fontWeight:`bold`}}>支持请求</p>
      <p style={{ fontSize:`16px`,marginBottom:`20px`,lineHeight:`30px`}}>您可以从该应用程序中向我发送电子邮件。如果需要，您可以发送一些基本的诊断信息（例如，应用程序和系统版本，设备类型）。我仅使用此信息来诊断和解决您的支持请求。发送之前，您完全可以阅读，查看和删除此信息。</p>
      <p style={{ fontSize:`22px`,marginBottom:`12px`,lineHeight:`30px`,fontWeight:`bold`}}>任何问题？</p>
      <p style={{ fontSize:`16px`,marginBottom:`12px`,lineHeight:`30px`}}>让我知道是否可以为您澄清一件事。只需给我写信至zhanggenlove@gmail.com</p>
      <p style={{ fontSize:`18px`,marginBottom:`12px`,lineHeight:`30px`,fontWeight:`bold`}}>上次更新时间：</p>
      <p style={{ fontSize:`15px`,marginBottom:`12px`,lineHeight:`30px`}}>2021年3月21日</p>
    </Layout>
  );
}