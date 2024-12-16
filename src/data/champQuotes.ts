
export function getQuote(){

    return quotes[Math.floor(Math.random() * quotes.length)]

}

export function formattedQuote(){
    let quote = getQuote().replace(/( \-)/, '\n$1')
return quote
}



export const Quotes = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
    '<p>"Braum! What are you doing over there?! Are you drunk?"</p><p>-Ashe</p>',
    '<p>"So, Braum. No shirt, huh? And I don\'t have pants. Yay, Freljord."</p><p>-Ashe</p>',
    '<p>"A Crownguard and a mage? Wouldn\'t want to be her."</p><p>-Sona</p>',
    '<p>"Sylas? He hasn\'t changed. And my answer is still no."</p><p>-Sona</p>',
    '\<p>"It\'s good to see Taric hasn\'t changed. And bad. It\'s both.\"</p><p>-Sona</p>',
    '<p>"Stay positive."</p><p>-Lux</p>',
    '<p>"Kat and Garen sitting in a tree~ And you better just be holding hands or I\'m telling!"</p><p>-Lux</p>',
    '<p>"I\'m sure your wife forgives you for getting her soul taken by a remorseless creature of darkness!"</p><p>-Lux</p>',
    '<p>"Ok."</p><p>-Rammus</p>',
    '<p>"The darker the night, the brighter the stars"</p><p>-Braum</p>',
    '<p>"I envy silence, for I must be loud!"</p><p>-Jhin</p>',
<<<<<<< HEAD
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
=======
    '"Braum! What are you doing over there?! Are you drunk?" -Ashe',
    '"So, Braum. No shirt, huh? And I don\'t have pants. Yay, Freljord." -Ashe',
    '"A Crownguard and a mage? Wouldn\'t want to be her." -Sona',
    '"Sylas? He hasn\'t changed. And my answer is still no." -Sona',
    '\"It\'s good to see Taric hasn\'t changed. And bad. It\'s both.\" -Sona',
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
    '"I\'m not your enemy, I am THE ENEMY" - Aa\'Trox',
    '"You can sit on a throne, that doesn\'t make you a ruler. It only means you have an arse." -Swain',
    '"THE DAYLIGHT, IT BURNS" -Cho\'Gath',
    '"The only drinking problem I have is when I spill it" -Gragas',
    '"Time flies like an arrow, fruit flies like banana" -Zilean',
    '"Put it on my tab, the names \'Pantheon\',with a P..." -Aurelion Sol',
    '"You even die ugly" -Qiyana',
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
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
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
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
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
]

let quotes = Quotes
