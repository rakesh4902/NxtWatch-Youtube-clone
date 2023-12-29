import {
  FailedView,
  FailedImage,
  FailedHeading,
  FailedNote,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  const failureImageUrl =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

  return (
    <FailedView>
      <FailedImage src={failureImageUrl} alt="failure view" />
      <FailedHeading>Oops! Something Went Wrong</FailedHeading>
      <FailedNote>
        We are having some trouble to complete your request. Please try again.
      </FailedNote>
      <RetryButton type="button" onClick={onClickRetry}>
        Retry
      </RetryButton>
    </FailedView>
  )
}

export default FailureView
