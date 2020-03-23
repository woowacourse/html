const messagesElement = document.querySelector('.messages')
const main = document.querySelector('.main')
const inputMessage = document.querySelector('.input-message')
const sendButton = document.querySelector('.send')
const menuElements = document.querySelectorAll('.menu')
const menuItemElements = document.querySelectorAll('.menu-item')

const receiverMessageTemplate = data => `
    <li class="message left" data-id="${data.id}" onclick="deleteMessage(${data.id})">
        <div class="content">${data.message}</div>
    </li>
`
const senderMessageTemplate = data => `
    <li class="message right" data-id="${data.id}" onclick="deleteMessage(${data.id})">
        <div class="content">${data.message}</div>
    </li>
`

const scroll = (() => {
    const SECOND_MS = 1000;
    const FPS = 60;
    let timerId;
    const animate = (element, step) => {
        timerId = setInterval(() => {
            element.scrollTop += step
            if (element.scrollTop >= element.scrollHeight - element.clientHeight) {
                clearInterval(timerId)
            }
        }, SECOND_MS / FPS)
    }
    const distance = element => element.scrollHeight - element.clientHeight - element.scrollTop
    const step = (distance, duration) => distance / (duration * FPS)
    return (element, duration) => {
        clearInterval(timerId)
        animate(element, step(distance(element), duration))
    }
})()

menuElements.forEach(menuElement => {
    menuElement.onclick = e => {
        e.stopPropagation()
        if (menuElement.classList.contains('active')) {
            blurMenu()
            return
        }
        blurMenu()
        menuElement.classList.add('active')
    }
})

menuItemElements.forEach(menuItemElement => {
    menuItemElement.addEventListener('click', e => {
        e.stopPropagation()
        blurMenu()
    })
})

document.body.onclick = () => {
    blurMenu()
}

const blurMenu = () => {
    const activeMenu = document.querySelector('.menu.active')
    if (activeMenu) {
        activeMenu.classList.remove('active')
    }
}

const changeMode = mode => {
    document.body.classList.remove("light-theme", "dark-theme")
    document.body.classList.add(`${mode}-theme`)
}

class Messages {
    constructor (messages) {
        this.observers = []
        this.messages = messages
        this.nextId = messages.reduce((id, b) => Math.max(id, b.id), 0) + 1
    }

    addObserver (observer) {
        this.observers.push(observer)
    }

    removeObserver (observer) {
        this.observers.splice(this.observers.indexOf(observer), 1)
    }

    addMessage (messageData) {
        const message = {
            ...messageData,
            id: this.nextId++
        }
        this.messages.push(message)
        this.observers.forEach(observer => observer.addMessage(message))
    }

    removeMessage (id) {
        this.messages = this.messages.filter(message => message.id != id)
        this.observers.forEach(observer => observer.removeMessage(id))
    }
}

const messages = new Messages([])

const commands = {
    이야기 () {
        const story = [
            { message: '<h1>90년생 HTML</h1>' },
            { message: '웹을 공부하는 모두에게 HTML은 굉장히 익숙한 단어입니다.' },
            { message: '하지만 누군가 물어본다면 어디서부터 어떻게 설명해야할지 어려운 것도 사실인데요.' },
            { message: '그건 아마 우리가 HTML이라는 이름만 알고있기 때문일지도 모릅니다.' },
            { message: '어떤 대상의 이름만 가지고 그 대상을 설명하기는 어렵습니다. 하지만 그 대상의 이야기를 안다면 조금 달라질 수 있습니다.' },
            { message: '그래서 준비했습니다. HTML의 이야기를요.' },
            { message: '<h1>90년생 HTML의 일생</h1>' },
            { message: '누군가의 이야기는 태어난 곳에서부터 시작을 하죠. HTML의 고향은 어디일까요?' },
            { message: '미국인가요?', me: true },
            { message: '미국이 워낙 IT로 유명하다 보니 HTML의 고향도 미국으로 생각할 수 있는데요.' },
            { message: '의외로 HTML의 고향은 아름다운 자연경관으로 유명한 🇨🇭<b>스위스</b>입니다.' },
            { message: '<span style="font-size: 24px;">😅</span>', me: true },
            { message: '스위스에는 유럽 입자 물리 연구소 CERN이라는 저명한 물리학 연구소가 있는데요.' },
            { message: '이곳은 개별 국가의 범위를 넘어서는 연구를 수행하기 위해 만들어진 곳입니다.' },
            { message: '이런 국제적인 연구소에서 1990년도에 역사적인 사건이 발생합니다.' },
            { message: '<img src="./assets/img/1990-web.png">' },
            { message: '그것은 바로 웹의 등장입니다. 이 웹이라는 서비스를 통해서 HTML이 세상에 드러났습니다.' },
            { message: '<img src="./assets/img/berners.jpg"><br>이 웹이라는 서비스와 HTML을 만든 사람은 웹의 아버지라고 불리는 팀 버너스리입니다.' },
            { message: '유럽입자물리연구소는 특성상 한 개별적인 국가의 범위를 넘어서는 연구를 위해 만들어진 곳입니다. 그렇다보니 자연스레 여러 연구자들이 엄청나게 많은 정보와 자료를 주고 받게 되었습니다. 그래서 팀 버너스리가 효율적으로 정보를 주고 받을 수 있는 시스템을 1980년도부터 약 10년동안 연구하다가 1990년도에 결과물들을 세상에 드러내기 시작했습니다.' },
            { message: '<h2>1990년 10월<h2>' },
            { message: '세계 최초로 웹페이지를 만드는 에디터를 만듭니다<br><img src="./assets/img/1990-10-web.png">' },
            { message: '<h2>1990년 11월<h2>' },
            { message: 'HTML 페이지를 볼 수 있는 세계 최초의 웹브라우저인 <a target="_blank" href="https://ko.wikipedia.org/wiki/%EC%9B%94%EB%93%9C%EC%99%80%EC%9D%B4%EB%93%9C%EC%9B%B9">World Wide Web</a>을 만듭니다.<br><img src="./assets/img/1990-11-web.png">' },
            { message: '<h2>1990년 12월<h2>' },
            { message: '웹서버라는 프로그램을 만들고 그 프로그램이 설치되어있는 컴퓨터에 <b>info.cern.ch</b>라는 주소를 부여합니다.<br><img src="./assets/img/1990-12-web.png">' },
            { message: '웹은 여기서 시작합니다.' },
            { message: '아직도 <a target="_blank" href="http://info.cern.ch">info.cern.ch</a>에 들어가면 웹의 시작점을 알리는 HTML 페이지에 여러분도 도달할 수 있습니다.' },
            { message: '이 사건이 있었기에 지금 우리가 웹이라는 서비스를 누구나 자유롭게 사용할 수 있게 되었습니다.' },
            { message: '그리고 처음에는 단순한 문서였던 HTML은 웹의 폭발적인 성장과 함께 발전하고 있습니다.' },
            { message: '이는 HTML에게 CSS와 Javascript라는 언어가 함께 있기 때문에 가능한 것인데요.' },
            { message: '셋의 역할은 분명합니다.' },
            { message: '<b>HTML</b>은 정보의 골격을 나타내고' },
            { message: '<b>CSS</b>는 그 정보를 꾸며주고' },
            { message: '<b>Javascript</b>는 동작하게 도와주는 것입니다.' },
            { message: '이 문장만으로는 쉽게 와닿지 않을 수 있습니다. <a target="_blank" href="https://html-css-js.com/">html-css-js.com</a>에 접속하면 셋의 역할을 재밌게 확인해볼 수 있습니다.' },
            { message: 'CSS, Javascript와 함께 HTML은 정적인 콘텐츠를 보여주는 문서에서,<br>게시판에 글을 쓰고 수정하고 공유하던 웹사이트에서, 쇼핑과 지금 우리가 사용하는 다양한 경험을 실시간 상호작용을 하는 페이지로 진화하기에 이르렀습니다.' },
            { message: '<img src="./assets/img/growing.png">' },
            { message: '여기까지 90년생 HTML의 이야기를 함께 살펴보았습니다. 이름만 알았을 때보다는 좀 더 가까워진 느낌인 것 같습니다.' },
            { message: '정보의 공유를 목표로 웹의 시작과 함께 탄생한 HTML은 웹의 가장 기본이 되기 때문에 매우 중요합니다.' },
            { message: '기쁜 소식이 있다면 html은 그렇게 어렵지 않다는 것입니다.' },
            { message: '<span style="font-size: 50px; font-weight: bold">끗</span>' },
        ]
        interpret(story, 0)
    },
    태그목록 () {
        messages.addMessage({
            message: `
                <h2>사용한 태그 목록</h2><br>
                !태그(ex: !태그, !div, !span)를 입력하여 설명을 볼 수 있습니다.<br>
                header, footer, div, span, ul, li, a, img, b, br, h1~h6, input, button, style, script
            `
        })
    },
    태그 () {
        messages.addMessage({
            message: `
                언어의 가장 핵심적인 특징은 바로 약속입니다.<br>
                이 약속이 있기 때문에 우리는 상대방의 이야기를 해석하고 소통할 수 있습니다.<br>
                html은 웹브라우저에 표시되는 웹페이지를 만들어 달라고 컴퓨터에게 요청하는 언어입니다<br>
                사람과 컴퓨터 사이의 약속일 뿐만 아니라 사람과 웹브라우저라고 하는 프로그램 사이에서 서로가 이해할 수 있는 약속이 바로 html인 것이죠<br>
                우리가 시간을 제한된 숫자로 나타내듯이 html도 정보를 표현하기 위한 약속들이 있습니다.<br>
                그것은 바로 태그입니다. 어떤 상품에 붙어있는 태그는 그 상품에 대한 정보를 나타내고 있습니다.
            `
        })
    },
    header () {
        messages.addMessage({
            message: `<b>&lt;header&gt;</b> 요소는 소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다.<br>제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함할 수 있습니다.`
        })
    },
    footer () {
        messages.addMessage({
            message: `<b>&lt;footer&gt;</b> 요소는 가장 가까운 구획 콘텐츠나 구획 루트의 푸터를 나타냅니다.<br>푸터는 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 내용을 담습니다`
        })
    },
    div () {
        messages.addMessage({
            message: `<b>&lt;div&gt;</b> 요소는 플로우 콘텐츠를 위한 통용 컨테이너입니다.<br>CSS로 꾸미기 전에는 콘텐츠나 레이아웃에 어떤 영향도 주지 않습니다.`
        })
    },
    span () {
        messages.addMessage({
            message: `
                <b>&lt;span&gt;</b> 요소는 구문 콘텐츠를 위한 통용 인라인 컨테이너로, 본질적으로는 아무것도 나타내지 않습니다.<br>
                스타일을 적용하기 위해서, 또는 lang 등 어떤 특성의 값을 서로 공유하는 요소를 묶을 때 사용할 수 있습니다.<br><br>
                <span style="color: blue;">파란색</span>
            `
        })
    },
    ul () {
        messages.addMessage({
            message: `
                <b>&lt;ul&gt;</b> 요소는 정렬되지 않은 목록을 나타냅니다.<br>
                보통 불릿으로 표현합니다.<br><br>
                <ul>
                    <li>항목1</li>
                    <li>항목2</li>
                    <li>항목3</li>
                </ul>
            `
        })
    },
    li () {
        messages.addMessage({
            message: `<b>&lt;li&gt;</b> 요소는 목록의 항목을 나타냅니다.<br>`
        })
    },
    a () {
        messages.addMessage({
            message: `
                <b>&lt;a&gt;</b> 요소(앵커 요소)는 href 특성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만듭니다.<br><br>
                <a target="_blank" href="https://techcourse.woowahan.com">우아한테크코스 바로가기</a>
            `
        })
    },
    img () {
        messages.addMessage({
            message: `
            <b>&lt;img&gt;</b> 요소는 문서에 이미지를 넣습니다.<br><br>
            <img src="./assets/img/light-logo.png">
            `
        })
    },
    b () {
        messages.addMessage({
            message: `<b>&lt;b&gt;</b> 요소는 독자의 주의를 요소의 콘텐츠로 끌기 위한 용도로 사용합니다.<br>그 외의 다른 특별한 중요도는 주어지지 않습니다.`
        })
    },
    br () {
        messages.addMessage({
            message: `
                <b>&lt;br&gt;</b> 요소는 텍스트 안에 줄바꿈(캐리지 리턴)을 생성합니다.<br>
                주소나 시조 등 줄의 구분이 중요한 내용을 작성할 때 유용합니다.<br><br>
                이렇게 줄<br><br>바<br>꿈<br><br><br><br>할 수 있어요!
            `
        })
    },
    'h1~h6' () {
        messages.addMessage({
            message: `
                <b>&lt;h1&gt;-&lt;h6&gt;</b> 요소는 6단계의 구획 제목을 나타냅니다.<br>
                구획 단계는 &lt;h1&gt;이 가장 높고 &lt;h6&gt;은 가장 낮습니다.<br><br>
                <h1>크다</h1>
                <h2>근데</h2>
                <h3>점점</h3>
                <h4>작아</h4>
                <h5>지는</h5>
                <h6>기분</h6>
            `
        })
    },
    input () {
        messages.addMessage({
            message: `
                <b>&lt;input&gt;</b> 요소는 웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤을 생성합니다.<br><br>
                <input placeholder="입력을 할 수 있어요!">
            `
        })
    },
    button () {
        messages.addMessage({
            message: `
                <b>&lt;button&gt;</b> 요소는 클릭 가능한 버튼을 나타냅니다.<br>
                버튼은 양식 내부는 물론 간단한 표준 버튼 기능이 필요한 곳이라면 문서 어디에나 배치할 수 있습니다.<br><br>
                <button>누르지마!</button>
            `
        })
    },
    style () {
        messages.addMessage({
            message: `<b>&lt;style&gt;</b> 요소는 문서나 문서 일부에 대한 스타일 정보를 포함합니다.`
        })
    },
    script () {
        messages.addMessage({
            message: `<b>&lt;script&gt;</b> 요소는 실행 가능한 코드를 문서에 포함하거나 참조할 때 사용합니다.<br>보통 JavaScript 코드와 함께 쓰지만, WebGL의 GLSL 셰이더 프로그래밍 언어 등 다른 언어와도 사용할 수 있습니다.`
        })
    },
}

const interpret = (() => {
    let isRunning = false;
    const run = (story, index = 0, delay = 1000) => {
        setTimeout(() => {
            if (index >= 0 && index < story.length) {
                const { message, me, delay } = story[index]
                messages.addMessage({
                    message,
                    me
                })
                run(story, index + 1, delay ? delay : Math.max(1000, message.length * 50))
            } else {
                isRunning = false
            }
        }, delay)
    }
    return (story, index = 0) => {
        if (isRunning) {
            return
        }
        isRunning = true
        run(story, index)
    }
})()

messages.addObserver({
    addMessage (message) {
        const template = document.createElement('template')
        template.innerHTML = message.me ? senderMessageTemplate(message) : receiverMessageTemplate(message)
        messagesElement.appendChild(template.content.firstChild.nextSibling)
        scroll(main, 0.1)
    },
    removeMessage (id) {
        const messageElement = messagesElement.querySelector(`.message[data-id="${id}"]`)
        messageElement.remove()
    }
})

messages.addObserver({
    addMessage (message) {
        if (message.message.substring(0, 1) != "!") {
            return
        }
        const command = commands[message.message.substring(1)];
        if (command) {
            command();
        }
    },
    removeMessage (id) {}
})

const deleteMessage = id => {
    if (confirm("메시지를 삭제하시겠습니까?")) {
        messages.removeMessage(id)
    }
}

window.onkeydown = e => {
    if (e.keyCode == 13) {
        sendButton.click()
    }
}

sendButton.onclick = () => {
    if (inputMessage.value == '') {
        return
    } 
    messages.addMessage({
        message: inputMessage.value,
        me: true
    })
    inputMessage.value = ''
}
