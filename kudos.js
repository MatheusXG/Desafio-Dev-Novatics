var extenso = require('extenso')


// Conversão de kudos para pontos
const KUDOS_TO_POINTS = [
  { name: 'OK', value: 5 },
  { name: 'NICE', value: 10 },
  { name: 'GOOD', value: 20 },
  { name: 'GREAT', value: 50 },
  { name: 'SUPER', value: 100 },
];

// Conversão de kudos para reais
const KUDOS_TO_REAL = [
  { name: 'OK', value: 2 },
  { name: 'NICE', value: 5 },
  { name: 'GOOD', value: 8 },
  { name: 'GREAT', value: 15 },
  { name: 'SUPER', value: 25 },
];

/* 
  Recebe: um int representando o número de pontos do usuário
  Retorna: um array contendo os kudos. Ex.: ['OK', 'GOOD'] 
*/
let arrKudo = []
function getKudosForUser(points) {
    arrKudo = []
    KUDOS_TO_POINTS
    for (let index = 4; index >= 0; index--) {
        var total = points - KUDOS_TO_POINTS[index].value
        if (total >= 0) {
            arrKudo.push(KUDOS_TO_POINTS[index].name)
            points = total
            index = 4
        }
    }
    return arrKudo


}
//getKudosForUser(30)


/* 
  Recebe: Recebe um array contendo os nomes dos kudos de um usuário. Ex.: ['OK', 'GOOD']
  Retorna: a mensagem padrão com o valor em reais dos kudos por extenso. Ex.: Parabéns, você ganhou vinte e cinco reais
*/
 function getKudosValueMessageForUser(kudos) {
     KUDOS_TO_REAL.reverse() 
     var dinheiro = 0

     kudos.forEach(element => {
       for (let key in KUDOS_TO_REAL) {
         if (element == KUDOS_TO_REAL[key].name) {
           dinheiro += KUDOS_TO_REAL[key].value
         }
       }
     })
     dinheiro = extenso(dinheiro, { mode: 'number' })
     return `Você recebeu ${dinheiro} reais em retorno aos kudos ${kudos.join(', ')}!`

} 
  
//getKudosValueMessageForUser(arrKudo)


module.exports = {
  getKudosForUser,
  getKudosValueMessageForUser,
};
