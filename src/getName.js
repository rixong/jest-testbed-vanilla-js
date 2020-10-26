export default function getName(e) {
  e.preventDefault();
  const header = document.getElementById('header-info');
  header.innerHTML = `Hello ${e.target.name.value}. 
  You are ${e.target.age.value} years old.`;
}

// module.exports = getName;


