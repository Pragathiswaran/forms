import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { authApiForgetPassword } from './../api/authApi'

const useForgetPasswordForm = () => {
  const mutation = useMutation({
    mutationFn: (email) => authApiForgetPassword(email),
    onSuccess: (value) => { console.log(value.data.message, value.status) },
    onError: (err) => { console.log(err.response.data.message, err.response.status) }
  })

  return mutation
}

export default useForgetPasswordForm