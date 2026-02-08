import { contactInfo } from '../contact/contactInfo'

/* Last Updated: {{insert date}}
Effective Date: {{insert date}} */
export interface PolicyItem {
  title?: string
  description?: string[]
  sections?: PolicyItem[]
}

export const privacyPolicy: PolicyItem[] = [
  {
    title: 'Overview',
    description: [
      'lolpocket (“we,” “our,” “us”) is a League of Legends companion platform that lets players share content, connect, and track performance. We value privacy and aim to collect only the data needed to make the app function and improve your experience.',
    ],
  },
  {
    title: 'Authentication & Identity',
    sections: [
      {
        title:
          'We use third-party authentication providers for all account creation and login:',
        description: ['Google', 'Discord', 'Riot Games', 'Supabase Auth'],
      },
      {
        title:
          'These providers handle your credentials directly. lolpocket never stores or processes your passwords.',
      },
      {
        title: 'When you log in, we receive only basic identity data:',
        description: [
          'Unique user ID',
          'Display name / username',
          'Email address (if shared)',
          'Profile picture (if shared)',
        ],
      },
      {
        title:
          'You can revoke access or remove permissions through your provider at any time.',
      },
    ],
  },
  {
    title: 'Data We Collect',
    sections: [
      {
        title:
          'We only collect the minimum data required to operate core features.',
        sections: [
          {
            title: 'a. Player Data',
            description: [
              'Summoner information retrieved from Riot’s public API (name, region, rank, match stats).',
              'League-specific metadata such as champion preferences or rune usage.',
            ],
          },
          {
            title: 'b. User-Generated Content',
            description: [
              'Posts, comments, likes, and messages created on lolpocket.',
              'Uploaded images or attachments (subject to moderation rules).',
            ],
          },
          {
            title: 'c. Technical Data',
            description: [
              'Device type, browser version, and usage logs (for debugging and analytics).',
              'Optional cookies/local storage for keeping you logged in or saving settings.',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'How We Use Data',
    sections: [
      {
        title: 'Your data is used to:',
        description: [
          'Display your player profile, match data, and achievements.',
          'Enable social interactions like posts, likes, and comments.',
          'Improve app performance, layout, and community moderation.',
          'Detect spam, abuse, or other policy violations.',
        ],
      },
      { title: 'We do not sell or rent your personal data to anyone.' },
    ],
  },
  {
    title: 'Data Sharing',
    sections: [
      {
        title: 'We may share limited data only when necessary:',
        description: [
          'Riot API: To fetch and verify League account data.',
          'Supabase: For database, authentication, and file storage.',
          'Analytics (optional): Anonymous metrics to improve user experience.',
        ],
      },
      {
        title:
          'All partners comply with data protection laws and operate under their own privacy terms.',
      },
    ],
  },
  {
    title: 'Data Retention',
    sections: [
      {
        description: [
          'We retain data as long as your account remains active.',
          'If you delete your account, your personal data and content are permanently deleted within 30 days, except where required for legal, moderation, or system integrity reasons.',
        ],
      },
    ],
  },

  {
    title: 'Your Rights',
    sections: [
      {
        title: 'You can:',
        description: [
          'Request a copy of your stored data.',
          'Request deletion of your account and all personal information.',
          'Opt out of analytics or communications.',
        ],
      },
      {
        title: `To make a request, contact: <a class="cursor-help hover:underline font-semibold ">${contactInfo.privacy.to}</a>`,
      },
    ],
  },
  {
    title: 'Security',
    sections: [
      {
        description: [
          'We use Supabase’s secure storage and database encryption to protect your data in transit and at rest.',
          'No system is immune to risk, but we actively monitor and patch vulnerabilities to minimize exposure.',
        ],
      },
    ],
  },
  {
    title: 'Updates',
    sections: [
      {
        description: [
          'We may occasionally update this policy to reflect new features or regulations.',
          'Material changes will be posted in-app and require consent before continuing use.',
        ],
      },
    ],
  },
]
