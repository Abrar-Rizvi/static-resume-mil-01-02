// getting refrnce to the form and displa
const form_one = document.querySelector('#resume-form') as HTMLFormElement;

const resumeArea = document.querySelector('#resume-display') as HTMLDivElement;


const addSkill = () => {
    const skill_name = (document.querySelector('#skill-name') as HTMLInputElement).value;
   
    const skill_level = parseInt((document.querySelector('#skill-level') as HTMLInputElement).value, 10)

    if(skill_name && skill_level >= 0 && skill_level <= 100){
       const skillContainer = (document.querySelector('#skills-container') as HTMLDivElement);
      
       const skillDiv = document.createElement('div') as HTMLDivElement;
       skillDiv.className = 'skill';
       const skillLabel = document.createElement('label') as HTMLLabelElement;
       skillLabel.textContent = `${skill_name}: ${skill_level}%`;
       skillLabel.style.color = "white"

       const skillBar = document.createElement('div') as HTMLDivElement;
       skillBar.className = 'skill-bar';
       skillBar.style.backgroundColor = "#898989"

       const skillBarFill = document.createElement('span');
       skillBarFill.style.width = `${skill_level}%`;
       skillBarFill.style.backgroundColor = "white";

        skillBar.appendChild(skillBarFill);
         skillDiv.appendChild(skillLabel);
          skillDiv.appendChild(skillBar);
          skillContainer.appendChild(skillDiv);

           (document.querySelector('#skill-name') as HTMLInputElement).value = ''; 
           (document.getElementById('skill-level') as HTMLInputElement).value = '';
    } else{
        alert('Please enter a valid skill name and level (0-100).')
   
    }
}
  


document.addEventListener('DOMContentLoaded', () => {
    const profilePicInput = document.querySelector('#profile-image') as HTMLInputElement;
    const profileImg = document.querySelector('#img') as HTMLImageElement
    if (profileImg && profilePicInput) {
        profilePicInput.addEventListener('change', (event) => {
            const target = event.target as HTMLInputElement
            const files = target.files;
            if (files && files.length > 0) {
                const file = files[0]
                const reader = new FileReader();
                reader.onload = (e) => {
                    profileImg.src = e.target?.result as string;
                    profileImg.style.display = 'block'
                }
                reader.readAsDataURL(file)
            }
        })

    }

})

form_one.addEventListener("submit", (event: Event) => {
    event.preventDefault(); //it prevent to load form

    //collect input values

    const name = (document.querySelector('#name') as HTMLInputElement).value;
    const email = (document.querySelector('#email') as HTMLInputElement).value;
    const contact = (document.querySelector('#contact') as HTMLInputElement).value
    const education = (document.querySelector('#education') as HTMLInputElement).value;
    // const skills = (document.querySelector('#skills') as HTMLInputElement).value;
    const experience = (document.querySelector('#experience') as HTMLInputElement).value
    // const image = document.querySelector('#profile-image') as HTMLImageElement;
    // const displayImage = document.querySelector('#img-display') as HTMLDivElement;
    const profileImg = document.querySelector('#img') as HTMLImageElement
    const designation = (document.querySelector('#designation') as HTMLInputElement).value;
    const profile = (document.querySelector('#profile') as HTMLInputElement).value;
    const address = (document.querySelector('#address') as HTMLInputElement).value;
    const container = (document.querySelector('#skills-container') as HTMLDivElement).innerHTML
    const Birth = (document.querySelector('#birth') as HTMLInputElement).value;
    // console.log(name)


    const icon = '<i class="fa-sharp fa-solid fa-location-pin" style="color: #ffffff;"></i>'
      
    const phoneIcon = '<i class="fa-solid fa-phone" style="color: #ffffff;"></i>';
    const emailIcon = '<i class="fa-solid fa-envelope style="color: #ffffff;"></i>';
    const dateOfBirth = '<i class="fa-solid fa-baby style="color: #ffffff"></i>'



    const resumeHtml = `
   
    <div id="left"> 
   <section>
    <div id="image-display-div">
    <img src="${profileImg.src}" alt="Profile Image" /> 
    </div>
    </section>

<section>
<div id="contact">
<h3>CONTACT ME</h3>
<h5>${icon} ADDRESS</h5>
<p> ${address}</p>
<h5>${dateOfBirth}DATE OF BIRTH</h5>
<p>${Birth}</p>
<h5>${phoneIcon} PHONE</h5>
<p>${contact}</p>
<h5>${emailIcon} EMAIL</h5>
<p>${email}</p>
</div>
</section>

<section>
<h3 id="skill-color">SKILLS</h3>
<p>${container}</p>
</section>




    </div>

  
    <div id="right">
    <div id="name_designation">
    <h1>${name}</h1>
    <p id="para-designation">${designation}</p>
    </div>

    <div id="left_long_part">
   <section>
    <h3>PROFILE</h3>
    <p>${profile}</p>
    </section/>

    <section>
     <h3>WORK EXPERIENCE</h3>
    <p>${experience}</p>
    </section>

    <section>
     <h3>EDUCATION</h3>
    <p>${education}</p>
    </section>

    

    </div>
    





     </div>




   


  
      
`



    if (resumeArea) {
        resumeArea.innerHTML = resumeHtml
    }




})