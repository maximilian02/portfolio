type Props = {
  children?: React.ReactNode
}
const HighlightText: React.FC<Props> = ({ children }) =>
  <>
    <span className="highlight-container"><span className="highlight">{children}</span></span>
  </>



export default HighlightText
