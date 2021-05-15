import { SearchResultType } from '../types'
import levenshtein from './levenshtein'

let storageName = 'labNotes'

/**
 * Appends new note string to localStorage.
 * @param  {string} text       string to be appended.
 */
export const appendNotes = (text: string) => {
    let currentNotes = getNotes()
    localStorage.setItem(storageName, `${currentNotes}\n${text}`)
}

/**
 * Fetches all notes from localStorage.
 * @return {string}     notes from localStorage
 */
export const getNotes = () => {
    let notes = localStorage.getItem(storageName)
    return  notes !== null ? notes : ''
}

/**
 * Cleares notes from localStorage.
 */
export const clearNotes = () => {
    localStorage.removeItem(storageName)
}

/**
 * Searches all notes from localStorage against the searchTerm
 * using levenshtien algoritm. Match is true for distance <= 1. 
 * @param  {string} searchTerm      target string to be searched
 * @return {SearchResultType}       object with frequency and similar words
 */
export const searchNotes = (searchTerm: string): SearchResultType => {
    let result: SearchResultType = {
        frequency: 0,
        similarWords: []
    }
    if(!searchTerm.length) return result
    const notes = getNotes()
    notes?.split(/[\s,\n]+/).forEach( (word: string) => {
        if(Math.abs(word.length - searchTerm.length) > 1) {
            return
        }
        const distance = levenshtein(searchTerm, word)
        if(distance === 0) {
            result.frequency ++
        } else if(distance === 1) {
            result.similarWords.push(word)
        }
    })
    return result
}