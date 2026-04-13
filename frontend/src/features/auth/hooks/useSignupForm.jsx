import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { authApiSignup } from './../api/authApi'

const useSignupForm = () => {
  const mutation = useMutation({
    mutationFn: ({username, email, password}) => authApiSignup({username, email, password}),
    onSuccess: (value) => { console.log(value) },
    onError: (err) => { console.log(err) }
  })

  return mutation
}

export default useSignupForm