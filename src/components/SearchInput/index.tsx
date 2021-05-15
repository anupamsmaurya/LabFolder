import { useState } from "react"
import styles from './index.style'

type Props = {
    submitSearch: (text: string) => void
}

const SearchInput: React.FC<Props> = ({submitSearch}) => {

    const [ searchTerm, setSearchTerm ] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleSearchClick()
        }
    }

    const handleSearchClick = () => {
        submitSearch(searchTerm)
    }

    return (
        <div style={styles.root}>
            <label> Search words: </label>
            <input 
                value={searchTerm} 
                onChange={handleChange} 
                onKeyDown={handleKeyDown}
                placeholder="Enter search term"
                style={styles.input}
            />
            <input type='button' value='Search' onClick={handleSearchClick} />
        </div>
    )
}

export default SearchInput