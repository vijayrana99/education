import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../lib/prisma'
import { config } from '../lib/config'
import { ApiError } from '../middlewares/errorHandler.middleware'

export interface LoginInput {
  email: string
  password: string
}

export async function login(input: LoginInput) {
  const user = await prisma.user.findUnique({
    where: { email: input.email },
  })

  if (!user) {
    throw new ApiError('UNAUTHORIZED', 'Invalid email or password', 401)
  }

  const isPasswordValid = await compare(input.password, user.passwordHash)

  if (!isPasswordValid) {
    throw new ApiError('UNAUTHORIZED', 'Invalid email or password', 401)
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    config.jwtSecret,
    { expiresIn: '7d' }
  )

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
  }
}

export async function getMe(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      createdAt: true,
    },
  })

  if (!user) {
    throw new ApiError('NOT_FOUND', 'User not found', 404)
  }

  return user
}
