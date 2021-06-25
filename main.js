// LIST OF WORDS :P
var words = ["a","ability","able","about","above","accept","according",
            "account","across","act","action","activity","actually","add",
            "address","administration","admit","adult","affect","after",
            "again","against","age","agency","agent","ago","agree","agreement",
            "ahead","air","all","allow","almost","alone","along","already","also",
            "although","always","American","among","amount","analysis","and",
            "animal","another","answer","any","anyone","anything","appear","apply",
            "approach","area","argue","arm","around","arrive","art","article",
            "artist","as","ask","assume","at","attack","attention","attorney",
            "audience","author","authority","available","avoid","away","baby",
            "back","bad","bag","ball","bank","bar","base","be","beat","beautiful",
            "because","become","bed","before","begin","behavior","behind",
            "believe","benefit","best","better","between","beyond","big","bill",
            "billion","bit","black","blood","blue","board","body","book","born",
            "both","box","boy","break","bring","brother","budget","build","building",
            "business","but","buy","by","call","camera","campaign","can","cancer",
            "candidate","capital","car","card","care","career","carry","case","catch",
            "cause","cell","center","central","century","certain","certainly","chair",
            "challenge","chance","change","character","charge","check","child","choice",
            "choose","church","citizen","city","civil","claim","class","clear","clearly",
            "close","coach","cold","collection","college","color","come","commercial",
            "common","community","company","compare","computer","concern","condition",
            "conference","Congress","consider","consumer","contain","continue","control",
            "cost","could","country","couple","course","court","cover","create","crime",
            "cultural","culture","cup","current","customer","cut","dark","data",
            "daughter","day","dead","deal","death","debate","decade","decide",
            "decision","deep","defense","degree","Democrat","democratic","describe",
            "design","despite","detail","determine","develop","development","die",
            "difference","different","difficult","dinner","direction","director",
            "discover","discuss","discussion","disease","do","doctor","dog","door",
            "down","draw","dream","drive","drop","drug","during","each","early","east",
            "easy","eat","economic","economy","edge","education","effect","effort",
            "eight","either","election","else","employee","end","energy","enjoy",
            "enough","enter","entire","environment","environmental","especially",
            "establish","even","evening","event","ever","every","everybody","everyone",
            "everything","evidence","exactly","example","executive","exist","expect",
            "experience","expert","explain","eye","face","fact","factor","fail","fall",
            "family","far","fast","father","fear","federal","feel","feeling","few",
            "field","fight","figure","fill","film","final","finally","financial","find",
            "fine","finger","finish","fire","firm","first","fish","five","floor","fly",
            "focus","follow","food","foot","for","force","foreign","forget","form",
            "former","forward","four","free","friend","from","front","full","fund",
            "future","game","garden","gas","general","generation","get","girl","give",
            "glass","go","goal","good","government","great","green","ground","group",
            "grow","growth","guess","gun","guy","hair","half","hand","hang","happen",
            "happy","hard","have","he","head","health","hear","heart","heat","heavy",
            "help","her","here","herself","high","him","himself","his","history","hit",
            "hold","home","hope","hospital","hot","hotel","hour","house","how","however",
            "huge","human","hundred","husband","I","idea","identify","if","image",
            "imagine","impact","important","improve","in","include","including",
            "increase","indeed","indicate","individual","industry","information",
            "inside","instead","institution","interest","interesting","international",
            "interview","into","investment","involve","issue","it","item","its",
            "itself","job","join","just","keep","key","kid","kill","kind","kitchen",
            "know","knowledge","land","language","large","last","late","later",
            "laugh","law","lawyer","lay","lead","leader","learn","least","leave",
            "left","leg","legal","less","let","letter","level","lie","life","light",
            "like","likely","line","list","listen","little","live","local","long",
            "look","lose","loss","lot","love","low","machine","magazine","main",
            "maintain","major","majority","make","man","manage","management",
            "manager","many","market","marriage","material","matter","may",
            "maybe","me","mean","measure","media","medical","meet","meeting",
            "member","memory","mention","message","method","middle","might",
            "military","million","mind","minute","miss","mission","model","modern",
            "moment","money","month","more","morning","most","mother","mouth",
            "move","movement","movie","Mr","Mrs","much","music","must","my",
            "myself","name","nation","national","natural","nature","near","nearly",
            "necessary","need","network","never","new","news","newspaper","next",
            "nice","night","no","none","nor","north","not","note","nothing",
            "notice","now","n't","number","occur","of","off","offer","office",
            "officer","official","often","oh","oil","ok","old","on","once","one",
            "only","onto","open","operation","opportunity","option","or",
            "order","organization","other","others","our","out","outside",
            "over","own","owner","page","pain","painting","paper","parent",
            "part","participant","particular","particularly","partner","party",
            "pass","past","patient","pattern","pay","peace","people","per",
            "perform","performance","perhaps","period","person","personal",
            "phone","physical","pick","picture","piece","place","plan","plant",
            "play","player","PM","point","police","policy","political","politics",
            "poor","popular","population","position","positive","possible",
            "power","practice","prepare","present","president","pressure","pretty",
            "prevent","price","private","probably","problem","process","produce",
            "product","production","professional","professor","program","project",
            "property","protect","prove","provide","public","pull","purpose",
            "push","put","quality","question","quickly","quite","race","radio",
            "raise","range","rate","rather","reach","read","ready","real","reality",
            "realize","really","reason","receive","recent","recently","recognize",
            "record","red","reduce","reflect","region","relate","relationship",
            "religious","remain","remember","remove","report","represent",
            "Republican","require","research","resource","respond","response",
            "responsibility","rest","result","return","reveal","rich","right",
            "rise","risk","road","rock","role","room","rule","run","safe","same",
            "save","say","scene","school","science","scientist","score","sea",
            "season","seat","second","section","security","see","seek","seem",
            "sell","send","senior","sense","series","serious","serve","service",
            "set","seven","several","sex","sexual","shake","share","she","shoot",
            "short","shot","should","shoulder","show","side","sign","significant",
            "similar","simple","simply","since","sing","single","sister","sit","site",
            "situation","six","size","skill","skin","small","smile","so","social",
            "society","soldier","some","somebody","someone","something","sometimes",
            "son","song","soon","sort","sound","source","south","southern","space",
            "speak","special","specific","speech","spend","sport","spring","staff",
            "stage","stand","standard","star","start","state","statement","station",
            "stay","step","still","stock","stop","store","story","strategy","street",
            "strong","structure","student","study","stuff","style","subject",
            "success","successful","such","suddenly","suffer","suggest","summer",
            "support","sure","surface","system","table","take","talk","task","tax",
            "teach","teacher","team","technology","television","tell","ten","tend",
            "term","test","than","thank","that","the","their","them","themselves",
            "then","theory","there","these","they","thing","think","third","this",
            "those","though","thought","thousand","threat","three","through",
            "throughout","throw","thus","time","to","today","together","tonight",
            "too","top","total","tough","toward","town","trade","traditional",
            "training","travel","treat","treatment","tree","trial","trip","trouble",
            "true","truth","try","turn","TV","two","type","under","understand","unit",
            "until","up","upon","us","use","usually","value","various","very",
            "victim","view","violence","visit","voice","vote","wait","walk","wall",
            "want","war","watch","water","way","we","weapon","wear","week","weight",
            "well","west","western","what","whatever","when","where","whether",
            "which","while","white","who","whole","whom","whose","why","wide",
            "wife","will","win","wind","window","wish","with","within","without",
            "woman","wonder","word","work","worker","world","worry","would",
            "write","writer","wrong","yard","yeah","year","yes","yet","you",
            "young","your","yourself"]


//more functions
var randInt = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//initiallizing express and socket server
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000

//id for queues
var uniqid = require('uniqid')

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/')
})

app.use(function(req, res, next) {
    res.status(404).sendFile('404.html', {root: __dirname })
})

//queues
var queues = []


//remove room
function delRoom(current_room) {
    for (let s of io.of('/').sockets) {
        let socket = s[1];
        socket.leave(current_room)
    }
}

//connection
io.on('connection', (socket) => {
    var name

    var current_room

    socket.emit('connected')
    socket.on('user', (data)=> {
        console.log("User connected: Name - " + data)
        name = data
    })

    socket.on('waiting', (data) => {
        var id = uniqid('id-')
        var joiningid
        if (queues.length == 0) {
            console.log("0")
            socket.join(id)
            queues.push({id: id, users: [name], status: "n"})
            var croom = socket.rooms
            croom = croom.values()
            croom.next()
            current_room = croom.next().value
        } else if (queues.length != 0) {
            var numberofqueueswithy = 0
            for (let i=0; i<queues.length; i++) {
                let a = queues[i]
                if (a.status == "n") {
                    socket.join(a.id)
                    a.users.push(name)
                    joiningid = a.id
                    var croom = socket.rooms
                    croom = croom.values()
                    croom.next()
                    current_room = croom.next().value
                    break
                } else if (a.status == "y") {
                    numberofqueueswithy++
                    continue
                }
            }
            if (numberofqueueswithy == queues.length) {
                socket.join(id)

                queues.push({id: id, users: [name], status: "n"})
                var croom = socket.rooms
                croom = croom.values()
                croom.next()

                current_room = croom.next().value
            }
        }
        for (let i=0; i<queues.length; i++) {
            let b = queues[i]
            if (b.id == id) {
                io.to(id).emit('alert', {id: id, users: b.users.length})
            } else if (b.id == joiningid) {
                io.to(joiningid).emit('alert', {id: id, users: b.users.length})

                if (b.users.length == 6) {
                    var text = ''

                    for (let i=0; i <= 60; i++) {
                        let a = randInt(-1, words.length+1)
                        if (i == 30) {
                            text = text + words[a]
                            break
                        }
                        var text = text + words[a] + ' '

                    }

                    io.to(joiningid).emit('startingGame', {text: text, names: b.users})
                    b.status = "y"
                }
            }
        }
        
    })

    socket.on('moved', (data) => {
        io.to(current_room).emit('playermoved', data)
    })

    socket.on('fs', (data) => {
        var text = ''

        for (let i=0; i <= 60; i++) {
            let a = randInt(-1, words.length+1)
            if (i == 30) {
                text = text + words[a]
                break
            }
            var text = text + words[a] + ' '
        }

        for (let i=0; i< queues.length; i++) {
            let q = queues[i]

            if (q.id == current_room) {
                io.to(current_room).emit('fs', {name: data, names: q.users, text: text})
            }
        }
    })


    socket.on('gameFinished', () => {
        delRoom(current_room)
        for (let i=0; i < queues.length; i++) {
            let a=queues[i]

            if (a.id == current_room) {
                queues.splice(i, 1)
            }
        }
    })

    socket.on('disconnect', () => {
        for (let i=0; i<queues.length; i++) {
            let a=queues[i]

            if (a.id == current_room) {
                let b = a.users.indexOf(name)

                if (b > -1) {
                    a.users.splice(b, 1);
                }
            }
        }

        console.log("User disconnected: Name - " + name)
        
        
    })
})

//listen at localhost (IP) "MAYBE GET A DNS REGISTRATION??  (pls)"
http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`)
})