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

const IndexPage = ({ data }) => {
  const slideshowSettings = {
    arrows: false,
    fade: true,
    easing: 'ease-in-out',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: 'pricemet-slide',
  };

  const slideshow = configs.video_or_screenshot === "screenshot" ? <Slider {...slideshowSettings}>
    {data.iphoneScreens.edges.map(e => (
      <Img
        key={e.node.id}
        fluid={e.node.childImageSharp.fluid}
        className="iphoneScreenSlideshow"
      />
    ))}
  </Slider> : null;

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
            <div
              className="iphonePreview"
            >
              {configs.video_or_screenshot === "video" && (
                <div className="videoContainer">
                  <video
                    className="screenvideo"
                    autoPlay="autoplay"
                    controls="controls"
                  >
                    <source
                      src={data.videoScreen.publicURL}
                      type={`video/${
                        data.videoScreen.extension === "mov"
                          ? `mp4`
                          : data.videoScreen.extension
                        }`}
                    />
                  </video>
                </div>
              )}
              {slideshow}
            </div>
            <div className="appInfo">
              <div className="appIconShadow">
                <svg width="0" height="0">
                  <defs>
                    <clipPath id="shape120">
                      <path
                        id="shape"
                        d="M6821,495.533v-4.281c0-1.2-.04-2.4-0.04-3.642a57.7,57.7,0,0,0-.68-7.882,26.144,26.144,0,0,0-2.48-7.483,25.115,25.115,0,0,0-11.04-11.044,26.118,26.118,0,0,0-7.49-2.481,47.28,47.28,0,0,0-7.88-.68c-1.2-.04-2.4-0.04-3.64-0.04h-53.5c-1.2,0-2.4.04-3.64,0.04a57.813,57.813,0,0,0-7.88.68,26.323,26.323,0,0,0-7.49,2.481,25.115,25.115,0,0,0-11.04,11.044,26.144,26.144,0,0,0-2.48,7.483,47.313,47.313,0,0,0-.68,7.882c-0.04,1.2-.04,2.4-0.04,3.642v53.5c0,1.2.04,2.4,0.04,3.641a57.7,57.7,0,0,0,.68,7.883,26.137,26.137,0,0,0,2.48,7.482,25.115,25.115,0,0,0,11.04,11.044,26.261,26.261,0,0,0,7.49,2.481,47.28,47.28,0,0,0,7.88.68c1.2,0.04,2.4.04,3.64,0.04h53.5c1.2,0,2.4-.04,3.64-0.04a57.654,57.654,0,0,0,7.88-.68,26.057,26.057,0,0,0,7.49-2.481,25.115,25.115,0,0,0,11.04-11.044,26.137,26.137,0,0,0,2.48-7.482,47.316,47.316,0,0,0,.68-7.883c0.04-1.2.04-2.4,0.04-3.641V495.533h0Z"
                        transform="translate(-6701 -458)"
                        filter="url(#f1)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <Img
                  fluid={data.appIconLarge.childImageSharp.fluid}
                  className="appIconLarge"
                />
              </div>
              <div className="appNamePriceContainer">
                <h1 className="appName">{configs.app_name}</h1>
                <h2 className="appPrice">{configs.app_price}</h2>
              </div>
              <div className="appDescriptionContainer">
                <p className="appDescription">{configs.app_description}</p>
              </div>
              <div className="downloadButtonsContainer">
                {configs.playstore_link && (
                  <a className="playStoreLink" href={configs.playstore_link}>
                    <Img
                      fixed={data.playStore.childImageSharp.fixed}
                      className="playStore"
                    />
                  </a>
                )}
                {configs.appstore_link && (
                  <a className="appStoreLink" href={configs.appstore_link}>
                    <Img
                      fixed={data.appStore.childImageSharp.fixed}
                      className="appStore"
                    />
                  </a>
                )}
                {!configs.appstore_link && !configs.playstore_link && (
                  <p className="appDescription">Disponibile prossimamente negli store mobile</p>
                )}
              </div>
            </div>
            <div className="features">
              {configs.features.map((feature, i) => {
                if (feature.title) {
                  return (
                    <div className="feature" key={i}>
                      <div>
                        <span className="fa-stack fa-1x">
                          <i className="iconBack fas fa-circle fa-stack-2x" />
                          <i
                            className={`iconTop fas fa-${
                              feature.fontawesome_icon_name
                              } fa-stack-1x`}
                          />
                        </span>
                      </div>
                      <div className="featureText">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  )
                }
                return null
              })}
            </div>
            <footer>
              <p className="footerText">
                Creata da{" "}
                {configs.your_link ? (
                  <a href={configs.your_link}>{configs.your_name}</a>
                ) : (
                    `${configs.your_name}`
                  )}
                {configs.your_city && ` a ${configs.your_city}`}
              </p>
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
            {/*TODO: Add App Store API */}
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
    appStore: file(relativePath: { eq: "appstore.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    playStore: file(relativePath: { eq: "playstore.png" }) {
      childImageSharp {
        fixed(height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    iphoneScreen: file(relativePath: { glob: "screenshot/*.{png,jpg}" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    iphoneScreens: allFile(filter: {relativePath: { glob: "screenshot/*.{png,jpg}" }}) {
      edges {
        node {
          id,
          childImageSharp {
            fluid(maxWidth: 350){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    },
    videoScreen: file(
      extension: { ne: "txt" }
      relativePath: { glob: "videos/*" }
    ) {
      publicURL
      extension
    }
    appIconLarge: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 120) {
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
    iphonePreviewBlack: file(relativePath: { eq: "black.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewBlue: file(relativePath: { eq: "blue.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewCoral: file(relativePath: { eq: "coral.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewWhite: file(relativePath: { eq: "white.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewYellow: file(relativePath: { eq: "yellow.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
