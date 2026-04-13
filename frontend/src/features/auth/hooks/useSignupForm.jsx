import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { authApiSignup } from './../api/authApi'

const useSignupForm = () => {
  const mutation = useMutation({
    mutationFn: ({username, password}) => authApiSignup({username, password}),
    onSuccess: (value) => { console.log(value) },
    onError: (err) => { console.log(err) }
  })

  return mutation
}

export default useSignupForm