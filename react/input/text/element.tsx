type AppInputText = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  onChange: Function;
  onFocus?: Function;
  helpText?: string;
}
export const AppInputText = ({
  name,
  value,
  label,
  placeholder,
  type = 'text',
  autoComplete,
  onChange,
  onFocus,
  helpText,
}:AppInputText) => {

  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }

  return(
    <div className="flex flex-col w-full items-start">
      { label && 
        <div className="my-2">
          <label htmlFor={name} 
          className={'block text-xs font-medium text-gray-700 mt-1'}>
            {label}
          </label>
        </div>
      }

      <input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type ?? 'text'}
        autoComplete={autoComplete ?? 'new-password'}
        onChange={ (e) => onChange(e) }
        onFocus={()=> onFocus!()}
        className={classNames(
          helpText  ? 'border-red-500' : 'border-transparent',
          'bg-background appearance-none block w-full px-3 h-10 items-center rounded-md focus:outline-none border-2 sm:text-sm placeholder-gray-400 focus:border-primary',
        )}
      />
      { helpText && 
        <div className={classNames(
          'caption mt-1 text-red-500'
        )}>
            {helpText}
        </div>
      }      

    </div>
  )
}
