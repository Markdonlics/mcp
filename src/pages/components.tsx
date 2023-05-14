import { TextField } from '@/components';

const components = () => {
  return (
    <div className="w-full bg-gray-200 text-neutral-900">
      <div className="mx-auto lg:grid-cols-2 lg:max-w-6xl bg-white">
        <div className="grid grid-cols-1 sm:max-w-2xl mx-auto px-5">
          <div className="py-2">
            <TextField label="label name" placeholder="small input" inputSize="small" size={25} />
          </div>
          <div className="py-2">
            <TextField label="label name" placeholder="medium input / number" type="number" />
          </div>
          <div className="py-2">
            <TextField label="label name" placeholder="large input / email" type="email" inputSize="large" fullWidth />
          </div>
          <div className="py-2">
            <TextField label="label name" size={15} type="password" placeholder="password"/>
          </div>
          <div className="py-2">
            <TextField label="label name" size={20} value="Readonly" readOnly/>
          </div>
          <div className="py-2">
            <TextField label="label name" inputSize="small" placeholder="disabled" disabled />
          </div>
          <div className="py-2">
            <TextField label="label name" size={20} type="date"/>
          </div>
          <div className="py-2">
            <TextField label="phone number" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default components;
