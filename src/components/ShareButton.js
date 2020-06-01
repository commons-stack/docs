import React from "react"
import styled from "styled-components"

import { CopyToClipboard } from "react-copy-to-clipboard"
import ReactTooltip from "react-tooltip"

import ShareIcon from "./ShareIcon"

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-self: flex-end;
  padding-bottom: 4rem;
`

const ShareButton = ({ data }) => {
  const url = `https://faq.commonsstack.org/#${data}`

  return (
    <ButtonContainer id="share-buttons">
      <CopyToClipboard text={url}>
        <div data-tip="Copy link to clipboard" className="icon">
          <ShareIcon className="icon"></ShareIcon>
        </div>
      </CopyToClipboard>
      <ReactTooltip />

      {/*  Buffer 
      <a
        href="https://bufferapp.com/add?url=https://simplesharebuttons.com&amp;text=Simple Share Buttons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/buffer.png"
          alt="Buffer"
        />
      </a>
*/}
      {/*  Digg 
      <a
        href="http://www.digg.com/submit?url=https://simplesharebuttons.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/diggit.png"
          alt="Digg"
        />
      </a>
      */}

      {/*  Email 
      <a
        href={`mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ${url}`}
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/email.png"
          alt="Email"
        />
      </a>
*/}
      {/*  Facebook 
      <a
        href={`http://www.facebook.com/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/facebook.png"
          alt="Facebook"
        />
      </a>
*/}
      {/*  Google+ 
      <a
        href="https://plus.google.com/share?url=https://simplesharebuttons.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/google.png"
          alt="Google"
        />
      </a>
      */}

      {/*  LinkedIn 
      <a
        href={`http://www.linkedin.com/shareArticle?mini=true&amp;url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/linkedin.png"
          alt="LinkedIn"
        />
      </a>
*/}
      {/*  Pinterest 
      <a href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());">
        <img
          src="https://simplesharebuttons.com/images/somacro/pinterest.png"
          alt="Pinterest"
        />
      </a>
      */}

      {/*  Print 
      <button onclick={window.print()}>
        <img
          src="https://simplesharebuttons.com/images/somacro/print.png"
          alt="Print"
        />
      </button>
      */}

      {/*  Reddit 
      <a
        href="http://reddit.com/submit?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/reddit.png"
          alt="Reddit"
        />
      </a>
*/}
      {/*  StumbleUpon
      <a
        href="http://www.stumbleupon.com/submit?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/stumbleupon.png"
          alt="StumbleUpon"
        />
      </a>
      */}

      {/*  Tumblr
      <a
        href="http://www.tumblr.com/share/link?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/tumblr.png"
          alt="Tumblr"
        />
      </a>
      */}

      {/*  Twitter 
      <a
        href="https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/twitter.png"
          alt="Twitter"
        />
      </a>
      */}

      {/*  VK 
      <a
        href="http://vkontakte.ru/share.php?url=https://simplesharebuttons.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/vk.png"
          alt="VK"
        />
      </a>
      */}

      {/*  Yummly 
      <a
        href="http://www.yummly.com/urb/verify?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://simplesharebuttons.com/images/somacro/yummly.png"
          alt="Yummly"
        />
      </a>
      */}
    </ButtonContainer>
  )
}

export default ShareButton
