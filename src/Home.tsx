import React from "react"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'

const Home = () => {

  /**
   * loginフォーム用画面遷移
   */
  const loginForm = useNavigate()
  const onLoginForm = () => {
    loginForm('/Login')
  }

  /**
   * passward忘れた場合用画面遷移
   */
  const passwordFrom = useNavigate()
  const onPasswordFrom = () => {
    passwordFrom('/Password')
  }

  /**
   * 新規会員用画面遷移
   */
  const newLoginForm = useNavigate()
  const onNewLoginForm = () => {
    newLoginForm('/NewLogin')
  }

  return (
    <>
      <h1>TODO管理</h1>
      <Button
        variant="contained"
        onClick={onLoginForm}>
        SignUp
      </Button>
      <p onClick={onPasswordFrom}>パスワードを忘れた場合はこちら</p>
      <p onClick={onNewLoginForm}>新規会員登録はこちら</p>
    </>
  )
}
export default Home