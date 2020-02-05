function getEmail () {
  const arr = []
  for (const each in customers) {
    arr.push(customers[each].email)
  }
  return arr
}

const customerNames = customers.map(function (customer) {
  return capFirst(customer.name.first) + ' ' + capFirst(customer.name.last)
})

// const customerListItems = customerNames.map(function (name) {
//   const li = document.createElement('li')
//   li.textContent = name
//   return li
// })

function capFirst (string) {
  return string[0].toUpperCase() + string.slice(1)
}

// function getName () {
//   const arr = []
//   for (const each in customers) {
//     customers[each].name.first
//   }
// }

function getDob () {
  const arr = []
  for (const each in customers) {
    arr.push(moment(customers[each].dob).format('MMM DD YYYY'))
  }
  return arr
}

function getCakeday () {
  const arr = []
  for (const each in customers) {
    arr.push(moment(customers[each].registered).format('MMM DD YYYY'))
  }
  return arr
}

function getProfilePic () {
  const arr = []
  for (const each in customers) {
    arr.push(customers[each].picture.thumbnail)
  }
  return arr
}

function getAddress () {
  const arrCity = []
  const arrState = []
  const arrCapState = []
  const addressLine2 = []
  for (const each in customers) {
    arrCity.push(capFirst(customers[each].location.city))
  }
  for (const each in customers) {
    arrState.push(customers[each].location.state)
  }
  for (const i of arrState) {
    arrCapState.push(i.toUpperCase())
  }

  for (let i = 0; i < arrCity.length; i++) {
    addressLine2.push(arrCity[i] + ', ' + arrCapState[i])
  }
  return addressLine2
}

function getStreet () {
  const arrStreet = []
  for (const each in customers) {
    arrStreet.push(customers[each].location.street)
  }
  return arrStreet
}

function loadCustomers () {
  const arrNames = customerNames
  const arrEmail = getEmail()
  const arrCityState = getAddress()
  const arrStreet = getStreet()
  const DateOfBirth = getDob()
  const dateRegistered = getCakeday()
  const profilePic = getProfilePic()
  for (let i = 0; i < arrNames.length; i++) {
    let parent = document.querySelector('.customer-table')
    let userCell = document.createElement('div', { is : 'user-cell'})
    let img = document.createElement('img', { is : 'profile-pic'})
    let name = document.createElement('p', { is : 'name'})
    let email = document.createElement('p', { is : 'email'})
    let addressLine1 = document.createElement('p', {is : 'address-line-1'})
    let addressLine2 = document.createElement('p', {is : 'address-line-2'})
    let dob = document.createElement('p', {is : 'date-of-birth'})
    let cakeDay = document.createElement('p', {is: 'cakeday'})
    img.src = profilePic[i]
    name.innerHTML = arrNames[i]
    email.innerHTML = arrEmail[i]
    addressLine1.innerHTML = arrStreet[i]
    addressLine2.innerHTML = arrCityState[i]
    dob.innerHTML ="DOB: " + DateOfBirth[i]
    cakeDay.innerHTML ="Customer Since: " + dateRegistered[i]
    userCell.appendChild(img)
    userCell.appendChild(name)
    userCell.appendChild(email)
    userCell.appendChild(addressLine1)
    userCell.appendChild(addressLine2)
    userCell.appendChild(dob)
    userCell.appendChild(cakeDay)
    parent.appendChild(userCell)
  }
  return
}

loadCustomers()
