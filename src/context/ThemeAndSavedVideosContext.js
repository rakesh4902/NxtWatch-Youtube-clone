import React from 'react'

const ThemeAndSavedVideosContext = React.createContext({
  savedVideos: [],
  addVideos: () => {},
  activeTab: '',
  onChangeActiveTab: () => {},
  isDarkTheme: '',
  toggleTheme: () => {},
})

export default ThemeAndSavedVideosContext
