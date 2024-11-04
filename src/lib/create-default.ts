import { DefaultItem } from 'types';

export function createDefaultItem(): DefaultItem {
                return {
                    name: '',
                    img: '',
                    buy: 0,
                    sell: 0,
                    stats: '',
                    passive: '',
                    active: '',
                    type: '',
                    cat: '',
                    wiki: '',
                    id: 0,
                    count: 0,
                }
            }


                    export function createDateObject() {
            const now = new Date()
            const patch = '14.19'
            const formattedDate = now.toLocaleDateString('en-US', {
                year: '2-digit',
                month: '2-digit',
                day: '2-digit',
            })

            let formattedTime = now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            })

            if (formattedTime.startsWith('0')) {
                formattedTime = formattedTime.slice(1)
            }

            return {
                date: formattedDate,
                time: formattedTime,
                patch: patch,
            }
        }