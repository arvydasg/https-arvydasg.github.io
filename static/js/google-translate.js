function googleTranslateElementInit() {
    new google.translate.TranslateElement(
	{ pageLanguage: 'en' },
	'google_translate_element'
    );
}

const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
document.head.appendChild(script);
