<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const { as = 'span', class: className } = defineProps<PrimitiveProps & {
  as?: string
  class?: HTMLAttributes['class']
}>()

const quotes = [
  '"Braum! What are you doing over there?! Are you drunk?" -Ashe',
  '"So, Braum. No shirt, huh? And I don\'t have pants. Yay, Freljord." -Ashe',
  '"A Crownguard and a mage? Wouldn\'t want to be her." -Sona',
  '"Sylas? He hasn\'t changed. And my answer is still no." -Sona',
  '\"It\'s good to see Taric hasn\'t changed. And bad. It\'s both." -Sona',
  '"Stay positive." -Lux',
  '"Kat and Garen sitting in a tree~ And you better just be holding hands or I\'m telling!" -Lux',
  '"I\'m sure your wife forgives you for getting her soul taken by a remorseless creature of darkness!" -Lux',
  '"Ok." -Rammus',
  '"The darker the night, the brighter the stars" -Braum',
  '"I envy silence, for I must be loud!" -Jhin',
  'I fought a house once. I\'m pretty sure I won." -Galio',
  '"Only two jokers in the deck and I get dealt you." -Twisted Fate',
  '"Beauty fades. That is why it is beautiful." -Kindred',
  '"When I look to the mountain\'s peak, in my mind, I have already fallen. And so, I climb." -Pantheon',
  '"Just leave everything to me. As usual." -Orrn',
  '"I\'m used to this level of disappointment." -Orrn',
  '"I\'m not your enemy, I am THE ENEMY" -Aa\'Trox',
  '"You can sit on a throne, that doesn\'t make you a ruler. It only means you have an arse." -Swain',
  '"THE DAYLIGHT, IT BURNS" -Cho\'Gath',
  '"The only drinking problem I have is when I spill it" -Gragas',
  '"Time flies like an arrow, fruit flies like banana" -Zilean',
  '"Put it on my tab, the names \'Pantheon\',with a P..." -Aurelion Sol',
  '"You even die ugly" -Qiyana',
  '"Caught between a rock... and a hard place." -Malphite',
  '"Same hat? Same hat." -Aurora, to Lulu',
  '"Toe beans!" -Aurora, to Yuumi',
  '"I am evil! Stop laughing!" -Veigar',
  '"Who\'s ready to risk our lives, defeat our foes, and maybe knock over some cups?" -Yuumi',
  '"Keep an eye out for red dot, Book! It\'s gotta be here somewhere." -Yuumi',
  '"Wow, so you\'re in charge of the giant litter box, huh, bird guy?" -Yuumi, to Azir',
  '"Oh, so you\'re Xayah\'s pet!" -Yuumi (to Rakan)',
  '"The red... dot... belongs to you?!" -Yuumi, to Viktor',
  '"Pretty face... Shame if someone stuck a harpoon in it." -Pyke (to Ezreal)',
  'Sion yells. -Sion',
  '"Ugh, Jhin. What a drama queen." -Akali',
  '"Kayn. Why are the hot ones always crazy...?" -Akali',
  '"Jinx... Sketchy tats and certifiable. It\'s just sad." -Akali',
  '"You know, we\'ve never met, but you seem really annoying." -Akali, to Zoe',
  '"Who needs a map?" -Ezreal',
  '"I\'m a mage. You\'re a mage. I\'m blond. You\'re blonde. Doesn\'t it feel like we\'re made for each other?" -Ezreal, to Lux',
  '"It is not why I fight, but who I fight for." -Pantheon',
  '"This is a fun game." -Orianna',
  '"When you fall, you get right back up." -Orianna',
  '"I have fur. It is soft. Do not hug me." -Orianna',
  '"If all goes well, our paths will never cross again. It never goes well." -Ornn',
  '"I made this hammer. It was so good I named it... \'Hammer.\'" -Ornn',
  '"I will go over there. It looks quiet. It will be nice." -Ornn',
  '"I am going this way. Do not follow me. Please." -Ornn',
  '"Bah, look at all these lazy trees." -Ornn',
  '"I do not need company; only a wall, to keep out company." -Ornn',
  '"I will make an axe that is also a sword... and possibly a spoon." -Ornn',
  '"Solitude always meets my expectations." -Ornn',
  '"I do not care at all." -Ornn',
  '"I don\'t know what you do and I don\'t care." -Ornn',
  '"I now like you less. I did not think that was possible." -Ornn',
  '"No." -Ornn',
  '"In carnage, I bloom, like a flower in the dawn." -Jhin',
  '"I am pure. My work is pure." -Jhin',
  '"They\'re puppets. I pull their strings, and then they dance." -Jhin',
  '"Your music lacks the cruelty of a masterpiece." -Jhin, to Sona',
  '"Oh, before you ask, yes, your whole ensemble makes you look fat. Very fat." -Jhin, to Tahm Kench',
  '"When you speak, I don\'t hear god, I hear an idiot babbling." -Jhin, to Illaoi',
  '"Is a leaf\'s only purpose to fall?" -Yasuo',
  '"A wanderer isn\'t always lost." -Yasuo',
  '"Cute mask. Your, uh, mom sew that?" -Yasuo, to Shen',
]

const quote = ref(null)
onMounted (async () => {
  quote.value = getRandom(quotes)
})
</script>

<template>
  <Primitive
    v-bind="$attrs"
    :as="as"
    :class="cn('', className)">
    {{ quote }}
  </Primitive>
</template>