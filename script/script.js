// slide navbar hedaer
const tombolList = document.querySelector('.list-nav input')
const navSlide = document.querySelector('nav ul')

tombolList.addEventListener('click', function () {
    navSlide.classList.toggle('silde')
})

//active menu
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.article');
    const navLinks = document.querySelectorAll('header nav ul li a');

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + (window.innerHeight / 3) < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
    window.addEventListener('resize', changeLinkState); // Handle resize events
});

            
// tabs skill
// Function to open default tab
function openDefaultTab() {
  document.getElementById('tab1').style.display = 'block';
  document.querySelector('.tablink:first-child').classList.add('active');
}

// Function to open tab
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}

// Open default tab when page loads
document.addEventListener('DOMContentLoaded', openDefaultTab);

// // Function to open default tab
// function openDefaultTab() {
//   document.getElementById('tab1').style.display = 'block';
// }

// // Function to open tab
// function openTab(evt, tabName) {
//   var i, tabcontent, tablinks;

//   tabcontent = document.getElementsByClassName('tabcontent');
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = 'none';
//   }

//   tablinks = document.getElementsByClassName('tablink');
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].classList.remove('active');
//   }

//   document.getElementById(tabName).style.display = 'block';
//   evt.currentTarget.classList.add('active');
// }

// // Open default tab when page loads
// document.addEventListener('DOMContentLoaded', openDefaultTab);



