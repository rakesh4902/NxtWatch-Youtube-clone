import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import ThemeAndSavedVideosContext from './context/ThemeAndSavedVideosContext'

import './App.css'

class App extends Component {
  state = {
    savedVideos: [],
    activeTab: localStorage.getItem('activeTab') || 'Home',
    isDarkTheme: localStorage.getItem('isDarkTheme') === 'true' || false,
  }

  componentDidMount() {
    // Check if theme is stored in localStorage and set it in state
    const storedTheme = localStorage.getItem('isDarkTheme')
    if (storedTheme !== null) {
      this.setState({isDarkTheme: storedTheme === 'true'})
    }
  }

  onChangeActiveTab = tab => {
    this.setState({activeTab: tab})
    localStorage.setItem('activeTab', tab)
  }

  addVideo = videoDetails => {
    const {savedVideos} = this.state
    const isPresentIndex = savedVideos.findIndex(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (isPresentIndex === -1) {
      this.setState({savedVideos: [...savedVideos, videoDetails]})
    } else {
      savedVideos.splice(isPresentIndex, 1)
      this.setState({savedVideos})
    }
  }

  toggleTheme = () => {
    this.setState(prevState => {
      const {isDarkTheme} = prevState
      const updatedTheme = !isDarkTheme

      localStorage.setItem('isDarkTheme', updatedTheme)

      return {isDarkTheme: updatedTheme}
    })
  }

  render() {
    const {savedVideos, activeTab, isDarkTheme} = this.state
    return (
      <ThemeAndSavedVideosContext.Provider
        value={{
          savedVideos,
          addVideo: this.addVideo,
          activeTab,
          onChangeActiveTab: this.onChangeActiveTab,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndSavedVideosContext.Provider>
    )
  }
}

export default App
