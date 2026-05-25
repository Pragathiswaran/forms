import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { authVerification } from './../api/authApi'

const useVerificationForm = () => {
  const mutation = useMutation({
    mutationFn: (otp) => authVerification(otp),
    onSuccess: (value) => { console.log(value.data.message, value.status) },
    onError: (err) => { console.log(err.response.data.message, err.response.status) }
  })

  return mutation
}

export default useVerificationForm