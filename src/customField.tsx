import { FC } from 'react'
import { FieldProps } from 'formik'

interface CustomInputProps {
  type?: string
}

export const CustomInputComponent: FC<CustomInputProps & FieldProps> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  type = 'text',
  ...props
}) => (
  <label>
    {field.name}
    <input {...field} {...props} />
  </label>
)
