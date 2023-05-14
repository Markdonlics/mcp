import { TextField } from '@/components';

const components = () => {
  return (
    <div className="w-full bg-gray-200 text-neutral-900">
      <div className="mx-auto grid-cols-1 lg:grid-cols-3 lg:max-w-6xl bg-white">
        <div className="lg:col-span-1">col 1</div>
        <div className="border-4 border-black grid grid-cols-1 lg:col-span-2 sm:max-w-2xl mx-auto">
          <div className="mx-auto p-2 w-2/3">
            <TextField label="label name" placeholder="small input" inputSize="small" size={25} />
          </div>
          <div className="mx-auto p-2">
            <TextField label="label name" placeholder="medium input / number" type="number" />
          </div>
          <div className="mx-auto p-2">
            <TextField label="label name" placeholder="large input / email" type="email" inputSize="large" fullWidth />
          </div>
          <div className="mx-auto p-2">
            <TextField label="label name" size={15} type="password" placeholder="password"/>
          </div>
          <div className="mx-auto p-2">
            <TextField label="label name" size={20} value="Readonly" readOnly/>
          </div>
          <div className="mx-auto p-2">
            <TextField label="label name" inputSize="small" placeholder="disabled" disabled />
          </div>
          <div className="mx-auto p-2">
            <TextField label="label name" size={20} type="date"/>
          </div>
          <div className="mx-auto p-2">
            <p>message</p>
            <TextField label="phone number" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default components;
