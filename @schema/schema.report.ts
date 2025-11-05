import type { InferOutput } from 'valibot'
import { OffensiveName } from '#components'
import * as v from 'valibot'

export const reportOptions: FieldOption[] = [
  {
    id: 'abuse',
    name: 'Verbal Abuse',
    description: ['Harassment, offensive language, threats, and other negative and disruptive communication.']
  },
  {
    id: 'offensiveName',
    name: 'Offensive or Inappropriate Name',
    component: OffensiveName,
  },
  {
    id: 'spam',
    name: 'Spam / Promotional Content',
    description: ['Blatant and/or repeated low quality posts. Can include links to unrelated content or unwarranted self promotion that does not add context or depth.']
  },
  {
    id: 'other',
    name: 'Other',
  }
]

const RegisterSchema = v.pipe(
  v.object({
    email: v.pipe(
      v.string(),
      v.nonEmpty('Please enter your email.'),
      v.email('The email address is badly formatted.')
    ),
    password1: v.pipe(
      v.string(),
      v.nonEmpty('Please enter your password.'),
      v.minLength(8, 'Your password must have 8 characters or more.')
    ),
    password2: v.string(),
  }),
  /*  v.forward(
    v.partialCheck(
      [['password1'], ['password2']],
      input => input.password1 === input.password2,
      'The two passwords do not match.'
    ),
    ['password2']
  ) */
)

/*
  v.forward(
    v.partialCheck(
      [['checkbox'], ['reason']],
      input => input.checkbox === true,
      'Please provide a brief description.'
    ),
    ['reason']
  ) */

const customOptionSchema = v.pipe(
  v.object({
    checkbox: v.boolean(),
    reason: v.optional(v.string()),
  }),
  v.forward(
    v.partialCheck(
      [['checkbox'], ['reason']],
      input => input.checkbox && !input.reason?.trim(),
      'Please provide a brief description.'
    ),
    ['reason']
  ),
  v.transform((input) => {
    return input.checkbox && input.reason ? input.reason.trim() : null
  })
)

export const reportSchema = v.object({
  reporterUid: v.fallback(v.string(), ''),
  //
  options: v.pipe(
    v.array(
      v.pipe(v.string(), v.minLength(3, 'Please length 3. You can succeed.'))
    ),
    v.minLength(1, 'At least one report reason is required.'),
  ),

  //
  comment: v.object({
    id: v.string(),
    authorName: v.string(),
    contentText: v.optional(
      v.pipe(v.string(), v.minLength(1, 'Comment content cannot be empty.'))
    ),
    createdAt: v.string()
  }),
  //
  message: v.optional(v.string())
})
export type ReportSchema = v.InferOutput<typeof reportSchema>