import z from 'zod'

const signupValidator = z.object({
    username: z.string()
})