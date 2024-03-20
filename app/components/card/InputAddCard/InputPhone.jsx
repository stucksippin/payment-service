import { useState } from 'react';
import { Input } from '@/components/ui/input'

const InputPhone = ({ name, className, type, required, placeholder }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value.replace(/\D/g, '').replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5'));
    };

    return (
        <Input name={name} className={className} type={type} required={required} placeholder={placeholder} value={value} onChange={handleChange} />
    );
};

export default InputPhone;
