export const validateName = (input) => {
  if(!input.name) return 'Nombre es requerido'
  if(!/^\w\D{3,35}$/.test(input.name)){
    if(/^\d\w*$/.test(input.name)) return 'El nombre no puede incluir números'
    else if(/^\w{0,3}$/.test(input.name)) return 'El nombre tiene que ser más grande que 3 caracteres'
    else if(/^\w{36,}$/.test(input.name)) return 'Nombre muy largo'
    else return 'El nombre debe tener entre 3 y 35 y caracteres y no puede incluir números'
  }
}

export const validateEmail = (input) => {
  if(!input.email) return 'Email es requerido'
  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) return 'Por favor, ingresá un email válido'
}

export const validatePassword = (input) => {
  if(!input.password) return 'Contraseña es requerida'
}

export const validateConfirmPassword = (input) => {
  if(!input.confirmPassword) return 'Por favor, confirma tu contraseña'
  if(input.password !== input.confirmPassword) return 'Las contraseñas no coinciden'
}

export const validateConcept = (input) => {
  if(!input.concept) return 'Concepto es requerido'
  if(!/^\w\D{3,25}$/.test(input.concept)){
    if(/^\d\w*$/.test(input.concept)) return 'El concepto no puede incluir números'
    else if(/^\w{0,3}$/.test(input.concept)) return 'El concepto tiene que ser más grande que 3 caracteres'
    else if(/^\w{25,}$/.test(input.concept)) return 'Concepto muy largo'
    else return 'El concepto debe tener entre 3 y 25 y caracteres y no puede incluir números'
  }
}

export const validateValue = (input) => {
  if(!input.value) return 'Valor es requerido'
  if(!/^\d*$/.test(input.value)) return 'Ingresa el valor sin puntos ni comas'
}

export const validateDate = (input) => {
  if(!input.date) return 'Fecha es requerida'
}

export const validateSignIn = (input) => {
  let error = {}

  if(!input.email) error.email =  'Email es requerido'
  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) error.email = 'Por favor, ingresá un email válido'
  if(!input.password) error.password = 'Contraseña es requerida'

  return error
}

export const validateSignUp = (input) => {
  let error = {}

  if(!input.name) error.name = 'Nombre es requerido'
  if(!/^\w\D{3,35}$/.test(input.name)){
    if(/^\d\w*$/.test(input.name)) error.name = 'El nombre no puede incluir números'
    else if(/^\w{0,3}$/.test(input.name)) error.name = 'El nombre tiene que ser más grande que 3 caracteres'
    else if(/^\w{36,}$/.test(input.name)) error.name = 'Nombre muy largo'
    else error.name = 'El nombre debe tener entre 3 y 35 y caracteres y no puede incluir números'
  }

  if(!input.email) error.email =  'Email es requerido'
  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) error.email = 'Por favor, ingresá un email válido'
  
  if(!input.password) error.password = 'Contraseña es requerida'
  if(!input.confirmPassword) error.confirmPassword = 'Por favor, confirma tu contraseña'
  if(input.password !== input.confirmPassword) error.confirmPassword = 'Las contraseñas no coinciden'

  return error
}