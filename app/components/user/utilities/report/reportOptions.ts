import type { FieldOption } from '~~/shared/types/types.form'
import OffensiveName from '~/components/user/utilities/report/OffensiveName.vue'

export const reportOptions: FieldOption[] = [
  {
    id: 'abuse',
    name: 'Chat Abuse',
    description: [
      'Harassment, offensive language, threats, and other negative and disruptive communication.',
    ],
  },
  {
    id: 'offensiveName',
    name: 'Offensive or Inappropriate Name',
    component: OffensiveName,
  },
  {
    id: 'spam',
    name: 'Spam / Promotional Content',
    description: [
      'Blatant and/or repeated low quality posts. Can include links to unrelated content or unwarranted self promotion that does not add context or depth.',
    ],
  },
  {
    id: 'other',
    name: 'Other',
  },
]
