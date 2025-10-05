import React from 'react'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, ...props }) => {
    return (
        <div className="relative flex items-center">
            <input
                type="checkbox"
                id={id}
                className="w-4 h-4 text-[#366938] bg-gray-100 border-gray-300 rounded focus:ring-[#366938]"
                {...props}
            />
        </div>
    );
};

export default Checkbox;
