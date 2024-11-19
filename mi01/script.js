// import { experData } from './varaiable'
// creating function for bar for languge
var fillBar = function () {
    var languagePara = document.querySelectorAll('.lan-name');
    var widths = ['100%', '70%', '30%'];
    languagePara.forEach(function (el, index) {
        var barDivs = document.createElement('div');
        barDivs.className = 'bar';
        barDivs.style.backgroundColor = '#EEEEEE';
        var fillBarUrdu = document.createElement('span');
        fillBarUrdu.className = 'fill-bar-urdu';
        fillBarUrdu.style.width = widths[index % widths.length];
        fillBarUrdu.style.backgroundColor = '#FF8000';
        barDivs.append(fillBarUrdu);
        el.after(barDivs);
    });
};
fillBar();
var experData = [
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
];
//applying map function to create experince section
document.addEventListener('DOMContentLoaded', function () {
    //getting refrnces to container div and its children
    var containerExper = document.querySelectorAll('.container-exper');
    console.log(containerExper);
    var makingExp = function () {
        // applying forEach method to get child nodes of container div one by one
        containerExper.forEach(function (item, idx) {
            var containerItem = item;
            var presentYear = containerItem.querySelector('.presentation');
            var organization = containerItem.querySelector('.organization');
            var roll = containerItem.querySelector('.roll');
            var lorem = containerItem.querySelector('.lorem');
            if (experData[idx] && presentYear && organization && roll && lorem) {
                presentYear.textContent = experData[idx].presentationYear;
                organization.textContent = experData[idx].company;
                roll.textContent = experData[idx].roll;
                lorem.textContent = experData[idx].paragraph;
            }
        });
    };
    makingExp();
});
//creating skill button and apply logic
document.addEventListener('DOMContentLoaded', function () {
    var btnSection = document.querySelector('#btn-section');
    var btn = document.createElement('button');
    btn.className = 'btn-skill';
    btn.innerText = 'SHOW SKILLS';
    btnSection.prepend(btn);
    //appling logic to show skill section and hide it
    btn.addEventListener('click', function () {
        var text = btn.innerText;
        var skillSec = document.querySelector('#skill-section');
        if (text === 'SHOW SKILLS') {
            btn.innerText = 'HIDE SKILLS';
            skillSec.style.display = 'block';
        }
        else {
            btn.innerText = 'SHOW SKILLS';
            skillSec.style.display = 'none';
        }
    });
});
//creating skill
document.addEventListener('DOMContentLoaded', function () {
    // in this line i am accessing container which contain span, skill-bar and skill
    var skillsDefineContainer = document.querySelectorAll('.skills-define-container');
    //after getting all classes with children we will loop by forEach method
    skillsDefineContainer.forEach(function (el, idx) {
        var widths = ["100%", "90%", "75%", "80%", "45%"];
        //queryselector not exist on nodelist so i casted with html element and store into element
        var element = el;
        //got skill-bar div
        var skillBar = element.querySelector('.skill-bar');
        //got skill fil div
        var skillFil = element.querySelector('.skill-fil');
        //ensuriing both ele exist before modifing them
        if (skillBar && skillFil) {
            skillFil.style.width = widths[idx % widths.length];
            // skillFil.style.background = "yellow"
        }
        skillBar.appendChild(skillFil);
        el.appendChild(skillBar);
    });
});
