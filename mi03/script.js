// getting refrnce to the form and displa
var form_one = document.querySelector('#resume-form');
var resumeArea = document.querySelector('#resume-display');
var addSkill = function () {
    var skill_name = document.querySelector('#skill-name').value;
    var skill_level = parseInt(document.querySelector('#skill-level').value, 10);
    if (skill_name && skill_level >= 0 && skill_level <= 100) {
        var skillContainer = document.querySelector('#skills-container');
        var skillDiv = document.createElement('div');
        skillDiv.className = 'skill';
        var skillLabel = document.createElement('label');
        skillLabel.textContent = "".concat(skill_name, ": ").concat(skill_level, "%");
        skillLabel.style.color = "white";
        var skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';
        skillBar.style.backgroundColor = "#898989";
        var skillBarFill = document.createElement('span');
        skillBarFill.style.width = "".concat(skill_level, "%");
        skillBarFill.style.backgroundColor = "white";
        skillBar.appendChild(skillBarFill);
        skillDiv.appendChild(skillLabel);
        skillDiv.appendChild(skillBar);
        skillContainer.appendChild(skillDiv);
        document.querySelector('#skill-name').value = '';
        document.getElementById('skill-level').value = '';
    }
    else {
        alert('Please enter a valid skill name and level (0-100).');
    }
};
document.addEventListener('DOMContentLoaded', function () {
    var profilePicInput = document.querySelector('#profile-image');
    var profileImg = document.querySelector('#img');
    if (profileImg && profilePicInput) {
        profilePicInput.addEventListener('change', function (event) {
            var target = event.target;
            var files = target.files;
            if (files && files.length > 0) {
                var file = files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var _a;
                    profileImg.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                    profileImg.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }
});
form_one.addEventListener("submit", function (event) {
    event.preventDefault(); //it prevent to load form
    //collect input values
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var contact = document.querySelector('#contact').value;
    var education = document.querySelector('#education').value;
    // const skills = (document.querySelector('#skills') as HTMLInputElement).value;
    var experience = document.querySelector('#experience').value;
    // const image = document.querySelector('#profile-image') as HTMLImageElement;
    // const displayImage = document.querySelector('#img-display') as HTMLDivElement;
    var profileImg = document.querySelector('#img');
    var designation = document.querySelector('#designation').value;
    var profile = document.querySelector('#profile').value;
    var address = document.querySelector('#address').value;
    var container = document.querySelector('#skills-container').innerHTML;
    var Birth = document.querySelector('#birth').value;
    // console.log(name)
    var icon = '<i class="fa-sharp fa-solid fa-location-pin" style="color: #ffffff;"></i>';
    var phoneIcon = '<i class="fa-solid fa-phone" style="color: #ffffff;"></i>';
    var emailIcon = '<i class="fa-solid fa-envelope style="color: #ffffff;"></i>';
    var dateOfBirth = '<i class="fa-solid fa-baby style="color: #ffffff"></i>';
    var resumeHtml = "\n   \n    <div id=\"left\"> \n   <section>\n    <div id=\"image-display-div\">\n    <img src=\"".concat(profileImg.src, "\" alt=\"Profile Image\" /> \n    </div>\n    </section>\n\n<section>\n<div id=\"contact\">\n<h3>CONTACT ME</h3>\n<h5>").concat(icon, " ADDRESS</h5>\n<p> ").concat(address, "</p>\n<h5>").concat(dateOfBirth, "DATE OF BIRTH</h5>\n<p>").concat(Birth, "</p>\n<h5>").concat(phoneIcon, " PHONE</h5>\n<p>").concat(contact, "</p>\n<h5>").concat(emailIcon, " EMAIL</h5>\n<p>").concat(email, "</p>\n</div>\n</section>\n\n<section>\n<h3 id=\"skill-color\">SKILLS</h3>\n<p>").concat(container, "</p>\n</section>\n\n\n\n\n    </div>\n\n  \n    <div id=\"right\">\n    <div id=\"name_designation\">\n    <h1>").concat(name, "</h1>\n    <p id=\"para-designation\">").concat(designation, "</p>\n    </div>\n\n    <div id=\"left_long_part\">\n   <section>\n    <h3>PROFILE</h3>\n    <p>").concat(profile, "</p>\n    </section/>\n\n    <section>\n     <h3>WORK EXPERIENCE</h3>\n    <p>").concat(experience, "</p>\n    </section>\n\n    <section>\n     <h3>EDUCATION</h3>\n    <p>").concat(education, "</p>\n    </section>\n\n    \n\n    </div>\n    \n\n\n\n\n\n     </div>\n\n\n\n\n   \n\n\n  \n      \n");
    if (resumeArea) {
        resumeArea.innerHTML = resumeHtml;
    }
});
