// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, onSelectTab} = props
  const {tabId, displayText} = tabsList
  const onChooseTab = () => onSelectTab(tabId)
  return (
    <li className="tabItems-list">
      <button type="button" className="buttons" onClick={onChooseTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
