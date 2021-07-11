const quotes = [
    {
        quote: "그래도 지구는 돈다",
        author: "갈릴레오 갈릴레이",
    },
    {
        quote: "나는 생각한다 고로 나는 존재한다",
        author: "르네 데카르트",
    },
    {
        quote: "내 사전에 불가능이란 단어는 없다",
        author: "나폴레옹 보나파르트",
    },
    {
        quote: "달리는 기차 위에 중립은 없다",
        author: "하워드 진",
    },
    {
        quote: "시작은 미약하였으나 끝은 창대하리라",
        author: "욥기 8장 7절",
    },
    {
        quote: "신은 죽었다",
        author: "프리드리히 니체",
    },
    {
        quote: "왔노라, 보았노라, 이겼노라",
        author: "율리우스 카이사르",
    },
    {
        quote: "주사위는 던져졌다",
        author: "율리우스 카이사르",
    },
    {
        quote: "소년이여, 야망을 가져라",
        author: "윌리엄 스미스 클라크",
    },
    {
        quote: "보다 먼 곳으로",
        author: "카를 5세",
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
