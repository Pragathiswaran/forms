import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { authApiLogin } from './../api/authApi'

const useLoginForm = () => {
  const mutation = useMutation({
    mutationFn: authApiLogin(username, password),
    onSuccess: (value) => {
      console.log(value)
    }
  })
}

return(
  <></>
)

export default useLoginForm