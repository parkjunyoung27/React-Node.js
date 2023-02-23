import { Navigate } from "react-router-dom"

const goArticles = () => {
    Navigate('/articles', { replace: true});
}