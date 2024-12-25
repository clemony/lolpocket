import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

        // Method to lose focus when Enter is pressed
       export const blur = (event: KeyboardEvent) => {
            const target = event.target as HTMLInputElement
            if (event.key === 'Enter') {
                target.blur() // Lose focus on the current input field
            }
        }

        /*-------------------⟢  regex clean stuff ⟣--------------------*/ 
        
        export function clean(thing){
    return thing.replace(/\s/g, '').replace(/\'/g, '').replace(/\./g, '');
}

export function makeBox(length) {
    if (length < 6) {
        return 6 - length as number
    }
}
