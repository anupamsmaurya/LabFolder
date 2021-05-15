import { useState } from "react"
import SearchTnput from '../SearchInput'
import SearchResult from '../SearchResult'
import { SearchResultType } from '../../types'
import { searchNotes } from '../../utilities/notes'
import styles from './index.css'

type Props = {
    notes: string
}

const SearchNotes: React.FC<Props> = ({notes}) => {

    const [ searchResult, setSearchResult ] = useState<SearchResultType>()

    const getSearchResults = (searchTerm: string) => {
        const result: SearchResultType = searchNotes(searchTerm)
        setSearchResult(result)
    }

    return (
        <div style={styles.root}>
            <SearchTnput submitSearch={getSearchResults} />
            <SearchResult notes={notes} searchResult={searchResult} />
        </div>
    )
}

export default SearchNotes