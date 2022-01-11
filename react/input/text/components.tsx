  const { form, email, password, changeForm } = useForm({
    email: '',
    password: '' 
  });  
  const { login } = useContext(AuthContext);
  const [emailError, changeEmailError] = useState<string>("")
  const [passswordError, changePasswordError] = useState<string>("")

<AppInputText
  value={email}
  helpText={emailError}
  name='email'
  label="Correo Electrónico"
  placeholder='Correo Electrónico'
  onFocus={()=> changeEmailError("")}
  onChange={
    (e: InputEvent) => changeForm(e.target.value, 'email')
  }
/>
<AppInputText
  value={password}
  helpText={passswordError}
  name='password'
  label="Contraseña"
  placeholder='Contraseña'
  type='password'
  onFocus={()=> changePasswordError("")}
  onChange={ 
    (e: InputEvent) => changeForm(e.target.value, 'password')
  }
/>
