import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from '../contexts/LanguageContext';

export default function TranslateButton() {

    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguage = (currentLanguage: string) => {
        const userLang = currentLanguage === 'pt-br' ? 'en' : 'pt-br'
        localStorage.setItem('language', userLang)
        setLanguage(userLang)
        document.documentElement.lang = userLang
    }

    return(
        <button onClick={()=>handleLanguage(language)} aria-label="Translate Button" id="translate">
            A <FontAwesomeIcon icon={faRepeat} className="icon"/> <span>文</span>
        </button>
    )
}