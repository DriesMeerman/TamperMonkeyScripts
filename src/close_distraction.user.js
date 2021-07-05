// ==UserScript==
// @name     Close distrcations
// @version  1
// @grant    none

// @include *.reddit.com/*
// @include *nos.nl*

// ==/UserScript==
window.close();


// yes this is an awfull way to do it
const style = `
<style>
a {
	color: #00b7ff;
}

.cont {
  width: 100%; 
  height: 100%; 
  display: flex; 
  align-items: center; 
  flex-direction: column; 
  padding: 1rem; 
  background-color: black; 
  color: white
}
</style>
`

const content = `${style} <div class="cont">
<h1>No distractions for you</h1>
	
	<a href="https://overleaf.com">Overleaf</a>

</div>`

document.body.innerHTML = content;
