import { getNotes } from '../../utilities/notes'
import { SearchResultType } from '../../types'
import styles from './index.css'

type Props = {
    searchResult: SearchResultType | undefined
    notes: string
}
const SearchResult: React.FC<Props> = ({ searchResult, notes }) => {

    /* const memoizedResult = useMemo(()=>{
          const result: SearchResultType = searchNotes(searchTerm)
          console.log(result)
          return result
    }, [searchTerm]) */

    return (
        <div style={styles.root}>
            {
                searchResult &&
                <div style={styles.results}>
                    <div>Frequency: {searchResult.frequency}</div>
                    <div>Similar Words: {searchResult.similarWords.join(", ")}</div>
                </div>

            }
            <pre style={styles.notes}>{getNotes()}</pre>
        </div>
    )
}

export default SearchResult