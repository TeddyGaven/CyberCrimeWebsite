a = document.getElementById('in1')
d = document.getElementById('in2')
e = document.getElementById('in3')
f = document.getElementById('in4')
g = document.getElementById('in5')
h = document.getElementById('in6')
i = document.getElementById('in7')
b = document.getElementById('Sub')
c = document.getElementById('txt1')
o1 = document.getElementById('o1')
o2 = document.getElementById('o2')
o3 = document.getElementById('o3')
o4 = document.getElementById('o4')
o5 = document.getElementById('o5')
o6 = document.getElementById('o6')
o7 = document.getElementById('o7')
o9 = document.getElementById('o9')
o10 = document.getElementById('o10')
o11 = document.getElementById('o11')
o12 = document.getElementById('o12')
o13 = document.getElementById('o13')
o14 = document.getElementById('o14')
o15 = document.getElementById('o15')


b.addEventListener('click', () => {
    localStorage.setItem('fname', a.value)
    localStorage.setItem('lname', d.value)
    localStorage.setItem('Em', e.value)
    localStorage.setItem('date', f.value)
    localStorage.setItem('type', g.value)
    localStorage.setItem('loc', h.value)
    localStorage.setItem('webname', i.value)

    o9.innerText = JSON.stringify(localStorage.getItem('fname'))
    o10.innerText = JSON.stringify(localStorage.getItem('lname'))
    o11.innerText = JSON.stringify(localStorage.getItem('Em'))
    o12.innerText = JSON.stringify(localStorage.getItem('date'))
    o13.innerText = JSON.stringify(localStorage.getItem('type'))
    o14.innerHTML = JSON.stringify(localStorage.getItem('loc'))
    o15.innerHTML = JSON.stringify(localStorage.getItem('webname'))
    o1.innerHTML = 'FName'
    o2.innerHTML = 'LName'
    o3.innerHTML = 'E-mail'
    o4.innerHTML = 'Date'
    o5.innerHTML = "Type"
    o6.innerHTML = "Location"
    o7.innerHTML = "Website"

    localStorage.clear()

})


