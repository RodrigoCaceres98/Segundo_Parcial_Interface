import { useState } from 'react'

export const UseLocalStorage = (key, initialValue) => {

    const [storedValue, setSoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch {
            return initialValue
        }
    });

    const setValue = value => {
        try {
            setSoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }

    }

    return [storedValue, setValue]
}