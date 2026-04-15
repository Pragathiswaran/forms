import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { authApiLogin } from './../api/authApi'

const useLoginForm = () => {
  const mutation = useMutation({
    mutationFn: ({username, password}) => authApiLogin({username, password}),
    onSuccess: (value) => { console.log(value) },
    onError: (err) => { console.log(err) }
  })

  return mutation
}

export default useLoginForm