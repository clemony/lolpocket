
export function getQuote(){

    return quotes[Math.floor(Math.random() * quotes.length)]

}

export function formattedQuote(){
    let quote = getQuote().replace(/(\s\-)/, '\n$1')
    return quote
}



export const Quotes = [
    '"Braum! What are you doing over there?! Are you drunk?" -Ashe',
    '"So, Braum. No shirt, huh? And I don\'t have pants. Yay, Freljord." -Ashe',
    '"A Crownguard and a mage? Wouldn\'t want to be her." -Sona',
    '"Sylas? He hasn\'t changed. And my answer is still no." -Sona',
    "\"It's good to see Taric hasn't changed. And bad. It's both.\" -Sona",
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
]

let quotes = Quotes
