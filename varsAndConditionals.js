let johnSnowAttack = 25
let jamieLannisterAttack = 35

if (johnSnowAttack > jamieLannisterAttack){
    console.log("John Snow has better ttack than Jamie Lannister")
}else if (johnSnowAttack === jamieLannisterAttack){
    console.log("John Snow and Jamie Lannister have the same attack")
}else {
    console.log("Jamie Lannister has better attack than John Snow")
}

let johnSnowHealth = 100
let johnSnowDefence = 0

if (johnSnowHealth <= jamieLannisterAttack) {
    console.log("John Snow has been slain")
} else {
   // johnSnowHealth -= jamieLannisterAttack
   johnSnowHealth = johnSnowHealth - jamieLannisterAttack
   console.log(`John Snow's health is down to ${johnSnowHealth}`)
}

johnSnowDefence += 25

if (johnSnowHealth <= jamieLannisterAttack - johnSnowDefence){
    console.log('John Snow has been slain')
}else {
    johnSnowHealth -= (jamieLannisterAttack - johnSnowDefence)
    console.log(`John Snow's health is down to ${johnSnowHealth}`)
}

if((johnSnowHealth + 50) >= 100) {
    johnSnowHealth = 100
} else {
    johnSnowHealth += 50
}

let coinLandsHeads = false

// if (coinLandsHeads === true) {
//     console.log("The fight continues")
// } else {
//     console.log("John is allowed to run away")
// }

if (coinLandsHeads !== false) {
    console.log("The fight continues!")
} else {
    console.log("John is allowed to run away")
}

// for (let i = 0; i < 5; i++){
//     if (johnSnowHealth <= 0){
//         consolee.log("John Snow has been slain.")
//     } else {
//         johnSnowHealth -= (jamieLannisterAttack - johnSnowDefence)
//         console.log(`John Snow's health is ${johnSnowHealth}`)
//     }
// }

while(johnSnowHealth > 0){
    johnSnowHealth -= (jamieLannisterAttack - johnSnowDefence)
    console.log(`John Snow's health is ${johnSnowHealth}`)
    if(johnSnowHealth <= 0){
        console.log('John Snow has been slain')
    }
}

let backpack = []

backpack.push("sword")
backpack.push("shield")
backpack.push("food")

console.log(backpack)

backpack.splice(0, 1)

//["sword", "shield", "food"]
//    0        1         2

let furCoat = "fur coat"

backpack.push(furCoat)

console.log(backpack)

backpack.pop()

let itemCount = backpack.length

backpack.push("flint", "blanket", "knife", "toothbrush")

var backpack2 = backpack.splice(2, 5)

console.log(backpack2[0])

for (let i = 0; i < backpack.length; i++){
    console.log(backpack[1])
}

for (let i = 0; i < backpack2.length; i++){
    console.log(backpack2[1])

}
for (let i = 0; i < 3; i++){
    console.log(backpack2[1])
}

if (backpack.length >= 3) {
    for (let i = 0; i < 3; i++){
        console.log(backpack2[1])
    }  
}else {
    for (let i = 0; i< backpack.length; i++){
        console.log(backpack[i])
    }
}

let guessMe = 54

while (guessMe < 100){
    console.log("------------")
    if (guessMe % 4 == 0 || guessMe % 5 == 0){
        console.log('guessMe is divisible by 4 or 5. Added 25.')
        guessMe += 25
    } else if (guessMe % 3 == 0){
        console.lof('guessMe is divisible by 3. Subtracted.')
        guessMe -= 27
    }
    else {
        console.log('added 3.')
        guessMe += 3
    }
    guessMe += 22
    console.log('guessMe is now ${guessMe}.')
}
