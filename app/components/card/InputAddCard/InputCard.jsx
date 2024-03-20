import { useState } from 'react';
import { Input } from '@/components/ui/input'

const InputCard = ({ name, className, type, required, placeholder }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        if (name === 'cardNumber') {
            setValue(e.target.value.replace(/\D/g, '').replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1-$2-$3-$4'));

        } else {
            setValue(e.target.value);
        }
    };

    return (
        <Input name={name} className={className} type={type} required={required} placeholder={placeholder} value={value} onChange={handleChange} />
    );
};

export default InputCard;
