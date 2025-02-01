import { createRoot } from 'react-dom/client'
import './style/index.scss'
import './style/reset.css'
import App from './components/App/App.tsx'

createRoot(document.getElementById('root')!).render(
    <App />
)
