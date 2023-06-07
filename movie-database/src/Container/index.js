import { Children } from "react"
import styles from "./index.module.css"

function Container ({children}) {
    return (
        <div ClassName={styles.container}>
            {Children}

        </div>
    )
}

export default Container;   