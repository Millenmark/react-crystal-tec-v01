import React from 'react'
import { MessengerChat } from 'react-messenger-chat-plugin'

const Messenger = () => {
  return (
    <>
    <MessengerChat
    pageId="111303801868178"
    language="sv_SE"
    themeColor={"#000000"}
    bottomSpacing={300}
    loggedInGreeting="loggedInGreeting"
    loggedOutGreeting="loggedOutGreeting"
    greetingDialogDisplay={"show"}
    debugMode={true}
    />
    </>
  )
}

export default Messenger