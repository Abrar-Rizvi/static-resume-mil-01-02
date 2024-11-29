


// creating function for bar for languge
const fillBar = () => {
    const languagePara = document.querySelectorAll('.lan-name');
    const widths = ['100%', '70%', '30%']
    languagePara.forEach((el, index) => {
        const barDivs = document.createElement('div') as HTMLDivElement;
        barDivs.className = 'bar';
        barDivs.style.backgroundColor = '#EEEEEE'

        const fillBarUrdu = document.createElement('span') as HTMLSpanElement;
        fillBarUrdu.className = 'fill-bar-urdu';
        fillBarUrdu.style.width = widths[index % widths.length]
        fillBarUrdu.style.backgroundColor = '#FF8000'
        barDivs.append(fillBarUrdu)
        el.after(barDivs)
    })
}
fillBar();


const experData = [
    {
        presentationYear: "2013-PRESENT",
        company: "ARY DIGITAL ",
        roll: "SENIOR MENTOR",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia distinctio cumque aliquid laborum repudiandae sit dicta natus, voluptatem porro."
    },
    {
        presentationYear: "2015-2016",
        company: "PEKI CAKE",
        roll: "ORDER BOOKER",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia distinctio cumque aliquid laborum repudiandae sit dicta natus, voluptatem porro."
    },
    {
        presentationYear: "2011-2012",
        company: "SPICES Store",
        roll: "SALES MAN",
        paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia distinctio cumque aliquid laborum repudiandae sit dicta natus, voluptatem porro."
    },

]

//applying map function to create experince section

document.addEventListener('DOMContentLoaded', () => {
    //getting refrnces to container div and its children
    const containerExper = document.querySelectorAll('.container-exper') as NodeList;
    console.log(containerExper)
    const makingExp = () => {
        // applying forEach method to get child nodes of container div one by one
        containerExper.forEach((item, idx) => {
            const containerItem = item as HTMLElement
            const presentYear = containerItem.querySelector('.presentation')
            const organization = containerItem.querySelector('.organization')
            const roll = containerItem.querySelector('.roll')
            const lorem = containerItem.querySelector('.lorem')

            if (experData[idx] && presentYear && organization && roll && lorem) {
                presentYear.textContent = experData[idx].presentationYear;
                organization.textContent = experData[idx].company;
                roll.textContent = experData[idx].roll;
                lorem.textContent = experData[idx].paragraph

               

               

            }
        })


    }
    makingExp()
})


//creating skill button and apply logic

document.addEventListener('DOMContentLoaded', () => {
    const btnSection = document.querySelector('#btn-section') as HTMLDivElement
    const btn = document.createElement('button') as HTMLButtonElement;
    btn.className = 'btn-skill'
    btn.innerText = 'SHOW SKILLS'
    btnSection.prepend(btn)

    //appling logic to show skill section and hide it
    btn.addEventListener('click', () => {
        const text = btn.innerText;
        const skillSec = document.querySelector('#skill-section') as HTMLDivElement
       if(text === 'SHOW SKILLS'){
       btn.innerText = 'HIDE SKILLS'
       skillSec.style.display = 'block'

        
       }else{
         btn.innerText = 'SHOW SKILLS'
       skillSec.style.display = 'none'
       }
        

    })

})

//creating skill
document.addEventListener('DOMContentLoaded', () => {
    
    // in this line i am accessing container which contain span, skill-bar and skill
    const skillsDefineContainer = document.querySelectorAll('.skills-define-container') as NodeList;
   
    //after getting all classes with children we will loop by forEach method
    skillsDefineContainer.forEach((el, idx) => {
        const widths = ["95%", "90%", "75%", "80%", "45%"]
        //queryselector not exist on nodelist so i casted with html element and store into element
    const element = el as HTMLElement
    //got skill-bar div
        const skillBar = element.querySelector('.skill-bar') as HTMLDivElement;
       
        //got skill fil div
        const skillFil = element.querySelector('.skill-fil') as HTMLDivElement;
       

        //ensuriing both ele exist before modifing them
        if(skillBar && skillFil){
            skillFil.style.width = widths[idx % widths.length]
            // skillFil.style.background = "yellow"
        }
      
        skillBar.appendChild(skillFil)
        el.appendChild(skillBar)

        
    })
    
   
   


})