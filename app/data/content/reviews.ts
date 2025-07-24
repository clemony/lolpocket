type UserReviews = ReviewPage[]
type ReviewPage = ReviewItem[]
interface ReviewItem {
  id: number
  name: string
  title: string
  text: string
  location: string
  tip: string
}

export const reviews: UserReviews = [
  [
    {
      id: 112,
      name: 'Viktor',
      title: 'Humanity has stumbled...',
      text: '...but I will catch the fallen, and show them the glory of <u><b>lolpocket</b></u>! Doubt has been purged from me. I did not know true... beauty, until <u>signing up</u>. Without <u>my <b>pocket</b></u>, death would have claimed me. No one need live with doubt anymore. I alone see what must be done. <u><b>Lolpocket</b></u> is the answer.',
      location: 'Viktor, Zaun',
      tip: 'Quote procured through questionable memes.',
    },
    {
      id: 164,
      name: 'Camille',
      title: 'Another step on the march of progress.',
      text: 'Technology and I have a... complicated relationship, <u>but using <b>lolpocket</b> is easy!</u> Progress is served by technology, not controlled by it. Efficiency is paramount to success. <u>With <b>lolpocket</b></u>, I don\'t play the game, I make the rules.',
      location: 'Camille Ferros, Piltover',
      tip: 'Includes minor contextual additions--purely for clarity.',
    },
    {
      id: 50,
      name: 'Swain',
      title: 'A new vantage, is all the advantage I need.',
      text: '<u>Using <b>lolpocket</b></u>, one can read the future in battle lines, assuming one can read. They expect me to play fairly... <u>but with this tool</u>, we aren\'t even playing the same game.',
      location: 'Jericho Swain, Noxus',
      tip: 'Lolpockets makes no claims that these additions are in any way true.',
    },
    {
      id: 910,
      name: 'Hwei',
      title: 'People aren\'t what they say...',
      text: '...but what<u>\'s in their <b>pockets</b></u>. Show me <u>your <b>pockets</b></u>, what you<u>r backpack contains</u>! I\'ll do the same. Keep an open mind, and we\'ll find <u>new builds</u> together. Every <u>set</u> should have meaning. Don\'t deny what I have to show you! What\'s heavy in the mind, becomes light <u>in</u> the <u><b>pocket</b></u>.',
      location: 'Hwei, Ionia',
      tip: 'Artistic liberty was taken when recording this quote.',
    }, // <u>A <b>pocket</b></u> has to be valued, no seconds wasted... Time is ripped away too quickly. A <u>low winrate</u> isn't broken... it's freed.
  ],
  [
    {
      id: 80,
      name: 'Pantheon',
      title: 'I sought power on Targon\'s peak...',
      text: '...only to find it <u>on <b>lolpocket!</b></u> Do not give up! Before you fight, you must rise. <u>After I signed up for <b>lolpocket</b></u>, I cast my excuses into the dirt. You can only defeat yourself.',
      location: 'Pantheon, Mount Targon',
      tip: 'or something like that... I think.',
    },
    {
      id: 7,
      name: 'LeBlanc',
      title: 'I have a plan.',
      text: 'Several hundred of them, <u>in a <b>pocket</b></u>. I took a rabble of barbarians and whispered to them <u>the url of <b>lolpocket</b></u>—and look at them now: insatiable, unstoppable. Moving forward—never back. <u><b>Lolpocket</b> is</u> the answer to every question anyone has ever asked.',
      location: 'Matron LeBlanc, Noxus',
      tip: 'The best lies are beautiful.',
    },
    {
      id: 64,
      name: 'LeeSin',
      title: 'My journey led me here.',
      text: 'You had the confidence, but not the <u><b>pocket</b> to share it with friends</u>. <u>Since signing up,</u> I need no blade to strike down my foes. My <u><b>pockets</b></u> are my weapons.  My <u>build</u> is not yet finished! I return to my meditations. Send me more <u><b>pocket</b> pics</u>. I have yet to unleash all my power.',
      location: 'Lee Sin, Ionia',
      tip: 'Lee Sin was not paid for this quote.',
    },
    {
      id: 33,
      name: 'Rammus',
      title: '...',
      text: '<b><u>Lolpocket</u></b> ok.',
      location: 'Rammus, Shurima',
      tip: 'ok?',
    },
  ],
  [
    {
      id: 81,
      name: 'Ezreal',
      title: 'Who needs a map?',
      text: 'When you\'ve got <u><b>lolpocket</b></u>, there\'s no such thing as a lucky shot. Little piece of advice: If no one tells you something\'s impossible, then it\'s still possible. So go <u>sign up for <b>lolpocket!</b></u>',
      location: 'Ezreal or whatever, Some Random Ruins',
      tip: 'Contact Corporate Mundo\'s legal department with any complaints about the validity of this quote.',
    },
  ],
]

// { id: null, name: "", title: "", text: "", location: "", tip: "" },
