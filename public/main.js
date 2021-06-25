//name
var nn = document.getElementById('nn')
var username = document.getElementById('username')
var gname

function usernamevalidate(e) {
    if (e.which == 13) {
        e.preventDefault()
        gname = username.value
        player.name = gname
        username.value = ""
        nn.innerHTML = `
            <h1>Waiting for a queue...</h1>
            <p>Please be patient. </p>
            <p>Also did you know? We automatically focus onto the WPM entry area when the race begins.</p>
        `
        s()
        drawPlayer()
    }
}



//race
const status = document.getElementById('status')
var sw = status.clientWidth
var sh = status.clientHeight 

window.addEventListener('resize', function() {
    sw = status.clientWidth
    sh = status.clientHeight 

    canvas.width = sw
    canvas.height = sh

    for (let i=1; i < 6; i++) {
        createPath(spacing * i)
    }
})

const canvas = document.getElementById('canvas1')
canvas.width = sw
canvas.height = sh
const ctx = canvas.getContext('2d')

//player
var player = {
    name: gname,
    npos: 14,
    x: canvas.width / 6 / 2,
    y: canvas.height-15,
    speed: 5,
    place: null
}

var users = []

var current_places = 1


//check for the placing
function placing(name) {
    if (name == player.name) {
        console.log(name)
        if (player.place == null) {
            console.log('null')
            player.place = current_places
            current_places++
        }
    } else {
        for (let i=0; i < users.length; i++) {
            let a = users[i]

            if (a.place == null) {
                if (a.name == name) {
                    a.place = current_places
                    current_places++
                }
            }
        }
    }
}


function createPath(x) {
    ctx.beginPath()
    ctx.moveTo(x, canvas.height)
    ctx.lineTo(x, 0)
    ctx.stroke()
}

var spacing = canvas.width / 6

function createFinish() {
    ctx.beginPath()
    ctx.setLineDash([5, 15])
    ctx.moveTo(0, 25)
    ctx.lineTo(canvas.width, 25)
    ctx.stroke()
    ctx.setLineDash([])
}

function drawPlayer() {
    ctx.fillStyle = "#c82124"
    ctx.beginPath()
    ctx.arc(player.x, player.y, 10, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = "#000000"
    ctx.font = '12px Verdana'
    ctx.textAlign = "center";
    ctx.fillText(player.name, player.x, player.y - player.npos)
}

function drawOtherPlayers() {
    for (let i=0; i<users.length; i++) {
        let a = users[i]

        ctx.fillStyle = "#FFA500"
        ctx.beginPath()
        ctx.arc(a.x, a.y, 10, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()

        ctx.fillStyle = "#000000"
        ctx.font = '12px Verdana'
        ctx.textAlign = "center";
        ctx.fillText(a.name, a.x, a.y - a.npos)
    }
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function movePlayer() {
    if (player.y <= 15) {
        player.speed = 0
        player.npos = -22
        placing(gname)
    }
    player.y -= player.speed
}

function moveOtherPlayers(name) {
    let ofname
    for (let i=0; i<users.length; i++) {
        let a = users[i]
        if (a.name == name) {
            ofname = a
            break
        }
    }

    if (ofname.y <= 15) {
        ofname.speed = 0
        ofname.npos = -22
        placing(name)
    }
    ofname.y -= ofname.speed
}

function update() {
    document.getElementById('e').focus()
    clear()

    for (let i=1; i < 6; i++) {
        createPath(spacing * i)
    }

    createFinish()

    drawPlayer()   
    drawOtherPlayers()

    requestAnimationFrame(update)  
}


//play again
function playAgain() {
    socket.emit('waiting', gname)


    nn.style.display = 'block'
    ss.style.display = 'none'
    nn.innerHTML = `
            <h1>Waiting for a queue...</h1>
            <p>Please be patient. </p>
            <p>Also did you know? We automatically focus onto the WPM entry area when the race begins.</p>
    `
}



var socket
var vspacing

//socket connection
function s() {
    socket = io()

    socket.on('connected', () => {
        console.log('Connected to the server.')
        socket.emit('user', gname)
        socket.emit('waiting', gname)
    })

    socket.on('alert', (data) => {
        nn.innerHTML = `
            <h1>Found Queue: ${data.id}</h1>
            <p>Please wait for others to join</p>
            <p>Current amount of users connected to this queue: ${data.users}</p>
            <button class='fifth' onclick='fs()'>Force Start</button>
        `
    })


    socket.on('fs', (data) => {
        nn.innerHTML = `
            <h1 id='starting'>Queue Force Started By ${data.name}, Starting Game In 5</h1>    
        `
        var starting = document.getElementById('starting')
        var count = 4
        var countDown = setInterval(function () {
            if (count == 0) {
                
                clearInterval(countDown)

                //set the amount of times needed to move the player
                vspacing = (canvas.height - 30) / data.text.split(' ').length
                player.speed = vspacing

                //set the amount of spacing for each player
                var xspacing = player.x


                nn.innerHTML = "Starting Game..."
                nn.style.display = "none"
                console.log(data.text)
                addText(data.text)
                for (let i=0; i < data.names.length; i++) {
                    let a = data.names[i]
                    if (a == gname) {
                        continue
                    } else {
                        xspacing = xspacing + (player.x  * 2)
                        var userstats = {name: a, x: xspacing, y: canvas.height-15, npos: 14, speed: vspacing}
                        users.push(userstats)
                    }
                }
                update()
            } else {
                starting.innerHTML = `Queue Force Started By ${data.name}, Starting Game In ` + count
                count--
            }
        }, 1000)
    })


    socket.on('startingGame', (data) => {
        nn.innerHTML = `
            <h1 id='starting'>Queue Full, Starting Game In 5</h1>    
        `
        var starting = document.getElementById('starting')
        var count = 4
        var countDown = setInterval(function () {
            if (count == 0) {
                
                clearInterval(countDown)

                //set the amount of times needed to move the player
                vspacing = (canvas.height - 30) / data.text.split(' ').length
                player.speed = vspacing

                //set the amount of spacing for each player
                var xspacing = player.x


                nn.innerHTML = "Starting Game..."
                nn.style.display = "none"
                console.log(data.text)
                addText(data.text)
                for (let i=0; i < data.names.length; i++) {
                    let a = data.names[i]
                    if (a == gname) {
                        continue
                    } else {
                        xspacing = xspacing + (player.x  * 2)
                        var userstats = {name: a, x: xspacing, y: canvas.height-15, npos: 14, speed: vspacing, place: null}
                        users.push(userstats)
                    }
                }

                update()
            } else {
                starting.innerHTML = 'Queue Full, Starting Game In ' + count
                count--
            }
        }, 1000)
    })

    socket.on('playermoved', (data) => {
        if (data == gname) {
            // pass
        } else {
            moveOtherPlayers(data)
        }
    })
}



//onclick event for force start
function fs() {
    socket.emit('fs', gname)
}


//text
var te = document.getElementById('text')

function addText(text) {
    var res = text.split(' ')

    for (let i=0; i<res.length; i++) {
        if (i == 0) {
            var obj = document.createElement('word')
            obj.innerHTML = res[i]
            obj.classList.add('highlighted')
            te.appendChild(obj)

            te.appendChild(document.createTextNode (" "))
        } else {
            var obj = document.createElement('word')
            obj.innerHTML = res[i]
            te.appendChild(obj)

            te.appendChild(document.createTextNode (" "))
        }
    }
}

// validate
var words = document.body.getElementsByTagName("word")
var entry = document.getElementById("e")
var ss = document.getElementById("ss")

// amount of characters in words
// var words_char = 0

// for (let i = 0; i < words.length; i++) {
//     let a = words[i]
//     a = a.innerHTML
//     a = a.length
//     words_char += a
// }

var c_word = 0
var started_timer = false
var time = 0
var words_correct = 0
var words_incorrect = 0
var characters_correct = 0
var characters_incorrect = 0

var word_combined = ""

entry.onkeydown = (e) => {
    if (e.which == 8) {
        word_combined = word_combined.slice(0, -1)
    }
}

function validate(e) {
    word_combined += e.key
    typedkey = e.which

    //valid keys
    var valid = 
        (typedkey > 47 && typedkey < 58)   || // number keys
        (typedkey > 64 && typedkey < 91)   || // letter keys
        (typedkey > 95 && typedkey < 112)  || // numpad keys
        (typedkey > 185 && typedkey < 193) || // ;=,-./` (in order)
        (typedkey > 218 && typedkey < 223)   // [\]' (in order)


    try {
        if (valid) {
            if (!words[c_word].innerHTML.includes(word_combined)) {
                if (!words[c_word].classList.contains('highlighted-wrong')) {
                    words[c_word].classList.add('highlighted-wrong')
                    characters_incorrect++
                }
            } else {
                characters_correct++
                if (words[c_word].classList.contains('highlighted-wrong')) {
                    words[c_word].classList.remove('highlighted-wrong')
                }
            }
        }
    } catch (err) {
        console.log(`Ignored error: ${err}`)
    }

    if (!started_timer) {
        var timer = setInterval(function(){
            time++
        }, 1000)
        started_timer = true
    }

    if (e.which == 32) {
        e.preventDefault()
        socket.emit('moved', gname)
        movePlayer()
        word_combined = ""
        if (entry.value == words[c_word].innerHTML) {
            words[c_word].classList.add("correct")
            words_correct++
        } 
        if (entry.value != words[c_word].innerHTML) {
            if (words[c_word].classList.contains("highlighted-wrong")) {
                words[c_word].classList.remove('highlighted-wrong')
            }
            words[c_word].classList.add("incorrect")
            words_incorrect++
        }
        if (words[c_word].classList.contains('highlighted-wrong')) {
            words[c_word].classList.remove('highlighted-wrong')
        }
        if (c_word == words.length-1) {
            movePlayer()
            socket.emit('moved', gname)
            entry.value = ""
            ss.style.display = "block"
            c_word++
            clearInterval(timer)
            ss.innerHTML += `
            <h2>Placing: #${player.place}</h2>
            <p>Words Typed: ${c_word}</p>
            <p>Accuracy (based on words typed): ${Math.round((words_correct/c_word)*100)}%</p>
            <p>WPM: ${Math.round(((60/time) * c_word)-((60/time) * c_word)*((100 - ((words_correct/words.length)*100)) / 100))}</p>     
            <p>Raw WPM: ${Math.round((60/time) * c_word)}</p>
            <p>Time: ${new Date(time * 1000).toISOString().substr(11, 8)}</p>
            <p>Correct words typed: ${words_correct}</p>
            <p>Incorrect words typed: ${words_incorrect}</p>
            <p>Correct characters typed: ${characters_correct}</p>
            <p>Incorrect characters typed: ${characters_incorrect}</p>
            <button class='fifth' onclick='playAgain()'>Play again</button>
            `
            entry.disabled = true
            socket.emit('gameFinished')
            document.getElementById('text').innerHTML = ''
        } else {
            words[c_word].classList.toggle('highlighted')
            c_word++
            words[c_word].classList.toggle('highlighted')
            entry.value = ""
        }
    }    

    if (e.which == 13 && c_word == words.length-1) {
        if (entry.value == words[c_word].innerHTML) {
            words[c_word].classList.add("correct")
            words_correct++
        } 
        if (entry.value != words[c_word].innerHTML) {
            if (words[c_word].classList.contains("highlighted-wrong")) {
                words[c_word].classList.remove('highlighted-wrong')
            }
            words[c_word].classList.add("incorrect")
            words_incorrect++
        }
        if (words[c_word].classList.contains('highlighted-wrong')) {
            words[c_word].classList.remove('highlighted-wrong')
        }

        movePlayer()
        entry.value = ""
        ss.style.display = "block"
        c_word++
        clearInterval(timer)
        ss.innerHTML += `
        <h2>Placing: 1st place</h2>
        <p>Words Typed: ${c_word}</p>
        <p>Accuracy: ${Math.round((words_correct/words.length)*100)}%</p>
        <p>WPM: ${Math.round(((60/time) * c_word)-((60/time) * c_word)*((100 - ((words_correct/words.length)*100)) / 100))}</p>     
        <p>Raw WPM: ${Math.round((60/time) * c_word)}</p>
        <p>Time: ${new Date(time * 1000).toISOString().substr(11, 8)}</p>
        <p>Correct words typed: ${words_correct}</p>
        <p>Incorrect words typed: ${words_incorrect}</p>
        <p>Correct characters typed: ${characters_correct}</p>
        <p>Incorrect characters typed: ${characters_incorrect}</p>
        `
        entry.disabled = true
    }
}
