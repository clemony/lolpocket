export function removeChamp(champ, pocket) {
  console.log('💠 - removeChamp - pocket:', pocket)
  const find = pocket.champions.children.findIndex(c => c == champ)
  console.log('💠 - removeChamp - find:', find)

  if (find != -1) {
    pocket.champions.children.splice(find, 1)
  }
}

export function formattedQuote() {
  const quote = getQuote().replace(/( -)/, '\n$1')
  return quote
}

export const quotes = [
  '<p>"Braum! What are you doing over there?! Are you drunk?"</p><p>-Ashe</p>',
  '<p>"So, Braum. No shirt, huh? And I don\'t have pants. Yay, Freljord."</p><p>-Ashe</p>',
  '<p>"A Crownguard and a mage? Wouldn\'t want to be her."</p><p>-Sona</p>',
  '<p>"Sylas? He hasn\'t changed. And my answer is still no."</p><p>-Sona</p>',
  '\<p>"It\'s good to see Taric hasn\'t changed. And bad. It\'s both."</p><p>-Sona</p>',
  '<p>"Stay positive."</p><p>-Lux</p>',
  '<p>"Kat and Garen sitting in a tree~ And you better just be holding hands or I\'m telling!"</p><p>-Lux</p>',
  '<p>"I\'m sure your wife forgives you for getting her soul taken by a remorseless creature of darkness!"</p><p>-Lux</p>',
  '<p>"Ok."</p><p>-Rammus</p>',
  '<p>"The darker the night, the brighter the stars"</p><p>-Braum</p>',
  '<p>"I envy silence, for I must be loud!"</p><p>-Jhin</p>',
  'I fought a house once. I\'m pretty sure I won." -Galio',
  '<p>"Only two jokers in the deck and I get dealt you."</p><p>-Twisted Fate</p>',
  '<p>"Beauty fades. That is why it is beautiful."</p><p>-Kindred</p>',
  '<p>"When I look to the mountain\'s peak, in my mind, I have already fallen. And so, I climb."</p><p>-Pantheon</p>',
  '<p>"Just leave everything to me. As usual."</p><p>-Orrn</p>',
  '<p>"I\'m used to this level of disappointment."</p><p>-Orrn</p>',
  '<p>"I\'m not your enemy, I am THE ENEMY"</p><p>- Aa\'Trox</p>',
  '<p>"You can sit on a throne, that doesn\'t make you a ruler. It only means you have an arse."</p><p>-Swain</p>',
  '<p>"THE DAYLIGHT, IT BURNS"</p><p>-Cho\'Gath</p>',
  '<p>"The only drinking problem I have is when I spill it"</p><p>-Gragas</p>',
  '<p>"Time flies like an arrow, fruit flies like banana"</p><p>-Zilean</p>',
  '<p>"Put it on my tab, the names \'Pantheon\',with a P..."</p><p>-Aurelion Sol</p>',
  '<p>"You even die ugly"</p><p>-Qiyana</p>',
  '<p>"Caught between a rock... and a hard place."</p><p>-Malphite</p>',
  '<p>"Same hat? Same hat."</p><p>-Aurora (to Lulu)</p>',
  '<p>"Toe beans!"</p><p>-Aurora (to Yuumi)</p>',
  '<p>"I am evil! Stop laughing!"</p><p>-Veigar</p>',
  '<p>"Who\'s ready to risk our lives, defeat our foes, and maybe knock over some cups?"</p><p>-Yuumi</p>',
  '<p>"Keep an eye out for red dot, Book! It\'s gotta be here somewhere."</p><p>-Yuumi</p>',
  '<p>"Wow, so you\'re in charge of the giant litter box, huh, bird guy?"</p><p>-Yuumi (to Azir)</p>',
  '<p>"Oh, so you\'re Xayah\'s pet!"</p><p>-Yuumi (to Rakan)</p>',
  '<p>"The red... dot... belongs to you?!"</p><p>-Yuumi (to Viktor)</p>',
  '<p>"Pretty face... Shame if someone stuck a harpoon in it."</p><p>-Pyke (to Ezreal)</p>',
  '<p><i>Sion yells.</i></p><p>-Sion</p>',
  '<p>"Ugh, Jhin. What a drama queen."</p><p>-Akali</p>',
  '<p>"Kayn. Why are the hot ones always crazy...?"</p><p>-Akali</p>',
  '<p>"Jinx... Sketchy tats and certifiable. It\'s just sad."</p><p>-Akali</p>',
  '<p>"You know, we\'ve never met, but you seem really annoying."</p><p>-Akali (to Zoe)</p>',
  '<p>"Who needs a map?"</p><p>-Ezreal</p>',
  '<p>"I\'m a mage. You\'re a mage. I\'m blond. You\'re blonde. Doesn\'t it feel like we\'re made for each other?"</p><p>-Ezreal (to Lux)</p>',
  '<p>"It is not why I fight, but who I fight for."</p><p>-Pantheon</p>',
  '<p>"This is a fun game." </p><p>-Orianna</p>',
  '<p>"When you fall, you get right back up."</p><p>-Orianna</p>',
  '<p>"I have fur. It is soft. Do not hug me."</p><p>-Orianna</p>',
  '<p>"If all goes well, our paths will never cross again. It never goes well."</p><p>-Ornn</p>',
  '<p>"I made this hammer. It was so good I named it... \'Hammer.\'"</p><p>-Ornn</p>',
  '<p>"I will go over there. It looks quiet. It will be nice."</p><p>-Ornn</p>',
  '<p>"I am going this way. Do not follow me. Please."</p><p>-Ornn</p>',
  '<p>"Bah, look at all these lazy trees."</p><p>-Ornn</p>',
  '<p>"I do not need company; only a wall, to keep out company."</p><p>-Ornn</p>',
  '<p>"I will make an axe that is also a sword... and possibly a spoon."</p><p>-Ornn</p>',
  '<p>"Solitude always meets my expectations."</p><p>-Ornn</p>',
  '<p>"I do not care at all."</p><p>-Ornn</p>',
  '<p>"I don\'t know what you do and I don\'t care."</p><p>-Ornn</p>',
  '<p>"I now like you less. I did not think that was possible."</p><p>-Ornn</p>',
  '<p>"No."</p><p>-Ornn</p>',
]

export function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
