import './style/LoginButton.css'

export default function LoginButton({ displayText, look }) {
  return (
    <>
    <button className={look}>{displayText}</button>
    </>
  )
}