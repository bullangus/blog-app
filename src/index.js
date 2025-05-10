console.log("index.js")

// import style
import './styles/master.scss'

// import modules
import PostAPI from './PostAPI.js'
import { createPostEl } from './Utils.js'
import { gsap } from "gsap"

//get posts btn
const getpostsBtn = document.querySelector('.get-posts-btn')

getpostsBtn.addEventListener('click', async () => {

    //get posts using the getPosts function
    try{
        const resultEl = document.querySelector('#result')
        resultEl.innerHTML = '<sl-spinner></sl-spinner>'

        const posts = await PostAPI.getPosts()
        console.log(posts)
        
        resultEl.innerHTML = ''
        
        posts.forEach(post => {
            const postEl = createPostEl(post)
            resultEl.append(postEl)
            gsap.fromTo('.anim-in', {opacity: 0, y: -5}, {opacity: 1, y: 0, ease: "power2.out", duration: 0.6, stagger: 0.15})
        })

    }catch(err){
        alert(err)
    }
})