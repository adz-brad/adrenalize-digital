import React from "react"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share"
import { MdEmail } from 'react-icons/md'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaPinterest, FaRedditAlien, FaWhatsapp } from 'react-icons/fa'

const SocialSharing = ({ page }) => {
  return (
    <div className="flex flex-row items-center">
      <FacebookShareButton
        url={page.url}
        quote={page.excerpt}
        hashtag={`#adrenalize, #webdevelopment, #appdevelopment, #digitalproducts`}
      >
          <FaFacebook className="socialSharingButton"/>
      </FacebookShareButton>

      <LinkedinShareButton
        url={page.url}
        title={page.title}
        summary={page.excerpt}
        source="https://www.adrenalizedigital.ca"
      >
        <FaLinkedinIn className="socialSharingButton"/>
      </LinkedinShareButton>

      <TwitterShareButton
        url={page.url}
        title={page.title}
        hashtags={["adrenalize,webdevelopment,appdevelopment,digitalproducts"]}
      >
        <FaTwitter className="socialSharingButton"/>
      </TwitterShareButton>

      <PinterestShareButton
        url={page.url}
        media={page.image}
        description={page.excerpt}
      >
        <FaPinterest className="socialSharingButton"/>
      </PinterestShareButton>

      <RedditShareButton
        url={page.url}
        title={page.title}
      >
        <FaRedditAlien className="socialSharingButton"/>
      </RedditShareButton>

      <WhatsappShareButton
        url={page.url}
        title={page.title}
      >
        <FaWhatsapp className="socialSharingButton"/>
      </WhatsappShareButton>

      <EmailShareButton
        url={page.url}
        subject={page.title}
        body={page.excerpt}
      >
        <MdEmail className="socialSharingButton"/>
      </EmailShareButton>
    </div>
  )
}

export { SocialSharing }
