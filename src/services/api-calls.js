export function getHoroscopesFromBackend(formData) {
    fetch('https://horoscope5.p.rapidapi.com/general/daily', {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(formData)
    }), {mode: "cors"}
    .then(res => res.json())
}