import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "react-slick"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import configs from "../../site-config"
import styled from "styled-components"

const Content = styled.div`
  color: white;
  grid-area: p / p / c / c;
  padding-bottom: 32px;

  h1 {
    padding: 24px 0 12px;
  }

  h2, h3, h4 {
    padding: 16px 0;
  }

  ul, ol {
    padding-inline-start: 40px;
    margin: 8px 0;
  }

  li {
    margin: 4px 0;
  }

  p {
    padding: 8px 0;
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title={configs.app_name} keywords={configs.app_keywords} />

      <div
        className="imageWrapper"
        style={{
          backgroundImage: `linear-gradient(${configs.cover_overlay_color_rgba},${
            configs.cover_overlay_color_rgba
            }),url(${data.headerImage.childImageSharp.fluid.src})`,
        }}
      >
        <div className="headerBackground">
          <div className="container">
            <header>
              <div className="logo">
                <div className="appIconShadow">
                  <Img
                    fluid={data.headerIcon.childImageSharp.fluid}
                    className="headerIcon"
                  />
                </div>
                <p className="headerName">{configs.app_name}</p>
              </div>
              <nav>
                <ul>
                  {configs.presskit_download_link && (
                    <li>
                      <a href={configs.presskit_download_link}>Press Kit</a>
                    </li>
                  )}
                </ul>
              </nav>
            </header>
            <Content className="content">
              <h1>Privacy Policy</h1>
              <div className="post-content">
                <p>
                  I am Mattia Natali, the data controller. <a href="m&#97;il&#116;o&#58;ma&#116;t&#37;69anat%&#54;1l&#37;69de&#37;76&#64;gm&#97;il.c&#111;m">You can contact me</a> if you have any questions regarding your privacy.
                </p>
                <h2>Information we collect</h2>
                <h3>Functional data</h3>
                <p>We collect your email only to authenticate you and to send notification about price changes.</p>
                <p>We do not store your password in our database. This is handled by <a href="https://aws.amazon.com/cognito/">AWS Cognito</a>.</p>
                <p>We collect the product you're interested in just for providing you our service: to be notified when the price changes.</p>
                <h4>Non functional data</h4>
                <p>We may collect data about:</p>
                <ul>
                  <li>device type and locale settings (English, Italian, etc.)</li>
                  <li>IP Address</li>
                  <li>time spent and your behavior on my app. For example, how many times you search a product.</li>
                </ul>
                <p>
                  when you&apos;re using my app.
                </p>
                <h4>Use of non functional data</h4>
                <p>We use this data to:</p>
                <ul>
                  <li>provide the app with your preferred language.</li>
                  <li>give you personalized ads.</li>
                  <li>have analytics and insights to check the performance of my app.</li>
                </ul>
                <h2>Disclosure of personal information to third parties</h2>
                <p>We may disclose personal information to:</p>
                <ul>
                  <li>third party service providers to enable them to provide their services, including (without limitation) IT service providers, data storage, web-hosting and server providers, debt collectors, maintenance or problem-solving providers, professional advisors, and payment systems operators.</li>
                </ul>
              </div>
            </Content>
            <footer>
              <div className="footerIcons">
                {configs.facebook_username && (
                  <a
                    href={`https://facebook.com/${configs.facebook_username}`}
                    aria-label="Facebook"
                  >
                    <span className="fa-stack fa-1x">
                      <i className="socialIconBack fas fa-circle fa-stack-2x" />
                      <i className="socialIconTop fab fa-facebook fa-stack-1x" />
                    </span>
                  </a>
                )}

                {configs.linkedin_username && (
                  <a
                    href={`https://www.linkedin.com/in/${configs.linkedin_username}`}
                    aria-label="LinkedIn"
                  >
                    <span className="fa-stack fa-1x">
                      <i className="socialIconBack fas fa-circle fa-stack-2x" />
                      <i className="socialIconTop fab fa-linkedin fa-stack-1x" />
                    </span>
                  </a>
                )}

                {configs.twitter_username && (
                  <a
                    href={`https://twitter.com/${configs.twitter_username}`}
                    aria-label="Twitter"
                  >
                    <span className="fa-stack fa-1x">
                      <i className="socialIconBack fas fa-circle fa-stack-2x" />
                      <i className="socialIconTop fab fa-twitter fa-stack-1x" />
                    </span>
                  </a>
                )}

                {configs.github_username && (
                  <a
                    href={`https://github.com/${configs.github_username}`}
                    aria-label="GitHub"
                  >
                    <span className="fa-stack fa-1x">
                      <i className="socialIconBack fas fa-circle fa-stack-2x" />
                      <i className="socialIconTop fab fa-github fa-stack-1x" />
                    </span>
                  </a>
                )}

                {configs.email_address && (
                  <a href={`mailto:${configs.email_address}`} aria-label="Email">
                    <span className="fa-stack fa-1x">
                      <i className="socialIconBack fas fa-circle fa-stack-2x" />
                      <i className="socialIconTop fas fa-envelope fa-stack-1x" />
                    </span>
                  </a>
                )}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage

export const query = graphql`
  query {
    headerIcon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headerImage: file(relativePath: { eq: "headerimage.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 714) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
