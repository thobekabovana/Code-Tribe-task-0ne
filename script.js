const personalInfo = {
    name: 'Thobeka',
    surname: 'Bovana',
    bio: "I'm humble, simple and straight-forwad person. I have positive self-image, self-motivated and positive attitude. I'm a person who is more interested in learning new things and problem solving. I also see myself as a creative person and who loves art.",
    education: [
      {
        institution: 'BIG SKY TRAINING ACADEMY',
        degree: 'Lisence of Cabin Crew',
        graduationDate: '2022'
      },
      {
        institution: 'Olwandle High School',
        degree: 'High School Matric',
        graduationDate: '2021'
      }
    ],
    contact: {
      email: 'thobekabovana@gmail.com',
      phone: '0734004442',
      address: '80 Pardy Road, Isipingo Hills, Durban, 4133'
    }
  };
var form = document.getElementById('Contact-Me');
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('contact-me-status');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = 'Thanks for your submission Thobeka!';
    form.reset()
  }).catch(error => {
    status.innerHTML = 'Oops! There was a problem submitting your form'
  });
}
form.addEventListener('submit', handleSubmit);
