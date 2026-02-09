import * as v from 'valibot'

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

export const reportSchema = v.pipe(
  v.object({
  reporterUid: v.fallback(v.string(), ''),
  //
  options: v.pipe(
    v.array(
      v.pipe(
        v.string(),
        v.minLength(3, 'Please length 3+ characters. You can succeed.')
      )
    ),
    v.minLength(1, 'At least one report reason is required.')
  ),

  //
  comment: v.object({
    author_id: v.pipe(v.string(), v.uuid()),
    comment_id: v.pipe(v.string(), v.uuid()),
    reporter_id: v.pipe(v.string(), v.uuid()),
    content_text: v.optional(
      v.pipe(v.string(), v.minLength(1, 'Comment content cannot be empty.'))
    ),
    created: v.pipe(v.string(), v.isoTimestamp('incorrect date format')),
  }),
  //
  message: v.optional(v.string()),
  }),
  v.forward(
    v.partialCheck(
      [['options'], ['message']],
      input => input.options?.includes('other') && !input.message?.trim(),
      'Please provide a brief description.'
    ),
    ['message']
  )
)
